const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const app = express();

mongoose.connect("mongodb://localhost:27017/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

app.use("/articles", articleRouter); //articles routes are added after /articles
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Article 1",
      createdAt: new Date(),
      description: "This is the first article",
    },
    {
      title: "Article 2",
      createdAt: new Date(),
      description: "This is the second article",
    },
  ];
  res.render("articles/index", { articles: articles }); //second parameter is sended to index.ejs
});

app.listen(5000);
