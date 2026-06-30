---
title: ABB-TS - NDS - Web Engineering
transition: slide-left
hide: false
routerMode: hash
fonts:
  # basically the text
  sans: Robot
  # use with font-serif css class from UnoCSS
  serif: Robot Slab
  # for code blocks, inline code, etc.
  mono: Fira Code
background: "/images/ABB-TS-neutral.png"
layout: cover
theme: dracula
---

# **NDS - Web Engineering**

## Single Page Applications mit Vue.js

<style>
  h1 {
    --uno: shadow-filter;
  }
</style>

---

# Programm

<v-clicks :depth="2">

1. Besprechung Hausaufgaben & Lösungen
2. Single Page Applications (SPAs)
3. Einführung in das SPA-Framework Vue.js
4. Einfache TODO-App mit Vue.js

</v-clicks>

---

# **Lösungsvorschlag**: Einfache Bildergalerie

```csharp {monaco} { lineNumbers: 'on', height: '400px' }
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles();

app.MapGet(
  "/image-gallery",
  () =>
  {
    var webRootPath =
      app.Environment.WebRootPath ?? Path.Combine(app.Environment.ContentRootPath, "wwwroot");
    var uploadsFolder = Path.Combine(webRootPath, "uploads");
    Directory.CreateDirectory(uploadsFolder);

    var imageFiles = Directory
      .GetFiles(uploadsFolder)
      .Select(Path.GetFileName)
      .Where(f => f is not null)
      .Cast<string>()
      .ToList();

    var imageItems = string.Join("\n", imageFiles.Select(GalleryItem));
    var emptyMessage = imageFiles.Count == 0 ? "<p>Keine Bilder vorhanden.</p>" : string.Empty;

    return HtmlPage(
      "Bildgalerie",
      GalleryStyles(),
      $"""
      <h2>Bildgalerie</h2>
      <div class="toolbar">
        <a class="btn" href="/image-gallery/upload">Bilder hochladen</a>
      </div>
      {emptyMessage}
      <div class="gallery">
      {imageItems}
      </div>
      """
    );
  }
);

app.MapGet(
  "/image-gallery/upload",
  () =>
    HtmlPage(
      "Bilder hochladen",
      GalleryStyles(),
      """
      <h2>Bilder hochladen</h2>
      <form action="/image-gallery/upload" method="post" enctype="multipart/form-data">
        <label for="files">Bilder auswählen:</label>
        <input type="file" id="files" name="files" accept="image/*" multiple required />
        <input type="submit" value="Hochladen" />
      </form>
      <a class="back" href="/image-gallery">← Zurück zur Galerie</a>
      """
    )
);

app.MapPost(
  "/image-gallery/upload",
  async (HttpRequest request) =>
  {
    if (!request.HasFormContentType)
    {
      return Results.BadRequest("Multipart-Formulardaten erwartet.");
    }

    var form = await request.ReadFormAsync();

    if (form.Files.Count == 0)
    {
      return Results.BadRequest("Keine Dateien übermittelt.");
    }

    var webRootPath =
      app.Environment.WebRootPath ?? Path.Combine(app.Environment.ContentRootPath, "wwwroot");
    var uploadsFolder = Path.Combine(webRootPath, "uploads");
    Directory.CreateDirectory(uploadsFolder);

    foreach (var file in form.Files)
    {
      if (file.Length == 0)
      {
        continue;
      }

      if (
        file.ContentType is null
        || !file.ContentType.StartsWith("image/", StringComparison.OrdinalIgnoreCase)
      )
      {
        return Results.BadRequest(
          $"'{System.Net.WebUtility.HtmlEncode(file.FileName)}' ist kein gültiges Bild."
        );
      }

      var extension = Path.GetExtension(file.FileName);
      var fileName = $"{Guid.NewGuid():N}{extension}";
      var filePath = Path.Combine(uploadsFolder, fileName);

      await using var stream = File.Create(filePath);
      await file.CopyToAsync(stream);
    }

    return Results.Redirect("/image-gallery");
  }
);

app.MapPost(
  "/image-gallery/delete/{fileName}",
  (string fileName) =>
  {
    var safeFileName = Path.GetFileName(fileName);

    if (string.IsNullOrWhiteSpace(safeFileName))
    {
      return Results.BadRequest("Ungültiger Dateiname.");
    }

    var webRootPath =
      app.Environment.WebRootPath ?? Path.Combine(app.Environment.ContentRootPath, "wwwroot");
    var filePath = Path.Combine(webRootPath, "uploads", safeFileName);

    if (File.Exists(filePath))
    {
      File.Delete(filePath);
    }

    return Results.Redirect("/image-gallery");
  }
);

app.MapGet("/", () => Results.Redirect("/image-gallery"));

app.Run();

IResult HtmlPage(string title, string styles, string body)
{
  return Results.Content(
    $"""
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>{title}</title>
        <style>
          {styles}
        </style>
      </head>
      <body>
        {body}
      </body>
    </html>
    """,
    "text/html"
  );
}

string GalleryItem(string fileName)
{
  return $"""
    <div class="gallery-item">
      <img src="/uploads/{fileName}" alt="{System.Net.WebUtility.HtmlEncode(fileName)}" />
      <form method="post" action="/image-gallery/delete/{Uri.EscapeDataString(fileName)}">
        <button type="submit">Löschen</button>
      </form>
    </div>
    """;
}

string GalleryStyles()
{
  return """
    body {
      font-family: sans-serif;
      padding: 20px;
      background: #f5f5f5;
    }
    h2 {
      text-align: center;
    }
    .toolbar {
      text-align: center;
      margin-bottom: 20px;
    }
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
    }
    .gallery-item {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      overflow: hidden;
      width: calc(33% - 16px);
      min-width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 10px;
    }
    .gallery-item img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .gallery-item button {
      margin-top: 8px;
      padding: 4px 12px;
      cursor: pointer;
      background: #e53935;
      color: white;
      border: none;
      border-radius: 4px;
    }
    .gallery-item button:hover {
      background: #b71c1c;
    }
    a.btn {
      display: inline-block;
      padding: 8px 16px;
      background: #1976d2;
      color: white;
      text-decoration: none;
      border-radius: 4px;
    }
    a.btn:hover {
      background: #0d47a1;
    }
    """;
}
```

