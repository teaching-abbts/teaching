---
transition: slide-left
layout: two-cols
---

# HTML-Attribute

<v-clicks>

- Alle HTML-Elemente können sog. **Attribute** haben.
- Attribute liefern **zusätzliche Informationen** zu den Elementen.
- Attribute werden immer im **Start-Tag** angegeben.
- Attribute kommen normalerweise in Name-Wert-Paaren wie `name="wert"` vor.

</v-clicks>

::right::

```html {monaco-run}
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>

  <body>
    <a href="https://www.abbts.ch/">
      Link zur ABB-TS-Homepage
    </a>
    <img
      src="/slides-images/compressed_favicon-32x32.webp"
      alt="ABB-TS Icon"
      width="50px"
      height="50px"
      class="my-3"
    />
  </body>
</html>
```
