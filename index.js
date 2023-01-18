const { ApolloServer } = require("apollo-server")
const { resolvers } = require("./schema/resolvers")
const { typeDefs } = require("./schema/typeDefs")

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(() => {
   console.log("Your api is running")
})