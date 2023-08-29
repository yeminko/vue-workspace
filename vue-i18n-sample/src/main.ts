import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createI18n } from "../node_modules/vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
  legacy: false,
  locale: "jp",
  fallbackLocale: "en",
  messages,
});

const app = createApp(App);

app.use(i18n);
app.mount("#app");
