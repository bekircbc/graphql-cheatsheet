# 18. Common GraphQL Directives

Directives dynamically alter query execution or schema definitions.

* **`@skip(if: Boolean!)`**: Skips field execution if argument is `true`.
* **`@include(if: Boolean!)`**: Includes field only if argument is `true`.
* **`@deprecated(reason: String)`**: Marks schema fields or enum values as deprecated.
* **`@client`**: Specifies field should be resolved locally by Apollo Client.
* **`@defer`**: Defers execution of non-critical response fields (for large payload optimization).
* **`@stream`**: Streams list items as they become available.