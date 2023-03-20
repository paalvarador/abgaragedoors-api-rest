const nodemailer = require("nodemailer")

const createTransport = () => {

    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 587,
        auth: {
            user: "0fe0f7254c264b", // generated ethereal user
            pass: "032c2dc63588e0", // generated ethereal password
        },
    });

    return transporter

}

const sendMail = async (email) => {

     console.log(email)

     const transporter = createTransport()
     const info = await transporter.sendMail({
        from: email.name + " " + email.email, // sender address
        to: email.to, // list of receivers
        subject: "Message to AB Garage Doors from client", // Subject line
        html: email.message, // html body
    });
    
    console.log("Message sent: %s", info.messageId);

    return
}


exports.sendMail = (email) => sendMail(email)