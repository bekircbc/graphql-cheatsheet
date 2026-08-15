import { ApolloServer } from '@apollo/server';
import { typeDefs } from '../src/schema/typeDefs.js';
import { resolvers } from '../src/resolvers/index.js';
import { createLoaders } from '../src/data/loaders.js';

describe('GraphQL Queries', () => {
  let testServer;

  beforeAll(() => {
    testServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
  });

  it('fetches users list', async () => {
    const response = await testServer.executeOperation(
      {
        query: 'query GetUsers { users { id name } }',
      },
      {
        contextValue: {
          user: null,
          loaders: createLoaders(),
        },
      }
    );

    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data.users.length).toBeGreaterThan(0);
  });
});