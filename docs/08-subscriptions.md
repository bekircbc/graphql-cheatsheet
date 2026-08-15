# 8. Subscriptions (Real-Time)

Subscriptions establish a persistent, bi-directional WebSocket connection between the server and the client to push real-time updates.

```graphql
subscription {
  newMessage(roomId: "1") {
    id
    text
    sender
    createdAt
  }
}
```

