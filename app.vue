<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  font-family: Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.page-slide-enter-active,
.page-slide-leave-active {
  transition: all 0.3s;
}

.page-slide-enter-from,
.page-slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>