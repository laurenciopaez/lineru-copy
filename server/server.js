const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes.js')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});

