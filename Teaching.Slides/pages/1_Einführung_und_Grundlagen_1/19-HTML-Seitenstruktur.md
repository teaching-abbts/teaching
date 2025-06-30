---
transition: slide-left
---

# HTML-Seitenstruktur

<v-clicks>

- Alle HTML-Dokumente müssenmit einer Dokumenttypdeklaration beginnen: `<!DOCTYPE html>`
  Sie stellt den Dkoumenttyp dar und hilft Webbrowsern, Webseiten korrekt anzuzeigen.
- Das HTML-Dokument selbst beginnt mit `<html>` und ended mit `</html>`.
- Der sichtbare Teil des HTML-Dokuments liegt zwischen `<body>` und `</body>`.

</v-clicks>

```html {monaco-run}
<!DOCTYPE html>
<html>
  <head>
    <title>Ich bin der im Tab/Fenster angezeigte Titel</title>
  </head>

  <body>
    <h1>Ich bin eine GROSSE Überschrift</h1>
    <p>Ich bin ein Paragraph</p>
    <p>Ich bin ein Paragraph mit <strong>starkem</strong> Inhalt 💪!</p>
  </body>
</html>
```

<style>
  li {
    --uno: text-sm;
  }
</style>
