const router = require('express').Router();
const usersRouter = require('./users');
const { createUser } = require('../controllers/users');

router.use('/signup', createUser);

module.exports = { router };
