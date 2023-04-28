const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");

const cors = require('cors');
app.use(cors());

app.get("/", (req, res) => {
    res.send('Dragon is running!!!');
});

app.get("/categories", (req, res) => {
    res.send(categories);
});

app.get("/news", (req, res) => {
    res.send(news);
});

app.get("/news/:ID", (req, res) => {
    const ID = req.params.ID;
    const selectedNews = news.find(n => n._id == ID);
    res.send(selectedNews)
});

app.get("/categories/:ID", (req, res) => {
    const ID = req.params.ID;
    if ( ID === "0") {
        res.send(news);
    }
    else{
        const categoryNews = news.filter(n => n.category_id == ID);
        res.send(categoryNews);
    }
});

app.listen(port, () => {
    console.log(`dragon API is running on port ${port}`);
})