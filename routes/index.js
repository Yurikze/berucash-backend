const router = require('express').Router();
const offerRouter = require('./offers');
const { createUser } = require('../controllers/users');

router.use('/signup', createUser);
router.use('/offers', offerRouter);

module.exports = { router };
