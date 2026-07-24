const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://dipanshu:Dipanshu2005@cluster0.mwhwl09.mongodb.net/LoginDB?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    console.log("✅ Connected Successfully!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);