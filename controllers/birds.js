import { Bird } from '../models/bird.js'

export {
  index,
  show,
  create,
  update,
  deleteBird as delete
}

function index(req, res) {
  Bird.find({})
  .then(birds => {
    res.status(200).json(birds)
  })
  .catch(err => {
    res.json(err)
  })
}

function show(req, res) {
  Bird.findById(req.params.id)
  .then(bird => {
    res.json(bird)
  })
}

function create(req, res) {
  Bird.create(req.body)
  .then(bird => {
    res.json(bird)
  })
  .catch(err => {
    res.json(err)
  })
}

function update(req, res) {
  Bird.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((bird) => {
    res.json(bird)
  })
}

function deleteBird(req, res) {
  Bird.findByIdAndDelete(req.params.id)
  .then(bird => {
    res.json(bird)
  })
}