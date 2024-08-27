const express = require("express");
const mongoose = require("mongoose");
const Url = require("./models/Url");
const { nanoid } = require("nanoid");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware pour parser le JSON dans les requêtes
app.use(express.json());

// connexion à mongoDB
mongoose.connect("mongodb://localhost:27017/urlshortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// vérification de la connexion à Mongoose
const db = mongoose.connection;
db.on("error", console.error.bind(console, "🔴Connection error:"));
db.once("open", () => {
  console.log("🟢 Connected to MongoDB");
});

// route de base pour vérifier si le serveur fonctionne
app.get("/", (req, res) => {
  res.send("URL Shortner API ✌️");
});

// démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

// Route pour créer une URL raccourcie
app.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;

  // Validation de l'URL d'entrée
  if (!originalUrl) {
    return res.status(400).json({ error: "🔴 Invalid URL" });
  }

  // Générer un identifiant unique pour l'URL raccourcie
  const shortUrl = nanoid(7);

  // Créer une nouvelle instance du modèle URL
  const newUrl = new Url({ originalUrl, shortUrl });

  try {
    // Save la nouvelle URL dans la base de donnée
    await newUrl.save();
    res.status(201).json({ originalUrl, shortUrl });
  } catch (error) {
    res
      .status(500)
      .json({ error: "🔴 An error occurred while saving the URL" });
  }
});
