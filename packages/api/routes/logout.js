'use strict'

const express = require('express');
const router = express.Router();

/* logout */
router.get('/', async (req, res, next) => {
  req.session = null
  res.clearCookie('connect.sid')
  res.json({ success: true })
})
  
module.exports = router;
