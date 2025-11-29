<script setup lang="ts">
import {
  Calendar,
  Heart,
  Activity,
  Utensils,
  Sparkles,
  TrendingUp
} from 'lucide-vue-next'

interface Feature {
  icon: any
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Calendar,
    title: 'Cycle-aware training plans',
    description:
      'Workouts designed for each phase of your cycle, so you can train smarter and recover better.'
  },
  {
    icon: Heart,
    title: 'Energy + mood check-ins',
    description:
      'Track how you feel every day and discover patterns that help you understand your unique rhythm.'
  },
  {
    icon: Activity,
    title: 'PCOS-friendly mode',
    description:
      'Flexible tracking and guidance designed specifically for irregular cycles and hormonal imbalances.'
  },
  {
    icon: Utensils,
    title: 'Phase-based nutrition',
    description:
      'Meal and snack suggestions tailored to support your hormones throughout your cycle.'
  },
  {
    icon: Sparkles,
    title: 'Daily AI-powered guidance',
    description:
      'Get personalized insights and recommendations based on your data, cycle phase, and goals.'
  },
  {
    icon: TrendingUp,
    title: 'Insights dashboard',
    description:
      'Visualize your patterns, track progress, and understand how your cycle affects your performance.'
  }
]
</script>

<template>
  <section
    id="features"
    class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-background"
  >
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16 space-y-4">
        <div
          class="inline-block px-4 py-2 bg-blush-pink/50 dark:bg-[#2d2534]/60 backdrop-blur-sm rounded-full border border-primary/10 dark:border-blush-pink/10"
        >
          <span
            class="text-primary dark:text-blush-pink"
            :style="{ fontSize: '0.875rem', fontWeight: '600' }"
          >
            FEATURES
          </span>
        </div>

        <h2
          class="text-foreground dark:text-blush-pink"
          :style="{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700' }"
        >
          What you get with Thryve
        </h2>

        <p
          class="text-foreground/70 dark:text-blush-pink/70 max-w-2xl mx-auto"
          :style="{ fontSize: '1.125rem' }"
        >
          Everything you need to train, eat, and live in sync with your cycle.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="group bg-linear-to-br from-white to-blush-pink/20 dark:from-[#251c29] dark:to-[#2d2534]/50 border border-primary/10 dark:border-blush-pink/10 rounded-2xl p-8 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blush-pink/5 hover:border-primary/20 dark:hover:border-blush-pink/20 transition-all duration-300"
        >
          <!-- Icon -->
          <div
            class="w-14 h-14 bg-linear-to-br from-primary to-[#CFE1D4] dark:from-blush-pink dark:to-[#7a9d89] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
          >
            <component
              :is="feature.icon"
              class="w-7 h-7 text-white dark:text-dark-background"
            />
          </div>

          <!-- Content -->
          <h3
            class="text-foreground dark:text-blush-pink mb-3"
            :style="{ fontSize: '1.25rem', fontWeight: '600' }"
          >
            {{ feature.title }}
          </h3>

          <p
            class="text-foreground/70 dark:text-blush-pink/70"
            :style="{ lineHeight: '1.6' }"
          >
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
