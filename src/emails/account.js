const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lmpeixoto@gmail.com',
        subject: 'Thanks  for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lmpeixoto@gmail.com',
        subject: 'We are sad to see you go!',
        text: `Thanks for being with us ${name}. Let me know if there's something we can do to prevent you from going away.`
    })
}



module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}