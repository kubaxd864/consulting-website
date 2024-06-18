import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { render } from '@react-email/render'
import nodemailer from 'nodemailer'
import 'dotenv/config';
import Email from '../components/Email'
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/contact', async (req, res) => {
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
      
    const emailHtml = render(Email({ url: "https://example.com" }));
      
    const options = {
        from: 'Wiadomość od Klienta <example@gmail.com>',
        to: process.env.EMAIL_DESTINATION,
        subject: req.body.data.subject,
        // text: req.body.data.message,
        html: emailHtml,
    };
      
    transporter.sendMail(options);
    console.log(req.body.data)
})

app.listen(3000, () => {
    console.log(`Serwer został uruchomiony: http://localhost:3000`)
})