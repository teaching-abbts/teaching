---
transition: slide-left
layout: two-cols-header
---

# Vue.js - Grundlegende Konzepte 1

::left::

<<< ../../components/DataBinding.vue html {monaco} { lineNumbers: 'on', height: '400px', editorOptions: { fontSize: 12, wordWrap: 'on' } }

::right::

- `v-model`: bidirektionale Datenbindung *(Vue.js implementiert dies für praktisch alle Typen von Eingabefeldern)*
- `ref()`: reaktive Referenz *(lesen und schreiben)*
- `computed()`: berechnete reaktive Referenz (lesend wie auch schreibend möglich)
- `{{ variable oder ausdruck }}`: Einweg-Datenbindung im Template
- `@click`: Event-Handler für Klick-Ereignisse

<div class="w-full h-full ml-3">
  <DataBinding />
</div>

<style>
  ul {
    --uno: ml-3;
  }
  li {
    --uno: text-sm;
  }
</style>
