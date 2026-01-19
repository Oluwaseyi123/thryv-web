<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
import { ArrowDown, Sparkles } from 'lucide-vue-next'
import { Button } from './ui/button'
import { Input } from './ui/input'

const rotatingWords = ['energy', 'training', 'focus', 'recovery', 'wellness']

const currentWordIndex = ref(0)
const isAnimating = ref(false)
const phoneRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const email = ref('')
const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

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
      currentWordIndex.value = (currentWordIndex.value + 1) % rotatingWords.length
      isAnimating.value = false
    }, 300)
  }, 3000)

  // Intersection observer for phone animation
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
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

const handleSubmit = async () => {
  if (!email.value || !email.value.includes('@')) {
    errorMessage.value = 'Please enter a valid email'
    return
  }

  isSubmitting.value = true
  errorMessage.value = ''

  try {
    await $fetch('/api/waitlist', {
      method: 'POST',
      body: { email: email.value }
    })

    isSuccess.value = true
    email.value = ''
  } catch (error: any) {
    errorMessage.value = error.data?.message || 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
  if (timeoutId) clearTimeout(timeoutId)
})
</script>

<template>
  <section
    class="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center bg-background/95 dark:bg-dark-background/95 backdrop-blur-md"
  >
    <div class="container mx-auto max-w-7xl w-full">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left space-y-8 order-1 lg:order-1">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-[#2d2534]/60 backdrop-blur-sm rounded-full border border-primary/10 dark:border-blush-pink/10"
          >
            <Sparkles class="w-4 h-4 text-primary dark:text-blush-pink" />
            <span class="text-primary dark:text-blush-pink" :style="{ fontSize: '0.875rem', fontWeight: 600 }">
              Hormone-aware wellness
            </span>
          </div>

          <div class="space-y-4">
            <h1
              class="text-foreground dark:text-blush-pink"
              :style="{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.1
              }"
            >
              Transform your
              <br />
              <span class="relative inline-block">
                <span
                  :class="[
                    'text-primary dark:text-secondary transition-all duration-300',
                    isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  ]"
                  :style="{ display: 'inline-block' }"
                >
                  {{ rotatingWords[currentWordIndex] }}
                </span>
              </span>
              <br />
              with your cycle.
            </h1>
          </div>

          <p
            class="text-foreground/80 dark:text-blush-pink/70 max-w-xl mx-auto lg:mx-0"
            :style="{ fontSize: '1.25rem', lineHeight: 1.7 }"
          >
            Thryve helps you work with your hormones, not against them, through cycle-aware workouts, nutrition, and
            daily insights.
          </p>

          <!-- Email Capture Form -->
          <div
            v-if="isSuccess"
            class="flex items-center gap-2 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30 rounded-xl px-6 py-4 max-w-xl mx-auto lg:mx-0"
          >
            <svg
              class="w-5 h-5 text-green-600 dark:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-green-700 dark:text-green-300 font-medium"> You're on the list! Check your email. </span>
          </div>
          <form v-else class="flex flex-col gap-3 max-w-xl mx-auto lg:mx-0 sm:flex-row" @submit.prevent="handleSubmit">
            <div class="relative flex-1">
              <Input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                required
                :style="{ fontWeight: 600 }"
                class="w-full h-13 border-foreground/30 placeholder:foreground/60 text-foreground dark:bg-white/10 backdrop-blur-sm dark:border-white/20 dark:text-white dark:placeholder:text-white/60 rounded-xl px-6 py-6 dark:focus:border-white focus:ring-primary"
              />
              <p v-if="errorMessage" class="absolute -bottom-6 left-0 text-red-600 dark:text-red-400 text-sm">
                {{ errorMessage }}
              </p>
            </div>
            <Button
              type="submit"
              :disabled="isSubmitting"
              class="h-13 px-8 cursor-pointer bg-primary hover:bg-[#5a3d5b] dark:bg-blush-pink dark:hover:bg-white dark:text-dark-background text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              :style="{ fontSize: '1rem', fontWeight: 600 }"
            >
              {{ isSubmitting ? 'Joining...' : 'Join Early Access' }}
            </Button>
          </form>

          <div
            class="flex items-center hover:text-primary cursor-pointer h-14 transition-all duration-300 bg-transparent text-primary dark:text-blush-pink border-primary/30 dark:border-blush-pink/30 rounded-xl"
            @click="scrollToFeatures"
          >
            See how it works
            <ArrowDown class="w-4 h-4 ml-2 hover:scale-110 transition-all duration-300" />
          </div>
        </div>

        <!-- Right Content - Phone Mockup -->
        <div
          ref="phoneRef"
          class="relative flex items-center justify-center order-2 lg:order- transition-all duration-1000 ease-out"
          :class="{
            'opacity-0 translate-x-8 scale-95': !isVisible,
            'opacity-100 translate-x-0 scale-100': isVisible
          }"
        >
          <div class="relative w-full max-w-sm">
            <!-- Phone mockup -->
            <div
              class="relative bg-white dark:bg-[#251c29] rounded-3xl shadow-2xl p-3 border border-primary/10 dark:border-blush-pink/10"
            >
              <div
                class="aspect-[9/19] bg-linear-to-br from-blush-pink dark:from-[#2d2534] via-white dark:via-[#251c29] to-secondary/30 dark:to-[#2a3432]/30 rounded-2xl overflow-hidden"
              >
                <!-- Mock app interface -->
                <div class="p-6 space-y-6">
                  <div class="flex items-center justify-between">
                    <div
                      class="w-12 h-12 rounded-full bg-primary/10 dark:bg-blush-pink/10 flex items-center justify-center"
                    >
                      <Sparkles class="w-6 h-6 text-primary dark:text-blush-pink" />
                    </div>
                    <div class="px-3 py-1 bg-secondary/50 dark:bg-[#7a9d89]/20 rounded-full">
                      <span
                        :style="{ fontSize: '0.75rem', fontWeight: 600 }"
                        class="text-foreground dark:text-secondary"
                      >
                        Follicular Phase
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3
                      :style="{ fontSize: '1.5rem', fontWeight: 600 }"
                      class="text-foreground dark:text-blush-pink mb-2"
                    >
                      Good morning!
                    </h3>
                    <p class="text-foreground/60 dark:text-blush-pink/60" :style="{ fontSize: '0.875rem' }">
                      Day 8 of your cycle
                    </p>
                  </div>

                  <div
                    class="bg-white/80 dark:bg-dark-background/40 rounded-2xl p-4 space-y-3 border border-primary/10 dark:border-blush-pink/10"
                  >
                    <div class="flex items-center justify-between">
                      <span class="text-foreground/60 dark:text-blush-pink/60" :style="{ fontSize: '0.875rem' }">
                        Energy Level
                      </span>
                      <span class="text-primary dark:text-secondary" :style="{ fontSize: '0.875rem', fontWeight: 600 }">
                        Rising ↗
                      </span>
                    </div>
                    <div class="h-2 bg-blush-pink dark:bg-[#2d2534] rounded-full overflow-hidden">
                      <div
                        class="h-full w-3/4 bg-linear-to-r from-primary to-secondary dark:from-blush-pink dark:to-[#7a9d89]"
                      />
                    </div>
                  </div>

                  <div class="space-y-3">
                    <div
                      class="bg-white/60 dark:bg-dark-background/30 rounded-xl p-4 border border-primary/10 dark:border-blush-pink/10"
                    >
                      <div
                        :style="{ fontSize: '0.75rem', fontWeight: 600 }"
                        class="text-primary dark:text-secondary mb-1"
                      >
                        Today's Focus
                      </div>
                      <div :style="{ fontSize: '0.875rem' }" class="text-foreground dark:text-blush-pink">
                        Strength Training
                      </div>
                    </div>
                    <div
                      class="bg-white/60 dark:bg-dark-background/30 rounded-xl p-4 border border-primary/10 dark:border-blush-pink/10"
                    >
                      <div
                        :style="{ fontSize: '0.75rem', fontWeight: 600 }"
                        class="text-primary dark:text-secondary mb-1"
                      >
                        Nutrition
                      </div>
                      <div :style="{ fontSize: '0.875rem' }" class="text-foreground dark:text-blush-pink">
                        Protein-rich meals
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
