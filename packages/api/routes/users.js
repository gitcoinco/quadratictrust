const express = require('express');
const router = express.Router();
const Twitter = require('../utils/twitter')
const User = require('../queries/user')


router.get('/', async (req, res, next) => {

  const { offset = 0, limit } = req.query

  try {
    const users = await User.getTopUsers({offset, limit})
    
    // provide a count for the first batch for pagination
    const total = offset == 0? await User.count() : undefined

    res.send({ users, total });
  } catch (e) {
    next(e)
  }
});

module.exports = router;
