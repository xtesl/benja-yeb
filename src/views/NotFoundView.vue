<template>
  <div class="min-h-screen bg-stone-950 flex flex-col">

    <!-- Minimal nav -->
    <nav class="px-4 sm:px-6 lg:px-8 py-6">
      <div class="max-w-7xl mx-auto">
        <router-link to="/" class="flex items-center gap-3 w-fit group">
          <div class="w-9 h-9 bg-amber-500 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <i class="pi pi-th-large text-stone-950 text-xs -rotate-45 group-hover:rotate-0 transition-transform duration-500"></i>
          </div>
          <div>
            <div class="text-white font-bold text-sm tracking-widest uppercase leading-none">Benja-Yeb</div>
            <div class="text-amber-500 text-xs tracking-widest uppercase leading-none">Tiling & Construction</div>
          </div>
        </router-link>
      </div>
    </nav>

    <!-- Main content -->
    <div class="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div class="max-w-7xl mx-auto w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <!-- Left: Text -->
          <div class="order-2 lg:order-1">

            <p class="text-amber-500 text-xs tracking-[0.35em] uppercase font-medium mb-8 page-item" style="animation-delay: 0.1s;">
              Error 404
            </p>

            <h1 class="text-6xl sm:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tight mb-8 page-item" style="animation-delay: 0.2s;">
              This Page<br>
              Doesn't<br>
              <span class="text-amber-500">Exist.</span>
            </h1>

            <p class="text-stone-400 text-base leading-relaxed max-w-md mb-12 page-item" style="animation-delay: 0.35s;">
              Looks like this page was never laid — or it's been pulled up for renovation. Let's get you back on solid ground.
            </p>

            <!-- Actions -->
            <div class="flex flex-wrap gap-4 page-item" style="animation-delay: 0.5s;">
              <router-link to="/"
                class="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold tracking-widest uppercase text-sm px-8 py-4 transition-all duration-200 flex items-center gap-2">
                <i class="pi pi-home"></i> Back to Home
              </router-link>
              <router-link to="/contact"
                class="border border-stone-700 hover:border-amber-500 text-stone-300 hover:text-amber-400 font-bold tracking-widest uppercase text-sm px-8 py-4 transition-all duration-200 flex items-center gap-2">
                <i class="pi pi-envelope"></i> Contact Us
              </router-link>
            </div>

            <!-- Quick links -->
            <div class="mt-16 page-item" style="animation-delay: 0.65s;">
              <p class="text-stone-600 text-xs tracking-[0.25em] uppercase mb-5">Or go to</p>
              <div class="flex flex-wrap gap-x-8 gap-y-3">
                <router-link v-for="link in quickLinks" :key="link.name" :to="link.to"
                  class="text-stone-500 hover:text-amber-400 text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <i class="pi pi-angle-right text-amber-500/0 group-hover:text-amber-500 text-xs transition-colors"></i>
                  {{ link.name }}
                </router-link>
              </div>
            </div>

          </div>

          <!-- Right: Giant 404 visual -->
          <div class="order-1 lg:order-2 flex items-center justify-center page-item" style="animation-delay: 0.15s;">
            <div class="relative select-none">

              <!-- The tile grid that makes the 404 feel on-brand -->
              <div class="relative">
                <!-- Big 404 text -->
                <div class="text-[22vw] lg:text-[18vw] font-black leading-none tracking-tighter text-stone-900 relative z-10">
                  404
                </div>

                <!-- Cracked tile overlay effect — SVG lines across the number -->
                <svg class="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" fill="none">
                  <!-- Crack lines — feels like a cracked tile -->
                  <path d="M120 20 L95 80 L130 110 L85 180" stroke="#d4a847" stroke-width="0.8" opacity="0.25" stroke-linecap="round"/>
                  <path d="M95 80 L60 95 L40 140" stroke="#d4a847" stroke-width="0.5" opacity="0.15" stroke-linecap="round"/>
                  <path d="M240 10 L265 60 L230 100 L270 160" stroke="#d4a847" stroke-width="0.8" opacity="0.2" stroke-linecap="round"/>
                  <path d="M265 60 L310 75" stroke="#d4a847" stroke-width="0.5" opacity="0.15" stroke-linecap="round"/>
                  <path d="M360 30 L340 90 L380 140 L345 185" stroke="#d4a847" stroke-width="0.7" opacity="0.2" stroke-linecap="round"/>
                </svg>

                <!-- Tile grid background behind the text -->
                <div class="absolute inset-0 z-0 opacity-[0.04]"
                  style="background-image: repeating-linear-gradient(0deg, transparent, transparent 39px, #d4a847 39px, #d4a847 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #d4a847 39px, #d4a847 40px);">
                </div>
              </div>

              <!-- Ambient glow under the number -->
              <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-amber-500/5 blur-3xl rounded-full"></div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Footer strip -->
    <div class="px-4 sm:px-6 lg:px-8 py-6" style="border-top: 1px solid rgba(255,255,255,0.05);">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-stone-700 text-xs">© {{ new Date().getFullYear() }} Benja-Yeb Tiling & Construction</p>
        <p class="text-stone-700 text-xs">Accra, Ghana &mdash; Serving nationwide</p>
      </div>
    </div>

  </div>
</template>

<script setup>
const quickLinks = [
  { name: 'Services', to: '/services' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
]
</script>

<style scoped>
.page-item {
  opacity: 0;
  transform: translateY(20px);
  animation: pageReveal 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes pageReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>