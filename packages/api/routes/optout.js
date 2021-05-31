const express = require('express');
const { requireLogin } = require('../middleware/session');
const router = express.Router();
const User = require('../queries/user')

// POST /optout
router.post('/', requireLogin, async (req, res, next) => {

  const { username } = req.auth

  try {
    if( !username ) {
      throw new Error('Invalid username')
    }

    const result = await User.setOptout(username)
    const data = { success: true }
    res.json({ data });
  } catch (e) {
    next(e)
  }
});
  
module.exports = router;