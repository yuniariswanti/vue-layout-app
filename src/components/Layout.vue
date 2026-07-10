<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex flex-1 flex-col md:flex-row">
      <Sidebar />
      <main class="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
</script>
