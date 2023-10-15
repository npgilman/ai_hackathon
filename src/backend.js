const { MongoClient, ServerApiVersion } = require('mongodb');
const { sleep } = require('openai/core');

class dbDriver {
    const uri = "mongodb+srv://admin:admin@cluster0.z7jkzmq.mongodb.net/?retryWrites=true&w=majority";
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });




async function run() {
    var apiKey = "";
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const collection = client.db('tokens').collection('collection1');
        const cursor = collection.find();

        await cursor.forEach(document => {
            apiKey = document['key'];
        });

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
    return apiKey;
}
var REACT_API_KEY = "";

function initKey() {
    run().catch(console.dir).then(apiKey => { REACT_API_KEY = apiKey });
}



}

export default dbDriver;

