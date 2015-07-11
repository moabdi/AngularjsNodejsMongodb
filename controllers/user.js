var User = require('../models/user');
var jwt = require('jsonwebtoken'); 
var config     = require('../config/config');

module.exports = {
    getAll: function(req, res) {
	    User.find(function(err, users){
	        if(err)
	                res.send(err);
	        res.json(users);
	    });
    },
    login: function(req, res) {
		var lEmail = req.params.email;
		console.log(lEmail);
		User.findOne({email: lEmail}, function(err, user){
			if (err) throw err;
			else if (!user) 
			{
		      res.json({ success: false, message: 'Authentication failed. User not found.' });
		    }
			else 
			{
				if(user.password == req.params.password)
				{
			        // create a token
			        var token = jwt.sign(user, config.secret, {
			          expiresInMinutes: 1440 // expires in 24 hours
			        });
					//res.json({ success: true, message: 'Authentication success!', user: user });
					// return the information including token as JSON
			        res.json({
			          success: true,
			          message: 'Enjoy your token!',
			          token: token
			        });
				}
				else
				{
					res.json({ success: false, message: 'Authentication failed. Wrong password' });
				}
			}	
		});
    },
    findById: function(req, res) {
		var id = req.params.id;
		console.log(id);
		User.findOne({_id: mongojs.ObjectId(id)}, function(err, user){
			res.json(user);
		});
    },
    //
    add: function(req, res) {
		console.log(req.body);
		//var user = new User(req.body);
		// create a sample user
		var user = new User({ 
			firstName: 'Nick',
			lastName: 'Cerminara',
			email: 'cerminara@gmail.com', 
			password: 'password',
			admin: true 
		});
		user.save(function(err, user){
		    if(err)
		        console.log(err);
		    else
		     {
		     	console.log(user);
	        	res.json({ message: 'user Added!' });
		     }   
		})
    },
    update: function(req, res) {
		User.findOne({ _id: req.params.id }, function(err, user) {
		if (err) {
		  return res.send(err);
		}

		for (prop in req.body) {

		        console.log(prop);
		  user[prop] = req.body[prop];
		}

		// save the user
		user.save(function(err) {
			  if (err) {
			    return res.send(err);
			  }

			  res.json({ message: 'user updated!' });
			});
		});
    },
    delete: function(req, res) {
		var id = req.params.id;
		console.log(id);
		User.remove({_id: id}, function(err, user){
			if (err) {
		      return res.send(err);
		    }
			res.json("Successfully deleted");
		});
    }
};