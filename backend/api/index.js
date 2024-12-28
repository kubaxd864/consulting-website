const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const { promisify } = require('util');
const handlebars = require('handlebars');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { google } = require('googleapis');

const readFileAsync = promisify(fs.readFile)
const app = express()

const SCOPES = 'https://www.googleapis.com/auth/calendar';
const contactTemplatePath = path.resolve(__dirname, '../email_templates/Email.html');
const confirmationTemplatePath = path.resolve(__dirname, '../email_templates/Confirmation_Email.html');

const jwtClient = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  null,
  "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCk2Eop9deKPAkw\nbCXS9VpgfDp72pHfDRyIQteT7PciQVud/nWVcinGFkGltmFmarxJidFBmqORhEiT\nIUuje27r3+PgfHJfYE2CgKdTdKr11tbUJq0GYVgo7nsUXbLA+xCjkNQpsEIIP7DD\na35iJX/+owXqbJKaBLSryh2ANOTpqv2mgSAJk/O2IPrXsLtPEluncUOOSKeJ+y4O\nYHi95GOKIS5qVVMFz36W174wSCSRbgifxnc8GyiwFPHYDZczrnZqZwWJyeotUJpT\n169K6FwzTxN6jg6ArlCOY/aVqBlriLQ5ixRJXUL2D/xRz0UxQm6ZMpX+6u9gVlVZ\nj1fv1ZQ/AgMBAAECggEAAnIUO5lVnsvmn2ZjWathMWBDP9yNk6xIOZWzfBLYCC6S\nQBhRdBIMoGjRHx1crMScBLbiOPs+pP7vUrUVc0uQAp9An4jiuE6F9KmZXrZ/smqc\npx4bYAzB3mDKlUVEmYwmaL7SOJVQWkeTnq3LSYQT6Sbpats8gfapTyLBaEo6NGTa\ncCieD7moKZwI3DQbBEp8bB2CsSv8OAZwjQKU/KrHi0gDge4hZQ1yZD932kV9K/3v\n4N4yvE0kgd112LAhaQ7VHwLDl4SHBeGBPiLyaojLIhdsxWHGYyFQF/wb165+tRf/\n0ivrPLanYfXMJDZ7J+M3ATph6tB2P+XjxWygb72ojQKBgQDUmzvEzAFO2pFVcpoA\nq2tDRIKX3I2W6Ijtmkap3AfBM8pejX0qjLPL4/MgRo3DWeez5cSnYPGPjvq5S3rB\nfCCjJZs9YObzWBqpSmhGmguPB3X4i5PDMKuLBOnNbNXHA2H8UgcuuHDDODtEK1Vy\nIjqde8MqFa/GtSBSpM3wAvwvIwKBgQDGfX/NXe0/E80iDd5nwWd0K42XsEngrqXx\nS2MVWlqJusvtf3h4hMmXcwdYVysIEiJ/e+2/gXbYm3abgiB8rJ21FXxzb9AMjWdA\nCk6JPSSBNxNNiWMXz6EH6fJ6hQRZurfeOKAX2Lnr31O7R+HBKbx234MT3dzAXNF3\njUnUGDcGNQKBgQCUA4a22bhHZ48qx+BDexPv/vBUPW4tk7JQiMmNU+vqK95FuYdc\nahx6ZDZNUBE94YeYDOy+ApXp9gbDnbLWpU4rhvDu6FmhLMNS/MRf8rr9Vppg8Pts\nNqQW4tLK+2xRYx+ChLEPa8TFhI5uRST1krLwFMuorvRzCIJ6RtZAtDNRtQKBgQCm\nz2+pgudQXG7H0Mn5fnNYEQYk1dWwinYRLB7wIgf2udKKHNd8yXO14MjqeA9E8CCn\n7NmoWMAtV7G9DQYKYPME7TKyvOQmuGtuSXspIQZdxZBmWDC8IRUe1oCecM1wL1g4\n3HPGtq/BR+VRfh5+vHmTmVHKT2knDJpJE6dZJKSRhQKBgQDIXTtiJ4oV3gDdlGOq\nS4EPam3JlHWhAn8tjQUXziqDj7VBu3PFsorR86ED8oUeXS0y56O4MoBL76H1TS9N\nE8aj/HnIYIUM2S/AzqEoxpXPXi2CPHJRMxcQn7KJLlz7aoNLfWShsvGYo+buP1u+\n7Hx0OnXcmv5mvylYieg+rr+biw==\n-----END PRIVATE KEY-----\n",
  SCOPES
);

const calendar = google.calendar({
  version: 'v3',
  project: process.env.GOOGLE_PROJECT_NUMBER,
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
    origin: [
        'https://consulting-website-client.vercel.app',
        'https://www.psychologkrzywicka.pl',
        'http://localhost:5173'
    ],
    methods: ['GET', 'POST'],
};

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/get_calendar_info', (req, res) => {
    calendar.events.list({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
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
    transporter.sendMail(options, error => {
      if (error) {
        console.error("Błąd podczas wysyłania wiadomości:", error.message);
        res.send('Błąd');
      } else {
        res.send('Wysłano');
      }
    });
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
      calendarId: process.env.GOOGLE_CALENDAR_ID,
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