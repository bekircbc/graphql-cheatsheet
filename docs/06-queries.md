# 6. Queries

## Simple & Nested Query
```graphql
query {
  users {
    id
    name
    posts {
      id
      title
    }
  }
}
```

## Arguments & Aliases

```graphql
query {
  user(id: "1") {
    name
  }
  userOne: user(id: "1") {
    name
  }
  userTwo: user(id: "2") {
    name
  }
}
```

## Fragments & Variables

```graphql
fragment UserFields on User {
  id
  name
  email
}

query GetUser($id: ID!) {
  user(id: $id) {
    ...UserFields
  }
}
```

