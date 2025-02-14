//* nodemailer
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    //*  1) Create tranporter ( service that will send email like: "gmail", "Mailgun", "miatrap", "sendGrid") 
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,                         //* if secure set by true the port wil be 465,else the port will be 587 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        }
    })
    //*  2) Define email options (like: from, to, subject, email content)
    const mailOpts = {
        from: "Pick & Buy <engcode213@gmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.message,
    }
    //*  3) Send email
    await transporter.sendMail(mailOpts)
}

module.exports = sendEmail;