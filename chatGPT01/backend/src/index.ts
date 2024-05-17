import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const startServer = async () => {
  try {
    console.log("Trying to connect to MongoDB Atlas...");
    const connection = await mongoose.connect(
      "mongodb+srv://mike:UPTnbqUGxBG31tdA@cluster0.r2sclrh.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("🚀 Connected to MongoDB Atlas");
    console.log("Using database:", connection.connection.db.databaseName);

    const server = new ApolloServer({ resolvers, typeDefs });

    server.listen().then(({ url }) => {
      console.log(`🟢 Server ON at ${url}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas", error);
  }
};

startServer();
