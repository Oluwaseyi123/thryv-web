<script setup lang="ts">
import { Moon, Sunrise, Sun, Sunset } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'

const phases = [
  { name: 'Menstrual', icon: Moon, color: '#6E4C6F', days: '1-5', duration: 5 },
  {
    name: 'Follicular',
    icon: Sunrise,
    color: '#CFE1D4',
    days: '6-13',
    duration: 8
  },
  {
    name: 'Ovulatory',
    icon: Sun,
    color: '#F7E6E1',
    days: '14-16',
    duration: 3
  },
  {
    name: 'Luteal',
    icon: Sunset,
    color: '#6E4C6F',
    days: '17-28',
    duration: 12
  }
]

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

// Generate accurate SVG paths for cycle phases
const generatePhasePath = (
  startDay: number,
  duration: number,
  totalDays: number
) => {
  const cx = 100
  const cy = 100
  const radius = 80

  // Convert days to angles (starting from top, going clockwise)
  const startAngle = (startDay / totalDays) * 360 - 90 // -90 to start from top
  const endAngle = ((startDay + duration) / totalDays) * 360 - 90

  // Convert to radians
  const startRad = (startAngle * Math.PI) / 180
  const endRad = (endAngle * Math.PI) / 180

  // Calculate points
  const x1 = cx + radius * Math.cos(startRad)
  const y1 = cy + radius * Math.sin(startRad)
  const x2 = cx + radius * Math.cos(endRad)
  const y2 = cy + radius * Math.sin(endRad)

  // Large arc flag if angle > 180 degrees
  const largeArc = duration > totalDays / 2 ? 1 : 0

  return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`
}

const phasePaths = [
  {
    path: generatePhasePath(0, 5, 28),
    fill: '#6E4C6F',
    opacity: '0.2',
    darkClass: 'dark:opacity-30'
  },
  {
    path: generatePhasePath(5, 8, 28),
    fill: '#CFE1D4',
    opacity: '0.3',
    darkClass: 'dark:opacity-20'
  },
  {
    path: generatePhasePath(13, 3, 28),
    fill: '#F7E6E1',
    opacity: '0.4',
    darkClass: 'dark:opacity-25'
  },
  {
    path: generatePhasePath(16, 12, 28),
    fill: '#6E4C6F',
    opacity: '0.15',
    darkClass: 'dark:opacity-20'
  }
]

// Calculate label positions based on phase centers
const getLabelPosition = (startDay: number, duration: number) => {
  const centerDay = startDay + duration / 2
  const angle = (centerDay / 28) * 360 - 90 // -90 to start from top
  const angleRad = (angle * Math.PI) / 180
  const distance = 40 // percentage from center

  return {
    left: `${50 + distance * Math.cos(angleRad)}%`,
    top: `${50 + distance * Math.sin(angleRad)}%`
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }

  onUnmounted(() => {
    if (sectionRef.value) {
      observer.unobserve(sectionRef.value)
    }
  })
})
</script>

<template>
  <section
    id="science"
    ref="sectionRef"
    class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-secondary/20 via-white to-blush-pink/30 dark:from-[#251c29] dark:via-dark-background dark:to-dark-background"
  >
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16 space-y-4">
        <div
          class="inline-block px-4 py-2 bg-white/60 dark:bg-[#2d2534]/60 backdrop-blur-sm rounded-full border border-primary/10 dark:border-blush-pink/10"
        >
          <span
            class="text-primary dark:text-blush-pink"
            :style="{ fontSize: '0.875rem', fontWeight: '600' }"
          >
            THE SCIENCE
          </span>
        </div>

        <h2
          class="text-foreground dark:text-blush-pink"
          :style="{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            lineHeight: '1.2'
          }"
        >
          The science behind Thryve
        </h2>

        <p
          class="text-foreground/70 dark:text-blush-pink/70 max-w-2xl mx-auto"
          :style="{ fontSize: '1.125rem' }"
        >
          Understanding your menstrual cycle is key to optimizing your wellness.
        </p>
      </div>

      <!-- Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-start mb-16">
        <!-- Left - Explanation -->
        <div class="space-y-6">
          <div
            class="bg-white dark:bg-[#251c29] border border-primary/10 dark:border-blush-pink/10 rounded-2xl p-8 space-y-4"
          >
            <h3
              class="text-foreground dark:text-blush-pink"
              :style="{ fontSize: '1.5rem', fontWeight: '700' }"
            >
              Your cycle affects everything
            </h3>
            <div
              class="space-y-3 text-foreground/80 dark:text-blush-pink/80"
              :style="{ lineHeight: '1.7' }"
            >
              <p>
                Your menstrual cycle isn't just about your period. It's a
                complex hormonal rhythm that influences your energy, strength,
                mood, metabolism, and recovery.
              </p>
              <p>
                <span
                  class="text-primary dark:text-secondary"
                  :style="{ fontWeight: '600' }"
                >
                  Estrogen and progesterone
                </span>
                rise and fall throughout your cycle, creating four distinct
                phases — each with unique characteristics.
              </p>
              <p>
                When you align your training, nutrition, and daily habits with
                these phases, you can maximize your results while minimizing
                burnout and frustration.
              </p>
            </div>
          </div>

          <div
            class="bg-white dark:bg-[#251c29] border border-primary/10 dark:border-blush-pink/10 rounded-2xl p-8 space-y-4"
          >
            <h3
              class="text-foreground dark:text-blush-pink"
              :style="{ fontSize: '1.5rem', fontWeight: '700' }"
            >
              PCOS & irregular cycles
            </h3>
            <p
              class="text-foreground/80 dark:text-blush-pink/80"
              :style="{ lineHeight: '1.7' }"
            >
              Not everyone has a "textbook" 28-day cycle. Thryve is designed to
              be flexible and inclusive, with features specifically for PCOS and
              irregular cycles. You can still benefit from cycle syncing — we'll
              help you find your patterns.
            </p>
          </div>
        </div>

        <!-- Right - Cycle Diagram -->
        <div
          class="bg-white dark:bg-[#251c29] border border-primary/10 dark:border-blush-pink/10 rounded-2xl p-8"
        >
          <h3
            class="text-center text-foreground dark:text-blush-pink mb-8"
            :style="{ fontSize: '1.25rem', fontWeight: '700' }"
          >
            The Four Phases
          </h3>

          <!-- Circular Diagram -->
          <div
            class="relative w-full aspect-square max-w-md mx-auto mb-8 transition-all duration-700 ease-out"
            :class="{
              'opacity-0 scale-90': !isVisible,
              'opacity-100 scale-100': isVisible
            }"
          >
            <!-- Center circle -->
            <div
              class="absolute inset-[30%] rounded-full bg-gradient-to-br from-blush-pink dark:from-[#2d2534] to-secondary dark:to-dark-background flex items-center justify-center border-2 border-primary/20 dark:border-blush-pink/20"
            >
              <div class="text-center">
                <div
                  class="text-primary dark:text-blush-pink"
                  :style="{ fontSize: '2.5rem', fontWeight: '700' }"
                >
                  28
                </div>
                <div
                  class="text-foreground/60 dark:text-blush-pink/60"
                  :style="{ fontSize: '0.875rem' }"
                >
                  days
                </div>
              </div>
            </div>

            <!-- Phase segments (visual representation) -->
            <svg
              class="w-full h-full transition-all duration-1000 ease-out"
              :class="{
                'opacity-0 rotate-[-10deg]': !isVisible,
                'opacity-100 rotate-0': isVisible
              }"
              :style="{
                transitionDelay: isVisible ? '200ms' : '0ms'
              }"
              viewBox="0 0 200 200"
            >
              <path
                v-for="(phasePath, index) in phasePaths"
                :key="index"
                :d="phasePath.path"
                :fill="phasePath.fill"
                :opacity="phasePath.opacity"
                :class="phasePath.darkClass"
              />
            </svg>

            <!-- Phase labels positioned around the circle -->
            <div
              v-for="(phase, index) in [
                {
                  ...phases[0],
                  bg: 'bg-primary dark:bg-[#8a6a8b]',
                  text: 'text-white',
                  startDay: 0
                },
                {
                  ...phases[1],
                  bg: 'bg-secondary dark:bg-[#7a9d89]',
                  text: 'text-foreground dark:text-white',
                  startDay: 5
                },
                {
                  ...phases[2],
                  bg: 'bg-blush-pink dark:bg-[#8a6a8b]',
                  text: 'text-foreground dark:text-white',
                  startDay: 13
                },
                {
                  ...phases[3],
                  bg: 'bg-primary/60 dark:bg-[#8a6a8b]',
                  text: 'text-white',
                  startDay: 16
                }
              ]"
              :key="index"
              class="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
              :class="{
                'opacity-0 scale-75': !isVisible,
                'opacity-100 scale-100': isVisible
              }"
              :style="{
                ...getLabelPosition(phase.startDay, phase.duration),
                transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms'
              }"
            >
              <div
                :class="`${phase.bg} ${phase.text} px-3 py-1.5 rounded-full`"
                :style="{ fontSize: '0.75rem', fontWeight: '600' }"
              >
                {{ phase.name }}
              </div>
            </div>
          </div>

          <!-- Phase breakdown -->
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="(phase, index) in phases"
              :key="index"
              class="flex items-center gap-3 p-3 bg-blush-pink/30 dark:bg-[#2d2534]/50 rounded-xl transition-all duration-500 ease-out"
              :class="{
                'opacity-0 translate-y-4': !isVisible,
                'opacity-100 translate-y-0': isVisible
              }"
              :style="{
                transitionDelay: isVisible ? `${index * 100 + 300}ms` : '0ms'
              }"
            >
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center"
                :style="{ backgroundColor: `${phase.color}20` }"
              >
                <component
                  :is="phase.icon"
                  class="w-5 h-5"
                  :style="{ color: phase.color }"
                />
              </div>
              <div>
                <div
                  class="text-foreground dark:text-blush-pink"
                  :style="{ fontSize: '0.875rem', fontWeight: '600' }"
                >
                  {{ phase.name }}
                </div>
                <div
                  class="text-foreground/60 dark:text-blush-pink/60"
                  :style="{ fontSize: '0.75rem' }"
                >
                  Days {{ phase.days }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom note -->
      <div
        class="bg-secondary/20 dark:bg-[#2a3432]/20 border border-primary/10 dark:border-blush-pink/10 rounded-2xl p-8 text-center"
      >
        <p
          class="text-foreground/70 dark:text-blush-pink/70"
          :style="{
            fontSize: '0.875rem',
            fontStyle: 'italic',
            lineHeight: '1.6'
          }"
        >
          <span
            class="text-primary dark:text-secondary"
            :style="{ fontWeight: '600' }"
          >
            Important:
          </span>
          Thryve provides education and guidance based on peer-reviewed
          research. It is not a medical app and does not diagnose or treat any
          conditions. Always consult with your healthcare provider for medical
          advice.
        </p>
      </div>
    </div>
  </section>
</template>
