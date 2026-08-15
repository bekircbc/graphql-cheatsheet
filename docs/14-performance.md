# 14. Performance Tips

* **DataLoader:** Use DataLoader batching and caching to solve the N+1 query problem.
* **Batch Database Requests:** Group multiple database calls into a single query.
* **Pagination:** Implement pagination using limit/offset or cursor-based connection patterns.
* **Persisted Queries:** Send query hashes instead of long string queries.
* **Response Caching:** Enable server-side cache controls.
* **Avoid Deeply Nested Queries:** Limit maximum query depth.
* **Directives:** Use `@defer` and `@stream` for deferred loading of heavy response fields.