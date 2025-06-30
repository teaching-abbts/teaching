---
transition: slide-left
layout: two-cols
---

# JavaScript - Datentypen

- JavaScript ist dynamisch typisiert. Das bedeutet, dass die Zuweisung von Werten an Variablen keinen typbasierten Einschränkungen unterliegt.
- Aufgrund der dynamischen Typisierung ist der Datentyp keine Eigenschaft einer Variablen, sondern Laufzeit-bezogen die Eigenschaft ihres aktuellen Wertes.

➡️ Ein grosser *Kritikpunkt* vieler Entwickler an JS: **keine Typensicherheit!**

➡️ Wir kommen später noch darauf zu sprechen... Stichwort: <logos-typescript /> <fluent-emoji-eyes />...

::right::

```js {monaco} { lineNumbers: 'on', editorOptions: { fontSize: 12, wordWrap: 'on' } }
// String
"Ein Text..."

// Number (Gleitkomma + Ganzzahlen)
123.45

// Boolean
true; false

// Null: epliziter "leerer" Wert
null

// Undefined: z.B. variable deklariert aber nicht zugewiesen
undefined

// Symbol (primitiver datentyp, garantiert einzigartig - auch wenn selbe Beschreibung)
Symbol(":-)")

// Objekt
{ key: "value" }

// Array
[1, "text", false]

// Function
function name(wert) {
  return wert;
}
```
