const  nodemailer = require('nodemailer');
const { EMAIL, PASSWORD} = require('../.env');

// mailgen npm mail gen

const formfilled = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const { userEmail } = req.body; // get email


    // let config ={ 
    //     service : 'gmail',
    //     auth : {
    //         user: 'EMAIL',
    //         pass: 'PASSWORD'
    //     }
    // }

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",  // directly use *config* here to use email
        port: 587,     // use secure post 465?
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: testAccount.user, //ethereal one now
          pass: testAccount.pass, //
        },
      });  

      let message = {
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers get receivers from the frontend  *userEmail*
      subject: "Hello ✔", // Subject line
      text: "Successfully Sumbitted the form", // plain text body change this 
      html: "<b>Successfully Sumbitted the form</b>", // html body
      }

      transporter.sendMail(message).then((info) => {     //checks
        return res.status(201).json({ 
            msg: "check mail",
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
      }).catch(error => {
        return res.status(500).json({ error: error.message })
      })


    //res.status(201).json("form filled Successfully!");
}

  //import env

module.exports = {
    formfilled
}