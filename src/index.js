import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/typeDefs.js';
import { resolvers } from './resolvers/index.js';
import { createLoaders } from './data/loaders.js';
import { usersData } from './data/mockData.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace('Bearer ', '');
    
    // Simple dummy token lookup matching user ID
    const user = usersData.find((u) => u.id === token) || null;

    return {
      user,
      loaders: createLoaders(),
    };
  },
});

console.log(`🚀 Server ready at: ${url}`);