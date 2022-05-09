const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/my_db";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});


// const mongo = require('mongodb')
// const url = 'mongodb://localhost:27017/demo_db'

// mongo.connect(url, (error, db) => {
//     if (error) {
//         throw error;
//     }
//     console.log('Database created successfully')
//     db.close();
// })

// const mongodb = require('mongodb');
// const uri = 'mongodb://localhost:27017';
// const client = new mongodb.MongoClient(uri);

// client.connect((err) => {
//     if (!err) {
//         console.log('connection created');
//     }
//     const newDB = client.db("YourNewDatabase");
//     newDB.createCollection("YourCreatedCollectionName"); // This line is important. Unless you create collection you can not see your database in mongodb .

// })


// const mongodb = require('mongodb')
// const uri = 'mongodb://localhost:27017';
// const client = new mongodb.MongoClient(uri)

// client.connect((err) => {
//     if (!err) {
//         console.log('Database created successfully')
//     }
// })


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.createCollection("customers", function (err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// });