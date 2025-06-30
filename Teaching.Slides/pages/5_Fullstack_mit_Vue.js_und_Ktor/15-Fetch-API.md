---
transition: slide-left
---

# <devicon-javascript/> Fetch API

Das [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) ist eine moderne Schnittstelle, die es ermöglicht, Netzwerkressourcen asynchron abzurufen. Es ersetzt die ältere XMLHttpRequest-Schnittstelle und bietet eine einfachere und flexiblere Möglichkeit, HTTP-Anfragen zu stellen.

```js {monaco} { lineNumbers: 'on', height: '350px', editorOptions: { fontSize: 12, wordWrap: 'on' } }
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
