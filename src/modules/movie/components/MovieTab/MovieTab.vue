<template>
  <div class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
    <nav
      class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
      aria-label="Tabs"
    >
      <button
        v-for="(item, index) in menu"
        :key="index"
        :class="index == active ? 'text-gray-900' : 'text-gray-500'"
        class="rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
        @click="selected(index, item.type)"
      >
        <span>{{ item.name }}</span>
        <span
          aria-hidden="true"
          :class="index == active ? 'bg-orange-500' : 'bg-white'"
          class="absolute inset-x-0 bottom-0 h-0.5"
        ></span>
      </button>
    </nav>
  </div>
</template>

<script setup>
defineProps({
  menu: {
    type: Array,
    default: [],
  },
  active: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["selected"]);

const selected = (index, type) => emit("selected", { index, type });
</script>

<style></style>
