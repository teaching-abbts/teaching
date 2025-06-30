---
transition: slide-left
layout: two-cols
---

# HTML-Bilder 1

<v-clicks>

- HTML-Bilder werden mit dem `<img>`-Tag definiert.
- Die Quelldatei (`src`), Alternativtext (`alt`), `width` und `height` werden als spezifische Attribute für dieses Element bereitgestellt.
- Beachten sie die effektive Grösse des Bildes *(32px * 32px)* und die effektive Darstellung infolge der Attribute `width` und `height`.

</v-clicks>

::right::

```html {monaco-run}
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>

  <body>
    <img
      src="/slides-images/compressed_favicon-32x32.webp"
      alt="ABB-TS Icon"
      width="200px"
      height="200px"
    />
  </body>
</html>
```
