const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});