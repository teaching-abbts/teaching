---
transition: slide-left
---

# JavaScript - Arrays

```js {monaco-run} { lineNumbers: 'on', height: '300px', editorOptions: { fontSize: 11, wordWrap: 'on' } }
const automarken = ["BMW", "Volvo", "Mini", "Toyota"];

// Abfragen
let automarke = automarken[0];

console.log(1, automarken);

// Ändern
automarken[0] = "Opel";

console.log(2, automarken);

// Arrays sind spezielle Objekte, ihre Attribute sind immer Zahlenindexe
const gemischt = ["hallo", 3.1415, false, {}, [1, 2, 3]];

automarken.length; // Gibt die Anzahl Elemente zurück
automarken.sort(); // sortiert das Array
automarken.push("Kia"); // Fügt einen neuen Eintrag ans ENDE des Arrays

console.log(3, automarken);

const letztesElement = automarken.pop(); // Entfernt das letzte Element aus dem Array
const andereAutomarken = automarken.splice(1, 2); // Entfernt Elemente beginnend beim Index und für die gewünschte Anzahl

console.log(4, automarken, andereAutomarken, letztesElement);
```
