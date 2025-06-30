---
transition: slide-left
---

# HTTP: der **GET**-Befehl (2)

<div></div>

Der GET-Befehl kann Parameter-Wertepaare enthalten:

- Das Fragezeichen (`?`) in der URL leitet den Bereich der Parameter ein
- Das Kaufmannsund (*Ampersand*) (`&`) trennt die Wertepaare
- Die Wertepaare sind in der Form `Name=Wert` aufgebaut.

  ```http
  GET /wiki/Spezial:Search?search=Katzen&go=Artikel HTTP/1.1
  Host: de.wikipedia.org
  ...
  ```
