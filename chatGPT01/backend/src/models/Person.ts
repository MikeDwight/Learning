import { Schema, model } from "mongoose";

const personSchema = new Schema({
  nom: String,
  age: Number,
  partenaire: { type: Schema.Types.ObjectId, ref: "Person" },
});

export const Person = model("Person", personSchema, "persons");
