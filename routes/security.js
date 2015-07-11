//The route middleware
//configure routes
var router = require('express').Router();
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config/config');

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
router.use(function(req, res, next) {
	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param('token');

	// decode token
	if (token) {
		// verifies secret and checks exp
		jwt.verify(token, config.secret, function(err, decoded) {			
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });		
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;	
				next();
			}
		});

	} 
	else 
	{
		// if there is no token
		// return an error
		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.'
		});
	}
});


module.exports = router;