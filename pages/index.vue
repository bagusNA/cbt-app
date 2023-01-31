<script setup lang="ts">
definePageMeta({
  middleware: 'user-only'
})

const user = useAuthUser()
</script>

<template>
  <div>
    Logged In
    {{ user }}
  </div>
</template>