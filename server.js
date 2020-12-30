//Create Express App
const express = require("express");
const app = express(); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Configure Passport and Express Session
const User = require("./models/User");
app.use(require("express-session")({
    secret: "Tricky is the best",
    resave: false,
    saveUninitialized: false
}));
const passport = require("passport");
const LocalStrategy = require("passport-local");
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Set server port locally to 3001, since React will run on 3000.
const PORT = process.env.PORT || 3001;

//Set up Mongoose/MongoDB 
const mongoose = require("mongoose");
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/blogapplication-mh", 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

//Routes
const routes = require("./routes");
app.use(routes);

//Start the server.
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}!`);
});