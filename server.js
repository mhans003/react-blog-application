//Create Express App
const express = require("express");
const app = express(); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Set server port locally to 3001, since React will run on 3000.
const PORT = process.env.PORT || 3001;

//Set up Mongoose/MongoDB 
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blogapplication-mh");

//Routes
const routes = require("./routes");
app.use(routes);

//Start the server.
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}!`);
});