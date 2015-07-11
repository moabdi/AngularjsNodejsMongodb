/* 
* Author : Mostapha ABDI
* Email: abdimostapha@gmail.com
* Version: V1.0
*/
//configure routes

var router = require('express').Router();

//Controller
var userController = require('../controllers/user');

// Find all users
router.route('/authenticate').get(userController.getAll);

// Get user by ID
router.route('/authenticate/:email/:password').get(userController.login);

// Add new user
router.route('/users').post(userController.add);

// Update user
router.route('/users/:id').put(userController.update);

// Remove a user
router.route('/users/:id').delete(userController.delete);

module.exports = router;