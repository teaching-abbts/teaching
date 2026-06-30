---
title: ABB-TS - NDS - Web Engineering
transition: slide-left
hide: false
routerMode: hash
fonts:
  # basically the text
  sans: Robot
  # use with `font-serif` css class from UnoCSS
  serif: Robot Slab
  # for code blocks, inline code, etc.
  mono: Fira Code
background: "/images/ABB-TS-neutral.png"
layout: cover
theme: dracula
---

# **NDS - Web Engineering**

## Der Weg zu Fullstack mit *Vue.js* und *ASP.NET Core*

<style>
  h1 {
    --uno: shadow-filter;
  }
</style>

---
transition: slide-left
---

# Programm

<v-clicks :depth="2">

1. Besprechung Hausaufgabe & Lösung
2. Einführung in TypeScript
3. Vue.js Single File Components (SFCs)
4. Struktur: Vue.js-Projekt (SPA)
5. Async-Await in JavaScript
6. Backend-Kommunikation mit Fetch API
7. Struktur: Vue.js und ASP.NET Core (Fullstack)
8. Hausaufgabe & Abschluss

</v-clicks>

---
transition: slide-left
---

# **Lösungsvorschlag**: Todo-App mit Vue.js

<<< ./public/assets/day-4-vue.js-todo-app-solution.html html {monaco} { lineNumbers: 'on', height: '450px' }

---
transition: slide-left
---

# <devicon-typescript/> TypeScript (1)

- TypeScript ist eine von Microsoft entwickelte Programmiersprache, die auf JavaScript basiert
- Es erweitert JavaScript um statische Typisierung, Klassen und Interfaces
- TypeScript wird in JavaScript transpiliert, sodass es in jedem JavaScript-Umfeld ausgeführt werden kann
- Es bietet eine verbesserte Entwicklererfahrung durch Typüberprüfung
- TypeScript ist besonders nützlich für größere Projekte, da es die Wartbarkeit und Lesbarkeit des Codes verbessert

---
transition: slide-left
---

# <devicon-typescript/> TypeScript (2)

Es gibt drei Haupt-Primitivtypen in JavaScript und TypeScript:

- **boolean** – Wahrheitswerte: `true` oder `false`
- **number** – Ganzzahlen und Fließkommazahlen
- **string** – Textwerte wie `"TypeScript Rocks"`

Es gibt außerdem zwei weniger gebräuchliche Primitivtypen, die in neueren Versionen von JavaScript und TypeScript verwendet werden:

- **bigint** – Ganzzahlen (auch sehr große), die größere negative und positive Werte als der Typ `number` erlauben
- **symbol** – Wird verwendet, um eine global eindeutige Kennung zu erstellen

---
transition: slide-left
---

# <devicon-typescript/> TypeScript (3)

TypeScript unterscheidet zwischen zwei Arten von Typisierungen:

```ts
// Explizite Typisierung
let name: string = "Housi Hinderembärg"; // Der Typ ist explizit als string deklariert
let age: number = 30; // Der Typ ist explizit als number deklariert
let isActive: boolean = true; // Der Typ ist explizit als boolean deklariert

// Implizite Typisierung
let city = "Baden"; // Der Typ wird implizit als string abgeleitet
let score = 95; // Der Typ wird implizit als number abgeleitet
let isOnline = false; // Der Typ wird implizit als boolean abgeleitet
```

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

---
transition: slide-left
---

# <devicon-vuejs/> Vue SPA mit Vite-Bundler <devicon-vitejs/>

