const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/user');

const router = express.Router();

const SECRET_KEY = 'your-secret-key';

router.post('/register', (req, res) => {
  const { username, email, password, role } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  const sql = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';

  db.run(sql, [username, email, hash, role], (err) => {
    if (err) {
      return res.status(400).json({ message: 'Could not create user' });
    }
    res.status(201).json({ message: 'User created successfully' });
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';

  db.get(sql, [email], (err, row) => {
    if (err) {
      return res.status(400).json({ message: 'Could not fetch user' });
    }

    if (!row || !bcrypt.compareSync(password, row.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ email: row.email }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ token });
  });
});

router.post('/logout', (req, res) => {
  // TODO: Invalidate token
  res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;
