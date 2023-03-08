import express from "express";

const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
