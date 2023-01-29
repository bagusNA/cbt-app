<script setup lang="ts">
</script>

<template>
  <div class="grid md:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_3fr] xl:grid-cols-[3fr_4fr] bg-primary">
    <div class="w-full max-w-4xl mx-auto grid place-items-center">
      <div class="flex flex-col justify-center md:w-1/2">
        <div class="w-full mb-8 relative">
          <h1 class="text-4xl font-extrabold uppercase">Login</h1>
          <Icon name="fluent:sparkle-28-filled" class="text-6xl absolute -top-12 left-32 animate-fade" />
          <Icon name="ph:star-four-fill" class="text-4xl absolute top-8 -left-14 animate-fade" />
        </div>
        
        <form action="#" method="post" class="flex flex-col gap-y-4">
          <input type="text" name="username" placeholder="Username"
            class="px-4 py-3 rounded-xl text-background border border-secondary transition hover:border-background focus:border-background focus:outline focus:outline-2 focus:outline-background"
          >
          <input type="password" name="password" placeholder="Password"
            class="px-4 py-3 rounded-xl text-background border border-secondary transition hover:border-background focus:border-background focus:outline focus:outline-2 focus:outline-background"
          >

          <div>
            <input type="checkbox" name="remember-me" id="remember-me" class="mr-2">
            <label for="remember-me" class="select-none">Remember Me</label>
          </div>

          <button class="py-3 bg-background-alt rounded-xl border border-background font-bold uppercase tracking-widest transition hover:bg-background hover:text-primary">Login</button>
          <a href="#" class="py-3 bg-background text-primary rounded-xl border border-background text-center font-bold uppercase tracking-widest transition hover:bg-slate-900">Daftar</a>
        </form>
      </div>
    </div>
    <div class="hidden bg-center bg-cover md:block"
      :style="{ backgroundImage: `url('/img/login-img.jpg')` }"
    >
    </div>
  </div>
</template>