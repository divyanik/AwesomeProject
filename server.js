const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log('request recieved..');
  // Dummy validation logic
  if (email === 'user@example.com' && password === 'password123') {
    res.status(200).json({ message: 'Login successful', token: 'dummy-token' });
    console.log('request processed..');
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
    console.log('response failed..');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
