<script setup lang="ts">
import { Heart, Brain, Sparkles } from 'lucide-vue-next'

interface Card {
  icon: any
  title: string
  description: string
  gradient: string
}

const cards: Card[] = [
  {
    icon: Heart,
    title: 'For your body',
    description:
      'Work with your natural energy fluctuations. Build strength when your body is primed for it. Rest when you need it most. See better results with less burnout.',
    gradient: 'from-[#F7E6E1] to-[#CFE1D4]/50'
  },
  {
    icon: Brain,
    title: 'For your mind',
    description:
      'Stop feeling guilty about low-energy days. Understand why your mood shifts. Get clarity on patterns that seemed random before. Feel in control, not confused.',
    gradient: 'from-[#CFE1D4] to-[#F7E6E1]/50'
  },
  {
    icon: Sparkles,
    title: 'For your life',
    description:
      'Build sustainable habits that actually stick. No quick fixes or restrictive rules. Just science-backed guidance that respects your unique rhythm and real life.',
    gradient: 'from-[#6E4C6F]/20 to-[#F7E6E1]/40'
  }
]
</script>

<template>
  <section
    id="about"
    class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F7E6E1]/30 via-white to-[#CFE1D4]/20 dark:from-[#251c29] dark:via-[#1a1420] dark:to-[#2a3432]/20"
  >
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16 space-y-6 max-w-3xl mx-auto">
        <div
          class="inline-block px-4 py-2 bg-white/60 dark:bg-[#2d2534]/60 backdrop-blur-sm rounded-full border border-[#6E4C6F]/10 dark:border-[#F7E6E1]/10"
        >
          <span
            class="text-[#6E4C6F] dark:text-[#F7E6E1]"
            :style="{ fontSize: '0.875rem', fontWeight: '600' }"
          >
            WHY THRYVE
          </span>
        </div>

        <h2
          class="text-[#2D2D2D] dark:text-[#F7E6E1]"
          :style="{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            lineHeight: '1.2'
          }"
        >
          Why Thryve exists
        </h2>

        <div
          class="space-y-4 text-[#2D2D2D]/80 dark:text-[#F7E6E1]/80"
          :style="{ fontSize: '1.125rem', lineHeight: '1.7' }"
        >
          <p>
            Most training programs ignore the reality of hormonal fluctuations.
            They're built for bodies that don't change — but yours does, every
            single day.
          </p>
          <p>
            Women with irregular cycles or PCOS feel especially unseen. The
            advice out there assumes everyone fits the same 28-day mold.
            <span
              class="text-[#6E4C6F] dark:text-[#CFE1D4]"
              :style="{ fontWeight: '600' }"
            >
              That's not good enough.
            </span>
          </p>
          <p>
            Thryve is built to respect women's physiology. We meet you where you
            are — whatever your cycle looks like — and help you thrive within
            it.
          </p>
        </div>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="group relative bg-white dark:bg-[#251c29] border border-[#6E4C6F]/10 dark:border-[#F7E6E1]/10 rounded-2xl p-8 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-[#F7E6E1]/5 transition-all duration-300 overflow-hidden"
        >
          <!-- Gradient background -->
          <div
            class="absolute inset-0 dark:opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            :class="card.gradient"
          />

          <div class="relative space-y-4">
            <!-- Icon -->
            <div
              class="w-14 h-14 bg-gradient-to-br from-[#6E4C6F] to-[#6E4C6F]/70 dark:from-[#F7E6E1] dark:to-[#CFE1D4] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
            >
              <component
                :is="card.icon"
                class="w-7 h-7 text-white dark:text-[#1a1420]"
              />
            </div>

            <!-- Content -->
            <h3
              class="text-[#2D2D2D] dark:text-[#F7E6E1]"
              :style="{ fontSize: '1.5rem', fontWeight: '700' }"
            >
              {{ card.title }}
            </h3>

            <p
              class="text-[#2D2D2D]/70 dark:text-[#F7E6E1]/70"
              :style="{ lineHeight: '1.7' }"
            >
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
