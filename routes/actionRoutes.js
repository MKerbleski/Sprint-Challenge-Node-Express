const express = require('express');

const router = express.Router();


const db = require('../data/helpers/actionModel.js');
router.use(express.json());

router.get('/', (req, res) => {
  db.get().then(actions => {
    res.status(200).json(actions)
  }).catch(err => {
    res.status(500).json(err)
  })
});

module.exports = router;
