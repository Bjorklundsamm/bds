const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Routes
app.use('/about', express.static(path.join(__dirname, '..', 'build')));
app.use('/contact', express.static(path.join(__dirname, '..', 'build')));
app.use('/hiring', express.static(path.join(__dirname, '..', 'build')));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});