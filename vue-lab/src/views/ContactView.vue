<script setup lang="ts">
// Імпортуємо компонент UserCard
import UserCard from '../components/UserCard.vue'
</script>

<template>
  <!-- Замість класу .contact-page використовуємо Tailwind padding -->
  <div class="p-5">
    <h1 class="text-2xl font-bold mb-4">Сторінка контактів</h1>
    <p class="mb-4">Це наша нова сторінка контактів!</p>

    <UserCard username="Student_1" :isActive="true" />
    <UserCard username="Student_2" :isActive="false" />
  </div>
</template>

<!--
  Блок <style scoped> видаляємо, бо всі стилі через Tailwind
-->
