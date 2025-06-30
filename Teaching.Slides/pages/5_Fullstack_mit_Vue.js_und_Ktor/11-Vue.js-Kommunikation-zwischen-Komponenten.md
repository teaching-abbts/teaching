---
transition: slide-left
layout: two-cols-header
---

# <devicon-vuejs/> Vue.js: Kommunikation zwischen Komponenten

::left::

**Props** sind benutzerdefinierte Attribute, die von einer übergeordneten Komponente an eine untergeordnete Komponente übergeben werden. Sie ermöglichen es, Daten von der Elternkomponente an die Kindkomponente zu senden.

Kindkomponenten können **Ereignisse** *(Events)* an ihre Elternkomponenten senden, um Aktionen auszulösen.

<ParentComponent />

::right::

<<< ../../components/ParentComponent.vue vue {monaco} { lineNumbers: 'on', height: '220px', editorOptions: { fontSize: 12, wordWrap: 'on' } }

<<< ../../components/ChildComponent.vue vue {monaco} { lineNumbers: 'on', height: '220px', editorOptions: { fontSize: 12, wordWrap: 'on' } }

<style>
  p {
    --uno: text-sm;
  }
</style>
