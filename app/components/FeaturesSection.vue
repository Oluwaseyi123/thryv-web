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
    class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a1420]"
  >
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16 space-y-4">
        <div
          class="inline-block px-4 py-2 bg-[#F7E6E1]/50 dark:bg-[#2d2534]/60 backdrop-blur-sm rounded-full border border-[#6E4C6F]/10 dark:border-[#F7E6E1]/10"
        >
          <span
            class="text-[#6E4C6F] dark:text-[#F7E6E1]"
            :style="{ fontSize: '0.875rem', fontWeight: '600' }"
          >
            FEATURES
          </span>
        </div>

        <h2
          class="text-[#2D2D2D] dark:text-[#F7E6E1]"
          :style="{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700' }"
        >
          What you get with Thryve
        </h2>

        <p
          class="text-[#2D2D2D]/70 dark:text-[#F7E6E1]/70 max-w-2xl mx-auto"
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
          class="group bg-gradient-to-br from-white to-[#F7E6E1]/20 dark:from-[#251c29] dark:to-[#2d2534]/50 border border-[#6E4C6F]/10 dark:border-[#F7E6E1]/10 rounded-2xl p-8 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-[#F7E6E1]/5 hover:border-[#6E4C6F]/20 dark:hover:border-[#F7E6E1]/20 transition-all duration-300"
        >
          <!-- Icon -->
          <div
            class="w-14 h-14 bg-gradient-to-br from-[#6E4C6F] to-[#CFE1D4] dark:from-[#F7E6E1] dark:to-[#7a9d89] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
          >
            <component
              :is="feature.icon"
              class="w-7 h-7 text-white dark:text-[#1a1420]"
            />
          </div>

          <!-- Content -->
          <h3
            class="text-[#2D2D2D] dark:text-[#F7E6E1] mb-3"
            :style="{ fontSize: '1.25rem', fontWeight: '600' }"
          >
            {{ feature.title }}
          </h3>

          <p
            class="text-[#2D2D2D]/70 dark:text-[#F7E6E1]/70"
            :style="{ lineHeight: '1.6' }"
          >
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
