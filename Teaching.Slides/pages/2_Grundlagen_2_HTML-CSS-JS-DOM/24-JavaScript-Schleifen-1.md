---
transition: slide-left
---

# JavaScript - Schleifen 1

```js {monaco} { lineNumbers: 'on', height: '100px', editorOptions: { fontSize: 10, wordWrap: 'on' } }
for (expression1; expression2; expression3) { /* code block to be executed */ }

for (key in object) { /* code block to be executed */ }

for (variable of iterable) { /* code block to be executed */ }
```

```js {monaco-run} { lineNumbers: 'on', height: '250px', editorOptions: { fontSize: 11, wordWrap: 'on' } }
const person = { vorname: "Hansli", nachname: "Bireweich", alter: 9 };
const automarken = ["BMW", "Volvo", "Mini"];
let text = "for: ";

for (let i = 0; i < 5; i++) {
  text += " -> " + i;
}

console.log(text);
text = "for-in: ";

for (let x in person) {
  text += " -> " + person[x];
}

console.log(text);
text = "for-of: ";

for (let x of automarken) {
  text += " -> " + x;
}

console.log(text);
```
