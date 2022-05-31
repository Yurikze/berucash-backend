const Offer = require('../models/offer');

module.exports.createOffer = async (req, res, next) => {
  const { description } = req.body;
  try {
    const offer = await Offer.create({ description });
    res.send(offer);
  } catch (error) {
    next(error);
  }
};
