const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const product = require("./routes/product.route");

let dev_db_url = "mongodb+srv://martin:newpass@cluster0-ieyxp.mongodb.net/test?retryWrites=true&w=majority";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/products", product);

app.listen(8000, function() {
    console.log("Listening to Port 8000");
});