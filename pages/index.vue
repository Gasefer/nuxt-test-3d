<script setup>
const { data: news } = await useFetch("/api/news");
</script>

<template>
  <div class="p-6 m-100">
    <h1 class="text-3xl font-bold mb-4">Будівельні новини</h1>
    <div class="grid md:grid-cols-2 gap-4">
      <div
        v-for="item in news"
        :key="item.title"
        class="border p-4 rounded-lg shadow"
      >
        <NuxtImg :src="item.picture" class="w-full rounded-lg mb-2" />
        <h2 class="text-xl font-semibold">{{ item.title }}</h2>
        <p class="text-gray-600">{{ item.text }}</p>
        <p class="text-sm text-gray-400">{{ item.date }}</p>
      </div>
    </div>
    <NuxtLink
      to="/nuxt-test-3d/visualization"
      class="text-blue-500 hover:underline mt-4"
      >Перейти на візуалізацію</NuxtLink
    >
  </div>
</template>
