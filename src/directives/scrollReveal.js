// src/directives/scrollReveal.js
// Uses only inline styles — works with any Tailwind version, no purge issues.
//
// Usage:
//   v-scroll-reveal                  → fade up (default)
//   v-scroll-reveal.fade             → fade only
//   v-scroll-reveal.slide-left       → slide in from left
//   v-scroll-reveal.slide-right      → slide in from right
//   v-scroll-reveal.scale            → scale up + fade
//   v-scroll-reveal.stagger          → children stagger in one by one

const HIDDEN_STYLES = {
  'fade-up':     { opacity: '0', transform: 'translateY(32px)' },
  'fade':        { opacity: '0', transform: 'none' },
  'slide-left':  { opacity: '0', transform: 'translateX(-40px)' },
  'slide-right': { opacity: '0', transform: 'translateX(40px)' },
  'scale':       { opacity: '0', transform: 'scale(0.94)' },
}

const TRANSITION = 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)'

export const scrollReveal = {
  mounted(el, binding) {
    const type = Object.keys(binding.modifiers)[0] || 'fade-up'
    const threshold = binding.value?.threshold || 0.12

    if (type === 'stagger') {
      const children = Array.from(el.children)

      // Hide all children immediately
      children.forEach((child, i) => {
        child.style.opacity = '0'
        child.style.transform = 'translateY(28px)'
        child.style.transition = TRANSITION
        child.style.transitionDelay = `${i * 120}ms`
      })

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          children.forEach(child => {
            child.style.opacity = '1'
            child.style.transform = 'none'
          })
          observer.disconnect()
        }
      }, { threshold })

      observer.observe(el)
      return
    }

    // Single element animation
    const hidden = HIDDEN_STYLES[type] || HIDDEN_STYLES['fade-up']

    // Apply hidden state immediately
    el.style.opacity = hidden.opacity
    el.style.transform = hidden.transform
    el.style.transition = TRANSITION
    if (binding.value?.delay) {
      el.style.transitionDelay = `${binding.value.delay}ms`
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'none'
        observer.disconnect()
      }
    }, { threshold })

    observer.observe(el)
  },
}

export default scrollReveal