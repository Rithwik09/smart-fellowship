const express = require('express');
const appRoute = require('./route/route.js')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', appRoute)



app.listen(PORT, () => {
    console.log('Server running on port 5000');
});