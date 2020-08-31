// Webservice setup
const express = require("express");
const cors = require("cors");
const { Router } = require("express");
const routes = Router();
//const routes = require('./routes')
const app = express();
const port = 5000;
const firebaseConfig = require("./src/firebase/client-config.json")

// Firebase client 
var firebase = require('firebase')
firebase.initializeApp(firebaseConfig)
var login = firebase.auth().signInWithEmailAndPassword("guilherme.pereira@extrabom.com.br", "75425851")
console.log(login)

// Init
app.use(cors());
app.use(express.json());

routes.get("/", (request, response) => {
  return response.json({ message: "[Server is running]" });
});

app.listen(port);
console.log(`Backend service has been started at port ${port}`);
