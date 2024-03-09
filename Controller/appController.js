const  nodemailer = require('nodemailer');


const sendMail = async (to,subject,text) => { 
 const transporter = nodemailer.createTransport({
  service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,    
    secure: true,
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.PASSWORD, 
    },
  });  
  const message = { 
  to,
  subject, 
  text,
  from: process.env.EMAIL
  }
  return transporter.sendMail(message);
}

const contactController = async (req, res,) =>{
  const contactMessage = {
    from: email,
    to: process.env.EMAIL,
    subject: "Contacted Us",
    text: ``,
    // Name: ${req.body.name},
    // Email: ${req.body.email},
    // Phone: ${req.body.phone}
  }     
  try {
    const info = await sendMail(email, subject, text);
    return res.status(200).json({ 
      msg: "contacted Email sent Successfully",
      info: info.messageId,
      preview: nodemailer.getTestMessageUrl(info)
  })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const applicationController = async (req, res) => {
    const { email } = req.body;
    const subject = "Your Application to The Smart Fellowship: A Step Towards an Automation-Proof Career";
    const text = `
    Dear Applicant,
    
    Thank you for taking the bold step of applying for The Smart Fellowship. We've received your application and are inspired by your dedication to your professional growth.
    At The Smart Fellowship, we believe in enabling individuals like yourself with the skills needed to grow and stand out in the modern world of work. We are excited to embark on this transformative journey with you, knowing that together, we can shape a future where talent thrives and possibilities are limitless.
    
    Our team will thoroughly review your application and reach out to you regarding your selection in the program. Expect an update from us within the next 15 days. 
    Should you have any questions or need further assistance, don't hesitate to reach out to us at pm@thesmartfellowship.com. 

    
    Thank you once again for choosing The Smart Fellowship. Wishing you all the best as you await the outcome of the selection process!
    
    
    Warm regards,
    Navya Naveli Nanda & Samyak Chakrabarty
    Program Mentors
    The Smart Fellowship`;
    
    try {
      const info = await sendMail(email, subject, text);
      return res.status(200).json({ 
        msg: "Email sent Successfully",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info)
    })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
}
module.exports = {
    applicationController , contactController
}