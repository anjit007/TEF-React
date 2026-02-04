// const express = require('express');
// const mysql = require('mysql2/promise');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MySQL connection (phpMyAdmin)
// const pool = mysql.createPool({
//   host: 'localhost',         
//   user: 'tefcom',  
//   password:'kC#@57mFss58PH',
//   database: 'tefcom_tef',
//   waitForConnections: true,
// });

// app.post('backend/app.js', async (req, res) => {
//   const { email } = req.body;

//   if (!email) {
//     return res.status(400).json({ error: "Email is required" });
//   }

//   try {
//     const [result] = await pool.query(
//       'INSERT INTO email_subscription (email) VALUES (?)',
//       [email]
//     );

//     res.status(201).json({
//       message: "Subscribed successfully!",
//       id: result.insertId
//     });

//   } catch (err) {
//     if (err.code === 'ER_DUP_ENTRY') {
//       res.status(400).json({ error: "Email already subscribed" });
//     } else {
//       res.status(500).json({ error: err.message });
//     }
//   }
// });

// // Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// require("dotenv").config();

// console.log("ENV CHECK → EMAIL_USER:", process.env.EMAIL_USER);
// console.log(
//   "ENV CHECK → EMAIL_PASS:",
//   process.env.EMAIL_PASS ? "LOADED" : "MISSING"
// );

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "s11740.sgp1.stableserver.net",  // ← Your actual server
//   port: 465,                             // Try 465 first (SSL)
//   secure: true,                          // true = use SSL (for 465)
//   auth: {
//     user: process.env.EMAIL_USER || "support@tef.com.np",
//     pass: process.env.EMAIL_PASS,
//   },
//   // If you get a certificate/self-signed error later, temporarily add:
//   // tls: { rejectUnauthorized: false },
// });

// transporter.verify((error, success) => {
//   if (error) {
//     console.log("SMTP connection ERROR:", error);
//   } else {
//     console.log("SMTP server is ready to send mail ✅");
//   }
// });


require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

console.log("ENV CHECK → EMAIL_USER:", process.env.EMAIL_USER || 'not set');
console.log("ENV CHECK → EMAIL_PASS:", process.env.EMAIL_PASS ? "LOADED" : "MISSING");

const transporter = nodemailer.createTransport({
  host: "s11740.sgp1.stableserver.net",
  port: 465,
  secure: true,                       // SSL for port 465
  auth: {
    user: process.env.EMAIL_USER || "support@tef.com.np",
    pass: process.env.EMAIL_PASS,
  },
  // No tls override needed since verify succeeded
});

// Verify SMTP connection on server startup (very useful for debugging)
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection ERROR at startup:", error);
  } else {
    console.log("SMTP server connection verified and ready ✅");
  }
});

// Contact form endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, phone, interest, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields (name, email, message)'
    });
  }

  // Email content
  const mailOptions = {
    from: `${email}`, // must match authenticated user
    to: 'support@tef.com.np',                             // where inquiries go
    replyTo: email,                                       // so replies go to the sender
    subject: `New Contact Inquiry from ${name.trim()}`,
    text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone || 'N/A'}
    Interest: ${interest || 'N/A'}
    Message:
    ${message}
        `.trim(),
        html: `
        <h3 style="color: #2c3e50;">New Contact Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Interest:</strong> ${interest || 'N/A'}</p>
        <hr style="border: 1px solid #eee; margin: 15px 0;">
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        `
    };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully from ${email}`);
    
    res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    });
  } catch (error) {
    console.error('Error sending email:', error.message);
    console.error('Full error:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: error.message   // optional: only show in dev, remove in prod if desired
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});