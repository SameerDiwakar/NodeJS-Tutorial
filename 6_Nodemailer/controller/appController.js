require("dotenv").config();
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const SibApiV3Sdk = require("sib-api-v3-sdk");

const nodemailerTest = async (req, res) => {
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

  transporter
    .sendMail(msg)
    .then((info) => {
      return res.status(201).json({
        msg: "Email sent successfully!",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info), // Preview only available when sending through an Ethereal account
      });
    })
    .catch((error) => {
      return res.status(500).json("Error sending email!");
    });
};

const nodemailerGmail = (req, res) => {
  const { userEmail } = req.body;
  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD, //Not able to get app password so placed a sample one
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
  };

  transporter
    .sendMail(message)
    .then((info) => {
      return res.status(201).json({
        msg: "Email sent successfully!",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json("Error sending email!" + error);
    });
};

const brevoAPI = async (req, res) => {
  const client = SibApiV3Sdk.ApiClient.instance;
  client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;
  const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();
  try {
    const { to, subject, text } = req.body;

    const senderEmail = "foodparcel.yt@gmail.com"; // Use a verified email in Brevo

    const response = await emailApi.sendTransacEmail({
      sender: { email: senderEmail },
      to: [{ email: to }],
      subject: subject,
      textContent: text,
      htmlContent: `<html><body><p>${text}</p></body></html>`,
    });

    res.status(200).json({ message: "Email sent successfully", response });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
};
module.exports = { nodemailerTest, nodemailerGmail, brevoAPI };
