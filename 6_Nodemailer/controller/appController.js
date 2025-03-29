const nodemailer = require("nodemailer");

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
    res.status(201).json('Get Bill Successfull');
};

module.exports = { signup, getBill };
