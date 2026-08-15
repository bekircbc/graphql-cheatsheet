# 13. Caching

Apollo uses Normalized Caching to store entities individually by ID.

```text
[ User:1 ] <---> [ Post:1 (author: User:1) ]
[ User:2 ] <---> [ Post:2 (author: User:1) ]
```
## Caching Benefits

- Deduplication: Prevents duplicate data storage.

- Fast UI Updates: Instantly updates components referencing updated normalized IDs.

- Offline Support: Store cached data persistently on client devices.