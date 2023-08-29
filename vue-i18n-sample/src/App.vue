<script setup lang="ts">
import { useI18n } from "../node_modules/vue-i18n";

const { t, locale, availableLocales } = useI18n();
</script>

<template>
  <div id="app">
    <select v-model="locale">
      <option
        v-for="locale in availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
    <h1>{{ t("message.greet") }}</h1>
    <p>{{ t("message.hello") }}</p>
  </div>
</template>
