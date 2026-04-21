<template>
  <div class="home">

    <!-- ===== NAVBAR ===== -->
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         :class="scrolled ? 'bg-stone-950/95 backdrop-blur' : 'bg-transparent'">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">

          <router-link to="/" class="flex items-center gap-3 group">
            <div class="w-10 h-10 bg-amber-500 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <i class="pi pi-th-large text-stone-950 text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-500"></i>
            </div>
            <div>
              <div class="text-white font-bold text-sm tracking-widest uppercase leading-none">Benja-Yeb</div>
              <div class="text-amber-500 text-xs tracking-widest uppercase leading-none">Tiling & Construction</div>
            </div>
          </router-link>

          <div class="hidden md:flex items-center gap-8">
            <router-link v-for="link in navLinks" :key="link.name" :to="link.to"
              class="text-stone-300 hover:text-amber-400 text-sm tracking-widest uppercase transition-colors duration-200 relative group">
              {{ link.name }}
              <span class="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </router-link>
            <router-link to="/contact"
              class="bg-amber-500 hover:bg-amber-400 text-stone-950 text-sm font-bold tracking-widest uppercase px-6 py-3 transition-all duration-200">
              Get a Quote
            </router-link>
          </div>

          <button class="md:hidden text-white p-2 flex items-center justify-center" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
            <svg v-if="!mobileOpen" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="3" y="4" width="8" height="20" rx="2" fill="white" opacity="0.9"/>
              <rect x="14" y="4" width="11" height="9" rx="2" fill="white" opacity="0.9"/>
              <rect x="14" y="15" width="11" height="9" rx="2" fill="white" opacity="0.9"/>
            </svg>
            <svg v-else width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line x1="3" y1="3" x2="19" y2="19" stroke="white" stroke-width="2" stroke-linecap="round"/>
              <line x1="19" y1="3" x2="3" y2="19" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div v-if="mobileOpen" class="md:hidden bg-stone-950 px-6 py-8 flex flex-col gap-6">
        <router-link v-for="link in navLinks" :key="link.name" :to="link.to"
          class="text-stone-300 hover:text-amber-400 text-sm tracking-widest uppercase transition-colors"
          @click="mobileOpen = false">
          {{ link.name }}
        </router-link>
        <router-link to="/contact"
          class="bg-amber-500 text-stone-950 text-sm font-bold tracking-widest uppercase px-6 py-3 text-center mt-2"
          @click="mobileOpen = false">
          Get a Quote
        </router-link>
      </div>
    </nav>

    <!-- ===== HERO ===== -->
    <!-- Hero content animates on page load via CSS keyframes, not scroll -->
    <section class="relative min-h-screen flex items-end pb-24 overflow-hidden">
      <div class="absolute inset-0 bg-stone-950">
        <div class="absolute inset-0 opacity-[0.07]"
          style="background-image: repeating-linear-gradient(0deg, transparent, transparent 79px, #d4a847 79px, #d4a847 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, #d4a847 79px, #d4a847 80px);">
        </div>
        <div class="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-stone-950 to-transparent"></div>
      </div>

      <div class="absolute top-1/2 right-0 -translate-y-1/2 text-[13vw] font-black text-white/[0.025] leading-none select-none uppercase tracking-tighter hidden lg:block pr-8">
        BUILD
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 w-full">
        <div class="max-w-3xl">

          <!-- Each hero element staggers in on load via hero-* CSS animation classes -->
          <p class="text-amber-500 text-xs tracking-[0.35em] uppercase font-medium mb-8 hero-item" style="animation-delay: 0.1s;">
            Ghana's Trusted Craftsmen
          </p>

          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.93] tracking-tight mb-8 uppercase hero-item" style="animation-delay: 0.25s;">
            Built With<br>
            <span class="text-amber-500">Precision.</span><br>
            Finished With<br>
            Pride.
          </h1>

          <p class="text-stone-400 text-lg leading-relaxed max-w-xl mb-12 hero-item" style="animation-delay: 0.45s;">
            From a single bathroom floor to a full commercial fit-out — Benja-Yeb delivers expert tiling and construction work that stands the test of time.
          </p>

          <div class="flex flex-wrap gap-4 mb-20 hero-item" style="animation-delay: 0.6s;">
            <router-link to="/contact"
              class="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold tracking-widest uppercase text-sm px-8 py-4 transition-all duration-200 flex items-center gap-2">
              <i class="pi pi-file-edit"></i> Get a Free Quote
            </router-link>
            <router-link to="/portfolio"
              class="border border-stone-600 hover:border-amber-500 text-white hover:text-amber-400 font-bold tracking-widest uppercase text-sm px-8 py-4 transition-all duration-200 flex items-center gap-2">
              <i class="pi pi-images"></i> View Our Work
            </router-link>
          </div>

          <!-- Stats stagger in on load -->
          <div class="flex flex-wrap gap-x-14 gap-y-8 hero-item" style="animation-delay: 0.75s;">
            <div v-for="stat in stats" :key="stat.label">
              <div class="text-5xl font-black text-white leading-none tracking-tight">{{ stat.value }}</div>
              <div class="text-stone-500 text-xs leading-snug mt-2 max-w-[110px]">{{ stat.label }}</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ===== TRUST BAR ===== -->
    <!-- Slides up as a whole when it enters viewport -->
    <div class="bg-stone-900 overflow-x-auto" v-scroll-reveal>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex min-w-max md:min-w-0">
          <div v-for="(trust, i) in trustItems" :key="trust.label"
            class="flex flex-col px-10 py-8 first:pl-0">
            <div class="text-white text-sm font-bold tracking-wide">{{ trust.label }}</div>
            <div class="text-stone-500 text-xs mt-1">{{ trust.sub }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== ABOUT ===== -->
    <section class="bg-stone-950 py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <!-- Left text block slides in from left -->
          <div v-scroll-reveal.slide-left>
            <p class="text-amber-500 text-xs tracking-[0.35em] uppercase mb-6">Who We Are</p>
            <h2 class="text-4xl font-black text-white uppercase leading-tight mb-8">
              Accra-Based.<br>Ghana-Proud.
            </h2>
            <p class="text-stone-400 leading-relaxed mb-5">
              Benja-Yeb Tiling & Construction was built on a simple belief: every surface we touch should reflect quality. For over a decade we've worked on homes, offices, hotels, and commercial spaces across Ghana — delivering finishes that impress long after we've packed up.
            </p>
            <p class="text-stone-400 leading-relaxed mb-10">
              Our team brings a hands-on approach to every job, from initial consultation through final inspection. No subcontracting. No shortcuts. Just skilled craftsmen who take pride in what they build.
            </p>
            <router-link to="/about"
              class="inline-flex items-center gap-2 text-amber-500 hover:text-amber-300 text-sm font-bold tracking-widest uppercase transition-colors group">
              Learn More About Us
              <i class="pi pi-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </router-link>
          </div>

          <!-- Feature blocks stagger in from right -->
          <div v-scroll-reveal.slide-right class="grid grid-cols-2 gap-x-10 gap-y-12 pt-2">
            <div v-for="(feat, i) in features" :key="feat.title">
              <div class="text-5xl font-black text-stone-800 leading-none mb-4 select-none">
                {{ String(i + 1).padStart(2, '0') }}
              </div>
              <h3 class="text-white font-bold text-sm uppercase tracking-widest mb-2">{{ feat.title }}</h3>
              <p class="text-stone-500 text-sm leading-relaxed">{{ feat.desc }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ===== SERVICES ===== -->
    <section class="bg-stone-900 py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Header fades up -->
        <div v-scroll-reveal class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p class="text-amber-500 text-xs tracking-[0.35em] uppercase mb-5">What We Do</p>
            <h2 class="text-4xl lg:text-5xl font-black text-white uppercase leading-tight">Our Services</h2>
          </div>
          <router-link to="/services"
            class="inline-flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm tracking-widest uppercase transition-colors group self-start md:self-auto mb-1">
            All Services <i class="pi pi-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </router-link>
        </div>

        <!-- Service cards stagger in one by one -->
        <div v-scroll-reveal.stagger class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-800/40">
          <div v-for="(service, i) in services" :key="service.title"
            class="bg-stone-900 px-8 py-10 hover:bg-stone-800/50 transition-colors duration-300 group cursor-pointer relative overflow-hidden">
            <div class="text-7xl font-black text-stone-800/60 absolute top-4 right-5 leading-none group-hover:text-stone-700/50 transition-colors select-none">
              {{ String(i + 1).padStart(2, '0') }}
            </div>
            <h3 class="text-white font-bold text-base mb-3 uppercase tracking-wide relative z-10">{{ service.title }}</h3>
            <p class="text-stone-500 text-sm leading-relaxed mb-6 relative z-10">{{ service.desc }}</p>
            <div class="flex items-center gap-2 text-amber-500 text-xs tracking-widest uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
              Learn More <i class="pi pi-arrow-right"></i>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ===== PORTFOLIO ===== -->
    <section class="bg-stone-950 py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Header fades up -->
        <div v-scroll-reveal class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p class="text-amber-500 text-xs tracking-[0.35em] uppercase mb-5">Our Work</p>
            <h2 class="text-4xl lg:text-5xl font-black text-white uppercase leading-tight">Recent Projects</h2>
          </div>
          <router-link to="/portfolio"
            class="inline-flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm tracking-widest uppercase transition-colors group self-start md:self-auto mb-1">
            Full Portfolio <i class="pi pi-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </router-link>
        </div>

        <!-- Portfolio grid: each item scales up slightly on reveal -->
        <div v-scroll-reveal.stagger class="grid grid-cols-2 lg:grid-cols-3 gap-3">
          <div v-for="(project, i) in portfolioItems" :key="i"
            :class="[project.tall ? 'row-span-2' : '', 'group relative overflow-hidden cursor-pointer']">
            <div class="w-full h-full min-h-[200px]"
              :style="{ background: project.bg, aspectRatio: project.tall ? 'unset' : '4/3' }">
              <div class="absolute inset-0 opacity-[0.12]"
                style="background-image: repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.8) 39px, rgba(255,255,255,0.8) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.8) 39px, rgba(255,255,255,0.8) 40px);">
              </div>
            </div>
            <div class="absolute inset-0 bg-stone-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <div class="text-amber-500 text-xs tracking-[0.25em] uppercase mb-1">{{ project.type }}</div>
                <div class="text-white font-bold text-sm">{{ project.title }}</div>
                <div class="text-stone-400 text-xs mt-0.5">{{ project.location }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ===== HOW WE WORK ===== -->
    <section class="bg-stone-900 py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Heading fades up -->
        <div v-scroll-reveal class="text-center mb-20">
          <p class="text-amber-500 text-xs tracking-[0.35em] uppercase mb-5">The Process</p>
          <h2 class="text-4xl lg:text-5xl font-black text-white uppercase">How We Work</h2>
        </div>

        <!-- Steps stagger in left to right -->
        <div v-scroll-reveal.stagger class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div v-for="(step, i) in process" :key="i" class="text-center">
            <div class="flex flex-col items-center mb-6">
              <span class="text-6xl font-black text-stone-800 leading-none mb-3 select-none">{{ String(i + 1).padStart(2, '0') }}</span>
              <i :class="step.icon" class="text-amber-500 text-2xl"></i>
            </div>
            <h3 class="text-white font-bold text-sm tracking-widest uppercase mb-3">{{ step.title }}</h3>
            <p class="text-stone-500 text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    <section class="bg-stone-950 py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Header: rating slides in from right, heading from left -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div v-scroll-reveal.slide-left>
            <p class="text-amber-500 text-xs tracking-[0.35em] uppercase mb-5">Client Reviews</p>
            <h2 class="text-4xl font-black text-white uppercase">What Clients Say</h2>
          </div>
          <div v-scroll-reveal.slide-right class="flex items-end gap-4 self-start md:self-auto pb-1">
            <span class="text-7xl font-black text-white leading-none">4.9</span>
            <div>
              <div class="text-amber-500 text-lg leading-none mb-1 tracking-widest">★★★★★</div>
              <div class="text-stone-500 text-xs">from 60+ verified clients</div>
              <div class="text-stone-600 text-xs">across Ghana</div>
            </div>
          </div>
        </div>

        <!-- Review cards stagger in -->
        <div v-scroll-reveal.stagger class="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800/30">
          <div v-for="review in testimonials" :key="review.name"
            class="bg-stone-950 px-8 py-10 hover:bg-stone-900/60 transition-colors duration-300 flex flex-col justify-between">
            <div>
              <div class="text-8xl font-black leading-none text-amber-500/10 mb-2 -ml-1 select-none" style="font-family: Georgia, serif;">"</div>
              <p class="text-stone-300 text-sm leading-[1.9]">{{ review.text }}</p>
            </div>
            <div class="mt-10 pt-6" style="border-top: 1px solid rgba(255,255,255,0.06);">
              <div class="text-white font-bold text-sm">{{ review.name }}</div>
              <div class="text-stone-500 text-xs mt-0.5">{{ review.role }}</div>
              <div class="text-amber-500 text-sm mt-3 tracking-[0.2em]">★★★★★</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ===== CTA ===== -->
    <!-- Scale reveal — feels like it "arrives" -->
    <section class="bg-amber-500 py-24" v-scroll-reveal.scale>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <h2 class="text-3xl lg:text-4xl font-black text-stone-950 uppercase leading-tight mb-4">
              Ready to Start Your Project?
            </h2>
            <p class="text-stone-800 text-sm leading-relaxed max-w-lg">
              Get a free, no-obligation quote. We assess your site, understand your vision, and give you a clear plan and price — no surprises.
            </p>
          </div>
          <div class="flex flex-wrap gap-4 flex-shrink-0">
            <router-link to="/contact"
              class="bg-stone-950 hover:bg-stone-800 text-white font-bold tracking-widest uppercase text-sm px-8 py-4 transition-colors flex items-center gap-2">
              <i class="pi pi-phone"></i> Call Us Now
            </router-link>
            <router-link to="/contact"
              class="border-2 border-stone-950 hover:bg-stone-950 hover:text-white text-stone-950 font-bold tracking-widest uppercase text-sm px-8 py-4 transition-all flex items-center gap-2">
              <i class="pi pi-envelope"></i> Send a Message
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <!-- Footer columns stagger up on reveal -->
    <footer class="bg-stone-950 pt-20 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div v-scroll-reveal.stagger class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div class="lg:col-span-1">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-8 h-8 bg-amber-500 flex items-center justify-center rotate-45">
                <i class="pi pi-th-large text-stone-950 text-xs -rotate-45"></i>
              </div>
              <div>
                <div class="text-white font-bold text-sm tracking-widest uppercase leading-none">Benja-Yeb</div>
                <div class="text-amber-500 text-xs tracking-widest uppercase">Tiling & Construction</div>
              </div>
            </div>
            <p class="text-stone-500 text-sm leading-relaxed mb-7">
              Professional tiling and construction services across Ghana. Built on quality. Finished with pride.
            </p>
            <div class="flex gap-3">
              <a href="#" class="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-500 transition-colors">
                <i class="pi pi-facebook text-sm"></i>
              </a>
              <a href="#" class="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-500 transition-colors">
                <i class="pi pi-instagram text-sm"></i>
              </a>
              <a href="#" class="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-500 transition-colors">
                <i class="pi pi-twitter text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 class="text-white text-xs font-bold tracking-widest uppercase mb-6">Navigation</h4>
            <ul class="space-y-4">
              <li v-for="link in navLinks" :key="link.name">
                <router-link :to="link.to" class="text-stone-500 hover:text-amber-400 text-sm transition-colors">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-white text-xs font-bold tracking-widest uppercase mb-6">Services</h4>
            <ul class="space-y-4">
              <li v-for="s in services.slice(0, 5)" :key="s.title">
                <router-link to="/services" class="text-stone-500 hover:text-amber-400 text-sm transition-colors">
                  {{ s.title }}
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-white text-xs font-bold tracking-widest uppercase mb-6">Contact</h4>
            <ul class="space-y-5">
              <li class="flex items-start gap-3">
                <i class="pi pi-map-marker text-amber-500 text-sm mt-0.5"></i>
                <span class="text-stone-500 text-sm leading-relaxed">Accra, Ghana<br>Serving nationwide</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="pi pi-phone text-amber-500 text-sm mt-0.5"></i>
                <span class="text-stone-500 text-sm">+233 XX XXX XXXX</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="pi pi-envelope text-amber-500 text-sm mt-0.5"></i>
                <span class="text-stone-500 text-sm">info@benjayeb.com</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="pi pi-clock text-amber-500 text-sm mt-0.5"></i>
                <span class="text-stone-500 text-sm">Mon – Sat: 7am – 6pm</span>
              </li>
            </ul>
          </div>

        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style="border-top: 1px solid rgba(255,255,255,0.06);">
          <p class="text-stone-600 text-xs">© {{ new Date().getFullYear() }} Benja-Yeb Tiling & Construction. All rights reserved.</p>
          <div class="flex gap-6">
            <router-link to="/privacy" class="text-stone-600 hover:text-stone-400 text-xs transition-colors">Privacy Policy</router-link>
            <router-link to="/terms" class="text-stone-600 hover:text-stone-400 text-xs transition-colors">Terms of Service</router-link>
          </div>
        </div>

      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)
const handleScroll = () => { scrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
]

const stats = [
  { value: '150+', label: 'Projects completed across Ghana' },
  { value: '10+', label: 'Years in tiling & construction' },
  { value: '4.9', label: 'Average rating from our clients' },
]

const trustItems = [
  { label: 'Licensed Contractor', sub: 'Registered & certified in Ghana' },
  { label: 'Fully Insured', sub: 'All jobs covered, zero risk to you' },
  { label: 'Free Site Estimates', sub: 'We come to you, no charge' },
  { label: '5-Year Warranty', sub: 'On all tiling workmanship' },
]

const features = [
  { title: 'No Subcontracting', desc: 'Every job is handled directly by our trained in-house team. You know exactly who is on your site.' },
  { title: 'On-Time, Every Time', desc: 'We agree a timeline upfront and hold to it. Delays cost you — we take that seriously.' },
  { title: 'Written Quotes Only', desc: 'No verbal estimates. Every cost is itemised in writing before a single tile is laid.' },
  { title: 'Quality Materials', desc: 'We source from trusted Ghanaian and imported suppliers. Nothing cheap, nothing that won\'t last.' },
]

const services = [
  { title: 'Floor & Wall Tiling', desc: 'Ceramic, porcelain, natural stone, and mosaic tiling for kitchens, bathrooms, living areas, and more.' },
  { title: 'Bathroom Renovation', desc: 'Complete bathroom transformations including tiling, waterproofing, wet rooms, and shower enclosures.' },
  { title: 'New Construction', desc: 'Ground-up residential and commercial builds from foundation to finishing with full project management.' },
  { title: 'Commercial Fit-Out', desc: 'Large-scale tiling and construction for offices, hotels, malls, and hospitality spaces across Ghana.' },
  { title: 'Repairs & Restoration', desc: 'Regrouting, cracked tile replacement, surface restoration, and damp-proofing for existing structures.' },
  { title: 'Outdoor & Landscaping', desc: 'Pool surrounds, patio paving, driveway tiling, and exterior hard landscaping built to last outdoors.' },
]

const portfolioItems = [
  { title: 'Luxury Bathroom', type: 'Residential Tiling', location: 'East Legon, Accra', bg: 'linear-gradient(135deg, #1c2b3a 0%, #2d4a6e 100%)', tall: true },
  { title: 'Kitchen Floor', type: 'Floor Tiling', location: 'Airport Hills, Accra', bg: 'linear-gradient(135deg, #3d2b1a 0%, #7a5535 100%)', tall: false },
  { title: 'Office Lobby', type: 'Commercial', location: 'Cantonments, Accra', bg: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)', tall: false },
  { title: 'Pool Surround', type: 'Outdoor', location: 'Tema', bg: 'linear-gradient(135deg, #1a3a2a 0%, #2d6a4a 100%)', tall: false },
  { title: 'Feature Wall', type: 'Interior Design', location: 'Kumasi', bg: 'linear-gradient(135deg, #3a1a2a 0%, #6a3a50 100%)', tall: false },
  { title: 'Hotel Corridor', type: 'Commercial', location: 'Labone, Accra', bg: 'linear-gradient(135deg, #2a2a1a 0%, #6a6a2a 100%)', tall: false },
]

const process = [
  { icon: 'pi pi-comments', title: 'Consultation', desc: 'We visit your site, assess the scope, and discuss your vision and requirements.' },
  { icon: 'pi pi-file', title: 'Written Quote', desc: 'You receive a clear, itemised quote with materials, timeline, and cost — all in writing.' },
  { icon: 'pi pi-hammer', title: 'We Build', desc: 'Our skilled team gets to work with precision, keeping you updated throughout.' },
  { icon: 'pi pi-check-square', title: 'Handover', desc: 'Final walkthrough, snag check, and warranty issued. You\'re left with a finish to be proud of.' },
]

const testimonials = [
  {
    text: 'Benja-Yeb completely transformed our bathroom. The tiling is perfect — every grout line is straight and the finish is immaculate. Would recommend to anyone in Accra.',
    name: 'Kwame Asante',
    role: 'Homeowner, East Legon',
  },
  {
    text: 'We hired them for our office renovation and they delivered on time and within budget. Professional team, clean site, and exceptional quality throughout.',
    name: 'Abena Mensah',
    role: 'Business Owner, Cantonments',
  },
  {
    text: 'The outdoor patio tiling they did for us has held up through two rainy seasons without a crack. Solid workmanship and great communication from start to finish.',
    name: 'Kofi Boateng',
    role: 'Property Developer, Tema',
  },
]
</script>

<style>
/* Hero items animate in on page load — no scroll needed */
.hero-item {
  opacity: 0;
  transform: translateY(24px);
  animation: heroReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes heroReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>