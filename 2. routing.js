const express = require('express');
const app = express();

app.get('/',function(req, res){
    console.log("Hello there.");
    res.send('Hello there.');
})

app.listen(3000);