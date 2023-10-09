var express = require('express');
var router = express.Router();
const wordstab = require("../wordstab");

/* GET home page. */
router.get('/langues', function(req, res){
  res.send(wordstab.langue)
});

router.post('/traduction', function(req, res){
  const data = req.body;
  if(wordstab.words[data.name]){
    res.send({langue : wordstab.langue[1], traduction : wordstab.words[data.name]});
  } else{
    res.send("404 word not found")
  }
});

module.exports = router;
