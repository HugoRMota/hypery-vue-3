<script setup>
import { RouterView } from "vue-router";

import { useMovieStore } from "./store";

const movie = useMovieStore();
console.log("🚀 ~ file: App.vue ~ line 8 ~ movie", movie);
</script>

<template>
  <RouterView />
</template>
