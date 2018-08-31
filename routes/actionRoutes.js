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

router.get('/:id/', (req, res) => {
  db.get(req.params.id).then(actions => {
    res.status(200).json(actions)
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.post('/', (req, res) => {
  //if Id reject db will create automatically
  //project idRequired  required must be id of existing project
  //description required only up to 128characters
  //notes required
  //complete optional
  db.insert(req.body).then(newProject  => {
    res.status(200).json(newProject)
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.put('/:id/', (req, res) => {
  //needs id to update else return null
  //object with changes to apply
  //reutrns updated object
  db.update(req.params.id, req.body).then(projects  => {
    res.status(200).json(projects)
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.delete('/:id/', (req, res) => {
  db.remove(req.params.id).then(count  => {
    res.status(200).json(count)
  }).catch(err => {
    res.status(500).json(err)
  })
});


module.exports = router;
