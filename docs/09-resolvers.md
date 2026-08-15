# 9. Resolvers

Resolvers define how the GraphQL server fetches the data corresponding to a schema field.

```javascript
const resolvers = {
  Query: {
    users: async () => {
      return await getUsers();
    },
    user: async (_, { id }) => {
      return await getUserById(id);
    },
  },
  User: {
    posts: async (parent) => {
      return await getPostsByUserId(parent.id);
    },
  },
};
```

## Resolver Signature Arguments

- parent: Result returned from the resolver on the parent field.

- args: Arguments passed into the GraphQL field.

- context: Shared object across all resolvers (auth context, data sources, etc.).

- info: AST & query execution information.