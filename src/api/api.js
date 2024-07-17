import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer'
import fs from 'fs'
import { promisify } from 'util'
import handlebars from 'handlebars'
import 'dotenv/config';

const readFileAsync = promisify(fs.readFile)
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/contact', async (req, res) => {
    const htmlTemplate = await readFileAsync('./src/components/Email.html', 'utf-8');
    const templateData = {
      name: req.body.data.name,
      surname: req.body.data.surname,
      email: req.body.data.email,
      phone: req.body.data.phone,
      message: req.body.data.message,
    };

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.APP_PASSWORD,
        },
      });

    const template = handlebars.compile(htmlTemplate);
    const htmlToSend = template(templateData);
    const options = {
        from: 'Wiadomość od Klienta <example@gmail.com>',
        to: process.env.EMAIL_DESTINATION,
        subject: req.body.data.subject,
        html: htmlToSend,
    };
      
    transporter.sendMail(options);
})
app.post('/reservation', async (req, res) => {
    console.log(req.body.data)
})
app.listen(3000, () => {
    console.log(`Serwer został uruchomiony: http://localhost:3000`)
})