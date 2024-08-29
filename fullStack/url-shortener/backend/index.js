require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Url = require("./models/Url");
const { nanoid } = require("nanoid");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

// Activer CORS pour toutes les requêtes
app.use(cors());

// middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Servir les fichiers statiques du dossier "public"
app.use(express.static(path.join(__dirname, "public")));

// connexion à mongoDB
mongoose.connect(process.env.MONGODB_URI, {
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
  console.log(originalUrl, "originalUrl");

  // Validation de l'URL d'entrée
  if (!originalUrl) {
    return res.status(400).json({ error: "🔴 Invalid URL" });
  }

  // Générer un identifiant unique pour l'URL raccourcie
  const shortUrl = nanoid(4);

  // Créer une nouvelle instance du modèle URL
  const newUrl = new Url({ originalUrl, shortUrl });

  try {
    // Save la nouvelle URL dans la base de donnée
    await newUrl.save();
    console.log(newUrl, "newUrl");
    res.status(201).json({ originalUrl, shortUrl });
  } catch (error) {
    res
      .status(500)
      .json({ error: "🔴 An error occurred while saving the URL" });
  }
});

// Route pour rédiriger à partir d'une URl raccourcie
app.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;

  try {
    // Recherche l'URL originale associé à l'URL raccourcie
    const url = await Url.findOne({ shortUrl });

    if (url) {
      // Rediriger vers l'URL originale
      res.redirect(url.originalUrl);
    } else {
      // Si l'URL raccourcie n'existe pas, retourner une erreur 404
      res.status(404).json({ error: "URL not found" });
    }
  } catch (error) {
    // Gérer les erreurs éventuelles
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the URL" });
  }
});
