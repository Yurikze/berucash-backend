const router = require('express').Router();
const { createOffer } = require('../controllers/offers');

router.post('/', createOffer);

module.exports = router;
