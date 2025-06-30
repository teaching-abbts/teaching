---
transition: slide-left
layout: two-cols-header
---

# **Auftrag**: Tabelle stylen *(Hilfestellung)*

::left::

<v-clicks>

- Suchen sie nicht zu weit – die meisten Dinge haben sie entweder heute oder in der
Vergangenheit schon gesehen.
- Für einzelne Dinge müssen sie ggf. etwas *recherchieren* oder *nachlesen*. ➡️ *Dies ist gewollt*: die meisten
Entwickler haben nicht alles im Kopf, sondern effiziente Recherche und Konsultation von Dokumentationen ist eine professionelle Notwendigkeit unseres Berufsstandes.
- Damit diese Übung nicht ausartet, haben sie unten eine kleine Auswahl interessanter Links...

</v-clicks>

<v-click>

## Links

- https://www.w3schools.com/html/html_table_borders.asp
- https://www.w3schools.com/html/html_table_padding_spacing.asp
- https://www.w3schools.com/html/html_table_styling.asp
- https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
- https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
- https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child
- https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
- https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap

</v-click>

::right::

<v-click>

## Allgemeine Gedankenanstösse

</v-click>

<v-click>

- Bringen sie der Tabelle bei
  - Nicht zu gross zu werden
  - Nach rechts und links einen symetrischen äusseren Abstand zu haben - ev. gibt es einen "automatischen" Wert für eine Abstandsregel...?
  - Die Ränder sind auffallend schmal…
- Die Titel der einzelnen Spalten
  - haben eigene Farben und eine fette Schrift
  - Im HTML-Code sind die Titel gewöhnliche Nomen wie „Rang“, „Name“, etc. – ev. gibt es
eine Möglichkeit, via CSS-Regeln Texte gross- oder kleingeschrieben darstellen zu
lassen...?
- Die Bildgrösse muss beschränkt, bzw. vereinheitlicht werden…
- Die erste und dritte Spalte (resp. jeweils das erste, bzw. dritte Element jeder Zeile…) haben
eigene Styles…
- Jede zweite Zeile hat eine andere Hintergrundfarbe…
- Die letzte Zelle jeder Zeile hat die Eigenschaft, dass Text nicht umbrechen darf…

</v-click>

<style>
  li {
    --uno: text-sm;
  }
</style>
