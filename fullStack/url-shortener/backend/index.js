const express = require("express");
const mongoose = require("mongoose");
const Url = require("./models/Url");
const { nanoid } = require("nanoid");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Activer CORS pour autoriser ton domaine
app.use(
  cors({
    origin: "https://url-shortner-j3bkiz1p7-mikedwights-projects.vercel.app/",
  })
);

// middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Servir les fichiers statiques du dossier "public"
app.use(express.static(path.join(__dirname, "../public")));

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Vérification de la connexion à MongoDB
const db = mongoose.connection;
db.on("error", console.error.bind(console, "🔴Connection error:"));
db.once("open", () => {
  console.log("🟢 Connected to MongoDB");
});

// Route pour la racine
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Route pour créer une URL raccourcie
app.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: "🔴 Invalid URL" });
  }

  const shortUrl = nanoid(4);
  const newUrl = new Url({ originalUrl, shortUrl });

  try {
    await newUrl.save();
    res.status(201).json({ originalUrl, shortUrl });
  } catch (error) {
    res
      .status(500)
      .json({ error: "🔴 An error occurred while saving the URL" });
  }
});

// Route pour rediriger à partir d'une URL raccourcie
app.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });

    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: "URL not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the URL" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
