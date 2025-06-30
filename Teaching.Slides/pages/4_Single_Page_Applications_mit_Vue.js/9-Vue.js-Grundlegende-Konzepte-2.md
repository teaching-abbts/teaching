---
transition: slide-left
layout: two-cols-header
---

# Vue.js - Grundlegende Konzepte 2

<<< ../../components/ConditionsAndLoops.vue html {monaco} { lineNumbers: 'on', height: '200px', editorOptions: { fontSize: 12, wordWrap: 'off' } }

::left::

- `v-if`, `v-else-if`, `v-else`: Bedingte Anzeige von Elementen
- `v-for`: Iteration über Arrays oder Objekte
- `@keyup.enter`: Event-Handler loslassen der Entertaste
- `:property`: Bindung von Attributen an reaktive Daten

::right::

<div class="w-full h-full flex justify-center">
  <ConditionsAndLoops />
</div>

<style>
  ul {
    --uno: ml-3;
  }
  li {
    --uno: text-sm;
  }
</style>