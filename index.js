const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log('Received plain text credentials:');
  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);

  // Add your desired response here
  res.send('Login request received.');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
