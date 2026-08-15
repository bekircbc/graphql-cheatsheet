# 17. Interview Questions

1. **What is GraphQL?**  
   *An API query language and runtime executing typed queries against existing data sources.*

2. **REST vs GraphQL?**  
   *REST uses multiple endpoints with fixed data structures; GraphQL uses a single endpoint with dynamic selection.*

3. **Why single endpoint?**  
   *Simplifies API integration, centralized request routing, and prevents endpoint bloat.*

4. **What is a Schema?**  
   *The core contract defining object types, fields, inputs, queries, mutations, and subscriptions.*

5. **Queries vs Mutations vs Subscriptions?**  
   *Queries read data, Mutations write/modify data, Subscriptions stream real-time updates over WebSockets.*

6. **What is N+1 problem?**  
   *Executing 1 query for a parent collection and N separate queries for its child relations.*

7. **How does DataLoader work?**  
   *Batches multiple individual resource requests within a single event loop tick into a single batch query.*

8. **How do you handle authentication?**  
   *Pass authorization tokens in request headers, decode in server context, check inside resolvers.*

9. **What is GraphQL Federation?**  
   *Architecture for combining multiple microservice GraphQL schemas into a unified graph gateway.*