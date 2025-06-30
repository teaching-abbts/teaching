---
transition: slide-left
layout: two-cols-header
---

# HTTP: der **GET**-Befehl *(1)*

::left::

## Request *(Client)*

```http
GET /hello.html HTTP/1.1
Host: 127.0.0.1:5500
```

::right::

## Response *(Server)*

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 1728
Date: Mon, 20 May 2024 15:02:17 GMT

<!DOCTYPE html>
<html>
  <head>
    <title>Hello</title>
    <link rel="icon" type="image/png" href="/images/puss-in-boots.png" />
  </head>
  <body>
    <h1>Hello Earthling - live long & prosper 🖖!</h1>
  </body>
</html>
```
