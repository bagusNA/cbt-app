<template>
  <div class="min-h-screen grid">
    <div class="grid md:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_3fr] xl:grid-cols-[3fr_4fr] bg-primary">
      <div class="w-full max-w-4xl mx-auto grid place-items-center">
        <slot />
      </div>
      <div class="hidden bg-center bg-cover md:block"
        :style="{ backgroundImage: `url('/img/login-img.jpg')` }"
      >
      </div>
    </div>
  </div>
</template>