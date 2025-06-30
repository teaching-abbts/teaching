---
transition: slide-left
layout: two-cols-header
---

# HTTP: der **POST**-Befehl

- Die HTTP-Post Methode sendet Daten an den Server.
- Der Datentyp wird durch den Header `Content-Type` angegeben

::left::

## WWW-Form-Urlencoded

Die Schlüssel und Werte werden in Schlüssel-Wert-Tupeln codiert, die durch getrennt sind, mit einem zwischen dem Schlüssel und dem Wert. Nicht-alphanumerische Zeichen in Schlüsseln und Werten sind URL-kodiert. ➡️ **NICHT** zur Übertragung von *Binärdateien* geeignet!

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

::right::

## Multipart-Form-Data

Jeder Wert wird als Datenblock ("body-Teil") gesendet, wobei jeder Teil durch ein vom Benutzer-Agent definiertes Trennzeichen ("boundary") getrennt wird. ➡️ Zur Übertragung von (grossen) *Binärdateien* **geeignet**!

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
ContentDisposition: form-data: name="field2"; filename"example.png"

value2
--boundary--
```

<style>
  li {
    --uno: text-sm;
  }
</style>
