---
transition: slide-left
---

# HTML DOM: Document

## HTML-Elemente finden

```js {monaco} { lineNumbers: 'on', editorOptions: { fontSize: 11, wordWrap: 'on' } }
// Finde ein Element anhand seiner 'id'
const myElement = document.getElementById("my-id");

// Gibt ein Array mit allen 'p' Elementen zurück
const allPElement = document.getElementsByTagName("p");

// Gibt ein Array mit allen Elementen, welche u.A. die Klasse "my-class" referenzieren
const allMyClassElements = document.getElementyByClassName("my-class")
```

## Ändern von HTML-Elementen

```js {monaco} { lineNumbers: 'on', editorOptions: { fontSize: 11, wordWrap: 'on' } }
// Ändern des inneren HTMLs eines Elements
myElement.innerHtml = "Hello";

// Ändern des styles eines Elements
myElement.style.color = "red";
```
