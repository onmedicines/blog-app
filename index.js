import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var blogs = new Array();
app.get("/", (req, res) => {
  res.render("index.ejs", {
    blogs: blogs,
  });
});
app.post("/open", (req, res) => {
  let blog = blogs[req.body.index];
  res.render("view.ejs", {
    blog: blog,
  });
});
app.get("/create", (req, res) => {
  res.render("create.ejs");
});
app.post("/", (req, res) => {
  blogs.push(req.body.blog);
  res.render("index.ejs", {
    blogs: blogs,
  });
});
app.post("/delete", (req, res) => {
  blogs.splice(req.body.index, 1);
  res.render("index.ejs", {
    blogs: blogs,
  });
});

app.listen(port);
export default app;
