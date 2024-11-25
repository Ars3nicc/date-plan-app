
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/save-date', (req, res) => {
  const { selectedDate } = req.body;
  fs.writeFile('date.json', JSON.stringify({ selectedDate }), (err) => {
    if (err) {
      res.status(500).send('Failed to save date');
    } else {
      res.send('Date saved successfully');
    }
  });
});

app.get('/get-date', (req, res) => {
  fs.readFile('date.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Failed to fetch date');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});