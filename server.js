const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const BlogPosts = [
  {
    slug: "first-blog-post",
    title: "First Blog Post",
    description: "Lorem ipsum dolor sit amet, consecteturadip.",
  },
  {
    slug: "second-blog-post",
    title: "Second Blog Post",
    description: "Hello React Router v6",
  },
];


const corsOptions = {
  origin: '*', // Có thể thay đổi '*' thành domain cụ thể của bạn
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.get("/api/posts", function (req, res) {
  console.log(BlogPosts);
  res.send(JSON.stringify(BlogPosts));
});
app.get("/api/post/:slug", function (req, res) {
  const slug = req.params.slug;
  const post =
  BlogPosts.find((element) => element.slug === slug);
  if (post) res.send(JSON.stringify(post));
  else res.status(404).send("Not found");
});


app.post("/api/post", jsonParser, (req, res) => {
  const post = {
    slug: req.body.slug,
    title: req.body.title,
    description: req.body.description,
  };
  // BlogPosts.BlogPosts.push(post);
  BlogPosts.push(post);
  res.status(200).send({ message: "Posted successful" });
});

app.post("/api/login", jsonParser, (req, res) => {
  const creds = {
    username: req.body.username,
    password: req.body.password,
  };
  if (creds.username === "admin" && creds.password === "123") {
    res.status(200)
      .send({ message: "Login successful" });
  } else {
    res.status(400).send({ message: "Login failed" });
  }
});

app.use((req, res) => {
  res.status(400).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
