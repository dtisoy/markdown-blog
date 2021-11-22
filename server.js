const express = require("express");
const articleRouter = require("./routes/articles")
const app = express();
 

app.set("view engine", "ejs");

app.use("/articles", articleRouter); //articles routes are added after /articles

app.get("/", (req, res) => {
    const articles = [{
        title: "Article 1",
        createdAt: new Date(),
        description: "This is the first article"
    }, {
        title: "Article 2",
        createdAt: new Date(),
        description: "This is the second article"
    }];
  res.render("index", {articles:articles}); //second parameter is sended to index.ejs
});

app.listen(5000);
