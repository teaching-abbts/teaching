---
transition: slide-left
---

# JavaScript - Objekte

```js {monaco-run} { lineNumbers: 'on', height: '300px', editorOptions: { fontSize: 11, wordWrap: 'on' } }
const auto = { type: "Fiat", model: "500", color: "white" };
const person = { vorname: "Hansli", nachname: "Bireweich", alter: 9, augenfarbe: "blau" };

// Abfragen ('index'-syntax oder property-syntax)
const abfrage = auto["type"] + ", " + person.alter;

console.log(abfrage);

// Ändern
auto.color = "red";
person["vorname"] = "Schälle-Ursli";

console.log(`${auto.color}, ${person["vorname"]}`);

// dynamisch objekt ändern
person.ganzerName = function() {
  return `${this.vorname} ${this.nachname}`;
}
console.log(person);
```
