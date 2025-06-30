---
transition: slide-left
---

# Uniform Resource Identifier (URI)

<v-clicks>

- Ein Uniform Resource Identifier (Abk. URI, englisch für «einheitlicher Bezeichner für Ressourcen») ist ein **Identifikator** und besteht aus einer Zeichenfolge, die zur **Identifizierung einer abstrakten oder physischen Ressource** dient.
- **URIs** werden zur **Bezeichnung von Ressourcen** *(wie Webseiten, sonstigen Dateien, Aufruf von Webservices, aber auch E-Mail-Empfängern)* im Internet und dort vor allem im WWW eingesetzt
- Beispiele
  - https://de.wikipedia.org/wiki/Uniform_Resource_Identifier
  - ftp://ftp.is.co.za/rfc/rfc1808.txt
  - mailto:John.Doe@example.com
  - sip:911@pbx.mycompany.com
  - tel:+1-816-555-1212
  - git://github.com/rails/rails.git
- Ein URI besteht aus fünf Teilen *(wovon nur **scheme** und **path** in jedem URI vorhanden sein müssen)*:
  - **scheme** (Schema oder Protokoll)
  - **authority** (Anbieter oder Server)
  - **path** (Pfad)
  - **query** (Abfrage)
  - **fragment** (Teil)

</v-clicks>

<v-click>
```
  foo://example.com:8042/over/there?name=ferret#nose
  \_/ \________________/\_________/ \_________/ \__/
   |          |             |            |        |
  scheme    authority        path        query   fragment
```
</v-click>

<style>
  li {
    --uno: text-sm;
  }
</style>
