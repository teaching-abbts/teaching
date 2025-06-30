---
transition: slide-left
layout: two-cols-header
---

# Der HTML DOM (Document Object Model)

::left::

<v-click>

![HTML-DOM](/slides-images/HTML-DOM.png)

</v-click>

::right::

<v-clicks :depth="2">

- Mit dem HTML-DOM kann JavaScript auf alle Elemente eines HTML-Codes zugreifen und diese ändern
- Wenn eine Webseite geladen wird, erstellt der Browser ein Document Object Model der Seite.
- Das HTML-DOM-Modell ist als Struktur von Objekten aufgebaut.
- Mit dem Objektmodell ist unser Werkzeugkasten vollständig:
  - JavaScript kann alle **HTML-Elemente** auf der Seite *ändern*
  - JavaScript kann alle **HTML-Attribute** auf der Seite *ändern*
  - JavaScript kann alle **CSS-Stile** auf der Seite *ändern*
  - JavaScript kann **vorhandene HTML-Elemente und -Attribute** *entfernen*
  - JavaScript kann **neue HTML-Elemente und -Attribute** *hinzufügen*
  - JavaScript kann auf **alle vorhandenen HTML-Ereignisse** auf der Seite *reagieren*
  - JavaScript kann **neue HTML-Ereignisse** auf der Seite *erzeugen*

</v-clicks>

<style>
  img {
    --uno: pr-3;
  }
  li {
    --uno: text-sm;
  }
</style>
