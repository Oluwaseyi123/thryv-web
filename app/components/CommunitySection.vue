<script setup lang="ts">
import { ref } from 'vue'
import { Users, Gift, MessageCircle } from 'lucide-vue-next'

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
  <section
    id="community"
    class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
  >
    <!-- Gradient Background -->
    <div
      class="absolute inset-0 bg-linear-to-br from-primary via-[#5a3d5b] to-primary dark:from-[#251c29] dark:via-dark-background dark:to-[#2a3432]"
    />

    <!-- Decorative elements -->
    <div
      class="absolute top-0 left-0 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl"
    />
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 dark:bg-[#7a9d89]/5 rounded-full blur-3xl"
    />

    <div class="container mx-auto max-w-4xl relative">
      <div class="text-center space-y-8">
        <!-- Header -->
        <div class="space-y-4">
          <h2
            class="text-white dark:text-accent"
            :style="{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700'
            }"
          >
            Join the Thryve community
          </h2>
          <p
            class="text-white/90 dark:text-accent/80 max-w-2xl mx-auto"
            :style="{ fontSize: '1.25rem', lineHeight: '1.7' }"
          >
            Be part of building the future of hormone-aware wellness. Get early
            access, connect with other users, and help shape what Thryve
            becomes.
          </p>
        </div>

        <!-- Benefits -->
        <div class="flex flex-wrap items-center justify-center gap-6 py-6">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="flex items-center gap-3 px-5 py-3 bg-white/10 dark:bg-accent/5 backdrop-blur-sm rounded-full border border-white/20 dark:border-accent/10"
          >
            <component
              :is="benefit.icon"
              class="w-5 h-5 text-white dark:text-accent"
            />
            <span
              class="text-white dark:text-accent"
              :style="{ fontSize: '0.875rem', fontWeight: '500' }"
            >
              {{ benefit.text }}
            </span>
          </div>
        </div>

        <!-- Email Form -->
        <form class="max-w-md mx-auto space-y-4" @submit.prevent="handleSubmit">
          <div class="flex flex-col sm:flex-row gap-3">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email address"
              required
              class="flex-1 h-14 px-5 bg-white/95 dark:bg-accent/95 border-white/40 dark:border-accent/40 text-foreground placeholder:text-foreground/50 rounded-xl focus:border-white dark:focus:border-accent focus:ring-white dark:focus:ring-accent"
              :style="{ fontSize: '1rem' }"
            />
            <button
              type="submit"
              class="h-14 px-8 bg-white hover:bg-white/90 dark:bg-accent dark:hover:bg-white text-primary dark:text-dark-background rounded-xl whitespace-nowrap"
              :style="{ fontSize: '1rem', fontWeight: '600' }"
            >
              Join the waitlist
            </button>
          </div>
          <p
            class="text-white/70 dark:text-accent/70"
            :style="{ fontSize: '0.75rem' }"
          >
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </form>

        <!-- Social Proof -->
        <div class="pt-8">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="flex -space-x-3">
              <div
                v-for="i in 5"
                :key="i"
                class="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary border-2 border-white dark:border-dark-background"
              />
            </div>
          </div>
          <p
            class="text-white/90 dark:text-accent/90"
            :style="{ fontSize: '1rem' }"
          >
            <span :style="{ fontWeight: '700' }">10,000+</span> women already on
            the waitlist
          </p>
          <p
            class="text-white/70 dark:text-accent/70 mt-2"
            :style="{ fontSize: '0.875rem', fontStyle: 'italic' }"
          >
            "Coming soon: stories from our beta users"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