- Bisher haben wir Vue.js in einer klassischen HTML-Seite verwendet *(Global Build)*
- Mit [Vite](https://vite.dev/) können wir die volle Power von [Vue.js](https://vuejs.org/) nutzen, was die Entwicklung enorm erleichtert
  - TypeScript als Skriptsprache
  - Aufteilung der Anwendung in Komponenten (wiederverwendbare Bausteine)
  - Single-File Components (SFCs)
  - Vue Router für die Navigation
  - Nutzung von Pinia für das State Management
- Vite ist ein moderner Build-Tool und Bundler für Vue.js-Anwendungen
  - Das Build-Tool transpiliert verschiedene Sprachen wie TypeScript und Vue-Dateien in JavaScript
  - Ein Bundler kombiniert und optimiert JavaScript-Dateien für die Produktion
- Vite bietet eine schnelle Entwicklungsumgebung und optimierte Builds für die Produktion
  - Hot Module Replacement (HMR) für eine verbesserte Entwicklererfahrung (keine Seite neu laden, wenn sich der Code ändert)
  - Einfach zu konfigurieren und bietet eine Vielzahl von Plugins für die Integration mit anderen Tools und Frameworks

<style>
  li {
    --uno: text-base;
  }
</style>

---
transition: slide-left
layout: two-cols-header
---

# <devicon-vuejs/> Vue.js: App-Struktur

<div class="flex flex-row justify-center">
  <a href="/images/vuejs-app-struktur.drawio.html" class="w-80%" target="_blank">
  <div class="bg-cover w-full h-440px flex items-center justify-center" style="background-image: url('/images/vuejs-app-struktur.png');">
  </div>
  </a>
</div>

---
transition: slide-left
layout: two-cols-header
---

# <devicon-vuejs/> Vue.js: Single File Components (SFCs)

Vue.js bietet die Möglichkeit, Komponenten in sogenannten **Single File Components (SFCs)** zu organisieren. Diese Dateien haben die Endung `.vue` und enthalten HTML, CSS und JavaScript (oder TypeScript) in einer einzigen Datei.

`SfcExample.vue`:

::left::

<<< ./components/SfcExample.vue vue {monaco} { lineNumbers: 'on', height: '330px' }

::right::

<SfcExample />

---
transition: slide-left
layout: two-cols-header
---

# <devicon-vuejs/> Vue.js: Kommunikation zwischen Komponenten

::left::

**Props** sind benutzerdefinierte Attribute, die von einer übergeordneten Komponente an eine untergeordnete Komponente übergeben werden. Sie ermöglichen es, Daten von der Elternkomponente an die Kindkomponente zu senden.

Kindkomponenten können **Ereignisse** *(Events)* an ihre Elternkomponenten senden, um Aktionen auszulösen.

<ParentComponent />

::right::

<<< ./components/ParentComponent.vue vue {monaco} { lineNumbers: 'on', height: '220px' }

<<< ./components/ChildComponent.vue vue {monaco} { lineNumbers: 'on', height: '220px' }

<style>
  p {
    --uno: text-sm;
  }
</style>

---
transition: slide-left
---

# **Aufgabe**: Neues Vue.js Projekt

**Node.js** ist eine JavaScript-Laufzeitumgebung, die es ermöglicht, JavaScript ausserhalb des Browsers auszuführen. Sie wird häufig für die Entwicklung von Serveranwendungen und Tools verwendet.

1. Installieren sie *Node.js 22 (LTS)* auf ihrem Rechner: <https://nodejs.org/en/download>
2. Erstellen Sie ein neues Verzeichnis für Ihr Projekt und öffnen sie es in Ihrem Terminal oder Ihrer Kommandozeile.
3. Führen Sie den folgenden Befehl aus, um ein neues Vue.js-Projekt zu erstellen: `npm init vue@latest`
4. Folgen Sie den Anweisungen im Terminal, um das Projekt zu konfigurieren:
   1. Wählen des Projektnamens (z.B. `my-vue-app`)
   2. Wählen sie bei den Features (durch Auswahl mit den Pfeiltasten oben/unten und Leertaste) die Optionen **TypeScript**, **Router**, **ESLint** und **Prettier** aus.
5. Lassen sie die Experimental Features deaktiviert.
6. Folgen Sie den Anweisungen, um das Projekt zu erstellen, die Abhängigkeiten zu installieren und das Projekt zu starten: es wird ein lokaler Dev-Server gestartet, der Ihre Vue.js-Anwendung bereitstellt.
7. Spielen sie ein wenig mit der Anwendung herum:
   1. Navigieren sie zwischen den Seiten (Home, About, etc.)
   2. Öffnen sie die Vue-Devtools (Symbol ganz unten in der Mitte), welche es ihnen erlaubt, Struktur und Zustand der Vue-Komponenten zu sehen.
   3. Schauen sie sich die Struktur des Projekts an, insbesondere die `src`-Verzeichnisstruktur.

<style>
  li {
    --uno: text-sm;
  }
</style>

---
transition: slide-left
layout: two-cols-header
---

# <devicon-vuejs/> Vue.js: Projektstruktur

Vue.js-Projekte folgen in der Regel einer bestimmten Verzeichnisstruktur, die die Organisation von Komponenten, Views und anderen Ressourcen erleichtert. Hier ist ein typisches Beispiel für die Verzeichnisstruktur eines Vue.js-Projekts:

::left::

```txt
src/
├── assets/
│   ├── images/
│   └── styles/
├── components/
│   ├── MyComponent.vue
│   └── AnotherComponent.vue
├── views/
│   ├── Home.vue
│   └── About.vue
├── router/
│   └── index.ts
├── App.vue
└── main.ts
```

::right::

```ts {*}{maxHeight:'400px'}
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
```

---
transition: slide-left
---

# <devicon-javascript/> Async/Await in JavaScript

Async/Await ist eine moderne Syntax in JavaScript, die es ermöglicht, asynchrone Operationen einfacher und lesbarer zu gestalten. Es baut auf Promises auf und ermöglicht es, asynchrone Codeblöcke wie synchronen Code zu schreiben.

```js {monaco} { lineNumbers: 'on', height: '350px' }
async function fetchDataAsync() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Alternative mit Promise-Kette
function fetchDataPromise() {
  fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
}
```

---
transition: slide-left
---

# <devicon-javascript/> Fetch API

Das [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) ist eine moderne Schnittstelle, die es ermöglicht, Netzwerkressourcen asynchron abzurufen. Es ersetzt die ältere XMLHttpRequest-Schnittstelle und bietet eine einfachere und flexiblere Möglichkeit, HTTP-Anfragen zu stellen.

```js {monaco} { lineNumbers: 'on', height: '350px' }
// GET-Anfrage
// -----------
const response = await fetch('https://api.example.com/data');

// Überprüfen, ob die Anfrage erfolgreich war
if (response.ok) {
  const data = await response.json(); // JSON-Daten extrahieren
  console.log(data);
} else {
  console.error('Fehler beim Abrufen der Daten:', response.statusText);
}

// ----------------------------------------------------------------------

// POST-Anfrage
// ------------

// Inhaltstyp JSON
const jsonPostData = { key: 'value' };
const jsonPostResponse = await fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(jsonPostData) // Daten als JSON senden
});

// Überprüfen, ob die Anfrage erfolgreich war
if (jsonPostResponse.ok) {
  const data = await jsonPostResponse.json();
  console.log(data);
} else {
  console.error('Fehler beim Senden der Daten:', jsonPostResponse.statusText);
}

// ----------------------------------------------------------------------

// Inhaltstyp Formulardaten
const formData = new FormData();
formData.append('key', 'value');

const formPostResponse = await fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    // Nicht zwingend notwendig, da FormData automatisch den richtigen Inhaltstyp setzt
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: formData // Daten als Formulardaten senden
});

// Überprüfen, ob die Anfrage erfolgreich war
if (formPostResponse.ok) {
  const data = await formPostResponse.json();
  console.log(data);
} else {
  console.error('Fehler beim Senden der Daten:', formPostResponse.statusText);
}

// ----------------------------------------------------------------------

// Inhaltstyp multipart/form-data
const multipartFormData = new FormData();
multipartFormData.append('file', fileInput.files[0]); // Datei hinzufügen
const multipartPostResponse = await fetch('https://api.example.com/upload', {
  method: 'POST',
  headers: {
    // Nicht zwingend notwendig, da FormData automatisch den richtigen Inhaltstyp setzt
    'Content-Type': 'multipart/form-data'
  },
  body: multipartFormData // Daten als multipart/form-data senden
});

// Überprüfen, ob die Anfrage erfolgreich war
if (multipartPostResponse.ok) {
  const data = await multipartPostResponse.json();
  console.log(data);
} else {
  console.error('Fehler beim Senden der Daten:', multipartPostResponse.statusText);
}

// ----------------------------------------------------------------------

// DELETE-Anfrage
// -------------
const deleteResponse = await fetch('https://api.example.com/data/1', {
  method: 'DELETE'
});

// Überprüfen, ob die Anfrage erfolgreich war
if (deleteResponse.ok) {
  const data = await deleteResponse.json();
  console.log(data);
} else {
  console.error('Fehler beim Löschen der Daten:', deleteResponse.statusText);
}
```

---
transition: slide-left
---

# Vue.js und ASP.NET Core Struktur

<div class="flex flex-row justify-center">
  <a href="/images/vuejs-aspnetcore-fullstack-structure.svg" class="w-80%" target="_blank">
  <div class="bg-contain bg-no-repeat w-full h-440px flex items-center justify-center" style="background-image: url('/images/vuejs-aspnetcore-fullstack-structure.svg');">
  </div>
  </a>
</div>

---
transition: slide-left
---

# Fullstack-Demo

In dieser Demo werden wir eine einfache Fullstack-Anwendung erstellen, die Vue.js für das Frontend und ASP.NET Core für das Backend verwendet. Es handelt sich um eine primitive Fotogalerie, in der Bilder hochgeladen und angezeigt werden können.

Sie finden den Source-Code auf GitHub: <https://github.com/teaching-abbts/smart-home-system>

---
transition: slide-left
---

# Hausaufgabe

Wir sind nun an einem wichtigen Punkt angekommen: heute haben wir die Grundlagen für eine Fullstack-Anwendung mit Vue.js und ASP.NET Core gelegt.

Ihre Aufgabe auf nächste Woche besteht darin, den Source-Code der Demo zu studieren und die Funktionsweise der Anwendung zu verstehen:

- Studieren sie den **Code der Demo** *aufmerksam* und *gründlich* - versuchen Sie, die Funktionsweise der Anwendung zu verstehen.
- Machen sie sich detailliert **Notizen** zu den Dingen, die Ihnen *unklar* sind: wir werden diese in der nächsten Woche im Detail besprechen.
- Ich erwarte, **dass sie vorbereitet sind**, Fragen zu stellen und die Funktionsweise der Anwendung zu diskutieren.

---
transition: slide-left
---

# Ende der heutigen Veranstaltung

<div class="text-center mt-9">

Vielen herzlichen Dank für eure **Aufmerksamkeit** und **Mitarbeit** 💝!

Kommt alle gut nach Hause, viel Erfolg bei den Hausaufgaben und eine gute, lehrreiche Woche👌

👋 bis nächsten Freitag!

</div>