---
layout: two-cols-header
---

# **Lösungsvorschlag**: Diagramm

::left::

```mermaid { scale: 0.3 }
sequenceDiagram
    actor User
    participant Browser as 🌐 Browser (Client)
    participant Server as 🖥️ Server

    User->>Browser: Besucht /image-gallery
    Browser->>Server: GET /image-gallery
    Server->>Server: Liest uploads Ordner
    Server->>Server: Erstellt HTML mit Bildern
    Server-->>Browser: HTTP 200 + HTML
    Browser->>Browser: Rendert Seite
    Browser-->>User: Zeigt Bildgalerie

    User->>Browser: Klick auf "Bilder hochladen"
    Browser->>Server: GET /image-gallery/upload
    Server->>Server: Erstellt Upload-Formular HTML
    Server-->>Browser: HTTP 200 + Upload-Form
    Browser->>Browser: Rendert Upload-Seite
    Browser-->>User: Zeigt Upload-Form

    User->>Browser: Wählt Bilder + Submit
    Browser->>Server: POST /image-gallery/upload (multipart/form-data)
    Server->>Server: Speichert Bilder im uploads Ordner
    Server-->>Browser: HTTP 301 Redirect
    Browser->>Server: GET /image-gallery
    Server->>Server: Liest uploads Ordner (mit neuen Bildern)
    Server-->>Browser: HTTP 200 + aktualisierte HTML
    Browser-->>User: Zeigt Galerie mit neuen Bildern
```

::right::

1. Der **Browser** sendet eine Anfrage an den Server
1. Der **Server** liest die Bilder aus dem uploads-Ordner und generiert HTML
1. Der **Server** antwortet mit der Seite (HTTP 200) – **MultiPage-Anwendung**
1. Beim **Hochladen** sendet der Browser die Datei via POST request
1. Der **Server** speichert die Bilder und leitet zurück zur Galerie (HTTP 301 Redirect)
1. Die **Seite wird neu geladen** und zeigt die aktualisierten Bilder

---
layout: two-cols-header
---

# Was ist eine Single-Page-Webanwendung (SPA)?

