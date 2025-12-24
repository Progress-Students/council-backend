import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/huckle", (req, res) => {
  res.json({ message: "Huckle's tiny secret route" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
