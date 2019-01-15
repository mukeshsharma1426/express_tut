const express = require('express');
const app = express();

app.listen(3000);
app.listen(3001, function(){
    console.log("Starting server ......")
})