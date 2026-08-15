# 2. GraphQL Architecture

GraphQL sits between the client applications and your underlying databases or backend services.

## Architecture Flow
1. **Client:** Sends a GraphQL query over HTTP.
2. **GraphQL Query:** Arrives at the `/graphql` server endpoint.
3. **Resolver:** Maps the query fields to business logic and data sources.
4. **Business Logic:** Processes the requests, validates rules, and formats data.
5. **Database / Data Source:** Fetches data from microservices, REST APIs, or databases.