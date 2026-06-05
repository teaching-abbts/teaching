---
title: ABB-TS - NDS - Web Engineering
transition: slide-left
hide: false
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

## Einführung & Grundlagen 1

<style>
  h1 {
    --uno: shadow-filter;
  }
</style>

---
layout: image-left
image: /images/Hannes.jpg
transition: slide-left
title: Steckbrief Dozent
---

## Steckbrief Dozent

| _Key_     | _Value_                                                                                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name      | **Hannes Morgenthaler**                                                                                                                                                       |
| Alter     | Über **41x** um die <fluent-emoji-sun /> gekreist...                                                                                                                          |
| Herkunft  | Aus dem Westen der CH (Fribourg), Erde <fluent-emoji-globe-showing-europe-africa /> _(angeblich)_                                                                             |
| Abschluss | BSc. Informatik FH                                                                                                                                                            |
| Job       | Lead Software Developer & Architekt, [INGTES AG](https://www.intes.ch)                                                                                                        |
| Erfahrung | <span class="text-xs">Webseiten & Frontend: 21 Jahre</span><br /><span class="text-xs">Fullstack Developer: 13 Jahre</span><br /><span class="text-xs">Dozent: 3 Jahre</span> |

---

# **Frage**: wie schätzt **DU** dein Vorwissen zu diesem Modul ein?

| Skala                                     | Beschreibung                                                    | Anzahl Stimmen |
| ----------------------------------------- | --------------------------------------------------------------- | -------------- |
| <fluent-emoji-nerd-face v-for="n in 1" /> | Webbrowser, was ist das..?                                      |                |
| <fluent-emoji-nerd-face v-for="n in 2" /> | Web-Power-User mit Addblockern und weiteren Extensions          |                |
| <fluent-emoji-nerd-face v-for="n in 3" /> | Hab schon mal was von HTML/CSS/JS gehört...                     |                |
| <fluent-emoji-nerd-face v-for="n in 4" /> | Habe schon selber HTML/CSS/JS geschrieben                       |                |
| <fluent-emoji-nerd-face v-for="n in 5" /> | Hab schon selber Webseiten und/oder Web-Apps erstellt/gestaltet |                |

---

# Welche Erwartungen hast **DU** an dieses Modul?

- Diese **Kompetenz / Fähigkeit** möchte ich gerne erlernen
- Dieses **Thema** oder diese **Technologie** interessiert mich

## Auftrag

1. Überlege dir **2 bis max. 3 Stichworte / Begriffe**
2. Tritt an die **Wandtafel** und **schreibe** diese auf
3. **Existiert** ein Stichwort schon, mach einen **Strich dahinter**

---

# Zielsetzungen des **Dozenten**

<v-click>

## Ich als Student **kenne die Grundlagen** von

</v-click>

<v-clicks>

- `HTML` / `CSS` / `JS`
- Interaktive **Webseiten** und **Web-Apps** mit **Dynamischem Inhalt**
- Wie **Kommunikation** und **Datenfluss** zwischen **Client** und **Server** funktioniert

</v-clicks>

<v-click>

## Ich als Student **kann selbständig**

</v-click>

<v-clicks>

- einen einfachen **Webhost** mit `C#` in `ASP.NET Core` programmieren
- eine einfache **Single-Page-App (SPA)** mit `Vue.js` programmieren
- ein **einfaches Design** gemäss einer **Vorlage** in `HTML` / `CSS` umsetzen

</v-clicks>

<style>
  ul {
    --uno: mb-5;
  }
</style>

---
layout: two-cols-header
---

# Geplantes Kursprogramm

> Reihenfolge und Inhalt von Themen wird möglichst den Bedürfnissen angepasst und kann daher ggf. leicht ändern.

::left::

<v-clicks depth="2">

- Grundlagen
   1. Das **World Wide Web (WWW)**
   2. `HTML` & `CSS`
   3. Funktionalität eines **Webbrowsers**
   4. **Document Object Model** (DOM)
   5. **JavaScript** & **TypeScript**
   6. erste **Dynamische Webseite** von <fluent-emoji-raised-hand />
   7. **HTTP(S)**, **Sessions** & **Cookies**
   8. Funktionalität eines **Webservers**

</v-clicks>

::right::

<v-clicks depth="2">

- **Frontend:** Single Page Applications mit `Vue.js` in `TypeScript`
- **Backend:** Webserver mit `ASP.NET Core` in `C#`
- **Responsive Web Design** <br />_(Dynamische Anpassung an Bildschirmgrössen)_
- Weiterarbeit am Projekt **Smart Home**
   1. Programmieren eines **Firefighter-Dashboards** _(Front- und Backend)_
   2. Anbindung ans Smart-Quartier
   3. Alarme, Events, Aktionen
- **Progressive Web Apps** <br />_(Offline, Service-Worker, Installation im OS)_

</v-clicks>

---

# Allgemeine Anmerkungen zum Kursinhalt

<v-clicks>

- Das Thema "Web Engineering" ist sehr umfangreich und vielfältig
- Der zeitlich begrenzte Umfang dieses Moduls wird leider bei Weitem nicht reichen, **alle relevanten Aspekte** ausreichend zu beleuchten - es musste (notgedrungen) an diversen Stellen **erhebliche Kürzungen** vorgenommen werden... <fluent-emoji-crying-face />
- Dieser Kurs fokussiert sich auf die **allerwesentlichsten Aspekte**, die nach Ansicht des Dozenten zur **praktischen Anwendung** notwendig sind.
- In diesem Kurs kommen konkrete **Techniken, Tools und Frameworks** als **eine (!) Möglichkeit des Web Engineering** zum Einsatz, die vom Dozenten und/oder der Schule bevorzugt werden und sich in der Praxis bewährt haben - aus Zeitgründen können kaum Alternativen betrachtet werden. Es sei jedoch angemerkt, dass es für **fast jedes Tool meist dutzende gleichwertige Alternativen** gibt <fluent-emoji-right-arrow/> bei Interesse kann der Dozent gerne Auskunft geben/beraten.

</v-clicks>

---

# Allgemeine Regeln und Grundsätze 1

<v-click>

## Ablauf des Unterrichts

</v-click>

<v-clicks>

- **Qualität vor Quantität**: lieber ein Thema verschieben und dafür den restlichen Stoff richtig verstehen - bitte gebt dem Dozenten Rückmeldung, wenn er es selbst nicht merkt... <fluent-emoji-downcast-face-with-sweat/>
- **Kurstage grundsätzlich nach ABB-TS Standard**: jeweils 4 Lektionen à ~45 Minuten (jeweils ~5' Pause dazwischen)
- In **gemeinsamer** Vereinbarung können situativ Anpassungen vorgenommen werden.

</v-clicks>

<v-click>

## Eigenverantwortung der Studenten

</v-click>

<v-clicks depth="2">

- **Pünktlichkeit**: unsere Zeit ist (leider) knapp bemessen - rechtzeitig starten = rechtzeitig beenden (gilt auch für Pausen)!
- **Keine Präsenzpflicht**: wer fehlt holt Stoff **selbstständig** nach
- **Wenn etwas nicht verstanden wurde**: fragen! (notfalls auch mehrfach, ich erkläre gerne nochmals <fluent-emoji-ok-hand/>)
- **Hausaufgaben**:
  - Das **selbstständige Lösen der Hausaufgaben** wird beim nächsten Kurstag **vorausgesetzt**.
  - **Grundsatz**: so wenig wie möglich, so viel wie nötig - niemand mag Hausaufgaben (Dozent ebensowenig!), aber sie dienen der **Vertiefung/Erweiterung** der Erkenntnisse und sind manchmal unerlässlich

</v-clicks>

---

# Allgemeine Regeln und Grundsätze 2

<v-click>

## Umgang Miteinander

</v-click>

<v-click>

### Gegenseitiger Respekt und Toleranz

</v-click>

<v-clicks>

- **Es gibt keine dummen Fragen**: jede Prerson bringt ihr eigenes Vorwissen mit, lernt anders und im eigenen Tempo - wir **nehmen aufeinander Rücksicht** und geben einander **wertschätzend Feedback**.
- **Wir sind alle Erwachsen**: Pöbeleien, Provokationen, Mobbing, usw. werden **unter keinen Umständen geduldet** und ggf. **sofort geandet**.

</v-clicks>

<v-click>

### Unklarheiten, Fragen und Kritik

</v-click>

<v-clicks>

- **Verständnisprobleme**:
  - wenn möglich direkt im Unterricht ansprechen
  - Schriftliches Kontaktieren des Dozenten via **MS Teams** oder **E-Mail** _(Antwort i.d.R. innerhalb von ~24h)_
- **Individuelle Lösungen**: falls die eine oder andere Gruppe **stark benachteiligt** oder **stark über- oder unterfordert** ist, werden individuelle Lösungen gesucht wie z.B. **Zusatzunterricht** oder **Gruppenaufträge zum selbständigen Erarbeiten und Präsentieren eines Themas**.

</v-clicks>

---

# Allgemeine Regeln und Grundsätze 3

## Präsenzunterricht ist zum Lernen da

<v-clicks>

- **Keine Lust oder Zeit**: Wer mal an der Lektion **nicht mitmachen will** oder **nicht kann** z.B. wegen geschäftlicher Verpflichtungen, Stress oder Erschöpfung - kein Problem *(<fluent-emoji-right-arrow/> Eigenverantwortung!)* - bitte einfach den **Unterrichtssaal verlassen** um den Lernfluss der Mitstudenten nicht zu stören!
- **Fragen**: dürfen und sollen jederzeit gestellt werden können - einfach **alles mit Mass**: wenn der Fluss oder Zeitplan des Untrrichts erheblich gestört wird, werden Fragen ggf. auf später vertagt.

</v-clicks>

---
layout: image-left
image: '/images/WorldWideWeb.jpg'
---

# Das **World Wide Web**

<v-clicks>

- ENG für "**Weltweites Netz**", kurz **Web** oder auch **WWW** genannt.
- Ein **über das Internet** abrufbares System von elektronischen **Hypertext-Dokumenten**, sogenannten **Webseiten**
- Umgangssprachlich wird das **WWW** oft mit dem **Internet** gleichgesetzt; das **WWW** ist jedoch **jünger** und stellt nur **eine** von **mehreren** möglichen **Nutzungen des Internets** dar. Andere Internetdienste wie z.B. **E-Mail** sind **nicht** in das **WWW** integriert.
- Das **WWW** wurde 1989 von **Tim Berners-Lee** und **Robert Cailliau** am **CERN** in **Genf** in der Schweiz <openmoji-flag-switzerland/> entwickelt.

</v-clicks>

---

# Das **World Wide Web** 2

<v-clicks>

- **Tim Berners-Lee** entwickelte das **HTTP-Netzwerkprotokoll** und **HTML**. Zudem programmierte er den ersten **Webbrowser** und die erste **Webserver-Software**. Er betrieb auch den **ersten Webserver der Welt** auf seinem Entwicklungsrechner 😎💪!
- Das Gesamtkonzept wurde der Öffentlichkeit 1991 unter **Verzicht** auf jegliche **Patentierung** oder **Lizenzzahlungen** zur **freien Verfügung** gestellt, was **erheblich zur heutigen Bedeutung beitrug**.
- Die weltweit erste Webseite [info.cern.ch](info.cern.ch) wurde am 6. August 1991 veröffentlicht.
- Das WWW führte zu umfassenden, oft als revolutionär beschriebenen **Umwälzungen in vielen Lebensbereichen**, zur **Entstehung neuer Wirtschaftszweige** und zu einem grundlegenden **Wandel des Kommunikationsverhaltens** und der Mediennutzung.
- Es wird in seiner **kulturellen Bedeutung**, zusammen mit anderen Internet-Diensten wie E-Mail, teilweise mit der **Erfindung des Buchdrucks** gleichgesetzt

</v-clicks>

---
layout: small-image-left
image: '/images/WWW-Funktionsweise.png'
backgroundSize: contain
---

# WWW - Funktionsweise

<v-clicks :depth="2">

- _Drei Kernstandards_
  - **HTTP** als **Protokoll**, mit dem der Browser Informationen vom Webserver anfordern kann
  - **HTML** als **Auszeichnunssprache**, die festlegt, wie die Information gegliedert ist und wie die Dokumente verknüpft sind (**Hyperlinks**)
  - **Uniform Resource Identifier** (URI) als eindeutige **Bezeichnung** einer Ressoruce, die in **Hyperlinks** verwendet wird

</v-clicks>

---
layout: small-image-left
image: '/images/WWW-Funktionsweise.png'
backgroundSize: contain
---

# WWW - Funktionsweise 2

<v-clicks :depth="2">

- _Offizielle Erweiterungen_
  - **Cascading Style Sheets** (CSS) beschreiben das **Aussehen** und die **Andordnung** der Elemente einer Webseite, womit der Inhalt von dessen Darstellung separiert wird
  - **Document Object Model** (DOM) als **Programmierschnittstelle** für externe Programme oder Skriptsprachen (wie JavaScript) von Webbrowsern

</v-clicks>
