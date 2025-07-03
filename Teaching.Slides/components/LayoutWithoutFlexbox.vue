<template>
  <header>
    <h1>Beispiel für Flexbox</h1>
  </header>
  <section>
    <article>
      <h2>Erster Artikel</h2>
      <p>Inhalt…</p>
    </article>
    <article>
      <h2>Zweiter Artikel</h2>
      <p>Inhalt…</p>
    </article>
    <article>
      <h2>Dritter Artikel</h2>
      <p>Inhalt…</p>
    </article>
  </section>
</template>

<style lang="css" scoped>
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
section {
  zoom: 0.8;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
</style>
