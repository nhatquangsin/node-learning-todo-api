// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndDelete({_id: new ObjectID("595fbaf3ee4ef0251c2788d9")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    db.close();
});