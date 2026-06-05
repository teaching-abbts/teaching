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

1. Grundlagen
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

2. **Frontend:** Single Page Applications mit `Vue.js` in `TypeScript`
3. **Backend:** Webserver mit `ASP.NET Core` in `C#`
4. **Responsive Web Design** <br />*(Dynamische Anpassung an Bildschirmgrössen)*
5. Weiterarbeit am Projekt **Smart Home**
   1. Programmieren eines **Firefighter-Dashboards** *(Front- und Backend)*
   2. Anbindung ans Smart-Quartier
   3. Alarme, Events, Aktionen
6. **Progressive Web Apps** <br />*(Offline, Service-Worker, Installation im OS)*

</v-clicks>
