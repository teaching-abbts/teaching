---
transition: slide-left
---

# Das `<input>`-Element

- Ein natives Eingabefeld für Daten (z.B. einzeiliger Text)
- Ein `<input>` Element kann, abhängig vom Typ, auf viele Arten dargestellt werden
- Seit HTML 5 gibt es sehr viele ➡️ [Eingabearten](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types)
- Die `<input>` können sich (je nach Webbrowser) **graphisch** und **verhaltenstechnisch** *unterscheiden*.
- Das `<input>` Element ist ein **leeres** Element, d.h. es hat kein schließendes Tag.
- Das `<input>` Element kann **Attribute** haben, die das Verhalten beeinflussen:
  - `type`: Der Typ des Eingabefelds (z.B. `text`, `password`, `email`, `number`, `checkbox`, `radio`, etc.)
  - `name`: Der Name des Eingabefelds, der beim Senden des Formulars verwendet wird
  - `value`: Der Standardwert des Eingabefelds
  - `placeholder`: Ein Platzhaltertext, der angezeigt wird, wenn das Eingabefeld leer ist
  - `required`: Gibt an, ob das Eingabefeld ausgefüllt werden muss
  - `disabled`: Deaktiviert das Eingabefeld
  - `readonly`: Macht das Eingabefeld schreibgeschützt
- Das `<input>` Element kann in einem `<form>` Element verwendet werden, um Benutzereingaben zu sammeln und an den Server zu senden.
- Das `<input>` Element kann auch mit JavaScript manipuliert werden, um z.B. den Wert zu ändern oder das Verhalten zu ändern.
- Das `<input>` Element kann auch mit CSS gestylt werden, um das Aussehen zu ändern.

<style>
  li {
    --uno: text-sm;
  }
</style>