::left::

- Als **Single-Page-Webanwendung** (englisch single-page application, kurz SPA) oder Einzelseiten-Webanwendung wird eine **Webanwendung** bezeichnet, die aus **einem einzigen HTML-Dokument** besteht und deren **Inhalte dynamisch nachgeladen** werden.
- Der **Sitzungszustand** wird in der **Client-Applikation gespeichert**, *nicht im Server*.
- Der Webclient ist eine unabhängige Einheit und lädt benötigte Daten bei Bedarf nach.
- SPAs sind von ihrer Funktionsweise her mit «nativen Apps» vergleichbar, welche die Verarbeitung der Daten und deren Darstellung vor Ort auf dem Client (Webbrowser) vollziehen.
- SPAs sind eine Vorstufe zu Progressive Web-Apps (PWAs), welche die allermeisten «Lücken» im Vergleich zu nativen Desktop Applikationen *(Dateizugriff, Offlinefähigkeit, Interaktion mit anderen Anwendungen auf dem PC)* schliessen

::right::

```mermaid { scale: 0.50 }
sequenceDiagram
  participant Client as 🌐 Web-Client
  participant WebServer as 🖥️ Web-Server
  participant DB as 🗄️ DB

  rect rgba(245, 241, 220, 0.25)
    Note over Client,WebServer: Anwendung laden
    Client->>WebServer: GET(index.html)<br />HTTP
    WebServer-->>Client: index.html
    Note over Client: Start-SPA<br />$(document).ready
  end

  rect rgba(245, 241, 220, 0.25)
    Note over Client,DB: Laufzeit
    loop Wiederholt bei Nutzerinteraktion, Timer oder Navigation
      Client->>WebServer: GET /id-1<br />(fetch, JSON)
      WebServer->>DB: doSomething()
      DB-->>WebServer: data
      WebServer-->>Client: data
      Client->>Client: DOM aktualisieren (data)
    end
  end
```

<style>
 li {
   --uno: text-sm;
 }
</style>

---
layout: two-cols-header
---

# *SPA* vs. *Native App*

::left::

### Single Page App *(SPA)*

<v-click at="1">

- **Zugriff** & **Distribution**
  - ✅ Keine Installation notwendig – App kann von überall her via HTTP bezogen werden – vollständige Kontrolle
  - ✅ Keine Abhängigkeit von (moderierten/kostenpflichtigen) App-Stores

</v-click>

<v-click at="3">

- **Plattformunabhängigkeit**
  - ✅ Läuft in jedem modernen Webbrowser
  - ✅ Keine (direkte) Abhängigkeit von Betriebssystemen (Windows, macOS, Linux, Android, iOS) und Hardware (PC, Smartphone, Tablet)

</v-click>

<v-click at="5">

- **Performance**
  - ✅ Sehr leichtgewichtig (oft nur wenige KB)
  - ⚠️ Kann im direkten Vergleich zu (optimierten) nativen Apps in manchen Fällen langsamer sein (z.B. Games, extrem viele Daten auf Einmal laden)
  - ✅ *Aber*: mit modernen Frameworks wie Vue.js sind SPAs sehr performant und es gibt native Schnittstellen (WebAssembly, WebGL, WebGPU) für Performance-intensive Anwendungen
  - ➖ In modernen Webbrowsern ist i.d.R. die Leistung für fast alle Anwendungsfälle mehr als ausreichend

</v-click>

<v-click at="7">

- **Kosten**
  - ✅ Die Entwicklung von Web-Apps ist, über den ganzen Lebenszyklus betrachtet, in den meisten Fällen kostengünstiger als native Apps
  - ✅ Keine Kosten für App-Store-Gebühren
  - ✅ Geringere Kosten für Hosting und Betrieb

</v-click>

<v-click at="9">

- **[PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)**
  - ✅ Schliesst die meisten relevanten Lücken zu nativen Apps
  - ✅ Offline-Funktionalität, Push-Benachrichtigungen, Hintergrundaktualisierungen, uvm.

</v-click>

::right::

### Native App

<v-click at="2">

