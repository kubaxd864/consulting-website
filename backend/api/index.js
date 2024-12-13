import express from 'express'
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer'
import fs from 'fs'
import { promisify } from 'util'
import handlebars from 'handlebars'
import 'dotenv/config';
import { google } from 'googleapis';

const readFileAsync = promisify(fs.readFile)
const app = express()

const SCOPES = 'https://www.googleapis.com/auth/calendar';
const GOOGLE_PRIVATE_KEY= process.env.GOOGLE_PRIVATE_KEY
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
const GOOGLE_PROJECT_NUMBER = process.env.GOOGLE_PROJECT_NUMBER
const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID
const contactTemplatePath = path.resolve(__dirname, '../email_templates/Email.html');
const confirmationTemplatePath = path.resolve(__dirname, '../email_templates/Confirmation_Email.html');

const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  null,
  GOOGLE_PRIVATE_KEY,
  SCOPES
);

const calendar = google.calendar({
  version: 'v3',
  project: GOOGLE_PROJECT_NUMBER,
  auth: jwtClient
});

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

const corsOptions = {
    origin: 'https://consulting-website-client.vercel.app',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
};


app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/get_calendar_info', (req, res) => {
    calendar.events.list({
    calendarId: GOOGLE_CALENDAR_ID,
    timeMin: (new Date()).toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  }, (error, result) => {
    if (error) {
      res.send(JSON.stringify({ error: error }));
    } else {
      if (result.data.items.length) {
        res.send(JSON.stringify({ events: result.data.items }));
      } else {
        res.send(JSON.stringify({ message: 'No upcoming events found.' }));
      }
    }
  });
})

app.post('/contact', async (req, res) => {
  const htmlTemplate = await readFileAsync(contactTemplatePath, 'utf-8');
  try {
    const templateData = {
      name: req.body.data.name,
      surname: req.body.data.surname,
      email: req.body.data.email,
      phone: req.body.data.phone,
      message: req.body.data.message,
    };
    const template = handlebars.compile(htmlTemplate);
    const htmlToSend = template(templateData);
    const options = {
      from: `Wiadomość od ${req.body.data.name} <example@gmail.com>`,
      to: process.env.EMAIL_DESTINATION,
      subject: req.body.data.subject,
      html: htmlToSend,
    };
    transporter.sendMail(options);
    res.send('Wysłano');
  } catch (error) {
    res.status(500).send('Błąd');
  }
})

app.post('/reservation', async (req, res) => {
  const htmlTemplate = await readFileAsync(confirmationTemplatePath, 'utf-8');
  let appointmentdate = new Date(req.body.data.appointmentDate);
  let appointmentDateEnd = new Date(req.body.data.appointmentDate);
  appointmentDateEnd.setHours(appointmentDateEnd.getHours() + 1);
  let event = {
    'summary': req.body.data.therapy_type,
    'description': `Rezerwacja wizyty: ${' ' + req.body.data.therapy_type} \nDnia: ${appointmentdate.toLocaleDateString()} od godziny ${appointmentdate.toLocaleTimeString()} \nDane Rezerwującego: \nImię i Nazwisko: ${req.body.data.name + ' ' + req.body.data.surname} \nNowy Klient: ${req.body.data.new_client} \nEmail: ${req.body.data.email} \nTelefon: ${req.body.data.phone} \nDodatkowe Informacje: ${req.body.data.message || 'Brak'}`,
    'start': {
      'dateTime':  appointmentdate.toISOString(),
      'timeZone': 'Europe/Warsaw',
    },
    'end': {
      'dateTime': appointmentDateEnd.toISOString(),
      'timeZone': 'Europe/Warsaw',
    },
  }
  const auth = new google.auth.GoogleAuth({
    keyFile: 'C:\\Users\\x\\Desktop\\Programy\\Pliki\\vaulted-bivouac-428921-s5-4c459858e2de.json',
    scopes: 'https://www.googleapis.com/auth/calendar',
  });
  auth.getClient().then(a=>{
    calendar.events.insert({
      auth:a,
      calendarId: GOOGLE_CALENDAR_ID,
      resource: event,
    }, function(err) {
      if (err) {
        res.send('Wystąpił błąd podczas Rezerwacji')
        return;
      }
      res.send("Zarezerwowano");
      const templateData = {
        name: req.body.data.name,
        date: new Date(req.body.data.appointmentDate).toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' })
      };
      const template = handlebars.compile(htmlTemplate);
      const htmlToSend = template(templateData);
      const options = {
        from: 'Psycholog Krzywicka <psycholog.krzywicka@wp.pl>',
        to: req.body.data.email,
        subject: 'Potwierdzenie Wizyty',
        html: htmlToSend,
      };
      transporter.sendMail(options);
    });
  })
})

app.listen(5000, () => console.log("Server ready on port 5000."));

module.exports = app;