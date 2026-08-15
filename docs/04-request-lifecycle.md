# 4. GraphQL Request Lifecycle

1. **React App (UI):** Triggers a query from the frontend.
2. **Apollo Client:** Sends the query via HTTP POST to the GraphQL server.
3. **GraphQL Server:** Receives the request at `/graphql`.
4. **Parse:** Parses the string query into an Abstract Syntax Tree (AST).
5. **Validate:** Validates the query AST against the defined schema.
6. **Resolver:** Resolves fields by calling underlying services/databases.
7. **DB / Data Source:** Fetches the raw data.
8. **Response:** Builds the JSON response structure matching the requested shape.
9. **Cache:** Apollo Client stores response data in Apollo Cache.
10. **UI Update:** Updates the UI components with the newly cached data.