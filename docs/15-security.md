# 15. Security Best Practices

* **Disable Introspection in Production:** Prevent unauthorized schema discovery.
* **Limit Query Depth:** Stop clients from requesting infinitely nested fields.
* **Analyze Query Complexity:** Assign cost points to fields and reject queries exceeding cost limits.
* **Rate Limiting:** Throttle requests by IP or client token.
* **Validate Input:** Sanitize inputs to protect against injection attacks.
* **Use HTTPS:** Encrypt all HTTP/WebSocket traffic.
* **DDoS Protection:** Guard against brute force attacks.