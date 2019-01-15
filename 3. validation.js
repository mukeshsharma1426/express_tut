

const express = require('express');
const Joi = require('joi');
const app = express();

function validateSchema(req, res, next){
    const schema = Joi.object().keys({
        name: Joi.string(),
        id: Joi.number().required()
    });
    Joi.validate(req.query, schema, function (err, value) { 
        console.log('error is ',err)
        if (err) {
            res.json({
              message: 'Insufficient information was supplied. Please check and try again.',
              status: 400,
              data: err.details[0].message.replace(/["]/ig, ''),
            });
          } else {
            next();
          }
    }); 
}

function printValues(req, res){
    console.log("req values are ",req.query);
    res.send(req.query);
}

app.get('/validate', validateSchema, printValues);
app.listen(3000);












