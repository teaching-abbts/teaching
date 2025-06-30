---
transition: slide-left
layout: two-cols-header
---

# JavaScript - Truthy & Falsy

::left::

<v-clicks>

- Jeder Wert in JS kann zu einem Boolean «umgewandelt» werden
  - Alles mit einem «Wert» ergibt `true`
  - Alles andere ergibt `false`
- Das Truthy & Falsy-Konzept
  - Ist eine der häufigsten Fehlerquellen und es erwischt regelmässig auch sehr erfahrene Entwickler *(jep, me too!)*
  - Ist eine direkte Konsequenz der dynamischen Natur von JS
  - Wird NICHT verschwinden – so deal with it!
  - kann auch Vorteile haben – alles eine Frage der Betrachtung 🤓

| Truthy Werte | Falsy Werte |
| ------------ | ----------- |
| `true`       | `false`     |
| `"text"`     | `""`        |
| `72`         | `0`         |
| `-72`        | `-0`        |
| `Infinity`   | `NaN`       |
| `-Infinity`  | `null`      |
| `{}`         | `undefined` |
| `[]`         |             |

</v-clicks>

::right::

```js {monaco-run} { lineNumbers: 'on', height: '350px', editorOptions: { fontSize: 14, wordWrap: 'on' } }
function barTest(argument) {
  if (argument.bar) {
    console.log(argument.bar);
  }
  else {
    console.error("😭");
  }
}

const foo = {};

barTest(foo);

foo.bar = "🍻";

barTest(foo);
```

<style>
  li {
    --uno: text-sm;
  }
  table {
    --uno: mt-2;
  }
  table, th, td {
    --uno: p-0;
  }
</style>
