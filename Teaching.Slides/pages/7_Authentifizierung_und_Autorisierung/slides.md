---
layout: cover
transition: slide-left
---

# **NDS - Web Engineering**

## <fluent-emoji-flat-identification-card/> Authentifizierung und Autorisierung <fluent-emoji-flat-locked-with-key/>

<style>
  h1 {
    --uno: shadow-filter;
  }
</style>

---
layout: default
---

# **HTTP**: Das Problem unverschlüsselter Daten

- Bei der Kommunikation über HTTP können Daten im **Klartext** übertragen werden.
- Ein Dritter, der den Datenverkehr abhört, kann die übertragenen Daten im **Klartext** lesen.

```mermaid
sequenceDiagram
  autonumber
  participant Alice as 👩 Alice
  participant Mallory as 💻 Mallory (eingehackt im Netzwerkrouter)
  participant Bob as 👨 Bob

  Alice->>Bob: Hi Bob, ich möchte meinen Kontostand abfragen.
  Note over Alice: Alice glaubt, dass sie direkt mit Bob kommuniziert.
  Bob->>Alice: Hi Alice, klar: wir sind ja unter uns...😜 - wie lautet dein Passwort?
  Note over Bob: Bob glaubt, dass er direkt mit Alice kommuniziert.
  Alice->>Bob: Mein Passwort ist "💘Bob4Ever!".
  Note over Mallory: Mallory kann die Nachricht im KLARTEXT mitlesen: 'Mein Passwort ist "💘Bob4Ever!"'.
  Bob->>Alice: Danke Alice, dein Kontostand ist 1000 CHF.
  Note over Mallory: Mallory hat die Antwort von Bob mitgelesen: 'Danke Alice, dein Kontostand ist 1000 CHF.'.
  Note over Alice: Alice ahnt nichts von Mallorys Mitlesen.
  Mallory->>Bob: Hi Bob, ich bin Alice. Mein Passwort ist "💘Bob4Ever!". <br/>Ich möchte die 1000 CHF abheben. Bitte überweise sie auf das Konto CHE...
  Note over Bob: Bob glaubt, dass Mallory Alice ist und überweist die 1000 CHF.
```

<style>
  li {
    --uno: text-sm;
  }
</style>

---
layout: default
---

# HTTPS: _Hypertext Transfer Protocol **Secure**_

- Über HTTPS können Daten **abhörsicher** übertragen werden _(Transportverschlüsselung)_.
- Die Kommunikation zwischen Client und Server kann nicht von einem Dritten "mitgelesen" werden.
- Der Standard-Port für HTTPS ist **443**. Dieser wird automatisch verwendet, wenn eine URL mit `https://` beginnt.
- Syntaktisch ist HTTPS identisch mit dem Schema für HTTP, die zusätzliche Verschlüsselung der Daten geschieht mittels SSL/TLS.

<style>
  li {
    --uno: text-lg;
  }
</style>

---
layout: default
---

# HTTPS: _Hypertext Transfer Protocol **Secure**_

```mermaid {scale: 0.75}
sequenceDiagram
  autonumber
  participant Alice as 👩 Alice
  participant Mallory as 💻 Mallory (eingehackt im Netzwerkrouter)
  participant Bob as 👨 Bob

  rect rgba(230, 230, 250, 0.1)
    Alice->>Bob: Startet TLS-Handshake (ClientHello)
    Bob-->>Alice: Sendet Server-Zertifikat
    Alice->>Alice: Alice prüft, ob das Zertifikat gültig und vertrauenswürdig ist.
    Note over Alice,Bob: Nach erfolgreichem Handshake und Zertifikatsprüfung ist die Verbindung abhörsicher.
  end

  Alice-->>Bob: 🔒 Hi Bob, ich möchte meinen Kontostand abfragen.
  Bob-->>Alice: 🔒 Hi Alice, wie lautet dein Passwort?
  Alice-->>Bob: 🔒 Mein Passwort ist "💘Bob4Ever!".
  Bob-->>Alice: 🔒 Danke Alice, dein Kontostand ist 1000 CHF.
  Note over Mallory: Mallory sieht nur verschlüsselte Daten und kann nichts mitlesen.
```

---
layout: two-cols-header
---

# X509-Zertifikate: Vorteile und Grenzen

- Via Digitales Zertifikat wird die **Identität** des Servers verifiziert
- z.B. wenn ich mit `https://www.abbts.ch/` kommuniziere, bestätigt ein gültiges Zertifikat, dass ich mit dem echten Besitzer der Domain (`www.abbts.ch`) spreche.
- **ACHTUNG**: ein gültiges Zertifikat garantiert nicht, dass die Website vertrauenswürdig ist! Es bestätigt lediglich die Identität des Servers.

```mermaid
sequenceDiagram
  participant Client
  participant "Man-in-the-Middle\n(Proxy)" as MITM
  participant Server

  Client->>MITM: Hi Server (vermeintlich)
  MITM->>Server: Hi Server

  Note over Client,MITM: Client fordert öffentlichen Schlüssel an (denkt, er spricht mit dem Server)
  Client->>MITM: Fordert öffentlichen Schlüssel an
  MITM-->>Client: Sendet eigenen öffentlichen Schlüssel

  Note over MITM,Server: MITM fordert echten öffentlichen Schlüssel vom Server an
  MITM->>Server: Fordert öffentlichen Schlüssel an
  Server-->>MITM: Sendet öffentlichen Schlüssel

  Note over Client: Client verschlüsselt Nachricht mit MITM-Schlüssel
  Client->>MITM: Sendet verschlüsselte Nachricht

  Note over MITM: MITM entschlüsselt, liest mit und verschlüsselt erneut mit Server-Schlüssel
  MITM->>Server: Sendet erneut verschlüsselte Nachricht

  Note over Server: Server entschlüsselt und antwortet
  Server-->>MITM: Antwort

  Note over MITM: MITM liest Antwort, verschlüsselt erneut für Client
  MITM-->>Client: Antwort
```
