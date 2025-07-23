import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  ip: { type: String },
  city: { type: String },
  region: { type: String },
  country: { type: String },
}, { _id: false }); // prevent Mongoose from adding _id to subdoc

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  }, 
  role: { 
    type: String, 
    enum: ['doctor', 'customer'], 
    default: '',
    required: true 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model('User', userSchema);
