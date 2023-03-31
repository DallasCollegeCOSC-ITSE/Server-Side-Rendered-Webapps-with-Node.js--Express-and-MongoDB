const express = require('express') /* import express */


const app = express() /* instanciate the express app */

app.get('/', (req, res,next) =>
{
    res.send('this is the home route');
}) 

app.listen(5000);
console.log('App running on http://localhost:5000');
