const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//this data allow us to grab a data sent from the front
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(express.json({ extended: true, limit: "30mb" }));

//this allows cross origin  requests
//localhost: 3000 t0 5000
app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
    res.send("hello world");
});

const postSchema = new mongoose.Schema({
    form_creator: String,
    form_title: String,
    form_message: String,
    form_tag: String,
    form_selected_file: String,
    form_created_at: {
        type: Date,
        default: new Date(),
    },
});

const Model = mongoose.model("Posts_model", postSchema);

app.post("/post/create", async (req, res) => {
    try {
        const post = await Model.create(req.body);

        console.log(post);

        res.json(post); // this line  will send  a response to the frontend
    } catch (error) {
        console.log(error);
    }
});
//grab all data saved in the database
app.get("/posts/get_data", async (req, res) => {
    try {
        const posts = await Model.find();

        console.log(posts);

        res.json(posts);
    } catch (error) {
        console.log(error);
    }
});

// POST method route
app.post("/posts/create", async (req, res) => {
    try {
        const post = await Model.create(req.body);

        console.log(post);

        res.json(post);
    } catch (error) {
        console.log(error);
    }
});

const PORT = 5000;

//console.log(PORT);

const CONNECTION_URI = "mongodb+srv://memory_app:Ojay89@cluster0.ao38mql.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`)))
    .catch((error) => console.log(error));
