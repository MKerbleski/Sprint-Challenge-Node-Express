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
  if (req.body.id){
    res.status(400).json({message: "Please remove id and retry request."})
  } else if (!req.body.project_id){
    res.status(400).json({message: "Please include project Id and retry request."})
  } else if (req.body.description.length > 128){
    res.status(400).json({message: "Max description length is 128characters please modify and retry request."})
  } else if (!req.body.notes) {
    res.status(400).json({message: "Please include a notes section (can be empty) and retry request."})
  } else {
    db.insert(req.body).then(newProject  => {
        res.status(200).json(newProject)
      }).catch(err => {
        res.status(500).json(err)
      })
  }
});

router.put('/', (req, res) => {
  if (!req.body.id){
    res.status(400).json({message: "Please include id and retry request."})
  } else {
    db.update(req.body.id, req.body).then(modifiedAction  => {
      res.status(200).json(modifiedAction)
    }).catch(err => {
      res.status(500).json(err)
    })
  }
});

router.delete('/:id/', (req, res) => {
  db.remove(req.params.id).then(count  => {
    res.status(200).json(count)
  }).catch(err => {
    res.status(500).json(err)
  })
});


module.exports = router;
