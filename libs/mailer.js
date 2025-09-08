require('dotenv').config();
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.HOST_MAIL,
  port: process.env.HOST_PORT,
  auth: {
    user: process.env.HOST_USER,
    pass: process.env.HOST_PASS
  }
});

module.exports = transport;