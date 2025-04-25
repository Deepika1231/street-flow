const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const waterDataRoute = require('./routes/waterData');
const weatherRoute = require('./routes/weather');
const alertsRoute = require('./routes/alerts');

app.use('/api/water-data', waterDataRoute);
app.use('/api/weather', weatherRoute);
app.use('/api/alerts', alertsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
