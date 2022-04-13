const { MongoClient } = require("mongodb");

const mongoDBPath = 'mongodb+srv://marswiz:450313c%2B%2B@cluster0.flr4s.mongodb.net/FEQuzz_Users?retryWrites=true&w=majority';

const client = new MongoClient(mongoDBPath);

async function run() {
    try {
       await client.connect();
       let db = await client.db('FEQuzz_Users');
       console.log(`MongoDB Connected!`);
       let t = await db.collection('Users').find({
           "id": "Marswiz"
       });
       console.log(t);
    } finally {
        await client.close();
    }
}
run();