<template>
  <Layout>
    <h2 class="text-2xl font-semibold mb-4">Portfolio</h2>
    <p class="text-gray-700 mb-6">
      Berikut beberapa proyek yang pernah dikerjakan. Halaman ini adalah contoh pengembangan tampilan halaman baru yang tetap dibungkus oleh Layout.vue, sehingga header dan sidebar tetap konsisten.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-lg shadow p-4 hover:shadow-md transition"
      >
        <h3 class="font-semibold text-lg mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 text-sm">{{ project.description }}</p>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '../components/Layout.vue'

const projects = ref([
  {
    id: 1,
    title: 'Aplikasi Manajemen Tugas',
    description: 'Aplikasi to-do list sederhana menggunakan Vue 3 dan Pinia untuk state management.',
  },
  {
    id: 2,
    title: 'Website Company Profile',
    description: 'Landing page perusahaan dengan layout responsif menggunakan Tailwind CSS.',
  },
  {
    id: 3,
    title: 'Dashboard Analitik',
    description: 'Dashboard interaktif dengan sidebar navigasi dan grafik data pengguna.',
  },
])
</script>
