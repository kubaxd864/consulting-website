# The website of the Psychological Office presenting the offer of the office and giving the opportunity to contact and book an appointment

## Used Technologies:

- **React + Vite**
- **HTML5**
- **Tailwind CSS**
- **Express**
- **NodeMailer**

<br/>

## Set enviroment variables:

**NodeMailer E-Mail Adress in .env File**
- **EMAIL(The e-mail address that sends the Messages)**
- **PASSWORD(App Password to Gmail)**
- **TO(The e-mail address to which messages are sent)**

**Google Calendar Config in .env File**
- **GOOGLE_PROJECT_NUMBER(Number of your google project)**
- **GOOGLE_CLIENT_EMAIL(Email of your account adding your events)**
- **GOOGLE_PRIVATE_KEY(Private key to your account adding your events)**
- **GOOGLE_CALENDAR_ID(Id of the calendar to which you want to add your events)**
<br/>

## Instalation Guide:

After downloading the folder to your desktop open folders 'backend' and 'frontend' in cmd and type:
```
npm install
```
Next create .env file and set up variables mentioned above and then open frontend folder and type:
```
npm run dev
```
Lastly go to backend folder and type:
```
node api.js
```
Now the website should run smoothly and without any problems

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh