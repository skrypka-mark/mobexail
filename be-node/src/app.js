require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();

const { PORT } = process.env;

app.use(cors());
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});