- **Zugriff** & **Distribution**
  - ⚠️ Spezifische Installationsroutinen für jedes System
  - ⚠️ Muss oft via proprietären Store (Apple App Store / Google Play / Microsoft Store, etc.) bezogen werden – ggf. kostenpflichtiges Abo für Entwickler, etc.

</v-click>

<v-click at="4">

- **Plattformabhängigkeit**
  - ⚠️ Muss i.d.R. für eine spezifische Platform kompilliert werden

</v-click>

<v-click at="6">

- **Performance**
  - ✅ Kann nativ kompilliert werden – höchste Performance

</v-click>

<v-click at="8">

- **Kosten**
  - ⚠️ Separate Implementierungen pro Plattform erhöhen Entwicklungsaufwand und Time-to-Market
  - ⚠️ Mehr Testaufwand, Release-Prozesse und Wartung über mehrere Plattform-Versionen hinweg
  - ⚠️ App-Store-Gebühren, Provisionen und Freigabeprozesse können laufende Kosten erhöhen
  - ➖ Bei hoher Performance- oder Hardware-Integration kann sich der Mehraufwand wirtschaftlich lohnen

</v-click>

<v-click at="10">

- **Sicherheit**
  - ⚠️ Kann ein hohes Sicherheitsrisiko darstellen, da i.d.R. viele Rechte und nativer Zugriff auf das System

</v-click>

<v-click at="11">

- **Praxiserfahrung *(IMHO des Dozenten)***
  - ➖ Viele native Apps sind gerade bei "simplen" Dingen Fehleranfällig (z.B. Abspielfunktion für Musik/Videos streikt, Nachladen geht nicht, App stürzt ab/reagiert nicht, etc.) - dies liegt vermutlich (auch) daran, dass viele dieser "Bausteine" nicht so so stabil und "ausgereift" sind wie die entsprechenden Web-APIs, die in modernen Webbrowsern zur Verfügung stehen und von millarden von Nutzern getestet wurden.

</v-click>

<style>
  li {
    font-size: 0.59rem;
  }
</style>

---

# <devicon-vuejs /> Vue.js

<v-clicks :depth="2">

