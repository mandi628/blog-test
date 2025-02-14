const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files like CSS and images
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { posts: [] });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

let posts = []; //Temporary storage for blog posts

// Route to render the home page with blog posts
app.get('/', (req, res) => {
    res.render('index', { posts: posts });
});

// Route to show the form for creating a new post
app.get('/new', (req, res) => {
    res.render('new');
});

// Route to handle new post submission
app.post('/new', (req, res) => {
    const newPost = {
      title: req.body.title,
      content: req.body.content,
    };
    posts.push(newPost); // Add the new post to the list
    res.redirect('/'); // Redirect to home after submission
  });
