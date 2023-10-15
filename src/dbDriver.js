const { MongoClient, ServerApiVersion } = require('mongodb');
const { sleep } = require('openai/core');

class DatabaseClient {
  constructor(uri) {
    this.uri = uri;
    this.client = new MongoClient(this.uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
  }

  async connect() {
    try {
      await this.client.connect();
    } catch (error) {
      console.error("Failed to connect to the database:", error);
      throw error;
    }
  }

  async fetchAPIKey() {
    try {
      const collection = this.client.db('tokens').collection('collection1');
      const cursor = collection.find();
      let apiKey = "";

      await cursor.forEach((document) => {
        apiKey = document['key'];
      });

      return apiKey;
    } catch (error) {
      console.error("Failed to fetch API key:", error);
      throw error;
    }
  }

  async close() {
    try {
      await this.client.close();
    } catch (error) {
      console.error("Failed to close the database connection:", error);
      throw error;
    }
  }

  static async initKey() {
    const uri = "mongodb+srv://admin:admin@cluster0.z7jkzmq.mongodb.net/?retryWrites=true&w=majority";
    const dbClient = new DatabaseClient(uri);

    try {
      await dbClient.connect();
      const apiKey = await dbClient.fetchAPIKey();
      return apiKey;
    } catch (error) {
      console.error("Failed to initialize API key:", error);
      return null;
    } finally {
      await dbClient.close();
    }
  }
}

export default DatabaseClient;