---
transition: slide-left
---

# <devicon-javascript/> Async/Await in JavaScript

Async/Await ist eine moderne Syntax in JavaScript, die es ermöglicht, asynchrone Operationen einfacher und lesbarer zu gestalten. Es baut auf Promises auf und ermöglicht es, asynchrone Codeblöcke wie synchronen Code zu schreiben.

```js {monaco} { lineNumbers: 'on', height: '350px', editorOptions: { fontSize: 12, wordWrap: 'on' } }
async function fetchDataAsync() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Alternative mit Promise-Kette
function fetchDataPromise() {
  fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
}
```
