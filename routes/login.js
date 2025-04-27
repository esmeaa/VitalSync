var express = require('express');
var router = express.Router();
const usermodel = require('../model/users');

/* GET login page. */
router.get('/', function (req, res, next) {
  res.render("login", { title: 'Week 8: Quiz App' });
});

router.post('/', (req, res, next) => {
  console.log('POST /login hit');
  const username = req.body.username;
  const password = req.body.password;

  console.log("Username submitted:", username);
  console.log("Password submitted (raw):", password);


  // Use checkLoginDetailsDB for database validation
  usermodel.checkLoginDetailsDB(username, password)
    .then(isValid => {
      console.log('Login valid?', isValid);
      if (isValid) {
        // If credentials are valid, render the quiz page with the username
        res.render("quiz", { title: username });
      } else {
        // If credentials are invalid, render the login page with an error message
        res.render("login", {
          title: 'Week 8: Quiz App',
          error: 'Invalid username or password'
        });
      }
    })
    .catch(err => {
      console.error('Error during login', err);
      res.render("login", {
        title: 'Week 8: Quiz App',
        error: 'An error occurred. Please try again later.'
      });
    });
});

module.exports = router;
