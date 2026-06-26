---
title: ABB-TS - NDS - Web Engineering
transition: slide-left
hide: false
routerMode: hash
fonts:
  # basically the text
  sans: Robot
  # use with `font-serif` css class from UnoCSS
  serif: Robot Slab
  # for code blocks, inline code, etc.
  mono: Fira Code
background: "/images/ABB-TS-neutral.png"
layout: cover
theme: dracula
---

# **NDS - Web Engineering**

## Frontend Advanced: *Flexboxen* & *Vuetify*

<style>
  h1 {
    --uno: shadow-filter;
  }
</style>

---
transition: slide-left
---

# Programm

<v-clicks :depth="2">

1. Besprechung Hausaufgabe & Klärung von Fragen
2. Erstellung von Grids mit Flexbox
3. Einführung in Vuetify
   - Installation
   - Komponenten
   - Layouts
   - Navigation
4. Hausaufgabe & Abschluss

</v-clicks>

---
transition: slide-left
---

# Besprechung: Vue.js App mit Ktor

<https://github.com/teaching-abbts/smart-home-system/tree/day-5/vuejs-and-ktor-gallery>

---
transition: slide-left
---

# **CSS**: Flexbox

- Das [Flexbox-Layout (Flexible Box)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) Modul bietet eine effizientere Möglichkeit, Elemente in einem Container anzuordnen, auszurichten und den verfügbaren Platz zu verteilen – selbst wenn deren Größe unbekannt und/oder dynamisch ist (daher das Wort „flex“).
- [A guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) gibt eine gute Übersicht über die Flexbox-Eigenschaften und ihre Möglichkeiten.
- Die Hauptidee hinter dem Flexbox-Layout ist es, dem Container die Möglichkeit zu geben, die Breite/Höhe (und Reihenfolge) seiner Elemente so anzupassen, dass der **verfügbare Platz optimal genutzt** wird (hauptsächlich, um sich an verschiedene Anzeigegeräte und Bildschirmgrößen anzupassen). Ein Flex-Container dehnt Elemente aus, um freien Platz zu füllen, oder verkleinert sie, um Überlauf zu verhindern.
- Flexboxen ermöglichen es, mit relativ einfachen CSS-Regeln Layouts zu erstellen, die mit einer unbekannten Anzahl von Elementen funktionieren, ohne dass manuelle Anpassungen erforderlich sind.
- **Hinweis**: Das Flexbox-Layout eignet sich aufgrund seiner Eindimensionalität am besten für kleinere und mittlere Layouts, während das [Grid-Layout](https://css-tricks.com/snippets/css/complete-guide-grid/) für größere Layoutstrukturen gedacht ist. *Aus zeitlichen und praktischen Gründen werden wir uns in dieser Vorlesung auf Flexbox konzentrieren, die für unsere Zwecke mehr als ausreicht*.

---
transition: slide-left
layout: two-cols-header
---

# **CSS**: HTML-Layout ohne Flexbox

::left::

<<< ./components/LayoutWithoutFlexbox.vue html {monaco} { lineNumbers: 'on', height: '400px' }

::right::

<LayoutWithoutFlexbox />

---
transition: slide-left
layout: two-cols-header
---

# **CSS**: HTML-Layout mit Flexbox

::left::

<<< ./components/LayoutWithDisplayFlex.vue html {monaco} { lineNumbers: 'on', height: '400px' }

::right::

<LayoutWithDisplayFlex />

---
transition: slide-left
layout: two-cols-header
---

# **CSS**: Ausrichtung mit Flexbox

::left::

<<< ./components/LayoutWithFlexAlignment.vue html {monaco} { lineNumbers: 'on', height: '400px' }

::right::

<LayoutWithFlexAlignment />

---
transition: slide-left
---

# **Übung**: Flexbox

1. Kopieren sie (wie die letzten Male) folgenden HTML-Code in eine HTML-Datei (z.B. `index.html` in einem neuen Ordner `day-6-assignment-flexbox`), und öffnen Sie diese in ihrem Browser
2. Versuchen sie, die `/* TODO */`-Kommentare im CSS-Code zu entfernen und die Flexbox-Eigenschaften so zu setzen, dass das Layout wie in der Lösung (nächste Seite) aussieht

<<< ./public/assets/day-6-assignment-flexbox.html html {monaco} { lineNumbers: 'on', height: '350px' }

<style>
  li {
    --uno: text-sm;
  }
</style>

---
transition: slide-left
---

# **Übung**: Flexbox

Detaillierte Erklärungen zu den vorherigen Beispielen finden sich auf der [MDN-Seite zu Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox).

<TabViewer height="420px" :tabs="[
  { label: 'Übungsansicht', src: '/assets/day-6-assignment-flexbox.html' },
  { label: 'Lösungsansicht', src: '/assets/day-6-assignment-flexbox-solution.html' }
]" />

