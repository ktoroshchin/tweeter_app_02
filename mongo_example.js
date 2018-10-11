'use strict';

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter02";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  // ==> We have a connection to the "test-tweets" db,
  //     starting here.
  // console.log(`Connected to mongodb: ${MONGODB_URI}`);

  db.collection("tweets").find().toArray((err, results) => {
    if(err) throw err;

  // console.log("for each item yielded by the cursor:");
  // result.toArray((err, resultArray) =>
  console.log("Results Array: ", results);


  db.close();
  });
});
