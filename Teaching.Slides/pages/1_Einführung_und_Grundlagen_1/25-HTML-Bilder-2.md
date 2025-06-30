---
transition: slide-left
---

# HTML-Bilder 2

<v-click>

Es gibt zwei Möglichkeiten, die URL anzugeben im `src`:

</v-click>

<v-clicks>

- **Absolute URL**: Links zu einem externen Bild, das auf einer anderen Webseite gehostet wird; z.B. `src="https://www.w3schools.com/html/pic_trulli.jpg"`: <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="W3Schools Image" width="200px" />
- **Relative URL**: Link zu einem Bild, das auf der eigenen Webseite gehostet wird. Hier enthält die URL nicht den Domainnamen.
  - Wenn die URL ohne Schrägstrich (`/`) beginnt, ist sie *relativ* zur *aktuellen Seite*. Bsp. `src="img.jpg"`
  - Wenn die URL mit einem Schrägstrich (`/`) beginnt, ist sie relativ zur aktuellen *Domain*. Bsp. `src"images/img.jpg"` ist relativ zum aktuellen Host- bzw. Domainnamen (z.B. `https://www.abbts.ch`) zu verstehen.

</v-clicks>

<v-clicks>

**Tipp**: Es ist *(fast)* immer am besten, relative URLs zu verwenden.

**Frage in die Runde**: warum..?

</v-clicks>

<style>
  ul {
    --uno: text-sm;
  }
</style>
