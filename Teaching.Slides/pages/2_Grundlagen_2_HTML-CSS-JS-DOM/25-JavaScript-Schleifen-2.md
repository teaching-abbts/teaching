---
transition: slide-left
---

# JavaScript - Schleifen 2

```js {monaco} { lineNumbers: 'on', height: '65px', editorOptions: { fontSize: 10, wordWrap: 'on' } }
while (condition) { /* code block to be executed */ }

do { /* code block to be executed */ } while (condition);
```

```js {monaco-run} { lineNumbers: 'on', height: '300px', editorOptions: { fontSize: 11, wordWrap: 'on' } }
let text = "while: ";
let i = 0;

while (i < 10) {
  text += " -> " + i;
  i++;
}

console.log(text);
text = "do-while: ";
i = 0;

do {
  text += " -> " + i;
  i++;
} while (i < 10)

console.log(text);

```
