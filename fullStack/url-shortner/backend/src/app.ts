import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

function generateShortUrl() {
  return crypto.randomBytes(3).toString("hex");
}

// CREATE - Route pour créer une nouvelle URL raccourcie avec l'URL complète
app.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;

  // Générer l'identifiant unique
  const shortId = generateShortUrl();

  try {
    // Enregistrer uniquement le shortId dans la base de données
    const newUrl = await prisma.url.create({
      data: {
        originalUrl,
        shortUrl: shortId, // Stocker uniquement l'identifiant
      },
    });

    // Générer l'URL complète dynamiquement pour la réponse
    const fullShortUrl = `${req.protocol}://${req.get("host")}/${shortId}`;
    res.json({ ...newUrl, shortUrl: fullShortUrl }); // Retourner l'URL complète dans la réponse
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la création de l'URL raccourcie" });
  }
});

// READ - Route pour rediriger à partir de l'URL raccourcie
app.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;

  try {
    // Chercher dans la base de données l'URL d'origine en utilisant l'identifiant (shortId)
    const urlRecord = await prisma.url.findUnique({
      where: {
        shortUrl, // Pas besoin d'inclure le domaine, juste l'identifiant
      },
    });

    if (urlRecord) {
      res.redirect(urlRecord.originalUrl); // Rediriger vers l'URL originale
    } else {
      res.status(404).json({ error: "URL non trouvée" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la redirection" });
  }
});

export default app;
