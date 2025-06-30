---
transition: slide-left
---

# Uniform Resource Locator (URL)

<div></div>

<v-click>

![URL](/slides-images/URL.png)

</v-click>

<v-clicks>

- Eine Untermenge von URI
- Identifiziert eine Webaddresse oder Ort einer eindeutigen Web-Ressource
- Die **erforderlichen Teile** einer URL hängen in hohem Maße vom **Kontext** ab, in dem die URL verwendet wird. Es wird zwischen **absoluten** und **relativen URLs** unterschieden:
  - In der **Adressleiste eines Browsers** hat eine URL *keinen Kontext*, daher muss eine *vollständige (oder absolute) URL* angegeben werden.
  - Wenn eine *URL in einem Dokument* verwendet wird (z. B. in einer HTML-Seite) kann der **Webbrowser** diese Informationen verwenden, um ggf. *fehlende Teile zu ergänzen*.

</v-clicks>

<v-click>

| Absolute URLs                                                          | Relative URLs                                                   |
| ---------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Vollständige URL**: `https://developer.mozilla.org/en-US/docs/Learn` | **Unterressourcen**: `Skills/Infrastructure/Understanding_URLs` |
| **Impliziter Domänenname**: `/en-US/docs/Learn`                        | **Eine Ebene höher**: `../CSS/display`                          |

</v-click>

<style>
  li {
    --uno: text-sm;
  }
  code {
    --uno: text-xs;
  }
</style>
