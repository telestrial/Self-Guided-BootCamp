require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const jwt = require('jwt-simple');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, JWT_SECRET);
}

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
  res.json({ token: tokenForUser(newUser) });
});

app.post('/signin', requireSignin, async (req, res) => {
  res.send({ token: tokenForUser(req.user) });
});

app.get('/', requireAuth, (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
