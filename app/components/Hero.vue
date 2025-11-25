<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
import { ArrowDown, Sparkles } from 'lucide-vue-next'
import { Button } from './ui/button'

const rotatingWords = ['energy', 'training', 'focus', 'recovery', 'wellness']

const currentWordIndex = ref(0)
const isAnimating = ref(false)
const phoneRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

let intervalId: ReturnType<typeof setInterval> | null = null
let timeoutId: ReturnType<typeof setTimeout> | null = null

const scrollToFeatures = () => {
  const el = document.getElementById('features')
  el?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  intervalId = setInterval(() => {
    isAnimating.value = true
    timeoutId = setTimeout(() => {
      currentWordIndex.value
        = (currentWordIndex.value + 1) % rotatingWords.length
      isAnimating.value = false
    }, 300)
  }, 3000)

  // Intersection observer for phone animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    {
      threshold: 0.1
    }
  )

  if (phoneRef.value) {
    observer.observe(phoneRef.value)
  }

  onUnmounted(() => {
    if (phoneRef.value) {
      observer.unobserve(phoneRef.value)
    }
  })
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
  if (timeoutId) clearTimeout(timeoutId)
})
</script>

<template>
  <section
    class="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center"
  >
    <!-- Gradient Background -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-[#F7E6E1] via-[#FDFBF9] to-[#CFE1D4]/40 dark:from-[#1a1420] dark:via-[#251c29] dark:to-[#2a3432]/40 -z-10"
    />

    <!-- Abstract Shapes -->
    <div
      class="absolute top-20 right-10 w-72 h-72 bg-[#CFE1D4]/30 dark:bg-[#7a9d89]/10 rounded-full blur-3xl -z-10"
    />
    <div
      class="absolute bottom-20 left-10 w-96 h-96 bg-[#F7E6E1]/40 dark:bg-[#6E4C6F]/20 rounded-full blur-3xl -z-10"
    />

    <div class="container mx-auto max-w-7xl w-full">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left space-y-8 order-2 lg:order-1">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-[#2d2534]/60 backdrop-blur-sm rounded-full border border-[#6E4C6F]/10 dark:border-[#F7E6E1]/10"
          >
            <Sparkles class="w-4 h-4 text-[#6E4C6F] dark:text-[#F7E6E1]" />
            <span
              class="text-[#6E4C6F] dark:text-[#F7E6E1]"
              :style="{ fontSize: '0.875rem', fontWeight: 600 }"
            >
              Hormone-aware wellness
            </span>
          </div>

          <div class="space-y-4">
            <h1
              class="text-[#2D2D2D] dark:text-[#F7E6E1]"
              :style="{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.1
              }"
            >
              Transform your
              <span class="relative inline-block">
                <span
                  :class="[
                    'text-[#6E4C6F] dark:text-[#CFE1D4] transition-all duration-300',
                    isAnimating
                      ? 'opacity-0 translate-y-4'
                      : 'opacity-100 translate-y-0'
                  ]"
                  :style="{ display: 'inline-block' }"
                >
                  {{ rotatingWords[currentWordIndex] }}
                </span>
              </span>
              <br>
              with your cycle.
            </h1>
          </div>

          <p
            class="text-[#2D2D2D]/80 dark:text-[#F7E6E1]/70 max-w-xl mx-auto lg:mx-0"
            :style="{ fontSize: '1.25rem', lineHeight: 1.7 }"
          >
            Thryve helps you work with your hormones — not against them —
            through cycle-aware workouts, nutrition, and daily insights.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
            <Button
              class="h-14 px-8 bg-[#6E4C6F] hover:bg-[#5a3d5b] dark:bg-[#F7E6E1] dark:hover:bg-white dark:text-[#1a1420] text-white rounded-xl"
              :style="{ fontSize: '1.125rem', fontWeight: 600 }"
            >
              Get Early Access
            </Button>

            <Button
              variant="outline"
              class="h-14 px-8 bg-transparent hover:bg-[#6E4C6F]/5 dark:hover:bg-[#F7E6E1]/5 text-[#6E4C6F] dark:text-[#F7E6E1] border-[#6E4C6F]/30 dark:border-[#F7E6E1]/30 rounded-xl"
              :style="{ fontSize: '1.125rem', fontWeight: 600 }"
              @click="scrollToFeatures"
            >
              See how it works
              <ArrowDown class="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        <!-- Right Content - Phone Mockup -->
        <div
          ref="phoneRef"
          class="relative flex items-center justify-center order-1 lg:order-2 transition-all duration-1000 ease-out"
          :class="{
            'opacity-0 translate-x-8 scale-95': !isVisible,
            'opacity-100 translate-x-0 scale-100': isVisible
          }"
        >
          <div class="relative w-full max-w-sm">
            <!-- Decorative elements -->
            <div
              class="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#6E4C6F]/20 dark:from-[#F7E6E1]/10 to-transparent rounded-full blur-2xl"
            />
            <div
              class="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-[#CFE1D4]/40 dark:from-[#7a9d89]/20 to-transparent rounded-full blur-2xl"
            />

            <!-- Phone mockup -->
            <div
              class="relative bg-white dark:bg-[#251c29] rounded-3xl shadow-2xl p-3 border border-[#6E4C6F]/10 dark:border-[#F7E6E1]/10"
            >
              <div
                class="aspect-[9/19] bg-gradient-to-br from-[#F7E6E1] dark:from-[#2d2534] via-white dark:via-[#251c29] to-[#CFE1D4]/30 dark:to-[#2a3432]/30 rounded-2xl overflow-hidden"
              >
                <!-- Mock app interface -->
                <div class="p-6 space-y-6">
                  <div class="flex items-center justify-between">
                    <div
                      class="w-12 h-12 rounded-full bg-[#6E4C6F]/10 dark:bg-[#F7E6E1]/10 flex items-center justify-center"
                    >
                      <Sparkles
                        class="w-6 h-6 text-[#6E4C6F] dark:text-[#F7E6E1]"
                      />
                    </div>
                    <div
                      class="px-3 py-1 bg-[#CFE1D4]/50 dark:bg-[#7a9d89]/20 rounded-full"
                    >
                      <span
                        :style="{ fontSize: '0.75rem', fontWeight: 600 }"
                        class="text-[#2D2D2D] dark:text-[#CFE1D4]"
                      >
                        Follicular Phase
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3
                      :style="{ fontSize: '1.5rem', fontWeight: 600 }"
                      class="text-[#2D2D2D] dark:text-[#F7E6E1] mb-2"
                    >
                      Good morning!
                    </h3>
                    <p
                      class="text-[#2D2D2D]/60 dark:text-[#F7E6E1]/60"
                      :style="{ fontSize: '0.875rem' }"
                    >
                      Day 8 of your cycle
                    </p>
                  </div>

                  <div
                    class="bg-white/80 dark:bg-[#1a1420]/40 rounded-2xl p-4 space-y-3 border border-[#6E4C6F]/10 dark:border-[#F7E6E1]/10"
                  >
                    <div class="flex items-center justify-between">
                      <span
                        class="text-[#2D2D2D]/60 dark:text-[#F7E6E1]/60"
                        :style="{ fontSize: '0.875rem' }"
                      >
                        Energy Level
                      </span>
                      <span
                        class="text-[#6E4C6F] dark:text-[#CFE1D4]"
                        :style="{ fontSize: '0.875rem', fontWeight: 600 }"
                      >
                        Rising ↗
                      </span>
                    </div>
                    <div
                      class="h-2 bg-[#F7E6E1] dark:bg-[#2d2534] rounded-full overflow-hidden"
                    >
                      <div
                        class="h-full w-3/4 bg-gradient-to-r from-[#6E4C6F] to-[#CFE1D4] dark:from-[#F7E6E1] dark:to-[#7a9d89]"
                      />
                    </div>
                  </div>

                  <div class="space-y-3">
                    <div
                      class="bg-white/60 dark:bg-[#1a1420]/30 rounded-xl p-4 border border-[#6E4C6F]/10 dark:border-[#F7E6E1]/10"
                    >
                      <div
                        :style="{ fontSize: '0.75rem', fontWeight: 600 }"
                        class="text-[#6E4C6F] dark:text-[#CFE1D4] mb-1"
                      >
                        Today's Focus
                      </div>
                      <div
                        :style="{ fontSize: '0.875rem' }"
                        class="text-[#2D2D2D] dark:text-[#F7E6E1]"
                      >
                        Strength Training
                      </div>
                    </div>
                    <div
                      class="bg-white/60 dark:bg-[#1a1420]/30 rounded-xl p-4 border border-[#6E4C6F]/10 dark:border-[#F7E6E1]/10"
                    >
                      <div
                        :style="{ fontSize: '0.75rem', fontWeight: 600 }"
                        class="text-[#6E4C6F] dark:text-[#CFE1D4] mb-1"
                      >
                        Nutrition
                      </div>
                      <div
                        :style="{ fontSize: '0.875rem' }"
                        class="text-[#2D2D2D] dark:text-[#F7E6E1]"
                      >
                        Protein-rich meals
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /inner gradient card -->
            </div>
            <!-- /phone mockup wrapper -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
