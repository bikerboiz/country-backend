const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const MONGODB =
  "mongodb+srv://miguelangel:2WTnnFdBTpe0aqyi@cluster0.mz3mc.mongodb.net/country?retryWrites=true&w=majority";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function initServer() {
  await mongoose.connect(MONGODB, { useNewUrlParser: true });
  console.log("MongoDb connection successful");
  await server.listen({ port: 5000 }, () => {
    console.log("Server is running");
  });
}

initServer();
