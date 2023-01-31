<script setup lang="ts">
definePageMeta({
  middleware: 'user-only'
})

const user = useAuthUser()
const { logout } = useAuth()
</script>

<template>
  <div>
    Logged In
    {{ user }}
    <button @click="logout">Logout</button>
  </div>
</template>