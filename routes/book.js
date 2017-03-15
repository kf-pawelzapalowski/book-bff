var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:isbn', function (req, res, next) {
  var contentUrl = (process.env.INVENTORY_URL || 'http://localhost:3000/stock/') + req.params.isbn;
  res.render('book',
    {
      contentUrl: contentUrl,
      partials: {
        layout: 'layout_file'
      }
    });

});

module.exports = router;
