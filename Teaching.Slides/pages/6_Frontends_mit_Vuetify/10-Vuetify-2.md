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