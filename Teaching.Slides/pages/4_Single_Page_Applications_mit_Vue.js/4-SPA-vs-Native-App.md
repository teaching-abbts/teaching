---
transition: slide-left
layout: two-cols-header
---

# SPA vs. Native App

::left::

### SPA

<v-clicks depth="2">

- **Zugriff**
  - Keine Installation notwendig – App kann von überall her via HTTP bezogen werden – vollständige Kontrolle
  - Keine Abhängigkeit von (moderierten/kostenpflichtigen) App-Stores
- **Plattformunabhängigkeit**
  - Läuft in jedem modernen Webbrowser
  - Keine (direkte) Abhängigkeit von Betriebssystemen (Windows, macOS, Linux, Android, iOS) und Hardware (PC, Smartphone, Tablet)
- **Performance**
  - Sehr leichtgewichtig (oft nur wenige KB)
  - Kann im direkten Vergleich zu (optimierten) nativen Apps in manchen Fällen langsamer sein (z.B. Games, extrem viele Daten auf Einmal laden)
  - *Aber*: mit modernen Frameworks wie Vue.js sind SPAs sehr performant und es gibt native Schnittstellen (WebAssembly, WebGL, WebGPU) für Performance-intensive Anwendungen
  - In modernen Webbrowsern ist i.d.R. die Leistung für fast alle Anwendungsfälle mehr als ausreichend
- **Kosten**
  - Die Entwicklung von Web-Apps ist, über den ganzen Lebenszyklus betrachtet, in den meisten Fällen kostengünstiger als native Apps
  - Keine Kosten für App-Store-Gebühren
  - Geringere Kosten für Hosting und Betrieb
- **[PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)**
  - Schliesst die meisten relevanten Lücken zu nativen Apps
  - Offline-Funktionalität, Push-Benachrichtigungen, Hintergrundaktualisierungen, uvm.

</v-clicks>

::right::
### Native App
<v-clicks depth="2">

- Spezifische Installationsroutinen für jedes System
- Muss i.d.R. für eine spezifische Platform kompilliert werden
- Kann nativ kompilliert werden – höchste Performance
- Kann ein hohes Sicherheitsrisiko darstellen, da i.d.R. viele Rechte und nativer Zugriff auf das System
- Muss oft via proprietären Store (Apple App Store / Google Play / Microsoft Store, etc.) bezogen werden – ggf. kostenpflichtiges Abo für Entwickler, etc.
- **IMHO des Dozenten**: Viele native Apps sind gerade bei "simplen" Dingen Fehleranfällig (z.B. Abspielfunktion für Musik/Videos streikt, Nachladen geht nicht, App stürzt ab/reagiert nicht, etc.) - dies liegt vermutlich (auch) daran, dass viele dieser "Bausteine" nicht so so stabil und "ausgereift" sind wie die entsprechenden Web-APIs, die in modernen Webbrowsern zur Verfügung stehen und von millarden von Nutzern getestet wurden.

</v-clicks>

<style>
  li {
    --uno: text-xs;
  }
</style>
