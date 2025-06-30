---
transition: slide-left
layout: two-cols
---

# HTML-Anzeige

<v-clicks>

- Mensch kann nicht absolut sicher sein, wie HTML angezeigt wird.
- Grosse oder kleine Bildschirme und veränderte Fenstergrössen führen zu unterschiedlichen Ergebnissen.
- Bei HTML können Sie die Anzeige *nicht* ändern, indem Sie Ihrem HTML-Code *zusätzliche Leerzeichen* oder *zusätzliche Zeilen hinzufügen.
- Der Webbrowser entfernt **automatisch** alle zusätzlichen Leerzeichen und Zeilen, wenn die Seite angezeigt wird.

</v-clicks>

::right::

```html {monaco-run}
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <p>
      Dieser Paragrah enthält              viele
           Leerschläge im Quellcode, aber
  Der Webbrowser ignoriert diese.
    </p>
    <p>
      Die Anzahl Linien in einem Paragraph hängt von der Grösse des Browserfensters ab. Wenn Sie das Browserfenster verändern wird sich die Anzahl Zeilen dieses Paragraphs ändern.
    </p>
  </body>
</html>
```
