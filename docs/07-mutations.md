# 7. Mutations

Mutations are used to create, update, or delete data on the GraphQL server.

## Create

```graphql
mutation {
  createPost(input: { title: "Hello", content: "This is a post" }) {
    id
    title
  }
}
```

## Update

```graphql
mutation {
  updatePost(id: "2", input: { title: "Updated title" }) {
    id
    title
  }
}
```

## Delete

```graphql
mutation {
  deletePost(id: "1")
}
```