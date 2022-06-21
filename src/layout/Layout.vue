<template>
  <div class="min-h-full">
    <AppHeader :links="links"></AppHeader>
    <main class="-mt-32">
      <div
        class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 transition-all duration-350 ease-out"
      >
        <div
          class="rounded-lg bg-white px-5 py-6 mt-12 shadow sm:px-6 transition-all duration-350 ease-out max-h-min"
        >
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import AppHeader from "../components/AppHeader.vue";

import { ref } from 'vue'

const links = ref([{ label: 'Inicio', link: '/' }])
</script>

<style></style>
