<script setup lang="ts">
import { ref } from 'vue'
import { Gift, Sparkles, MessageCircle, Users } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Benefit {
  icon: any
  text: string
}

const benefits: Benefit[] = [
  {
    icon: Gift,
    text: 'Get early access to the app'
  },
  {
    icon: MessageCircle,
    text: 'Join our private community'
  },
  {
    icon: Users,
    text: 'Help shape the product'
  }
]

const email = ref('')
const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

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
    id="community"
    class="relative overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
  >
    <!-- Gradient Background -->
    <div
      class="absolute inset-0 bg-linear-to-br from-primary via-[#5a3d5b] to-primary dark:from-[#251c29] dark:via-dark-background dark:to-dark-background"
    />

    <div class="container relative mx-auto max-w-4xl">
      <div
        class="rounded-3xl border border-primary/10 bg-white/80 p-8 shadow-2xl backdrop-blur-sm sm:p-12 lg:p-16 dark:border-primary/30 dark:bg-dark-background/80"
      >
        <div class="space-y-6 text-center">
          <!-- Icon -->
          <div class="inline-flex items-center justify-center gap-2">
            <div
              class="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary/80"
            >
              <Sparkles class="h-8 w-8 text-white" />
            </div>
          </div>

          <!-- Heading -->
          <div class="space-y-3">
            <h2
              class="text-foreground dark:text-blush-pink/80"
              style="font-size: clamp(2rem, 4vw, 3rem); font-weight: 700"
            >
              Join the Thryve community
            </h2>
            <p
              class="mx-auto max-w-2xl text-foreground/70 dark:text-blush-pink/70"
              style="font-size: 1.125rem; line-height: 1.7"
            >
              Be part of building the future of hormone-aware wellness. Get
              early access, connect with other users, and help shape what Thryve
              becomes.
            </p>
          </div>

          <!-- Benefits list -->
          <div class="flex flex-wrap items-center justify-center gap-3 py-6">
            <div
              v-for="(benefit, index) in benefits"
              :key="index"
              class="flex items-center gap-2 px-5 py-3 bg-white/10 dark:bg-blush-pink/5 backdrop-blur-sm rounded-full border border-white/20 dark:border-blush-pink/10"
            >
              <component
                :is="benefit.icon"
                class="w-5 h-5 text-foreground dark:text-blush-pink"
              />
              <span
                class="text-foreground dark:text-blush-pink"
                :style="{ fontSize: '0.875rem', fontWeight: '500' }"
              >
                {{ benefit.text }}
              </span>
            </div>
          </div>

          <!-- Email Form -->
          <div v-if="isSuccess" class="max-w-md mx-auto">
            <div
              class="flex items-center justify-center gap-2 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30 rounded-xl px-6 py-4"
            >
              <svg
                class="w-5 h-5 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span class="text-green-700 dark:text-green-300 font-medium">
                You're on the list! Check your email.
              </span>
            </div>
          </div>
          <form
            v-else
            class="max-w-md mx-auto space-y-4"
            @submit.prevent="handleSubmit"
          >
            <div class="flex flex-col sm:flex-row gap-3">
              <div class="relative flex-1">
                <Input
                  v-model="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  class="w-full h-14 px-5 bg-white/95 dark:bg-blush-pink/95 border-white/40 dark:border-blush-pink/40 text-foreground placeholder:text-foreground/50 rounded-xl focus:border-white dark:focus:border-blush-pink focus:ring-white dark:focus:ring-blush-pink"
                  :style="{ fontSize: '1rem' }"
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
                class="h-14 px-8 bg-white hover:bg-white/90 dark:bg-blush-pink dark:hover:bg-white text-primary dark:text-dark-background rounded-xl whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                :style="{ fontSize: '1rem', fontWeight: '600' }"
              >
                {{ isSubmitting ? 'Joining...' : 'Join the waitlist' }}
              </Button>
            </div>
            <p
              class="text-foreground dark:text-blush-pink/80"
              style="font-size: 0.75rem"
            >
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>

          <!-- Social proof -->
          <div class="pt-8">
            <div class="flex items-center justify-center gap-3 mb-4">
              <div class="flex -space-x-3">
                <div
                  v-for="i in 5"
                  :key="i"
                  class="w-12 h-12 rounded-full bg-gradient-to-br from-blush-pink to-secondary border-2 border-white dark:border-dark-background"
                />
              </div>
            </div>
            <p
              class="text-foreground dark:text-blush-pink/90"
              :style="{ fontSize: '1rem' }"
            >
              <span :style="{ fontWeight: '700' }">10,000+</span> women already
              on the waitlist
            </p>
            <p
              class=":text-blush-pink/80 dark:text-blush-pink/70 mt-2"
              :style="{ fontSize: '0.875rem', fontStyle: 'italic' }"
            >
              "Coming soon: stories from our beta users"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
