import { registerPlugins } from "@/plugins";
import "unfonts.css";
import "virtual:uno.css";
import { createApp } from "vue";

import App from "./App.vue";
import "./styles/index.css";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
