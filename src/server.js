const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const { MongoClient, ServerApiVersion } = require('mongodb');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.z7jkzmq.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.z7jkzmq.mongodb.net/?retryWrites=true&w=majority', {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});



app.get('/api/data', async (req, res) => {
  try {

    await client.connect();
    const collection = client.db('tokens').collection('collection1');
    const cursor = collection.find();
    var apiKey = "";
    await cursor.forEach(document => {
        apiKey = document['key'];
    });
    res.json(apiKey);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

