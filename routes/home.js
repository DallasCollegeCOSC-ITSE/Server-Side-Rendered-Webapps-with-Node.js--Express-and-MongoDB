const express = require('express'); 

const router = express.Router(); /*handles routing functanlity, get, post, etc */

//        path, request, response, and next
router.get('/',(req    ,res     ,    next)   => {
    res.render('home', null)    /* automatically  look up the views directory
    for the home.hjs template*/
})

// export the file  into server.js and use the router instead of hard coding it
module.exports = router;