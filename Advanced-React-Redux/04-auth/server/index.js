const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// DB Setup
const User = require('./models/User');

mongoose
  .connect('mongodb://localhost:27017/authApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connection Open!!!');
  })
  .catch((err) => {
    console.log('Error:');
    console.log(err);
  });

// App Setup
app.use(morgan('dev'));
app.use(bodyParser.json({ type: '*/*' }));

// Server Setup
const port = process.env.PORT || 3090;

// Routes
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide email and password' });
  }

  const foundUser = await User.findOne({ email: email });

  if (foundUser) {
    return res.status(422).send({ error: 'Email is in use' });
  }

  const newUser = new User({ email, password });
  await newUser.save();
  return res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
