/* 
* Author : Mostapha ABDI
* Email: abdimostapha@gmail.com
* Version: V1.0
*/
var contactController = require('../controllers/contact');
var router = require('./security');

// Find all contacts
router.route('/contacts').get(contactController.getAll);

// Get contact by ID
router.route('/contacts/:id').get(contactController.findById);

// Add new contact
router.route('/contacts').post(contactController.add);

// Update contact
router.route('/contacts/:id').put(contactController.update);

// Remove a contact
router.route('/contacts/:id').delete(contactController.delete);

module.exports = router;