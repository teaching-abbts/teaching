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

# **Lösungsvorschlag**: Todo-App mit Vue.js

<<< ./public/assets/chapter-4-vue.js-todo-app-solution.html html {monaco} { lineNumbers: 'on', height: '450px' }

---

# <devicon-typescript/> TypeScript (1)

<v-clicks :depth="1">

- TypeScript ist eine von Microsoft entwickelte **Programmiersprache**, die auf **JavaScript** basiert
- Es erweitert JavaScript um **statische Typisierung**, **Klassen** und **Interfaces**
- TypeScript wird in JavaScript *transpiliert*, sodass es **in jedem JavaScript-Umfeld** (Webbrowser, Node.js, Deno) *ausgeführt* werden kann
  - *Kompilierung*: Quellcode wird in eine andere Ebene übersetzt, meist in Maschinencode oder Bytecode, damit er direkt ausgeführt werden kann.
    - Beispiel: C# → IL/.NET Assemblies, C/C++ → Maschinencode
  - *Transpilierung*: Quellcode wird in anderen Quellcode derselben Ebene übersetzt (meist Sprache zu Sprache).
    - Beispiel: TypeScript → JavaScript, modernes JavaScript → älteres JavaScript
- Es bietet eine *verbesserte Entwicklererfahrung* und mehr *Sicherheiten* durch **Typüberprüfung**
- TypeScript ist besonders **nützlich** für *mittlere und größere Projekte*, da es die **Wartbarkeit** und **Lesbarkeit** des Codes stark verbessern kann *(Clean Code, Refactoring, Autovervollständigung, etc.)*

</v-clicks>

---

# <devicon-typescript/> TypeScript (2)

<v-click>

Es gibt drei Haupt-Primitivtypen in JavaScript und TypeScript:

</v-click>

<v-clicks>

- **boolean** – Wahrheitswerte: `true` oder `false`
- **number** – Ganzzahlen und Fließkommazahlen
- **string** – Textwerte wie `"TypeScript Rocks"`

</v-clicks>

<v-click>

Es gibt außerdem zwei weniger gebräuchliche Primitivtypen, die in neueren Versionen von JavaScript und TypeScript verwendet werden:

</v-click>

<v-clicks>

- **bigint** – Ganzzahlen (auch sehr große), die größere negative und positive Werte als der Typ `number` erlauben
- **symbol** – Wird verwendet, um eine global eindeutige Kennung zu erstellen

</v-clicks>

---

# <devicon-typescript/> TypeScript (3)

TypeScript unterscheidet zwischen zwei Arten von Typisierungen:

```ts {monaco} { readonly: true, lineNumbers: 'on' }
// Explizite Typisierung
let name: string = "Housi Hinderembärg"; // Der Typ ist explizit als string deklariert
let age: number = 41; // Der Typ ist explizit als number deklariert
let isActive: boolean = true; // Der Typ ist explizit als boolean deklariert

// Implizite Typisierung
let city = "Buchs"; // Der Typ wird implizit als string abgeleitet
let score = 95; // Der Typ wird implizit als number abgeleitet
let isOnline = false; // Der Typ wird implizit als boolean abgeleitet

// Verwendung
name = "Nur Housi"; // Gültig, da name ein string ist
name = 99; // Fehler zur Transpile-Zeit, da name ein string ist

age = 42; // Gültig, da age ein number ist
age = "fourtytwo"; // Fehler zur Transpile-Zeit, da age ein number ist

isActive = false; // Gültig, da isActive ein boolean ist
isActive = "false"; // Fehler zur Transpile-Zeit, da isActive ein boolean ist
```

---

# <devicon-typescript/> TypeScript (4)

```ts {monaco} { readonly: true, lineNumbers: 'on', height: '440px' }
// Array-Typen
let numbers: number[] = [1, 2, 3]; // Ein Array von Zahlen
let names: string[] = ["Alice", "Bob"]; // Ein Array von Strings
let mixed: (string | number)[] = ["Alice", 42]; // Ein Array mit gemischten Typen (sog. 'union types')
let matrix: number[][] = [[1, 2], [3, 4]]; // Ein Array von Arrays (2D-Array)

// Objekt-Typen
// Ein Objekt mit spezifischen Eigenschaften
let person: { name: string; age: number } = {
  name: "Housi Hinderembärg",
  age: 30
};

// Interfaces
interface User { name: string; age: number; isActive: boolean; }

// Ein Objekt, das dem Interface 'User' entspricht
let user: User = {
  name: "Housi Hinderembärg",
  age: 30,
  isActive: true
};

// Eine Funktion, die ein User-Objekt als Parameter erwartet und einen String zurückgibt
function greet(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

// Eine weitere Funktion, die eine implizit typisierte Rückgabe hat
function anotherGreet(user: User) {
  return `Welcome, ${user.name}! Your account is ${user.isActive ? "active" : "inactive"}.`;
}

// Aufruf der Funktion mit dem User-Objekt
let greeting = greet(user);

// Aufruf der weiteren Funktion mit dem User-Objekt, die Rückgabe wird explizit als User-Objekt erwartet.
let anotherGreeting: User = anotherGreet(user);
```

