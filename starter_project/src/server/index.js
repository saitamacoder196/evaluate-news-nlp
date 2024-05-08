var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const router = express.Router();
const axios = require('axios');
const cors = require('cors');

app.use(cors({
    origin: '*'  // Allow all origins
}));
app.use(bodyParser.json());

console.log(__dirname);

// Variables for url and api key
const LICENSE_KEY = process.env.LICENSE_KEY;

// Use the router with /api prefix
app.use('/api', router);

// POST Route
router.post('/analyze-sentiment', async (req, res) => {
    const { url, lang = 'en', model = 'general' } = req.body;

    const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1';
    const postData = new URLSearchParams({
        key: LICENSE_KEY,
        lang,
        model,
        url: url
    }).toString();

    try {
        const response = await axios.post(apiUrl, postData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        res.json(response.data);
    } catch (error) {
        console.error('MeaningCloud API request failed:', error);
        res.status(500).json({ error: 'Failed to analyze sentiment' });
    }
});

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


