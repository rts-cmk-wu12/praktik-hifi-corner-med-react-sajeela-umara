import express from 'express';
import { MongoClient } from 'mongodb';
import ViteExpress  from 'vite-express';





const CONNECTION_STRING = "mongodb+srv://umaraahmed12:iqZj1kTMRSGQ2nvW@hifi.eeue5.mongodb.net/?retryWrites=true&w=majority&appName=HIFI";

const client = new MongoClient(CONNECTION_STRING);
const database = client.db('hifi');

const server = express();

server.get("/message", (_, res) => res.send("hello"));

server.get('/api/products', async (_, response) => {
    const productsCollection = database.collection('products');
  const productsCollectionData = await productsCollection.find().toArray();

  response.json(productsCollectionData);
}

)

ViteExpress.listen(server, 3000, async () => console.log('server is runing'));


/*const productsCollection = database.collection('products');

const server = express();
server.use(express.json());  

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    server.get("/message", (_, res) => res.send("hello"));

    server.get('/api/products', async (_, res) => {
      const productsCollectionData = await productsCollection.find().toArray();
      res.json(productsCollectionData);
    });

    server.post('/api/products', async (req, res) => {
      const product = req.body;

      try {
        const result = await productsCollection.insertOne(product);
        res.status(201).json(result.ops[0]);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    ViteExpress.listen(server, 3000, async () => console.log('Server is running on port 3000'));

  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);*/
