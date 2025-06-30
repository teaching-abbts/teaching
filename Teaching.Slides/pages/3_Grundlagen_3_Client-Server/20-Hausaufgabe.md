---
transition: slide-left
---

# Hausaufgabe

- Sie haben heute im Kurs gelernt:
  - Wie Html ausgegeben werden kann
  - Wie HTML-Forms funktionieren
  - Wie Daten & Dateien an einen Webserver übermittelt werden
  - Wie Dateien an den Client übermittelt werden
- Sie finden den heutigen Beispiel-Code auf [Github](https://github.com/teaching-abbts/smart-home-system/tree/day-3/my-first-form) (Branch `day-3/my-first-form`)

- Ihre Aufgabe für das nächste Mal: **Bauen einer einfachen Bildgalerie**
  - Unter `/image-gallery/upload` soll ein HTML-Formular sein, das es ermöglicht, Bilder hochzuladen
  - Es soll möglich sein, mehrere Bilder gleichzeitig hochzuladen *(d.h. mehrere Dateien in einem Formularfeld auswählen)*
    ➡️ Schauen sie sich das [input-Element](https://www.w3schools.com/tags/tag_input.asp) mal genauer an...
  - Die hochgeladenen Bilder sollen in einem Verzeichnis auf dem Server gespeichert werden
  - Erstellen sie unter der Route `/image-gallery` eine HTML-Seite, welche die hochgeladenen Bilder (maximal 3 Bilder in einer Zeile) anzeigt
  - Es soll möglich sein, von der Galerie-Seite aus:
    - in das Upload-Formular zu wechseln
    - einzelne Bilder zu löschen (d.h. die Datei auf dem Server zu löschen und die Galerie-Seite zu aktualisieren)

<style>
  li {
    --uno: text-sm;
  }
</style>