- [Vue.js](https://vuejs.org/) (französisch für "Ansicht" (View), wird englisch ausgesprochen [vjuː]) ist ein *clientseitiges* **JavaScript-Webframework** zum Erstellen von **Single-Page-Webanwendungen**
- Vue.js ist **freie Software** *(MIT)* und wird von einer *Open-Source-Community entwickelt*.
- Gilt als *leicht erlernbar* im Vergleich zu anderen Frameworks (z.B. Angular, React).
- Seit Jahren eines der *verbreitetsten und beliebtesten* **JavaScript-Frameworks** weltweit und hat **Millionen von Benutzern**
- Vue.js bietet ein reichhaltiges Ökosystem, das von *Build Toolchain* über *Test-Utils*, *IDE-Unterstützung*, *State-Management* und *Client-Side-Routing*, *Server-Side-Rendering* bis hin zu *umfangreichen Debugging-Tools* reicht.
- Vue.js ist sogenannt *progressiv* und kann in bestehenden Projekten schrittweise eingeführt werden:
  - Vue.js kann z.B. vergleichsweise leicht in bestehende HTML-Seiten integriert werden, um interaktive Komponenten zu erstellen (ähnlich wie [jQuery](https://jquery.com/)).
  - Erweiterungen und Plugins können nach Belieben hinzugefügt werden, um die Funktionalität zu erweitern (z.B. Vue Router für Client-Side-Routing, Pinia für State-Management).

</v-clicks>

---
layout: two-cols-header
---

# Vue.js - Global Build

**ALLES ist HTML/CSS/JavaScript!**

::left::

<<< ./public/assets/chapter-4-vue.js-global-build.html html {monaco} { readonly: true, lineNumbers: 'on', height: '400px' }

::right::

<iframe src="/assets/chapter-4-vue.js-global-build.html" style="zoom: 2;" width="100%" height="200px" frameborder="0"></iframe>

---

# Vue.js - Reaktivität

<v-click>

![MVVM-Entwurfsmuster](./public/images/MVVMPattern.png)

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

---
layout: two-cols-header
---

# Vue.js - Grundlegende Konzepte 1

::left::

<<< ./components/DataBinding.vue html {monaco} { lineNumbers: 'on', height: '400px' }

::right::

- `v-model`: bidirektionale Datenbindung *(Vue.js implementiert dies für praktisch alle Typen von Eingabefeldern)*
- `ref()`: reaktive Referenz *(lesen und schreiben)*
- `computed()`: berechnete reaktive Referenz (lesend wie auch schreibend möglich)
- `{{ variable oder ausdruck }}`: Einweg-Datenbindung im Template
- `@click`: Event-Handler für Klick-Ereignisse

<div class="w-full h-full ml-3">
  <DataBinding />
</div>

<style>
  ul {
    --uno: ml-3;
  }
  li {
    --uno: text-sm;
  }
</style>

---
layout: two-cols-header
---

# Vue.js - Grundlegende Konzepte 2

- `v-if`, `v-else-if`, `v-else`: Bedingte Anzeige von Elementen
- `v-for`: Iteration über Arrays oder Objekte
- `@keyup.enter`: Event-Handler loslassen der Entertaste
- `:property`: Bindung von Attributen an reaktive Daten

::left::

<<< ./components/ConditionsAndLoops.vue html {monaco} { lineNumbers: 'on', height: '330px' }

::right::

<div class="w-full h-full flex justify-center h-40">
  <ConditionsAndLoops />
</div>

<style>
  ul {
    --uno: ml-3;
  }
  li {
    --uno: text-sm;
  }
</style>

---

# Vue.js - Class und Style Bindings

```html {monaco} { lineNumbers: 'on', height: '430px', readonly: true }
<template>
  <!-- Object binding -->
  <div :class="{ active: isActive }"></div>
  <!-- => Rendering wenn 'isActive' truthy -->
  <div class="active"></div>

  <!-- Object binding mit statischer Eigenschaft -->
  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"
  ></div>
  <!-- => Mögliches Rendering -->
  <div class="static active text-danger"></div>

  <!-- Array binding -->
  <div :class="[activeClass, errorClass]"></div>
  <!-- => Mögliches Rendering -->
  <div class="active text-danger"></div>

  <!-- Setzen via (computed) reactive -->
  <div :class="computedClass"></div>
  <!-- => Mögliches Rendering -->
  <div class="active text-danger"></div>
</template>

<script>
import { ref, computed } from 'Vue'

const isActive = ref(true)
const hasError = ref(false)
const activeClass = ref('active')
const errorClass = ref('text-danger')

const computedClass = computed(() => {
  return {
    active: isActive.value,
    'text-danger': hasError.value
  }
})
</script>
```

---
layout: two-cols-header
---

# **Arbeitsauftrag**: Todo-App mit Vue.js

- Wir erstellen nun erneut die Todo-App vom Kapitel 2 - diesmal jedoch mit Vue.js
- Nutzen sie die Vue.js Konzepte, die Sie in den letzten Slides gesehen haben
- Nehmen sie folgenden Quellcode, welcher bereits den **Vue.js Global-Build** enthält, als Basis für ihr `index.html`

::left::

<<< ./public/assets/chapter-4-vue.js-todo-app.html html {monaco} { lineNumbers: 'on', height: '300px' }

::right::
<iframe src="/assets/chapter-4-vue.js-todo-app.html" style="zoom: 2;" width="100%" height="150px" frameborder="0"></iframe>

---

# Hausaufgabe

1. Spielen sie auf nächste Woche das offizielle Vue.js Tutorial durch: <https://vuejs.org/tutorial>
   - *(alternativ)* Für motivierte Teilnehmer:innen: sie können auch das längere, aber ausführlichere W3CSchools Tutorial durchspielen: <https://www.w3schools.com/vue/index.php> *(machen sie, soweit sie kommen...)*
2. Beenden sie die heutige Aufgabe (**Todo-App** mit Vue.js), falls sie noch nicht fertig geworden sind

---

# Ende der heutigen Veranstaltung

<div class="text-center mt-9">

Vielen herzlichen Dank für eure **Aufmerksamkeit** und **Mitarbeit** 💝!

Kommt alle gut nach Hause, viel Erfolg bei den Hausaufgaben und eine gute, lehrreiche Woche👌

👋 bis nächsten Freitag!

</div>