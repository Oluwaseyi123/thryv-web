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

const handleSubmit = () => {
  console.log('Email submitted:', email.value)
  // TODO: handle email submission (API call, etc.)
}
</script>

<template>
  <section class="relative overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <!-- Gradient Background -->
    <!-- <div
      class="absolute inset-0 bg-gradient-to-br from-[#F7E6E1] via-[#CFE1D4]/30 to-[#F7E6E1] dark:from-[#251c29] dark:via-dark-background dark:to-dark-background"
    /> -->
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
          <form
            class="max-w-md mx-auto space-y-4"
            @submit.prevent="handleSubmit"
          >
            <div class="flex flex-col sm:flex-row gap-3">
              <Input
                v-model="email"
                type="email"
                placeholder="Enter your email address"
                required
                class="flex-1 h-14 px-5 bg-white/95 dark:bg-blush-pink/95 border-white/40 dark:border-blush-pink/40 text-foreground placeholder:text-foreground/50 rounded-xl focus:border-white dark:focus:border-blush-pink focus:ring-white dark:focus:ring-blush-pink"
                :style="{ fontSize: '1rem' }"
              />
              <Button
                type="submit"
                class="h-14 px-8 bg-white hover:bg-white/90 dark:bg-blush-pink dark:hover:bg-white text-primary dark:text-dark-background rounded-xl whitespace-nowrap"
                :style="{ fontSize: '1rem', fontWeight: '600' }"
              >
                Join the waitlist
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
