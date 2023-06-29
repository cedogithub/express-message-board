const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hello',
    user: 'John',
    added: new Date()
  },
  {
    text: 'What\'s up',
    user: 'Sarah',
    added: new Date()
  },
  {
    text: 'Chilling',
    user: 'Eric',
    added: new Date()
  }
];

// Middleware for parsing application/x-www-form-urlencoded
router.use(express.urlencoded({ extended: false }));

// Middleware for parsing application/json
router.use(express.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  // Render the 'index' template and pass the 'title' and 'messages' variables
  // to be used in the template
  res.render('index', { title: 'Mini message board', messages: messages });
});

router.get('/new', function(req, res, next) {
  // Render the 'form' template and pass the 'title' variable to be used in the template
  res.render('form', { title: 'Express' });
});

router.post('/new', function(req, res, next) {
  // Retrieve the form data from req.body
  const { user, text } = req.body;

  // Create a new message object with the form data and the current date
  const newMessage = {
    text: text,
    user: user,
    added: new Date()
  };

  // Push the new message object into the messages array
  messages.push(newMessage);

  // Redirect the user back to the home page after submitting the form
  res.redirect('/');
});


module.exports = router;
