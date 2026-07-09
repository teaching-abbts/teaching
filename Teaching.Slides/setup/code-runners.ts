import { defineCodeRunnersSetup } from "@slidev/types";

export default defineCodeRunnersSetup(() => {
  return {
    html(code, ctx) {
      const host = document.createElement("div");
      const shadow = host.attachShadow({ mode: "open" });

      shadow.innerHTML = `
        <style>
          :host {
            all: initial;
            display: block;
            width: 100%;
            min-height: 100%;
            background-color: #fff;
            font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.4;
            color: #111;
          }
          *, *::before, *::after {
            box-sizing: border-box;
          }
          body {
            margin: 0;
          }
        </style>
        ${code}
      `;

      return {
        element: host,
      };
    },
    // or other languages, key is the language id
  };
});
