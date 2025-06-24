// backend/server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000; // Or any port you want your backend to run on

// MongoDB connection URI
const dbURI = 'mongodb://127.0.0.1:27010/splitbilldb'; // Using port 27010

// Define a schema for a Bill
const billSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  participants: [String],
});

// Create a model from the schema
const Bill = mongoose.model('Bill', billSchema);

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected successfully on port 27010!'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json()); // Middleware to parse JSON request bodies

app.get('/', (req, res) => {
  res.send('Split Bill Backend is running!');
});

app.post('/api/bills', async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    const savedBill = await newBill.save();
    res.status(201).json(savedBill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
}); 