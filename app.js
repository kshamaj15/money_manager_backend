const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(cors())
app.use(bodyParser.json())

// Import Routes
const incomeRoute = require('./routes/income');
const tagRoute = require('./routes/tags');

app.use('/income', incomeRoute);
app.use('/tags', tagRoute);

// Routes
app.get('/', (req, res) => {
	res.send('We are on HomePage')
});

// Connect MongoDB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true  }).then(() => {
	console.log("Connected to DB")
}).catch(err => {
	console.log('Not connected due to');
	console.log(err);
})

app.listen(3000);
