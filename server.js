const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('./login_menu.db');

app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;

    db.get(query, [username, password], (err, row) => {
        if (err) {
            res.status(500).send({ success: false, message: 'Database error' });
        } else if (row) {
            res.send({ success: true });
        } else {
            res.send({ success: false, message: 'Invalid username or password' });
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});