const express = require("express");
const bodyParser = require("body-parser");

const app=express();

// app.get("/",function(req,res){
//   res.send("Hello");
// });
// app.listen(3000,function(){
//   console.log ("server is running on port 3000");
//
// });

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('list', {foo: 'FOO'});
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));
