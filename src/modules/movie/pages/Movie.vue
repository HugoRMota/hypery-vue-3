<template>
  <div>
    <movie-tab @selected="selected" :active="active" :menu="menu"></movie-tab>
    <movie-card-group
      :movies="store.GET_MOVIE_DATA"
      :status="store.movie.status"
    ></movie-card-group>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMovieStore } from "../store";
import MovieCardGroup from "../components/MovieCardGroup/MovieCardGroup.vue";
import MovieTab from "../components/MovieTab/MovieTab.vue";

const store = useMovieStore();

const menu = ref([
  { name: "Dia", type: "day" },
  { name: "Semana", type: "week" },
]);

const active = ref(0);

onMounted(() => {
  store.ACT_MOVIE_LIST("day");
});

const selected = ({ index, type }) => {
  active.value = index;
  store.ACT_MOVIE_LIST(type);
};
</script>

<style></style>
