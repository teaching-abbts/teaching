---
transition: slide-left
---

# <devicon-typescript/> TypeScript (4)

```ts {monaco}
// Array-Typen
let numbers: number[] = [1, 2, 3]; // Ein Array von Zahlen
let names: string[] = ["Alice", "Bob"]; // Ein Array von Strings
let mixed: (string | number)[] = ["Alice", 42]; // Ein Array mit gemischten Typen
let matrix: number[][] = [[1, 2], [3, 4]]; // Ein Array von Arrays (2D-Array)

// Objekt-Typen
let person: { name: string; age: number } = {
  name: "Housi Hinderembärg",
  age: 30
}; // Ein Objekt mit spezifischen Eigenschaften

// Interfaces
interface User { name: string; age: number; isActive: boolean; }
let user: User = {
  name: "Housi Hinderembärg",
  age: 30,
  isActive: true
}; // Ein Objekt, das dem Interface User entspricht

// Funktionen mit Typen
function greet(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
} // Eine Funktion, die ein User-Objekt als Parameter erwartet und einen String zurückgibt
let greeting = greet(user); // Aufruf der Funktion mit dem User-Objekt
```
