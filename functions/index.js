const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// setup routes...
app.get('/test', (req, res) => {
    res.send('Wow, it actually worked.')
})
app.get('/another-one', (req, res) => {
    res.send('this one works, too!')
})

exports.api = functions.https.onRequest(app);


exports.hellothere = functions.https.onRequest((req, res) => {
    res.send('Hello there Firebase Cloud user!')
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
