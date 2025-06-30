---
transition: slide-left
layout: two-cols-header
---

# JavaScript - Funktionen

::left::

- JS-Funktionen werden mit dem Schlüsselwort `function` definiert:

  ```js
  function functionName(parameters) {
    // code to be executed
  }

  function myFunction(a, b) {
    return a * b;
  }
  ```

::right::

- Die sog. "Arrow-Functions" sind mit ES6 erschienen, die u.A. eine kürzere Schreibweise erlauben.
- Wenn die Funktion nur eine Aweisung hat (und ggf. einen Wert zurückgibt), können Block `{}` sowie `return` weggelassen werden:

  ```js
  let myFunction = (a, b) => a * b;
  const result = myFunction(2, 3);
  ```

- Wir werden "Arrow-Functions" später nochmals im Zusammenhang mit Events begegnen...
