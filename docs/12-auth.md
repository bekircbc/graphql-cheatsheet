# 12. Authentication & Authorization

## Best Practices
1. **Send JWT in Headers:** Pass token as `Authorization: Bearer <token>`.
2. **Verify in Context:** Validate token inside Apollo context setup.
3. **Add User to Context:** Attach verified user object to context for resolvers.
4. **Check Permissions in Resolvers:** Implement role/permission checks before returning data.

```text
[ Client ] --( JWT Header )--> [ GraphQL Server Context ] --( Validated User )--> [ Resolvers ]
```
