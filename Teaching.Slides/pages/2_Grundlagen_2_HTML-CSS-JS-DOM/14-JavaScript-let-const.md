---
transition: slide-left
---

# JavaScript - `let` & `const`

<v-clicks :depth="2">

- Vor 2015 war das Schlüsselwort `var` die einzige Möglichkeit in JS, Variablen zu deklarieren
- Mit ECMAScript 6 wurden die neuen Schlüsselworte `let` und `const` eingeführt, welche `var` komplett ersetzen:
  - **let**: deklariert eine *veränderbare/beschreibbare* Variable
  - **const**: deklariert eine konstante, bzw. lesbare Variable, die *nicht modifiziert werden* kann.
- Details zur genauen Funktionsweise werden hier anschaulich dargestellt: https://www.w3schools.com/js/js_let.asp

</v-clicks>

<v-clicks>

`var` ist eine historische **Misskonzeption** und sollte **nicht verwendet** werden:

1. z.B. **Gültigkeitsbereich**: Variablen, die mit `var` deklariert werden, haben einen Funktions- oder globalen Gültigkeitsbereich, was zu unerwartetem Verhalten führen kann. *Im Gegensatz dazu haben `let` und `const` einen Block-Gültigkeitsbereich, der sicherer und intuitiver ist.*
2. z.B. **Mehrfachdeklaration**: Mit `var` kann eine Variable innerhalb desselben Gültigkeitsbereichs mehrfach deklariert werden, was zu unerwarteten Überschreibungen führen kann. *`let` und `const` verhindern dies.*

<div class="mt-5 flex flex-row justify-center">
  <span class="text-xl">Es gibt in der heutigen Web-Welt <strong>keinen rationalen Grund</strong> (mehr), <code>var</code> zu verwenden!</span>
</div>

</v-clicks>

<style>
  li {
    --uno: text-sm;
  }
</style>
