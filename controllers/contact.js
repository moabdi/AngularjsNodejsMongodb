var Contact = require('../models/contact');

module.exports = {
    getAll: function(req, res) {
	    Contact.find(function(err, contacts){
	        if(err)
	                res.send(err);
	        res.json(contacts);
	    });
    },
    findById: function(req, res) {
		var id = req.params.id;
		console.log(id);
		Contact.findOne({_id: mongojs.ObjectId(id)}, function(err, contact){
			res.json(contact);
		});
    },
    //
    add: function(req, res) {
		console.log(req.body);
		var contact = new Contact(req.body);
		contact.save(function(err, contact){
		    if(err)
		        console.log(err);
		    else
		     {
		     	console.log(contact);
	        	res.json({ message: 'Contact Added!' });
		     }   
		})
    },
    update: function(req, res) {
		Contact.findOne({ _id: req.params.id }, function(err, contact) {
		if (err) {
		  return res.send(err);
		}

		for (prop in req.body) {

		        console.log(prop);
		  contact[prop] = req.body[prop];
		}

		// save the contact
		contact.save(function(err) {
			  if (err) {
			    return res.send(err);
			  }

			  res.json({ message: 'Contact updated!' });
			});
		});
    },
    delete: function(req, res) {
		var id = req.params.id;
		console.log(id);
		Contact.remove({_id: id}, function(err, contact){
			if (err) {
		      return res.send(err);
		    }
			res.json("Successfully deleted");
		});
    }
};