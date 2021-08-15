const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'linkr'
});

app.use(bodyParser.json());
connection.connect();

app.post('/', (req, res) => {
    res.status(200).send('OK');
});

app.post('/regUser', (req, res) => {
    const { username, email, password } = req.body;

    connection.query('SELECT * FROM users WHERE username=? OR email=?', [username, email], (err, result) => {
        if (err) throw err;
        if (!result.length >= 1) {
            const salt = 11;

            bcrypt.hash(password, salt, function (error, hash) {
                if (error) throw error;

                connection.query("INSERT INTO users (username, email, password) VALUES (?,?,?)", [username, email, hash], (e, results) => {
                    if (e) throw e;

                    console.log('added')
                    res.status(200).send(results);
                });
            });
        } else {
            res.status(403).send('Username or email already exists.');
        }
    });
});

app.post('/logUser', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    connection.query('SELECT * FROM users WHERE username=?', [username], async (err, result) => {
        if (err) throw err;

        if (result.length >= 1) {
            const match = await bcrypt.compare(password, result[0].password);

            if (match) {
                jwt.sign({ data: result[0] }, process.env.PK_JWT, (error, token) => {
                    if (error) throw error;
                    
                    res.status(200).cookie('tkn', token).send();
                });
            } else {
                res.status(403).send('Fuck off');
            }
        }
    });
});

app.post('/check', (req, res) => {
    const token = req.body.token;
    
    jwt.verify(token, process.env.PK_JWT, (err, decoded) => {
        if (err) throw err;

        if (decoded.data.username) {
            res.status(200).send();
        }
    });
});

app.get('/getGeneralLinks', (req, res) => {
    connection.query("SELECT * FROM socialmedia", (err, result) => {
        if(err) throw err;

        res.status(200).json(result);
    });
});

app.listen(909);
