//jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");
const axios = require('axios');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', async (req, res) => {
    try {
      const response = await axios.get('https://www.boredapi.com/api/activity/');
      const activity = response.data.activity;
      const type = response.data.type;
      const participants = response.data.participants;
      const price = response.data.price;
      const link = response.data.link;
      const key = response.data.key;
      const accessibility = response.data.accessibility;
      res.render('index', { activity, type, participants, price, link, key, accessibility });
    } catch (error) {
      res.status(500).send(error);
    }

    // res.send("Hello");
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
