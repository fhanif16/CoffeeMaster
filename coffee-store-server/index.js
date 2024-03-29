const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use (cors())
app.use(express.json())
require('dotenv').config()
console.log(process.env.USERNAME)
console.log(process.env.PASSWORD)


const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.wgpsfki.mongodb.net/?retryWrites=true&w=majority`;
//const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.wgpsfki.mongodb.net/?retryWrites=true&w=majority`;
//const uri = "mongodb+srv://coffeeMaster:RR6zuxLI0KWGqiZK@cluster0.wgpsfki.mongodb.net/?retryWrites=true&w=majority";
//const uri = `mongodb+srv://${process.env.USERNAME}: ${process.env.PASSWORD}@cluster0.wgpsfki.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);








// app.get('/') , (req,res) =>{
//     res.send("coffee making server is running")
// }
app.get('/', (req, res) => {
    res.send("coffee making server is running");
});
app.listen(port, () => {
    console.log(`coffee server is running on port :${port}` )
})