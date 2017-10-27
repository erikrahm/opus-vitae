const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist/dev')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './dist/dev', 'index.html'));
});

app.listen(3000, function () {
  console.log('Opus Vitae listening at port 3000.');
});
