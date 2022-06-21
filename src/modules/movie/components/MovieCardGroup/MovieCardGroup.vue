<template>
  <div class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
    <h2 class="sr-only">Movies</h2>

    <div
      class="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4"
    >
      <slot>
        <movia-card
          v-for="movie in movies"
          :key="movie.id"
          :title="movie.original_title"
          :date="movie.release_date"
          :image="movie.backdrop_path"
          :vote="movie.vote_average"
          :status="status"
        ></movia-card>
      </slot>
    </div>
  </div>
</template>

<script setup>
import MoviaCard from "../MovieCard/MoviaCard.vue";

defineProps({
  movies: { type: Array, default: [] },
  status: { type: String, default: "" },
});
</script>

<style></style>
