<template>
  <div class="home">

    <!-- ===== NAVBAR ===== -->
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         :class="scrolled ? 'bg-stone-950/95 backdrop-blur shadow-lg shadow-black/20' : 'bg-transparent'">
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

          <button class="md:hidden text-white p-2" @click="mobileOpen = !mobileOpen">
            <i :class="mobileOpen ? 'pi pi-times' : 'pi pi-bars'" class="text-xl"></i>
          </button>
        </div>
      </div>

      <div v-if="mobileOpen" class="md:hidden bg-stone-950 border-t border-stone-800 px-4 py-6 flex flex-col gap-5">
        <router-link v-for="link in navLinks" :key="link.name" :to="link.to"
          class="text-stone-300 hover:text-amber-400 text-sm tracking-widest uppercase transition-colors"
          @click="mobileOpen = false">
          {{ link.name }}
        </router-link>
        <router-link to="/contact"
          class="bg-amber-500 text-stone-950 text-sm font-bold tracking-widest uppercase px-6 py-3 text-center"
          @click="mobileOpen = false">
          Get a Quote
        </router-link>
      </div>
    </nav>

    <!-- ===== HERO ===== -->
    <section class="relative min-h-screen flex items-end pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-stone-950">
        <div class="absolute inset-0 opacity-10"
          style="background-image: repeating-linear-gradient(0deg, transparent, transparent 79px, #d4a847 79px, #d4a847 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, #d4a847 79px, #d4a847 80px);">
        </div>
        <div class="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/40"></div>
        <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-stone-950 to-transparent"></div>
        <div class="absolute top-1/4 right-0 w-1/2 h-1/2 bg-amber-500/5 blur-3xl rounded-full"></div>
      </div>
      <div class="absolute top-1/2 right-4 -translate-y-1/2 text-[12vw] font-black text-white/3 leading-none select-none uppercase tracking-tighter hidden lg:block">BUILD</div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 w-full">
        <div class="max-w-3xl">

          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-px bg-amber-500"></div>
            <span class="text-amber-500 text-xs tracking-[0.3em] uppercase font-medium">Ghana's Trusted Craftsmen</span>
          </div>

          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6 uppercase">
            Built With<br>
            <span class="text-amber-500">Precision.</span><br>
            Finished With<br>
            Pride.
          </h1>

          <p class="text-stone-400 text-lg leading-relaxed max-w-xl mb-10">
            From a single bathroom floor to a full commercial fit-out — Benja-Yeb delivers expert tiling and construction work that stands the test of time.
          </p>

          <div class="flex flex-wrap gap-4 mb-16">
            <router-link to="/contact"
              class="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold tracking-widest uppercase text-sm px-8 py-4 transition-all duration-200 flex items-center gap-2">
              <i class="pi pi-file-edit"></i> Get a Free Quote
            </router-link>
            <router-link to="/portfolio"
              class="border border-stone-600 hover:border-amber-500 text-white hover:text-amber-400 font-bold tracking-widest uppercase text-sm px-8 py-4 transition-all duration-200 flex items-center gap-2">
              <i class="pi pi-images"></i> View Our Work
            </router-link>
          </div>

          <!-- STATS — big numbers, plain text labels, no icons or badges -->
          <div class="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-stone-800/60">
            <div v-for="stat in stats" :key="stat.label">
              <div class="text-5xl font-black text-white leading-none tracking-tight">{{ stat.value }}</div>
              <div class="text-stone-500 text-xs leading-snug mt-2 max-w-[110px]">{{ stat.label }}</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- TRUST BAR — ruled dividers, label + one-line sub, no icons or checkmarks -->
    <div class="bg-stone-900 border-y border-stone-800 overflow-x-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex divide-x divide-stone-800 min-w-max md:min-w-0">
          <div v-for="trust in trustItems" :key="trust.label"
            class="flex items-center gap-4 px-8 py-6 first:pl-0">
            <div class="w-0.5 h-9 bg-amber-500 flex-shrink-0"></div>
            <div>
              <div class="text-white text-sm font-bold leading-tight tracking-wide">{{ trust.label }}</div>
              <div class="text-stone-500 text-xs mt-0.5">{{ trust.sub }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== ABOUT STRIP ===== -->
    <section class="bg-stone-900 py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-px bg-amber-500"></div>
              <span class="text-amber-500 text-xs tracking-[0.3em] uppercase">Who We Are</span>
            </div>
            <h2 class="text-4xl font-black text-white uppercase leading-tight mb-6">Accra-Based.<br>Ghana-Proud.</h2>
            <p class="text-stone-400 leading-relaxed mb-5">
              Benja-Yeb Tiling & Construction was built on a simple belief: every surface we touch should reflect quality. For over a decade we've worked on homes, offices, hotels, and commercial spaces across Ghana — delivering finishes that impress long after we've packed up.
            </p>
            <p class="text-stone-400 leading-relaxed mb-8">
              Our team brings a hands-on approach to every job, from initial consultation through final inspection. No subcontracting. No shortcuts. Just skilled craftsmen who take pride in what they build.
            </p>
            <router-link to="/about"
              class="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm font-bold tracking-widest uppercase transition-colors group">
              Learn More About Us <i class="pi pi-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </router-link>
          </div>

          <!-- FEATURE BLOCKS — numbered grid, no icons, raw border layout -->
          <div class="grid grid-cols-2 border border-stone-700">
            <div v-for="(feat, i) in features" :key="feat.title"
              :class="[
                'p-7 group hover:bg-stone-800/40 transition-colors duration-300',
                i % 2 === 0 ? 'border-r border-stone-700' : '',
                i < 2 ? 'border-b border-stone-700' : '',
              ]">
              <div class="flex items-start justify-between mb-5">
                <span class="text-[3.5rem] font-black text-stone-800 leading-none group-hover:text-stone-700 transition-colors select-none">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <div class="w-0.5 h-7 bg-amber-500 mt-1 flex-shrink-0"></div>
              </div>
              <h3 class="text-white font-bold text-sm uppercase tracking-widest mb-2">{{ feat.title }}</h3>
              <p class="text-stone-500 text-sm leading-relaxed">{{ feat.desc }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ===== SERVICES ===== -->
    <section class="bg-stone-950 py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-px bg-amber-500"></div>
              <span class="text-amber-500 text-xs tracking-[0.3em] uppercase">What We Do</span>
            </div>
            <h2 class="text-4xl lg:text-5xl font-black text-white uppercase leading-tight">Our Services</h2>
          </div>
          <router-link to="/services"
            class="inline-flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm tracking-widest uppercase transition-colors group self-start md:self-auto">
            All Services <i class="pi pi-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </router-link>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-800">
          <div v-for="(service, i) in services" :key="service.title"
            class="bg-stone-950 p-8 hover:bg-stone-900 transition-colors duration-300 group cursor-pointer relative overflow-hidden">
            <div class="text-7xl font-black text-stone-900 absolute top-3 right-5 leading-none group-hover:text-stone-800 transition-colors select-none">
              {{ String(i + 1).padStart(2, '0') }}
            </div>
            <div class="w-0.5 h-10 bg-amber-500 mb-6"></div>
            <h3 class="text-white font-bold text-lg mb-3 uppercase tracking-wide">{{ service.title }}</h3>
            <p class="text-stone-500 text-sm leading-relaxed mb-6">{{ service.desc }}</p>
            <div class="flex items-center gap-2 text-amber-500 text-xs tracking-widest uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn More <i class="pi pi-arrow-right"></i>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ===== PORTFOLIO ===== -->
    <section class="bg-stone-900 py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-px bg-amber-500"></div>
              <span class="text-amber-500 text-xs tracking-[0.3em] uppercase">Our Work</span>
            </div>
            <h2 class="text-4xl lg:text-5xl font-black text-white uppercase leading-tight">Recent Projects</h2>
          </div>
          <router-link to="/portfolio"
            class="inline-flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm tracking-widest uppercase transition-colors group self-start md:self-auto">
            Full Portfolio <i class="pi pi-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </router-link>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-3 gap-3">
          <div v-for="(project, i) in portfolioItems" :key="i"
            :class="[project.tall ? 'row-span-2' : '', 'group relative overflow-hidden bg-stone-800 cursor-pointer']">
            <div class="w-full h-full min-h-[200px]"
              :style="{ background: project.bg, aspectRatio: project.tall ? 'unset' : '4/3' }">
              <div class="absolute inset-0 opacity-20"
                style="background-image: repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px);">
              </div>
            </div>
            <div class="absolute inset-0 bg-stone-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <div class="text-amber-500 text-xs tracking-widest uppercase mb-1">{{ project.type }}</div>
                <div class="text-white font-bold">{{ project.title }}</div>
                <div class="text-stone-400 text-sm">{{ project.location }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ===== HOW WE WORK ===== -->
    <section class="bg-stone-950 py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-8 h-px bg-amber-500"></div>
            <span class="text-amber-500 text-xs tracking-[0.3em] uppercase">The Process</span>
            <div class="w-8 h-px bg-amber-500"></div>
          </div>
          <h2 class="text-4xl lg:text-5xl font-black text-white uppercase">How We Work</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, i) in process" :key="i" class="relative">
            <div v-if="i < process.length - 1"
              class="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-50%] h-px bg-stone-800 z-0"></div>
            <div class="relative z-10 text-center">
              <div class="w-16 h-16 bg-stone-900 border border-stone-700 flex items-center justify-center mx-auto mb-6 relative">
                <i :class="step.icon" class="text-amber-500 text-xl"></i>
                <div class="absolute -top-3 -right-3 w-6 h-6 bg-amber-500 flex items-center justify-center">
                  <span class="text-stone-950 text-xs font-black">{{ i + 1 }}</span>
                </div>
              </div>
              <h3 class="text-white font-bold text-sm tracking-widest uppercase mb-3">{{ step.title }}</h3>
              <p class="text-stone-500 text-sm leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIALS — editorial, no avatar bubbles ===== -->
    <section class="bg-stone-900 py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-px bg-amber-500"></div>
              <span class="text-amber-500 text-xs tracking-[0.3em] uppercase">Client Reviews</span>
            </div>
            <h2 class="text-4xl font-black text-white uppercase">What Clients Say</h2>
          </div>
          <!-- Overall rating: large number, plain text, no star-icon loop -->
          <div class="flex items-end gap-4 self-start md:self-auto pb-1">
            <span class="text-7xl font-black text-white leading-none">4.9</span>
            <div>
              <div class="text-amber-500 text-xl leading-none mb-1 tracking-widest">★★★★★</div>
              <div class="text-stone-500 text-xs">from 60+ verified clients</div>
              <div class="text-stone-600 text-xs">across Ghana</div>
            </div>
          </div>
        </div>

        <!-- Cards: editorial style, gap-px grid, big quotemark, ruled author line -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800">
          <div v-for="review in testimonials" :key="review.name"
            class="bg-stone-900 p-8 hover:bg-stone-800/50 transition-colors duration-300 flex flex-col justify-between">
            <div>
              <!-- Large quote mark — typographic, not an icon -->
              <div class="text-8xl font-black leading-none text-amber-500/15 mb-1 -ml-1 font-serif select-none">"</div>
              <p class="text-stone-300 text-sm leading-[1.85]">{{ review.text }}</p>
            </div>
            <!-- Author block: rule + name + role, no avatar, no badge -->
            <div class="mt-8 pt-5 border-t border-stone-700/60">
              <div class="text-white font-bold text-sm tracking-wide">{{ review.name }}</div>
              <div class="text-stone-500 text-xs mt-0.5">{{ review.role }}</div>
              <div class="text-amber-500 text-sm mt-3 tracking-[0.2em]">★★★★★</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ===== CTA BANNER ===== -->
    <section class="bg-amber-500 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 class="text-3xl lg:text-4xl font-black text-stone-950 uppercase leading-tight mb-3">Ready to Start Your Project?</h2>
            <p class="text-stone-800 text-sm leading-relaxed max-w-xl">
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
    <footer class="bg-stone-950 border-t border-stone-800 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div class="lg:col-span-1">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 bg-amber-500 flex items-center justify-center rotate-45">
                <i class="pi pi-th-large text-stone-950 text-xs -rotate-45"></i>
              </div>
              <div>
                <div class="text-white font-bold text-sm tracking-widest uppercase leading-none">Benja-Yeb</div>
                <div class="text-amber-500 text-xs tracking-widest uppercase">Tiling & Construction</div>
              </div>
            </div>
            <p class="text-stone-500 text-sm leading-relaxed mb-6">Professional tiling and construction services across Ghana. Built on quality. Finished with pride.</p>
            <div class="flex gap-3">
              <a href="#" class="w-8 h-8 border border-stone-700 hover:border-amber-500 flex items-center justify-center text-stone-400 hover:text-amber-500 transition-colors">
                <i class="pi pi-facebook text-sm"></i>
              </a>
              <a href="#" class="w-8 h-8 border border-stone-700 hover:border-amber-500 flex items-center justify-center text-stone-400 hover:text-amber-500 transition-colors">
                <i class="pi pi-instagram text-sm"></i>
              </a>
              <a href="#" class="w-8 h-8 border border-stone-700 hover:border-amber-500 flex items-center justify-center text-stone-400 hover:text-amber-500 transition-colors">
                <i class="pi pi-twitter text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 class="text-white text-xs font-bold tracking-widest uppercase mb-5">Navigation</h4>
            <ul class="space-y-3">
              <li v-for="link in navLinks" :key="link.name">
                <router-link :to="link.to" class="text-stone-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group">
                  <i class="pi pi-angle-right text-xs text-amber-500/0 group-hover:text-amber-500 transition-colors"></i>
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-white text-xs font-bold tracking-widest uppercase mb-5">Services</h4>
            <ul class="space-y-3">
              <li v-for="s in services.slice(0, 5)" :key="s.title">
                <router-link to="/services" class="text-stone-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group">
                  <i class="pi pi-angle-right text-xs text-amber-500/0 group-hover:text-amber-500 transition-colors"></i>
                  {{ s.title }}
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-white text-xs font-bold tracking-widest uppercase mb-5">Contact</h4>
            <ul class="space-y-4">
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

        <div class="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
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
  { icon: 'pi pi-th-large', title: 'Floor & Wall Tiling', desc: 'Ceramic, porcelain, natural stone, and mosaic tiling for kitchens, bathrooms, living areas, and more.' },
  { icon: 'pi pi-home', title: 'Bathroom Renovation', desc: 'Complete bathroom transformations including tiling, waterproofing, wet rooms, and shower enclosures.' },
  { icon: 'pi pi-building', title: 'New Construction', desc: 'Ground-up residential and commercial builds from foundation to finishing with full project management.' },
  { icon: 'pi pi-box', title: 'Commercial Fit-Out', desc: 'Large-scale tiling and construction for offices, hotels, malls, and hospitality spaces across Ghana.' },
  { icon: 'pi pi-refresh', title: 'Repairs & Restoration', desc: 'Regrouting, cracked tile replacement, surface restoration, and damp-proofing for existing structures.' },
  { icon: 'pi pi-sun', title: 'Outdoor & Landscaping', desc: 'Pool surrounds, patio paving, driveway tiling, and exterior hard landscaping built to last outdoors.' },
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