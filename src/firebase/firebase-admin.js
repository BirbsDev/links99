let admin = require("firebase-admin");

let serviceAccount = require("./privateKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://modelagem-banco.firebaseio.com",
});

module.exports = admin;