<script setup lang="ts">
import { ref } from 'vue'
import { Moon } from 'lucide-vue-next'
import { useRoute, useRouter } from 'vue-router'

import { Button } from './ui/button'
import ThemeToggle from './ui/theme-toggle.vue'

const route = useRoute()
const router = useRouter()
const activeSection = ref('')

const scrollToSection = (section: string) => {
  if (route.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        scrollToSection(section)
      }, 300)
    })
    return
  } else {
    activeSection.value = section
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-background/95 dark:bg-dark-background/95 backdrop-blur-md border-b border-primary/10 dark:border-blush-pink/10"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div
            class="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-primary to-blush-pink"
          >
            <Moon class="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <span
            class="text-primary dark:text-blush-pink"
            :style="{ fontSize: '1.25rem', fontWeight: '700' }"
          >
            Thryve
          </span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <button
            type="button"
            :class="[
              'relative transition-all duration-300 font-medium pb-1 cursor-pointer',
              activeSection === 'about'
                ? 'text-primary dark:text-blush-pink'
                : 'text-foreground dark:text-blush-pink/80 hover:text-primary dark:hover:text-blush-pink'
            ]"
            @click="scrollToSection('about')"
          >
            About
            <span
              :class="[
                'absolute bottom-0 left-0 h-px bg-primary dark:bg-blush-pink transition-all duration-300 ease-out',
                activeSection === 'about' ? 'w-full' : 'w-0'
              ]"
            />
          </button>
          <button
            type="button"
            :class="[
              'relative transition-all duration-300 font-medium pb-1 cursor-pointer',
              activeSection === 'features'
                ? 'text-primary dark:text-blush-pink'
                : 'text-foreground dark:text-blush-pink/80 hover:text-primary dark:hover:text-blush-pink'
            ]"
            @click="scrollToSection('features')"
          >
            Features
            <span
              :class="[
                'absolute bottom-0 left-0 h-px bg-primary dark:bg-blush-pink transition-all duration-300 ease-out',
                activeSection === 'features' ? 'w-full' : 'w-0'
              ]"
            />
          </button>
          <button
            type="button"
            :class="[
              'relative transition-all duration-300 font-medium pb-1 cursor-pointer',
              activeSection === 'science'
                ? 'text-primary dark:text-blush-pink'
                : 'text-foreground dark:text-blush-pink/80 hover:text-primary dark:hover:text-blush-pink'
            ]"
            @click="scrollToSection('science')"
          >
            Science
            <span
              :class="[
                'absolute bottom-0 left-0 h-px bg-primary dark:bg-blush-pink transition-all duration-300 ease-out',
                activeSection === 'science' ? 'w-full' : 'w-0'
              ]"
            />
          </button>
          <button
            type="button"
            :class="[
              'relative transition-all duration-300 font-medium pb-1 cursor-pointer',
              activeSection === 'community'
                ? 'text-primary dark:text-blush-pink'
                : 'text-foreground dark:text-blush-pink/80 hover:text-primary dark:hover:text-blush-pink'
            ]"
            @click="scrollToSection('community')"
          >
            Community
            <span
              :class="[
                'absolute bottom-0 left-0 h-px bg-primary dark:bg-blush-pink transition-all duration-300 ease-out',
                activeSection === 'community' ? 'w-full' : 'w-0'
              ]"
            />
          </button>
          <button
            type="button"
            :class="[
              'relative transition-all duration-300 font-medium pb-1 cursor-pointer',
              activeSection === 'faqs'
                ? 'text-primary dark:text-blush-pink'
                : 'text-foreground dark:text-blush-pink/80 hover:text-primary dark:hover:text-blush-pink'
            ]"
            @click="scrollToSection('faqs')"
          >
            FAQs
            <span
              :class="[
                'absolute bottom-0 left-0 h-px bg-primary dark:bg-blush-pink transition-all duration-300 ease-out',
                activeSection === 'faqs' ? 'w-full' : 'w-0'
              ]"
            />
          </button>
          <button
            type="button"
            :class="[
              'relative transition-all duration-300 font-medium pb-1 cursor-pointer',
              activeSection === 'blog' || route.path.startsWith('/blog')
                ? 'text-primary dark:text-blush-pink'
                : 'text-foreground dark:text-blush-pink/80 hover:text-primary dark:hover:text-blush-pink'
            ]"
            @click="scrollToSection('blog')"
          >
            Blog
            <span
              :class="[
                'absolute bottom-0 left-0 h-px bg-primary dark:bg-blush-pink transition-all duration-300 ease-out',
                activeSection === 'blog' || route.path.startsWith('/blog')
                  ? 'w-full'
                  : 'w-0'
              ]"
            />
          </button>
        </div>

        <!-- Right side - CTA + Theme Toggle -->
        <div class="flex items-center gap-3">
          <Button
            class="bg-primary h-11 hover:bg-[#5a3d5b] dark:bg-blush-pink dark:hover:bg-white dark:text-dark-background text-white rounded-xl px-4 sm:px-6"
            :style="{ fontSize: '0.95rem', fontWeight: '600' }"
          >
            Join Early Access
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
</template>
