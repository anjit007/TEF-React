const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection (phpMyAdmin)
const pool = mysql.createPool({
  host: 'localhost',          // or your cPanel DB host
  user: 'tefcom',  // phpMyAdmin username
  password: VITE_DB_PASSWORD,
  database: 'tefcom_tef',
  waitForConnections: true,
});

app.post('/api/users', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO email_subcrip (email) VALUES (?)',
      [email]
    );

    res.status(201).json({
      message: "Subscribed successfully!",
      id: result.insertId
    });

  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ error: "Email already subscribed" });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
