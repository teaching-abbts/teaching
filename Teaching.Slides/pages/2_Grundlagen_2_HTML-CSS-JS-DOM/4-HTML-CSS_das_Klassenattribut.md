---
transition: slide-left
layout: two-cols
class: mx-2
---

# **HTML & CSS**: das Klassenattribut (*Repetition*)

<v-clicks>

- Das HTML-`class` Attribut wird verwendet um eine Klasse für ein HTML-Element anzugeben.
- **Mehrere** HTML-Elemente können **dieselbe Klasse teilen**.
- **Ein** HTML-Element kann **mehrere Klassen** haben und so die **Eigenschaften aller Klassen** erben.

</v-clicks>

::right::

```html {monaco-run} { lineNumbers: 'on', height: '310px', editorOptions: { fontSize: 11 } }
<!DOCTYPE html>
<html>
  <head>
    <style>
      .ort {
        background-color: tomato;
        color: white:
      }

      .hauptort {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h2>CSS Klassen</h2>
    <h3 class="ort hauptort">Aarau</h3>
    <h3 class="ort">Baden</h3>
    <h3 class="ort">Brugg</h3>
    <h3 class="ort">Zofingen</h3>
  </body>
</html>
```
