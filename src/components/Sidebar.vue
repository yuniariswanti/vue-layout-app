<template>
  <aside class="bg-gray-100 w-full md:w-60 min-h-screen p-6 shadow">
    <nav class="space-y-4">
      <RouterLink to="/" class="block hover:text-blue-600">Home</RouterLink>
      <RouterLink to="/about" class="block hover:text-blue-600">About</RouterLink>
      <RouterLink to="/contact" class="block hover:text-blue-600">Contact</RouterLink>
      <RouterLink to="/portfolio" class="block hover:text-blue-600">Portfolio</RouterLink>
    </nav>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
