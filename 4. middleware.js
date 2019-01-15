const express = require('express');
const path = require('path');

const app = express();

// Application Level middleware
app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
});

// // Error handling middleware
// app.get("/broken", function (req, res) {
//     throw new Error("BROKEN"); // Express will catch this on its own.
// });
// app.use(function (err, req, res, next) {
//     console.log("Error middleware")
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// })

// // Router-level middleware
// var router = express.Router()

// router.use(function (req, res, next) {
//     console.log('Time:1', Date.now())
//     next()
// })
// router.get('/test',function(req, res){
//     res.send('1');
// })

// app.use('/route',router);

// Built in middleware
// app.use(express.static(path.join(__dirname, 'public') ));

app.listen(3000);


