// Imagine you're building an API for a weather app. Your API needs an endpoint to retrieve the current weather.Create an Express.js route that responds with a JSON object containing the current temperature, conditions,and city.

const express = require('express');
const app = express();

app.get('/weather', (req, res) => {
    const weatherData = {
    temperature: 25,
    conditions: 'Sunny',
    city: 'Los Angeles'
    };
    res.json(weatherData);
    });
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });