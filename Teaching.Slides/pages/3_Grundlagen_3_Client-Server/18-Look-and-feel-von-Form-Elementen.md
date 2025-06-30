---
transition: slide-left
---

# Look & Feel von Form-Elementen

- Das Aussehen der **nativen Elemente** ist aus Design-Sicht *suboptimal*:
- Unternehmen und Organisationen haben oft ein sog. «Corporate Design» - die **nativen Elemente** lassen sich (je nach Typ) *nur begrenzt stylen*, bzw. in ihrem Verhalten beeinflussen und können so den Gesamteindruck stören.
- Die Form-Elemente werden daher oft «verpackt» und ggf. auch durch Proxy-Elemente ersetzt um eine einheitliche Benutzererfahrung zu ermöglichen, bzw. um ein einheitliches «Look & Feel» sicherzustellen.
- Die Vielfältigkeit von HTML, JS & CSS ermöglicht die Umsetzung nahezu beliebiger Designs – allerdings sollte die Komplexität von «korrekten» Gui-Elementen nicht unterschätzt werden:
  - Native Eingabetypen sind «kampferprobt» und lösen viele Probleme und Sonderfälle bei der Bedienung (z.B. Touch / Maus & Tastatur).
  - Bsp. Um einen «customized» Button zu erstellen, der dieselben Fähigkeiten (Reagieren auf alle möglichen Touch-, Tastatur- und Mauseingaben) wie ein nativer `<button>` hat, werden ca. 1000 Zeilen JavaScript Code benötigt.
