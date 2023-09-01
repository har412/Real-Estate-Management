const express = require('express');
const { GetHomes, AddHome, UpdateHome, DeleteHome } = require('../controllers/HouseController');

const router = express.Router();

router.route('/').get(GetHomes).post(AddHome).put(UpdateHome).delete(DeleteHome)

module.exports = router