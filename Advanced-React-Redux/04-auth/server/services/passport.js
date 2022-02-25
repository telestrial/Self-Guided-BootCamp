require('dotenv').config();

const passport = require('passport');
const User = require('../models/User');
const JWT_SECRET = process.env.JWT_SECRET;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Creat local strategy
const localLogin = new LocalStrategy({ usernameField: 'email' }, function (
  email,
  password,
  done
) {
  User.findOne({ email: email }, function (err, user) {
    if (err) return done(err);
    if (!user) return done(null, false);

    user.comparePassword(password, function (err, isMatch) {
      if (err) return done(err);
      if (!isMatch) return done(null, false);
      return done(null, user);
    });
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: JWT_SECRET,
};

const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  User.findById(payload.sub, function (err, user) {
    if (err) {
      return done(err, false);
    }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
