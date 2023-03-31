const express = require('express'); 
const router = express.Router(); /*handles routing functanlity, get, post, etc */

//        path, request, response, and next
router.post('/',(req    ,res     ,    next)   => {
       res.json({
        data: req.body 
       })
})

// export the file  into server.js and use the router instead of hard coding it
module.exports = router;