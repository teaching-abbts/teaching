---
transition: slide-left
---

# Aufgaben eines Webservers

<v-clicks :depth="2">

- ### Hauptaufgabe: Auslieferung von Dateien
  - z. B. unveränderlicher HTML- oder Bild-Dateien
  - Oder dynamisch erzeugter Daten, z. B. Seiten, deren Inhalte stets individuell gemäss dem Profil eines eingeloggten Benutzers erstellt werden.
- ### Weitere Funktionen
  - **Zugriffsbeschränkung**: Anbieten von Mechanismen, mit denen sich der Nutzer eines Webbrowsers gegenüber dem Webserver bzw. einer Webanwendung als Benutzer authentisieren kann, um danach für weitere Zugriffe autorisiert zu sein.
  - **Sicherheit**: Zur Verschlüsselung der Server-Client-Kommunikation wird das HTTPS-Verfahren eingesetzt.
  - **Sitzungsverwaltung**: Wenn ein Benutzer eine Website besucht, kann der Server eine Sitzung für diesen Benutzer erstellen, die es dem Server ermöglicht, Informationen wie den Anmeldestatus des Benutzers, Einstellungen und alle in Formulare eingegebenen Daten zu verfolgen.
  - **Fehlerhandling**: etwaige Fehler oder Erfolge werden dem Browser mit HTTP-Statuscodes und einer Fehlerseite mitgeteilt.
  - **Protokollierung**: Auf einem Webserver werden üblicherweise alle Anfragen in einer Logdatei protokolliert, aus der mittels Logdateianalyse Statistiken über Anzahl der Zugriffe pro Seite generiert werden können. HTTP ist ein verbindungs- und zustandsloses Protokoll. Damit ist die Zuordnung einer Anforderung zu einem Nutzer über die IP-Adresse grundsätzlich möglich.
  - **Caching**: bei großen Zugriffszahlen kann vor allem die aufwändige dynamische Inhaltsauslieferung gepuffert um so eine bessere Performance zu erreichen.

</v-clicks>

<style>
  li {
    --uno: text-3.5;
  }
</style>
