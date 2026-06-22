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

```kotlin {monaco} { lineNumbers: 'on', height: '400px' }
package ch.abbts.routes

import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.server.routing.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.application.*
import io.ktor.utils.io.toByteArray
import java.io.*
import java.nio.file.*

fun Application.mapImageGallery() {
    routing {
        val imageGalleryUrl = "/image-gallery"
        val imageUploadFormUrl = "$imageGalleryUrl/upload"
        val deleteImageUrlBase = "$imageGalleryUrl/delete"

        fun renderImages(): String {
            val directory = File(IMAGE_UPLOAD_DIRECTORY)
            val images = directory.listFiles()
                ?.filter { it.isFile and (it.name.endsWith(".jpg") or it.name.endsWith(".png")) }
                ?: emptyList()

            var response = ""
            for ((index, image) in images.withIndex()) {
                response +=
                    """
                    <div style="background-image: url(/image/${image.name});" class="image">
                        <a href="$deleteImageUrlBase/${image.name}">Löschen</a>
                    </div>
                    """

                if ((index + 1) % 3 == 0) {
                    response += "<br />"
                }
            }

            return response
        }

        get("/image/{imageName}") {
            val imageName = call.parameters["imageName"]
            call.respondFile(File("$IMAGE_UPLOAD_DIRECTORY/$imageName"))
        }

        get(imageGalleryUrl) {
            call.respondText(
                """
                <!doctype html>
                <html>
                    <header>
                        <title>Image Gallery</title>
                        <style>
                            .image {
                                margin: 0;
                                padding: 0;
                                background-size: cover;
                                display: inline-block;
                                height: 300px;
                                width: 300px;
                            }
                        </style>
                    </header>
                    <body>
                        <h1>Fotoalbum 📸</h1>
                        <p>
                            <a href="$imageUploadFormUrl">Upload</a>
                        </p>
                        ${renderImages()}
                    </body>
                </html>
                """,
                ContentType.Text.Html,
                HttpStatusCode.OK
            )
        }

        get(imageUploadFormUrl) {
            val title = "Image Uplaod"
            val acceptMimeTypes = "image/png, image/jpeg"

            call.respondText(
                """
                <!doctype html>
                <html>
                    <header>
                        <title>$title</title>
                    </header>
                    <body>
                        <h2>$title</h2>
                        <p>
                            <a href="$imageGalleryUrl">Zurück zur Gallerie</a>
                        </p>
                        <form action="$imageUploadFormUrl" method="post" enctype="multipart/form-data">
                        <label for="file">File:</label><br />
                        <input
                            type="file"
                            id="file"
                            name="file"
                            accept="$acceptMimeTypes"
                            multiple
                        /><br />
                        <input type="submit" value="Submit" />
                        </form>
                    </body>
                </html>
                """,
                ContentType.Text.Html,
                HttpStatusCode.OK
            )
        }

        post(imageUploadFormUrl) {
            // transmit data via POST
            // Content-Type: multipart/form-data
            val multipartData = call.receiveMultipart()

            multipartData.forEachPart { part ->
                when (part) {
                    is PartData.FileItem -> {
                        val fileName = part.originalFileName as String
                        val fileBytes = part.provider().toByteArray()
                        val file = File("$IMAGE_UPLOAD_DIRECTORY/$fileName")
                        // Ensure the parent directory exists
                        Files.createDirectories(file.toPath().parent)
                        Files.write(file.toPath(), fileBytes, StandardOpenOption.CREATE)
                    }
                    else -> {}
                }
                part.dispose()
            }

            call.respondRedirect(imageGalleryUrl, permanent = false)
        }

        get("$deleteImageUrlBase/{imageName}") {
            val imageName = call.parameters["imageName"]
            val file = File("$IMAGE_UPLOAD_DIRECTORY/$imageName")

            file.delete()

            call.respondRedirect(imageGalleryUrl, permanent = false)
        }
    }
}
```

➡️ <https://github.com/teaching-abbts/smart-home-system/tree/dat-3/image-gallery-solution>


---
layout: two-cols-header
---

# Was ist eine Single-Page-Webanwendung (SPA)?

::left::

<v-clicks :depth="2">

- Als **Single-Page-Webanwendung** (englisch single-page application, kurz SPA) oder Einzelseiten-Webanwendung wird eine **Webanwendung** bezeichnet, die aus **einem einzigen HTML-Dokument** besteht und deren **Inhalte dynamisch nachgeladen** werden.
- Der **Sitzungszustand** wird in der **Client-Applikation gespeichert**, *nicht im Server*.
- Der Webclient ist eine unabhängige Einheit und lädt benötigte Daten bei Bedarf nach.
- SPAs sind von ihrer Funktionsweise her mit «nativen Apps» vergleichbar, welche die Verarbeitung der Daten und deren Darstellung vor Ort auf dem Client (Webbrowser) vollziehen.
- SPAs sind eine Vorstufe zu Progressive Web-Apps (PWAs), welche die allermeisten «Lücken» im Vergleich zu nativen Desktop Applikationen *(Dateizugriff, Offlinefähigkeit, Interaktion mit anderen Anwendungen auf dem PC)* schliessen

</v-clicks>

::right::

![SPA-Swimlanes](./public/slides-images/SPA-Swimlanes.png)

<style>
 li {
   --uno: text-sm;
 }
</style>


---
layout: two-cols-header
---

# SPA vs. Native App

::left::

### SPA

<v-clicks depth="2">

