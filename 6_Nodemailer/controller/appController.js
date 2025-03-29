require("dotenv").config();
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const signup = async (req, res) => {
    //Test account
    let testAccount = await nodemailer.createTestAccount();
    
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal
        },
      });

      let msg = {
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      };
      
      transporter.sendMail(msg).then((info)=>{
        return res.status(201).json({
          msg:'Email sent successfully!',
          info: info.messageId, 
          preview: nodemailer.getTestMessageUrl(info), // Preview only available when sending through an Ethereal account
        })
      }).catch((error)=>{
        return res.status(500).json('Error sending email!')
      })
      
  
};

const getBill = (req, res) => {
  const {userEmail} = req.body
    let config = {
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD  //Not able to get app password so placed a sample one
        },
    };
    let transporter = nodemailer.createTransport(config);
    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Mailgen",
            link: "https://mailgen.js/",
        },
    });
    let response = {
        body: {
            name: "John Doe",
            intro: "Your invoice is ready to be downloaded.",
            table: {
                data: [
                    {
                        item: "EmailJS",
                        description: "EmailJS service",
                        price: "$10.00",
                    },
                    {
                        item: "Mailgen",
                        description: "Mailgen service",
                        price: "$20.00",
                    },
                ],
            },
            outro: "Looking forward to doing more business with you!",
        },
    };
    let mail = MailGenerator.generate(response);

    let message = {
        from: process.env.EMAIL,
        to: userEmail,
        subject: "Invoice",
        html: mail,
    }

    transporter.sendMail(message).then((info) => {
        return res.status(201).json({
            msg: 'Email sent successfully!',
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info),
        })
    }).catch((error) => {
        return res.status(500).json('Error sending email!'+ error)
    })
};

module.exports = { signup, getBill };
