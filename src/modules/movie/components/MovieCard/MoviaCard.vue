<template>
  <div
    v-if="status != 'LOADING'"
    class="group relative p-4 border-r border-b border-gray-200 sm:p-6 hover:scale-105 transition transform duration-150"
  >
    <div
      class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75"
    >
      <img
        :src="`https://image.tmdb.org/t/p/original/${image}`"
        :alt="title"
        class="w-full h-full object-center object-cover"
      />
    </div>
    <div class="pt-10 pb-4 text-center">
      <h3 class="text-sm font-medium text-gray-900">
        <a href="#">
          <span aria-hidden="true" class="absolute inset-0"></span>
          {{ title }}
        </a>
      </h3>
      <div class="mt-3 flex flex-col items-center">
        <div class="flex items-center">
          <star-rating
            :rating="vote"
            :read-only="true"
            :increment="0.25"
            :star-size="15"
            :max-rating="10"
          ></star-rating>
        </div>
        <p class="mt-1 text-sm text-gray-500">{{ vote }} Votos</p>
      </div>
      <p class="mt-4 text-base font-medium text-gray-900">
        {{ formatDate(date) }}
      </p>
    </div>
  </div>
  <AppLoading v-else />
</template>

<script setup>
import StarRating from "vue-star-rating";
import AppLoading from "../../../../components/AppLoading.vue";

import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
defineProps({
  title: { type: String, default: "" },
  image: { type: String, default: "" },
  date: { type: String, default: "" },
  vote: { type: Number, default: 0 },
  status: { type: String, default: "LOADING" },
});

const formatDate = (date) => {
  if (date) {
    return format(parseISO(date), "dd/MM/yyyy", {
      locale: ptBR,
    });
  }
};
</script>

<style></style>
