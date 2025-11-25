<script setup lang="ts">
import { Moon } from 'lucide-vue-next'

import { Button } from './ui/button'
import ThemeToggle from './ui/theme-toggle.vue'
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF9]/95 dark:bg-[#1a1420]/95 backdrop-blur-md border-b border-[#6E4C6F]/10 dark:border-[#F7E6E1]/10"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div
            class="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#6E4C6F] to-[#F7E6E1]"
          >
            <Moon class="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <span
            class="text-[#6E4C6F] dark:text-[#F7E6E1]"
            :style="{ fontSize: '1.25rem', fontWeight: '700' }"
          >
            Thryve
          </span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <a
            href="#about"
            class="text-[#2D2D2D] dark:text-[#F7E6E1]/80 hover:text-[#6E4C6F] dark:hover:text-[#F7E6E1] transition-colors"
          >
            About
          </a>
          <a
            href="#features"
            class="text-[#2D2D2D] dark:text-[#F7E6E1]/80 hover:text-[#6E4C6F] dark:hover:text-[#F7E6E1] transition-colors"
          >
            Features
          </a>
          <a
            href="#science"
            class="text-[#2D2D2D] dark:text-[#F7E6E1]/80 hover:text-[#6E4C6F] dark:hover:text-[#F7E6E1] transition-colors"
          >
            Science
          </a>
          <a
            href="#community"
            class="text-[#2D2D2D] dark:text-[#F7E6E1]/80 hover:text-[#6E4C6F] dark:hover:text-[#F7E6E1] transition-colors"
          >
            Community
          </a>
          <a
            href="#faqs"
            class="text-[#2D2D2D] dark:text-[#F7E6E1]/80 hover:text-[#6E4C6F] dark:hover:text-[#F7E6E1] transition-colors"
          >
            FAQs
          </a>
          <a
            href="#blog"
            class="text-[#2D2D2D] dark:text-[#F7E6E1]/80 hover:text-[#6E4C6F] dark:hover:text-[#F7E6E1] transition-colors"
          >
            Blog
          </a>
        </div>

        <!-- Right side - CTA + Theme Toggle -->
        <div class="flex items-center gap-3">
          <Button
            class="bg-[#6E4C6F] hover:bg-[#5a3d5b] dark:bg-[#F7E6E1] dark:hover:bg-white dark:text-[#1a1420] text-white rounded-xl px-4 sm:px-6"
            :style="{ fontSize: '0.95rem', fontWeight: '600' }"
          >
            Get Early Access
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
</template>
