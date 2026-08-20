const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let deviceState = { on: false };

app.post('/on', (req, res) => {
  deviceState.on = true;
  console.log('/on', req.body);
  res.json({ ok: true, state: deviceState });
});

app.post('/off', (req, res) => {
  deviceState.on = false;
  console.log('/off', req.body);
  res.json({ ok: true, state: deviceState });
});

app.get('/status', (req, res) => {
  res.json({ ok: true, state: deviceState });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Backend mock listening on http://localhost:${port}`));
