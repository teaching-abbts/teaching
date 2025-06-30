---
transition: slide-left
layout: two-cols
---

# Vorformatierte Texte in HTML

<v-clicks>

- Das HTML `<pre>`-Element definiert vorformatierten Text.
- Der Text innerhalb eines `pre`-Elements wird in einer Schriftart mit fester Breite *(normalwerweise Courier)* angezeigt und behält sowohl Leerzeichen als auch Zeilenumbrüche bei.

</v-clicks>

::right::

```html {monaco-run}
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <pre>
      Dieser Paragrah enthält              viele
           Leerschläge im Quellcode, und der
        Webbrowser berücksicht
    diese.
    </pre>
  </body>
</html>
```
