<script setup lang="ts">
import { ref } from 'vue'
import { X, Check } from 'lucide-vue-next'
import { Button } from './ui/button'

const withoutThryve = [
  'Random energy crashes mid-week',
  'Workouts feel great one week, impossible the next',
  'No idea how hormones affect performance',
  'Generic plans that ignore your cycle'
]

const withThryve = [
  'Workouts mapped to your cycle phases',
  'Know when to push and when to rest',
  'Nutrition suggestions tailored to your hormones',
  'Daily check-ins that actually make sense of your mood'
]

const showEmailInput = ref(false)
const email = ref('')
const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const handleJoinClick = () => {
  showEmailInput.value = true
}

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
    errorMessage.value =
      error.data?.message || 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section
    class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-background"
  >
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16 space-y-4">
        <h2
          class="text-foreground dark:text-blush-pink"
          :style="{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700' }"
        >
          Training with Thryve vs training on guesswork
        </h2>
        <p
          class="text-foreground/70 dark:text-blush-pink/70 max-w-2xl mx-auto"
          :style="{ fontSize: '1.125rem' }"
        >
          Stop fighting your body. Start working with it.
        </p>
      </div>

      <!-- Comparison Grid -->
      <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
        <!-- Without Thryve -->
        <div
          class="bg-gradient-to-br from-red-50 to-orange-50/50 dark:from-red-950/20 dark:to-orange-950/10 border border-red-200/50 dark:border-red-900/30 rounded-2xl p-8 space-y-6"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center"
            >
              <X class="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h3
              class="text-foreground dark:text-blush-pink"
              :style="{ fontSize: '1.5rem', fontWeight: '700' }"
            >
              Without Thryve
            </h3>
          </div>

          <ul class="space-y-4">
            <li
              v-for="(item, index) in withoutThryve"
              :key="`without-${index}`"
              class="flex items-start gap-3"
            >
              <X
                class="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5"
              />
              <span
                class="text-foreground/80 dark:text-blush-pink/80"
                :style="{ lineHeight: '1.6' }"
              >
                {{ item }}
              </span>
            </li>
          </ul>
        </div>

        <!-- With Thryve -->
        <div
          class="bg-linear-to-br from-secondary/30 to-blush-pink/30 dark:from-[#7a9d89]/10 dark:to-primary/10 border border-primary/20 dark:border-blush-pink/20 rounded-2xl p-8 space-y-6 relative overflow-hidden"
        >
          <!-- Highlight effect -->
          <div
            class="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 dark:bg-blush-pink/5 rounded-full blur-3xl"
          />

          <div class="flex items-center gap-3 relative">
            <div
              class="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-secondary dark:from-blush-pink dark:to-[#7a9d89] flex items-center justify-center"
            >
              <Check class="w-6 h-6 text-white dark:text-dark-background" />
            </div>
            <h3
              class="text-foreground dark:text-blush-pink"
              :style="{ fontSize: '1.5rem', fontWeight: '700' }"
            >
              With Thryve
            </h3>
          </div>

          <ul class="space-y-4 relative">
            <li
              v-for="(item, index) in withThryve"
              :key="`with-${index}`"
              class="flex items-start gap-3"
            >
              <Check
                class="w-5 h-5 text-primary dark:text-secondary shrink-0 mt-0.5"
              />
              <span
                class="text-foreground/80 dark:text-blush-pink/80"
                :style="{ lineHeight: '1.6' }"
              >
                {{ item }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-12 text-center">
        <p
          class="text-primary dark:text-secondary"
          :style="{ fontSize: '1.125rem', fontWeight: '600' }"
        >
          Ready to make the switch?
        </p>

        <!-- Success State -->
        <div
          v-if="isSuccess"
          class="mt-3 inline-flex items-center gap-2 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30 rounded-xl px-6 py-3 transition-all duration-300"
        >
          <Check class="w-5 h-5 text-green-600 dark:text-green-400" />
          <span class="text-green-700 dark:text-green-300 font-medium">
            You're on the list! Check your email.
          </span>
        </div>

        <!-- Email Input Form -->
        <form
          v-else-if="showEmailInput"
          class="mt-3 inline-flex flex-col sm:flex-row items-center gap-2 transition-all duration-300"
          @submit.prevent="handleSubmit"
        >
          <div class="relative w-full sm:w-auto">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
              autofocus
              class="w-full sm:w-80 h-11 px-4 rounded-xl border border-primary/20 dark:border-blush-pink/20 bg-white dark:bg-dark-background text-foreground dark:text-blush-pink placeholder:text-foreground/50 dark:placeholder:text-blush-pink/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blush-pink transition-all"
              :style="{ fontSize: '0.95rem' }"
            />
            <p
              v-if="errorMessage"
              class="absolute -bottom-6 left-0 text-red-600 dark:text-red-400 text-sm"
            >
              {{ errorMessage }}
            </p>
          </div>
          <Button
            type="submit"
            :disabled="isSubmitting"
            class="bg-primary h-11 hover:bg-[#5a3d5b] dark:bg-blush-pink dark:hover:bg-white dark:text-dark-background text-white rounded-xl px-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            :style="{ fontSize: '0.95rem', fontWeight: '600' }"
          >
            {{ isSubmitting ? 'Joining...' : 'Join' }}
          </Button>
        </form>

        <!-- Initial Button -->
        <Button
          v-else
          class="bg-primary h-11 hover:bg-[#5a3d5b] dark:bg-blush-pink dark:hover:bg-white dark:text-dark-background text-white rounded-xl px-4 sm:px-6 mt-3 cursor-pointer transition-all"
          :style="{ fontSize: '0.95rem', fontWeight: '600' }"
          @click="handleJoinClick"
        >
          Join Early Access
        </Button>

        <!-- Privacy Text -->
        <p
          v-if="showEmailInput && !isSuccess"
          class="mt-8 text-foreground/50 dark:text-blush-pink/50 text-sm"
        >
          No spam, unsubscribe anytime
        </p>
      </div>
    </div>
  </section>
</template>
