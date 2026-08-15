# 16. Common Mistakes

❌ **Fetching too much data:** Requesting unused fields.  
❌ **No pagination:** Returning unpaginated, unbounded arrays.  
❌ **N+1 Problem:** Executing database queries inside nested loops.  
❌ **Exposing sensitive fields:** Exposing passwords or tokens in public schemas.  
❌ **No caching:** Fetching identical data repeatedly.  
❌ **Deeply nested queries:** Allowing clients to send recursive queries.  
❌ **Not validating input:** Trusting untrusted client input.  
❌ **Not handling errors properly:** Hiding error stack traces poorly or dropping error details.