const express = require('express');
const Menu = require('../models/Menu');
const router = express.Router();

router.get('/:restaurantId', async (req, res) => {
  try {
    const menu = await Menu.findOne({ restaurantId: req.params.restaurantId });
    res.json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const menu = new Menu(req.body);
    await menu.save();
    res.status(201).json(menu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
