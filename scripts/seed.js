//Connect to database (save reference to models in db).
const mongoose = require("mongoose");
const Post = require("../models/Post");

mongoose.connect("mongodb://localhost/blogapplication-mh", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//Create an array of sample blog post objects.
const dbSeed = [
    {
        title: "Sample 1",
        author: "Name",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet odio aliquet, ornare elit vitae, commodo velit. Aliquam et lacinia turpis, in vehicula sapien. Fusce efficitur aliquam tellus, eget scelerisque magna lacinia rhoncus. Pellentesque iaculis augue in leo finibus tincidunt. Donec ac ipsum ligula. Praesent dictum justo et purus.",
        date: new Date(Date.now())
    },
    {
        title: "Sample 2",
        author: "Name",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet odio aliquet, ornare elit vitae, commodo velit. Aliquam et lacinia turpis, in vehicula sapien. Fusce efficitur aliquam tellus, eget scelerisque magna lacinia rhoncus. Pellentesque iaculis augue in leo finibus tincidunt. Donec ac ipsum ligula. Praesent dictum justo et purus.",
        date: new Date(Date.now())
    },
    {
        title: "Sample 3",
        author: "Name",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet odio aliquet, ornare elit vitae, commodo velit. Aliquam et lacinia turpis, in vehicula sapien. Fusce efficitur aliquam tellus, eget scelerisque magna lacinia rhoncus. Pellentesque iaculis augue in leo finibus tincidunt. Donec ac ipsum ligula. Praesent dictum justo et purus.",
        date: new Date(Date.now())
    }
];

//Remove all posts and replace with these samples.
Post.deleteMany({})
    .then(() => Post.collection.insertMany(dbSeed))
    .then(data => {
        console.log(data);
        process.exit(0);
    })
    .catch(error => {
        console.log(error);
        process.exit(1);
    });