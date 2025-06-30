---
transition: slide-left
---

# URL Encoding

<v-clicks :depth="2">

- URL-Encoding *(URL-Kodierung, auch Prozentkodierung genannt)* ist ein Mechanismus, der dazu dient, Informationen in einer URL unter bestimmten Gegebenheiten zu kodieren.
- Ohne diese Kodierung wären einige Informationen nicht in einer URL darstellbar.
  - Ein **Leerzeichen** wird in aller Regel vom Browser als **Ende der URL interpretiert**, nachfolgende Zeichen würden *ignoriert* oder führten zu einem *Fehler*.
  - Bestimmte Zeichen sind für die URL reserviert (z.B. `#`)
- **Beispiel**:
  - *Problem*: Wir möchten den Wert `A54C6FE2#info` als **Parameter** übertragen – das ist nicht direkt möglich: `http://www.example.net/index.html?session=A54C6FE2#info`
    ![URL](/slides-images/URL.png)
  - *Lösung mit URL-Encoding*:
    - Laut [ASCII](https://www.ascii-code.com/) ist dem Zeichen `#` der hexadezimale **Zeichencode 23** zugeordnet, was nach URL-Encoding-Notation `%23` ergibt. Somit lässt sich die Information `A54C6FE2#info` via folgende URL korrekt übertragen: `http://www.example.net/index.html?session=A54C6FE2%23info`
</v-clicks>

<Arrow v-click="7" color="red" x1="700" y1="325" x2="485" y2="275" />

<style>
  li {
    --uno: text-sm;
  }
</style>
