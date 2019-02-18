var express = require('express');
var app = express();

app.get('/', function (req, res){
   res.send('proyecto nodejs!');
});

app.listen(3000, function(){
   console.log('Esta app coorre en el puerto 3000!');
});
