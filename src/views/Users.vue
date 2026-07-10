<template>
  <Layout>
    <h2 class="text-2xl font-semibold mb-4">Data Pengguna (Integrasi API)</h2>
    <p class="text-gray-700 mb-6">
      Data di bawah ini diambil langsung dari API publik
      <a
        href="https://jsonplaceholder.typicode.com/users"
        target="_blank"
        class="text-blue-600 hover:underline"
      >JSONPlaceholder</a>
      menggunakan <code class="bg-gray-100 px-1 rounded">fetch()</code> saat halaman dimuat.
    </p>

    <!-- Status loading -->
    <div v-if="loading" class="text-gray-500">
      Memuat data pengguna...
    </div>

    <!-- Status error -->
    <div v-else-if="error" class="text-red-600">
      Gagal memuat data: {{ error }}
    </div>

    <!-- Data berhasil dimuat -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="user in users"
        :key="user.id"
        class="bg-white rounded-lg shadow p-4 hover:shadow-md transition"
      >
        <h3 class="font-semibold text-lg mb-1">{{ user.name }}</h3>
        <p class="text-sm text-gray-500 mb-2">@{{ user.username }}</p>
        <ul class="text-sm text-gray-700 space-y-1">
          <li><span class="font-medium">Email:</span> {{ user.email }}</li>
          <li><span class="font-medium">Telepon:</span> {{ user.phone }}</li>
          <li><span class="font-medium">Perusahaan:</span> {{ user.company?.name }}</li>
          <li><span class="font-medium">Kota:</span> {{ user.address?.city }}</li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Layout from '../components/Layout.vue'

const users = ref([])
const loading = ref(true)
const error = ref(null)

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw new Error('Response tidak OK: ' + response.status)
    }
    users.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchUsers()
})
</script>
