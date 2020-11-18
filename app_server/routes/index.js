var express = require('express');
var router = express.Router();
var ctrlMain =require('C:\Users\DELL\Desktop\mekan32\app_server\controllers/main');


/* GET home page. */
router.get('/', ctrlMain.index);
  res.render('index', { title: 'Express' });


module.exports = router;
