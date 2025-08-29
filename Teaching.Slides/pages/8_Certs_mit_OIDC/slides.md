---
layout: cover
transition: slide-left
---

# **NDS - Web Engineering**

## Zertifikate, Autorisierung mit OIDC
<style>
  h1 {
    --uno: shadow-filter;
  }
</style>

---
layout: default
transition: slide-left
---

# Programm

<v-clicks :depth="2">

- HTTPS in **Ktor**
  - X.509 Zertifikate _(self-signed)_
  - Umleitung von HTTP auf HTTPS
- Real-World Authentifizierung mit **OIDC**
- **Hands-On**: OIDC mit Keycloak und Ktor
  - Implementation von OIDC in Ktor
  - Detailanalyse der aktuellen Solution
</v-clicks>

---
layout: default
transition: slide-left
---

# X.509 Zertifikat in **Ktor**

- In unserer Lösung setzen wir bekanntlich Ktor mit der [Netty-Engine](https://netty.io/) in der [Configuration as (YAML-)File](https://ktor.io/docs/server-create-and-configure.html#engine-main)-Variante ein.
- Dadurch ist die verwendung von HTTPS und X.509-Zertifikaten in Ktor-Anwendungen sehr einfach:

```yaml
ktor:
  application:
    modules:
      - ch.abbts.ApplicationKt.myModule
  deployment:
    port: 8080
    sslPort: 8443
  security:
    ssl:
      keyStore: keystore.jks
      keyAlias: sampleAlias
      keyStorePassword: foobar
      privateKeyPassword: foobar
```

- Mittels `Keytool` Utility des JDK kann ein `keystore` mit einem selbstsignierten Zertifikat erstellt werden:

```bash
keytool -keystore keystore.jks -alias sampleAlias -genkeypair -keyalg RSA -keysize 4096 -validity 3 -dname 'CN=localhost, OU=ktor, O=ktor, L=Unspecified, ST=Unspecified, C=CH'
```

- Lösungen mittels der `embeddedServer`-Variante sind ebenfalls möglich - siehe [Dokumentation](https://ktor.io/docs/server-ssl.html#embedded-server).

<style>
  li {
    --uno: text-sm;
  }
</style>

---
layout: default
transition: slide-left
---

# HTTPS Redirect

- Häufig wird im Alltag eine Webseite ohne vollständige Protokollangabe aufgerufen, z.B. `www.example.com` anstelle von `https://www.example.com`. Standardmässig wird somit also aus `www.example.com` eine HTTP-Anfrage: `http://www.example.com`.
- Seit ein paar Jahren ist es üblich, dass Webseiten nur noch über HTTPS erreichbar sind.
- In der Praxis ist es somit üblich, dass HTTP-Anfragen automatisch auf HTTPS umgeleitet werden.
- In Ktor kann dies einfach durch die Verwendung des `HttpsRedirect`-Features erreicht werden:

```kotlin
import io.ktor.server.application.*
import io.ktor.server.plugins.httpsredirect.*

fun Application.setupHttpsRedirect() {
  install(HttpsRedirect) {
    sslPort = 8443
    permanentRedirect = false
  }
}
```

<style>
  li {
    --uno: text-sm;
  }
</style>

---
layout: default
transition: slide-left
---

# OpenID Connect (OIDC)

- OIDC ist ein vollständiges Authentifizierungsprotokoll, das auf OAuth 2.0 aufbaut und somit sowohl **Authentifizierung** als auch **Autorisierung** ermöglicht.
- Es ermöglicht Clients, die Identität von Benutzern zu überprüfen und grundlegende Profilinformationen abzurufen.
- Es bietet eine standardisierte Möglichkeit zur Implementierung von Single Sign-On (SSO) und zur Integration von Identitätsanbietern wie z.B. Microsoft, Google, Facebook oder auch ein Corporate Identity Provider.

```mermaid {scale: 0.5}
sequenceDiagram
  participant User as Benutzer
  participant Webhost as Webhost
  participant AuthServer as Autorisierungsserver

  User->>Webhost: Zugriff auf geschützte Ressource
  Webhost->>User: Weiterleitung zum Autorisierungsserver
  User->>AuthServer: Anmeldedaten
  AuthServer->>User: Autorisierungscode
  User->>Webhost: Autorisierungscode
  Webhost->>AuthServer: Tausche Code gegen Tokens
  AuthServer->>Webhost: ID Token + Access Token
  Webhost->>Webhost: Validiere ID Token
  Webhost->>User: Zeige geschützten Inhalt
```

<style>
  li {
    --uno: text-sm;
  }
</style>
