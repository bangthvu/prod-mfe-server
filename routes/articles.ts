import express from "express";
import Article from "../models/article"


const articleRoutes = express.Router();

articleRoutes.get("/", async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

articleRoutes.post("/", async (req, res) => {
  try {
    const articleInfo = await Article.create(req.body.titel, req.body.undertitel, req.body.journalist, req.body.tekst, req.body.type);
    res.status(201);
    res.json(articleInfo);
  } catch (error) {
    res.status(500);
  }
});

articleRoutes.get("/:id", async (req, res) => {
  try {
    const articles = await Article.findById(req.params.id);
    if (articles) {
      res.json(articles);
    } else {
      res.status(404);
      res.json({ error: "article not found" });
    }
  } catch (error) {
    res.status(500);
  }
});

export default articleRoutes;