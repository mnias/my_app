var express = require('express');

var app = express();

app.use(express.static(__dirname + '/pulic'));

app.listen(3000,function(){
  console.log('Server On!');
});
