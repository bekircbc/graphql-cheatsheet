# 5. Schema Basics

## Object Types
```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String
  author: User!
}

type Query {
  me: User
  users: [User!]!
  post(id: ID!): Post
}

type Mutation {
  createPost(input: CreatePostInput!): Post!
  updatePost(id: ID!, input: UpdatePostInput!): Post!
  deletePost(id: ID!): Boolean!
}
```

## Scalar Types
- ID: Unique identifier.

- String: UTF-8 character sequence.

- Int: Signed 32-bit integer.

- Float: Signed double-precision fractional value.

- Boolean: true or false.

## Modifiers & Other Types

- Type!: Non-nullable field.

- [Type]: List of items.

- [Type!]!: Non-nullable list of non-nullable items.

- Other Types: Interface, Union, Enum, Input Object.