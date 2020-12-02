const mongoose = require('mongoose');

const PriceModel = mongoose.model('Price', new mongoose.Schema({ id: Number, homePrice: Number }));

module.exports.Price = PriceModel;