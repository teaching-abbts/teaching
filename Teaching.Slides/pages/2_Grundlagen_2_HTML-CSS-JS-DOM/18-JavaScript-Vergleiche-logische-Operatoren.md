---
transition: slide-left
---

# JavaScript - Vergleiche und logische Operatoren

- JS hat ein paar eigenwillige und gewöhnungsbedürfte Eigenheiten, die unerfahrenen Entwicklern das Leben schwer machen können, wenn sie nicht über das nötige Wissen verfügen.
- Gewisse Eigenheiten sind bedingt durch historische Fehlentscheide
- Andere Eigenheiten sind der dynamischen Natur von JS geschuldet und kommen auch in anderen dynamischen Sprachen vor (z.B. PHP, Perl)

Angenommen wir haben `const x = 5;` führt dies zu folgenden Ergebnissen:

| Operator | Beschreibung                      | Vergleich   | Rückgabewert |
| -------- | --------------------------------- | ----------- | ------------ |
| `==`     | equal to                          | `x == 8`    | `false`      |
|          |                                   | `x == 5`    | `true`       |
|          |                                   | `x == "5"`  | `true`       |
| `===`    | equal value and equal type        | `x === 5`   | `true`       |
|          |                                   | `x === "5"` | `false`      |
| `!=`     | not equal                         | `x != 8`    | `true`       |
| `!==`    | not equal value or not equal type | `x !== 5`   | `false`      |
|          |                                   | `x !== "5"` | `true`       |
|          |                                   | `x !== 8`   | `true`       |
| `>`      | greater than                      | `x > 8`     | `false`      |
| `<`      | less than                         | `x < 8`     | `true`       |
| `>=`     | greater than or equal to          | `x >= 8`    | `false`      |
| `<=`     | less than or equal to             | `x <= 8`    | `true`       |

<style>
  p {
    --uno: my-2
  }
  table, th, td {
    --uno: m-0 p-0;
  }
  li, td {
    --uno: text-sm;
  }
</style>
