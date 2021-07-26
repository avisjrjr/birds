import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Bird
}

const birdSchema = new Schema({
  name: {type: String, required: true},
  breed: {type: String, default: "Parakeet"},
  age: {type: Number, default: 0}
})

const Bird = mongoose.model("Bird", birdSchema)