---
transition: slide-left
---

# Vue.js - Reaktivität

<div></div>

<v-click>

![MVVM-Entwurfsmuster](/slides-images/MVVMPattern.png)

</v-click>

<v-clicks>

- Vue.js verwendet das sog. [MVVM-Entwurfsmuster](https://de.wikipedia.org/wiki/Model_View_ViewModel), welches der *Trennung* zwischen **Darstellung** und **Logik** der *Benutzerschnittstelle (UI)* und dem **Server-Backend** dient.
- Dieses [Entwurfsmuster](https://de.wikipedia.org/wiki/Entwurfsmuster) ist ebenso die **Standardimplementierung** von UI-Plattformen wie *Cocoa (Apple)*, *Windows Presentation Foundation (WPF, Microsoft)* und *JavaFX (Oracle)*
- Das **ViewModel** bildet den *Zustand des UI* wieder, welches sich *durch Benutzereingaben und Ereignisse verändert*.
- **Änderungen** im UI werden **automatisch auf das ViewModel übertragen und umgekehrt** (sogenannt *Bi-direktionales DataBinding*)

</v-clicks>

<style>
  li {
    --uno: text-base;
  }
</style>
