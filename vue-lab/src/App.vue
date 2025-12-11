<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="max-w-4xl mx-auto p-4">
    <!-- Логотип -->
    <img
      alt="Vue logo"
      src="@/assets/logo.svg"
      class="block mx-auto mb-8 w-32 h-32"
    />

    <div class="flex flex-col lg:flex-row lg:items-start lg:gap-8">
      <!-- Привітання -->
      <HelloWorld msg="You did it!" />

      <!-- Навігація -->
      <nav class="flex justify-center gap-4 mt-8 lg:mt-0 lg:flex-col lg:justify-start">
        <RouterLink
          to="/"
          class="text-blue-600 hover:text-blue-800 font-medium px-4"
        >Home</RouterLink>
        <RouterLink
          to="/about"
          class="text-blue-600 hover:text-blue-800 font-medium px-4"
        >About</RouterLink>
        <RouterLink
          to="/contact"
          class="text-blue-600 hover:text-blue-800 font-medium px-4"
        >Contact</RouterLink>
      </nav>
    </div>
  </header>

  <main class="max-w-4xl mx-auto mt-5">
    <RouterView />
  </main>
</template>

<!-- Старий <style scoped> видаляємо -->
