require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.HOST_MAIL,
  host: process.env.HOST_PORT,
  auth: {
    user: process.env.HOST_USER,
    pass: process.env.HOST_PASS
  }
});