- **Zugriff**
  - Keine Installation notwendig – App kann von überall her via HTTP bezogen werden – vollständige Kontrolle
  - Keine Abhängigkeit von (moderierten/kostenpflichtigen) App-Stores
- **Plattformunabhängigkeit**
  - Läuft in jedem modernen Webbrowser
  - Keine (direkte) Abhängigkeit von Betriebssystemen (Windows, macOS, Linux, Android, iOS) und Hardware (PC, Smartphone, Tablet)
- **Performance**
  - Sehr leichtgewichtig (oft nur wenige KB)
  - Kann im direkten Vergleich zu (optimierten) nativen Apps in manchen Fällen langsamer sein (z.B. Games, extrem viele Daten auf Einmal laden)
  - *Aber*: mit modernen Frameworks wie Vue.js sind SPAs sehr performant und es gibt native Schnittstellen (WebAssembly, WebGL, WebGPU) für Performance-intensive Anwendungen
  - In modernen Webbrowsern ist i.d.R. die Leistung für fast alle Anwendungsfälle mehr als ausreichend
- **Kosten**
  - Die Entwicklung von Web-Apps ist, über den ganzen Lebenszyklus betrachtet, in den meisten Fällen kostengünstiger als native Apps
  - Keine Kosten für App-Store-Gebühren
  - Geringere Kosten für Hosting und Betrieb
- **[PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)**
  - Schliesst die meisten relevanten Lücken zu nativen Apps
  - Offline-Funktionalität, Push-Benachrichtigungen, Hintergrundaktualisierungen, uvm.

</v-clicks>

::right::
### Native App
<v-clicks depth="2">

- Spezifische Installationsroutinen für jedes System
- Muss i.d.R. für eine spezifische Platform kompilliert werden
- Kann nativ kompilliert werden – höchste Performance
- Kann ein hohes Sicherheitsrisiko darstellen, da i.d.R. viele Rechte und nativer Zugriff auf das System
- Muss oft via proprietären Store (Apple App Store / Google Play / Microsoft Store, etc.) bezogen werden – ggf. kostenpflichtiges Abo für Entwickler, etc.
- **IMHO des Dozenten**: Viele native Apps sind gerade bei "simplen" Dingen Fehleranfällig (z.B. Abspielfunktion für Musik/Videos streikt, Nachladen geht nicht, App stürzt ab/reagiert nicht, etc.) - dies liegt vermutlich (auch) daran, dass viele dieser "Bausteine" nicht so so stabil und "ausgereift" sind wie die entsprechenden Web-APIs, die in modernen Webbrowsern zur Verfügung stehen und von millarden von Nutzern getestet wurden.

</v-clicks>

<style>
  li {
    --uno: text-xs;
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
  - Vue.js kann z.B. vergleichsweise leich in bestehende HTML-Seiten integriert werden, um interaktive Komponenten zu erstellen (ähnlich wie [jQuery](https://jquery.com/)).
  - Erweiterungen und Plugins können nach belieben hinzugefügt werden, um die Funktionalität zu erweitern (z.B. Vue Router für Client-Side-Routing, Pinia für State-Management).

</v-clicks>


---
layout: two-cols-header
---

# Vue.js - Global Build

**ALLES ist HTML/CSS/JavaScript!**

::left::

<<< ./public/assets/day-4-vue.js-global-build.html html {monaco} { lineNumbers: 'on', height: '400px' }

::right::

<iframe src="/assets/day-4-vue.js-global-build.html" style="zoom: 2;" width="100%" height="400px" frameborder="0"></iframe>


---

# Vue.js - Reaktivität

<div></div>

<v-click>

![MVVM-Entwurfsmuster](./public/slides-images/MVVMPattern.png)

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

<<< ./components/ConditionsAndLoops.vue html {monaco} { lineNumbers: 'on', height: '200px' }

::left::

- `v-if`, `v-else-if`, `v-else`: Bedingte Anzeige von Elementen
- `v-for`: Iteration über Arrays oder Objekte
- `@keyup.enter`: Event-Handler loslassen der Entertaste
- `:property`: Bindung von Attributen an reaktive Daten

::right::

<div class="w-full h-full flex justify-center">
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
layout: two-cols-header
---

# Vue.js - Class und Style Bindings

::left::

```html {monaco}
<!-- Object binding -->
<div :class="{ active: isActive }"></div>
<!-- Rendering wenn 'isActive' truthy -->
<div class="active"></div>

<!-- Object binding mit statischer Eigenschaft -->
 <div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
<!-- Mögliches Rendering -->
<div class="static active text-danger"></div>

<!-- Array binding -->
<div :class="[activeClass, errorClass]"></div>
<!-- Mögliches Rendering -->
<div class="active text-danger"></div>

<!-- Setzen via (computed) reactive -->
<div :class="computedClass"></div>
<!-- Mögliches Rendering -->
<div class="active text-danger"></div>
```

::right::

```js {monaco}
import { ref, computed } from 'vue'

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
```


---

# **Arbeitsauftrag**: Todo-App mit Vue.js

<div></div>

- Wir erstellen nun erneut die Todo-App vom Tag 2 - diesmal jedoch mit Vue.js
- Nutzen sie die Vue.js Konzepte, die Sie in den letzten Slides gesehen haben
- Nehmen sie folgenden Quellcode, welcher bereits den **Vue.js Global-Build** enthält, als Basis

<<< ./public/assets/day-4-vue.js-todo-app.html html {monaco} { lineNumbers: 'on', height: '300px' }


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

