<script setup lang="ts">
import { X, Check } from 'lucide-vue-next'

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
</script>

<template>
  <section
    class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a1420]"
  >
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16 space-y-4">
        <h2
          class="text-[#2D2D2D] dark:text-[#F7E6E1]"
          :style="{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700' }"
        >
          Training with Thryve vs training on guesswork
        </h2>
        <p
          class="text-[#2D2D2D]/70 dark:text-[#F7E6E1]/70 max-w-2xl mx-auto"
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
              class="text-[#2D2D2D] dark:text-[#F7E6E1]"
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
                class="text-[#2D2D2D]/80 dark:text-[#F7E6E1]/80"
                :style="{ lineHeight: '1.6' }"
              >
                {{ item }}
              </span>
            </li>
          </ul>
        </div>

        <!-- With Thryve -->
        <div
          class="bg-gradient-to-br from-[#CFE1D4]/30 to-[#F7E6E1]/30 dark:from-[#7a9d89]/10 dark:to-[#6E4C6F]/10 border border-[#6E4C6F]/20 dark:border-[#F7E6E1]/20 rounded-2xl p-8 space-y-6 relative overflow-hidden"
        >
          <!-- Highlight effect -->
          <div
            class="absolute -top-20 -right-20 w-40 h-40 bg-[#6E4C6F]/10 dark:bg-[#F7E6E1]/5 rounded-full blur-3xl"
          />

          <div class="flex items-center gap-3 relative">
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6E4C6F] to-[#CFE1D4] dark:from-[#F7E6E1] dark:to-[#7a9d89] flex items-center justify-center"
            >
              <Check class="w-6 h-6 text-white dark:text-[#1a1420]" />
            </div>
            <h3
              class="text-[#2D2D2D] dark:text-[#F7E6E1]"
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
                class="w-5 h-5 text-[#6E4C6F] dark:text-[#CFE1D4] flex-shrink-0 mt-0.5"
              />
              <span
                class="text-[#2D2D2D]/80 dark:text-[#F7E6E1]/80"
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
          class="text-[#6E4C6F] dark:text-[#CFE1D4]"
          :style="{ fontSize: '1.125rem', fontWeight: '600' }"
        >
          Ready to make the switch?
        </p>
      </div>
    </div>
  </section>
</template>