---

# <devicon-typescript/> TypeScript (5)

```ts {monaco} { readonly: true, lineNumbers: 'on' }
// Generische Typen
// Eine generische Funktion, die den Typ T verwendet
function identity<T>(arg: T): T {
  return arg;
}

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
let content: string = mixedBox.getContent(); // Inhalt der Box wird als string abgeleitet
```

---

# <devicon-vuejs/> Vue SPA mit Vite-Bundler <devicon-vitejs/>

<v-clicks :depth="2">

- <devicon-javascript/> Bisher haben wir Vue.js in einer klassischen HTML-Seite verwendet *(Global Build)*
  - Dieser Ansatz ist für *kleine Projekte* oder *Erweiterungen in bestehenden Anwendungen* geeignet, aber für größere Anwendungen wird eine **modularere Struktur**, **Typensicherheit** und **weitere Features** *(Router, State Management, etc.)* benötigt
  - Mit **Bundling** erhalten wir eine *viel bessere Entwicklererfahrung* und *mehr Funktionalitäten*
- <devicon-vitejs/> Mit [Vite](https://vite.dev/) können wir die volle Power von [Vue.js](https://vuejs.org/) nutzen, was die Entwicklung enorm erleichtert
  - <devicon-typescript/> [TypeScript](https://www.typescriptlang.org/) als Skriptsprache
  - <vscode-icons-folder-type-component/> *Aufteilung* der Anwendung in **Komponenten**, sog. <devicon-vuejs/> *Single-File Components (SFCs)*
  - <material-icon-theme-folder-routes/> [Vue Router](https://router.vuejs.org/) für die (Clientseitige) **Navigation**
  - <logos-pinia/> Nutzung von [Pinia](https://pinia.vuejs.org/) für globales **State Management**
  - <vscode-icons-file-type-rolldown/> Das integrierte *Build-Tool* transpiliert **TypeScript**, **Vue-Dateien** sowie **Styles** und weitere **Assets** *(Fonts, Bilder, etc.)* in *optimiertes JavaScript, CSS und HTML* für die **Produktion**
  - <emojione-v1-hot-pepper/> *Hot Module Replacement (HMR)* für eine **verbesserte Entwicklererfahrung**
  - <vscode-icons-folder-type-plugin/> *Einfach und vielfältig zu konfigurieren* und bietet eine Vielzahl von **Plugins** für die Integration mit anderen Tools/Frameworks

</v-clicks>

<style>
  li {
    --uno: text-base;
  }
</style>

---
layout: two-cols-header
---

# <devicon-vitejs/> **Vite.js**: Funktionsweise eines Bundlers

<div class="flex flex-row justify-center">
  <a href="/images/vuejs-app-struktur.drawio.html" class="w-80%" target="_blank">
  <div class="bg-cover w-full h-440px flex items-center justify-center" style="background-image: url('/images/vuejs-app-struktur.png');">
  </div>
  </a>
</div>

---
layout: two-cols-header
---

# <devicon-vuejs/> Vue.js: Single File Components (SFCs)

Vue.js bietet die Möglichkeit, Komponenten in sogenannten **Single File Components (SFCs)** zu organisieren. Diese Dateien haben die Endung `.vue` und enthalten *HTML*, *CSS* und *JavaScript (oder TypeScript)* in einer **einzigen Datei**.

<!-- ::left:: -->

<<< ./components/SfcExample.vue vue {monaco} { lineNumbers: 'on', height: '250px', readonly: true }

<!-- ::right:: -->

<SfcExample />

---
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

# **Aufgabe**: Neues Vue.js Projekt

**Node.js** ist eine JavaScript-Laufzeitumgebung, die es ermöglicht, JavaScript ausserhalb des Browsers auszuführen. Sie wird häufig für die Entwicklung von Serveranwendungen und Tools verwendet.

1. Installieren sie *Node.js 24 (LTS)* auf ihrem Rechner: <https://nodejs.org/en/download>
2. Erstellen Sie ein neues Verzeichnis für Ihr Projekt und öffnen sie es in Ihrem Terminal oder Ihrer Kommandozeile.
3. Führen Sie den folgenden Befehl aus, um ein neues Vue.js-Projekt zu erstellen: `npm init vue@latest`
4. Folgen Sie den Anweisungen im Terminal, um das Projekt zu konfigurieren:
   1. Wählen des Projektnamens (z.B. `my-vue-app`)
   2. Use TypeScript? → **Yes**
   3. Features: Router, Pinia, Linter / Prettier *(mit Pfeiltaten navigieren und Leertaste auswählen)*
   4. Lassen sie die Experimental Features deaktiviert.
   5. Skip all example code: → **No**
5. Folgen Sie den Anweisungen, um das Projekt zu installieren und zu starten: `cd my-vue-app && npm install && npm run dev`
6. Klicken Sie auf den Link, der im Terminal angezeigt wird, um die Anwendung in Ihrem Browser zu öffnen.
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
│   ├── HomeView.vue
│   └── AboutView.vue
├── router/
│   └── index.ts
├── App.vue
└── main.ts
```

::right::

<v-clicks :depth="2">

- **assets/**: Enthält statische Ressourcen wie Bilder, Schriftarten und Stylesheets.
- **components/**: Enthält wiederverwendbare Vue-Komponenten, die in verschiedenen Teilen der Anwendung (wieder)verwendet werden können.
- **views/**: Enthält die Hauptansichten der Anwendung, die in der Regel den Routen zugeordnet sind.
- **router/**: Enthält die Konfigurationsdateien für den Vue Router, der die Navigation zwischen den Ansichten ermöglicht.
- **App.vue**: Die Hauptkomponente der Anwendung, die als Einstiegspunkt dient.
- **main.ts**: Die Hauptdatei, die die Vue-Anwendung initialisiert und den Router sowie andere Plugins konfiguriert.
- Diese Struktur kann je nach Projektanforderungen völlig frei angepasst werden, aber sie bietet eine solide Grundlage für die Organisation von Vue.js-Anwendungen und ist daher empfehlenswert, insbesondere für Anfänger.

</v-clicks>

<style>
  ul {
    --uno: ml-2;
  }
  li {
    --uno: text-sm;
  }
</style>

---

# <devicon-javascript/> Async/Await in JavaScript

Async/Await ist eine moderne Syntax in JavaScript, die es ermöglicht, asynchrone Operationen einfacher und lesbarer zu gestalten. Es baut auf [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) auf und ermöglicht es, asynchrone Codeblöcke wie synchronen Code zu schreiben.

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

# Vue.js und ASP.NET Core Struktur

<div class="flex flex-row justify-center">
  <a href="/images/vuejs-aspnetcore-fullstack-structure.svg" class="w-80%" target="_blank">
  <div class="bg-contain bg-no-repeat w-full h-440px flex items-center justify-center" style="background-image: url('/images/vuejs-aspnetcore-fullstack-structure.svg');">
  </div>
  </a>
</div>

---

# Fullstack-Demo

- Simple Fullstack-Demo-Anwendung mit Vue.js und ASP.NET Core: **TODO**
- Vollständige Demo-Anwendung für das Smart-Home-Firefighter-Dashboard:
<https://github.com/teaching-abbts/AbbTs.Examples.HomeAutomation.Firefighter>

---

# Hausaufgabe

Wir sind nun an einem wichtigen Punkt angekommen: heute haben wir die Grundlagen für eine Fullstack-Anwendung mit Vue.js und ASP.NET Core gelegt.

Da nun die Sommerferien vor der Tür stehen, möchte ich, dass sie die Zeit nutzen, um sich

1. **C# und ASP.NET Core** zu lernen und zu verstehen
   - <https://www.w3schools.com/cs/index.php>
   - <https://dotnet.microsoft.com/en-us/learn/back-end-web-dev>
2. **intensiv mit dem Code der Demo** auseinanderzusetzen
   - Studieren sie den **Code der Demo** *aufmerksam* und *gründlich* - versuchen Sie, die Funktionsweise der Anwendung zu verstehen.
   - Machen sie sich detailliert **Notizen** zu den Dingen, die Ihnen *unklar* sind: wir werden diese beim nächsten Treffen im Detail besprechen.
   - Ich erwarte, **dass sie vorbereitet sind**, Fragen zu stellen und die Funktionsweise der Anwendung zu diskutieren.

- Frontend UI Library: <https://vuetifyjs.com/>

---

# Ende der heutigen Veranstaltung

<div class="text-center mt-9">

Vielen herzlichen Dank für eure **Aufmerksamkeit** und **Mitarbeit** 💝!

Kommt alle gut nach Hause, viel Erfolg bei den Hausaufgaben, geniesst die vorlesungsfreie Zeit👌

👋 bis zum nächsten Mal!

</div>
