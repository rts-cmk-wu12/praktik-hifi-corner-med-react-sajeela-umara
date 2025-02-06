import express from 'express';
import ViteExpress from 'vite-express';
import { MongoClient } from "mongodb";



const CONNECTION_STRING = 'mongodb+srv://sajeelababarhadia:pxYIFI1BUvkSa7aT@hifi.ncolm.mongodb.net/?retryWrites=true&w=majority&appName=HIFI';

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
 
 
