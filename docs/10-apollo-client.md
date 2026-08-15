# 10. Apollo Client (React)

Apollo Client manages state and handles cached GraphQL data in React applications.

## Common Hooks
```javascript
// Data Fetching
const { data, loading, error } = useQuery(GET_USERS);

// Data Mutation
const [createPost] = useMutation(CREATE_POST, {
  update(cache, { data: { createPost } }) {
    // update cache manually
  }
});

// Real-time Subscriptions
const { data } = useSubscription(ON_MESSAGE_SUBSCRIPTION, {
  onData: ({ data }) => {
    // handle new data
  }
});
```

## Cache Benefits

- Automatic Caching: Normalized client cache out of the box.

- Optimistic UI: Instantly update UI before server response.

- Less Network Requests: Minimizes duplicate data fetches.