---
transition: slide-left
---

# **Vuetify**: ein Komponenten-Framework

- [Vuetify](https://vuetifyjs.com/en/) ist ein beliebtes UI-Framework für Vue.js, das auf [Material Design](https://m3.material.io/) von Google (Android UI) basiert.
- Vuetify ist [Open Source (MIT-Lizenz)](https://github.com/vuetifyjs/vuetify?tab=MIT-1-ov-file#readme), was es sowohl für kommerzielle als auch für nicht-kommerzielle Projekte nutzbar macht.
- Es bietet eine Vielzahl von vorgefertigten Vue-Komponenten und weiteren Bausteinen, die die Entwicklung von ansprechenden und responsiven Benutzeroberflächen erleichtern.
- Vuetify ist besonders nützlich für die schnelle Entwicklung von Prototypen und Anwendungen, da es viele Design- und Layout-Herausforderungen bereits löst.
- Es unterstützt auch die Anpassung von Themen und Stilen, um den spezifischen Anforderungen eines Projekts gerecht zu werden.
- Vuetify bietet eine [umfassende Dokumentation](https://vuetifyjs.com/en/getting-started/installation/#installation) und eine aktive Community, die das Framework kontinuierlich verbessert und erweitert.

---
transition: slide-left
---

# **Vuetify**: Code Studium

> Vuetify bietet [Dokumentation](https://vuetifyjs.com/en/getting-started/installation/), wie:
>
> - Ein neues Projekt erstellt wird
> - Wie Vuetify in ein bestehendes Projekt integriert wird
>
> **Hinweis**: *GENAU* lesen und auch auf Links klicken, um weitere Informationen zu erhalten.

Wir betrachten nun den Code einer Beispielanwendung, die Vuetify verwendet:

<https://github.com/teaching-abbts/smart-home-system/tree/day6/vuetify>

Die wesentlichen Schritte sind:

1. **Installation**:
   1. Vuetify wird mit `npm install vuetify` installiert.
   2. Dabei sollte die installation der Material Icons nicht vergessen werden: `npm install @mdi/font -D`
2. **Vuetify Plugin**: Erstellung eines Vue-Plugins, das Vuetify initialisiert und konfiguriert. Dies geschieht üblicherweise in der Datei `vuetify.ts` im `src/plugins` Verzeichnis.
3. **Konfiguration**: Das Vuetify-Plugin muss in der `main.ts` Datei importiert und in der App registriert werden.

<style>
  li {
    --uno: text-sm;
  }
</style>

---
transition: slide-left
---

# **Ausblick**: Restliche Themen dieser Vorlesung

## Domäne

- **ABB-TS Smart-Home**: Vue.js App mit Ktor Backend steuert Smart-Home Geräte an

## Technologien

- **Pinia**: Global State Management für Vue 3
- **Authentifizierung und Autorisierung**: Sessions, Cookies, evtl. JWT, OIDC
- **Progressive Web Apps**:
  - Offline-Funktionalität (Local Storage, IndexedDB)
  - Service Workers & Caching
  - App Manifest & installation
  - OS Integration

---
transition: slide-left
---

# Hausaufgabe

- Lesen sie sich in den [A guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) ein, um die Flexbox-Eigenschaften und ihre Möglichkeiten besser zu verstehen.
- Experimentieren Sie mit Vuetify - Scrollen sie die [Vuetify-Komponenten](https://vuetifyjs.com/en/components/all/#containment) durch und probieren Sie verschiedene Layouts aus.
- Arbeiten sie an ihrer Semesterarbeit weiter und integrieren Sie (wahlweise) Vuetify, um ein ansprechendes Frontend zu erstellen.

---
transition: slide-left
---

# Ende der heutigen Veranstaltung

<div class="text-center mt-9">

Vielen herzlichen Dank für eure **Aufmerksamkeit** und **Mitarbeit** 💝!

Kommt alle gut nach Hause, viel Erfolg bei den Hausaufgaben und eine gute, lehrreiche, *Unterrichtsfreie Zeit*👌

👋 bis am 8. August 2025! 😎

</div>
