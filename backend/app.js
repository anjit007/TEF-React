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

// ✅ FIXED: Allow requests from your Vite dev server (localhost:5173)
app.use(cors({
  origin: [
    'http://localhost:5173',   // Vite default port
    'http://localhost:5000',   // fallback if using CRA
    'https://tef.com.np',      // production
  ],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// Debug env
console.log("EMAIL_USER:", process.env.EMAIL_USER || 'not set');
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "LOADED" : "MISSING");

// SMTP setup
const transporter = nodemailer.createTransport({
  host: "s11740.sgp1.stableserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || "support@tef.com.np",
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP on startup
transporter.verify((error) => {
  if (error) {
    console.error("SMTP ERROR:", error);
  } else {
    console.log("SMTP ready ✅");
  }
});

// ✅ Contact form route
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, interest, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields: name, email, and message are required.',
    });
  }

  const mailOptions = {
    from: `"TEF Website" <support@tef.com.np>`,
    replyTo: email,
    to: 'support@tef.com.np',
    subject: `New Contact Inquiry from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Interest: ${interest || 'N/A'}
Message:
${message}
    `,
    html: `
      <h3>New Contact Inquiry</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || 'N/A'}</p>
      <p><b>Interest:</b> ${interest || 'N/A'}</p>
      <hr/>
      <p><b>Message:</b><br>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});