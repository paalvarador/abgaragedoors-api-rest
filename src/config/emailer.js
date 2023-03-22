const nodemailer = require("nodemailer")

const createTransport = () => {

    const transporter = nodemailer.createTransport({
        host: "mail.abgaragedoors.com",
        port: 465,
        auth: {
            user: "rodrigo@abgaragedoors.com", // generated ethereal user
            pass: "Elias162016g", // generated ethereal password
        },
    });

    return transporter

}

const sendMail = async (email) => {

    const transporter = createTransport()
    const info = await transporter.sendMail({
        from: email.from, // sender address
        to: email.to, // list of receivers
        subject: "New Message to AB Garage Doors from " + email.name + " <" + email.from + ">", // Subject line
        html: email.message, // html body
    });

    console.log("Message sent: %s", info.messageId);

    return
}


exports.sendMail = (email) => sendMail(email)