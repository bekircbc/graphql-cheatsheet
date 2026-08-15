# 11. Apollo Server (Node.js)

Standalone Apollo Server setup example:

```javascript
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => ({
    token: req.headers.authorization,
    user: await getUser(req),
  }),
});

console.log(`🚀 Server ready at ${url}`);
```

## Key Concepts

- typeDefs: Schema definitions.

- resolvers: Functions implementing schema operations.

- context: Shared request context (authentication, databases).

- middlewares / plugins: Hooks to extend server behavior.