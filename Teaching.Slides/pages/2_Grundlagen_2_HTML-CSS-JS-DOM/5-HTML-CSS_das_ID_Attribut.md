---
transition: slide-left
---

# HTML & CSS: Das ID-Attribut (*Repetition*)

<v-clicks>

- Das HTML-`id` Attribut wird verwendet, um eine **eindeutige ID** für **ein HTML-Element** anzugeben.
- Ein HTML-Dokument kann **nicht mehr als ein Element mit derselben ID** enthalten.

</v-clicks>

```html {monaco-run} { lineNumbers: 'on', height: '190px', editorOptions: { fontSize: 11 } }
<!DOCTYPE html>
<html>
  <head>
    <style>
      #meinHeader {
        background-color: lightblue;
        color: black;
        padding: 40px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h2>Das ID-Attribut</h2>
    <h1 id="meinHeader">Mein Header</h1>
  </body>
</html>
```
