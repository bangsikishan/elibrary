require('dotenv').config();
const express = require('express');
const cors = require('cors');

const bookRoute = require('./routes/BookRoute');
const userRoute = require('./routes/UserRoute');

const connectDB = require('./config/databaseConnection');

const app = express();

connectDB();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/', bookRoute);
app.use('/', userRoute);

app.listen(process.env.PORT, () => console.log(`[+] Listening on port ${process.env.PORT}...`))