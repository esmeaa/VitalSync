var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    images: [
      { id: 'vsPurple', src: '/images/vsPurple.png', alt: 'vsPurple' },
      { id: 'vsRed', src: '/images/vsRed.png', alt: 'vsRed' },
      { id: 'runner', src: '/images/runner.png', alt: 'Running Man' },
    ]
  });
});

module.exports = router;