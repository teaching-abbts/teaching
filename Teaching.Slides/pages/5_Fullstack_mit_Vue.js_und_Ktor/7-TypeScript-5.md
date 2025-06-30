---
transition: slide-left
---

# <devicon-typescript/> TypeScript (5)

```ts {monaco}
// Generische Typen
function identity<T>(arg: T): T {
  return arg;
} // Eine generische Funktion, die den Typ T verwendet
let num = identity<number>(42); // Aufruf mit einem spezifischen Typ
let str = identity<string>("Hello"); // Aufruf mit einem anderen Typ
let mixed = identity("Hello"); // Typ wird automatisch abgeleitet

// Generische Klassen
class Box<T> {
  private content: T;
  constructor(content: T) {
    this.content = content;
  }
  getContent(): T {
    return this.content;
  }
}
let numberBox = new Box<number>(123); // Eine Box für Zahlen
let stringBox = new Box<string>("Hello"); // Eine Box für Strings
let mixedBox = new Box("Hello"); // Eine Box mit automatischer Typableitung
let content = mixedBox.getContent(); // Inhalt der Box wird als string abgeleitet
```
