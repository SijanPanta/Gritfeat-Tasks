import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory blog storage
let blogs = [];
let idCounter = 1;

// CREATE a blog
app.post("/blogs", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }
  const newBlog = { id: idCounter++, title, content };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

// READ all blogs
app.get("/blogs", (req, res) => {
  res.json(blogs);
});

// READ one blog by id
app.get("/blogs/:id", (req, res) => {
  const blog = blogs.find((b) => b.id === parseInt(req.params.id));
  if (!blog) return res.status(404).json({ error: "Blog not found" });
  res.json(blog);
});

// UPDATE a blog by id
app.put("/blogs/:id", (req, res) => {
  const blog = blogs.find((b) => b.id === parseInt(req.params.id));
  if (!blog) return res.status(404).json({ error: "Blog not found" });

  const { title, content } = req.body;
  blog.title = title ?? blog.title;
  blog.content = content ?? blog.content;

  res.json(blog);
});

// DELETE a blog by id
app.delete("/blogs/:id", (req, res) => {
  const blogIndex = blogs.findIndex((b) => b.id === parseInt(req.params.id));
  if (blogIndex === -1)
    return res.status(404).json({ error: "Blog not found" });

  const deleted = blogs.splice(blogIndex, 1);
  res.json(deleted[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 express-blog-api running at http://localhost:${PORT}`);
});
