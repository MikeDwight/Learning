const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Définition du schéma pour les URLs
const urlSchema = new Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unqiue: true },
  createdAt: { type: Date, default: Date.now },
});

// Création du modèle basé sur le schéma
const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
