require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ri84s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  const dishCollection = client.db("taste-nest").collection("dishes");
  const expertCollection = client.db("taste-nest").collection("experts");
  const newsCollection = client.db("taste-nest").collection("news");
  const reserveCollection = client.db("taste-nest").collection("reserve");

  //all dishes
  app.get("/dish", async (req, res) => {
    const result = await dishCollection.find().toArray();
    res.send(result);
  });
  //all experts
  app.get("/expert", async (req, res) => {
    const result = await expertCollection.find().toArray();
    res.send(result);
  });
  //all news
  app.get("/news", async (req, res) => {
    const result = await newsCollection.find().toArray();
    res.send(result);
  });

  //add reserve
  app.post('/reserve',async(req,res)=>{
    const data = req.body;
    const result = await reserveCollection.insertOne(data)
    res.send(result)
  })
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
