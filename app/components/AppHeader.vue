<script setup lang="ts">
import { ref } from "vue";
import { Moon } from "lucide-vue-next";

import { Button } from "./ui/button";
import ThemeToggle from "./ui/theme-toggle.vue";

const activeSection = ref("about");

const setActiveSection = (section: string) => {
  activeSection.value = section;
};
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
            :class="[
              'relative transition-all duration-300 font-medium pb-1',
              activeSection === 'about'
                ? 'text-[#6E4C6F] dark:text-[#F7E6E1]'
                : 'text-[#2D2D2D] dark:text-[#F7E6E1]/80 hover:text-[#6E4C6F] dark:hover:text-[#F7E6E1]',
            ]"
            @click="setActiveSection('about')"
          >
            About
            <span
              :class="[
                'absolute bottom-0 left-0 h-px bg-[#6E4C6F] dark:bg-[#F7E6E1] transition-all duration-300 ease-out',
                activeSection === 'about' ? 'w-full' : 'w-0',
              ]"
            />
          </a>
          <a
            href="#features"
            :class="[
              'relative transition-all duration-300 font-medium pb-1',
              activeSection === 'features'
                ? 'text-[#6E4C6F] dark:text-[#F7E6E1]'
                : 'text-[#2D2D2D] dark:text-[#F7E6E1]/80 hover:text-[#6E4C6F] dark:hover:text-[#F7E6E1]',
            ]"
            @click="setActiveSection('features')"
          >
            Features
            <span
              :class="[
                'absolute bottom-0 left-0 h-px bg-[#6E4C6F] dark:bg-[#F7E6E1] transition-all duration-300 ease-out',
                activeSection === 'features' ? 'w-full' : 'w-0',
              ]"
            />
          </a>
          <a
            href="#science"
            :class="[
              'relative transition-all duration-300 font-medium pb-1',
              activeSection === 'science'
                ? 'text-[#6E4C6F] dark:text-[#F7E6E1]'
                : 'text-[#2D2D2D] dark:text-[#F7E6E1]/80 hover:text-[#6E4C6F] dark:hover:text-[#F7E6E1]',
            ]"
            @click="setActiveSection('science')"
          >
            Science
            <span
              :class="[
                'absolute bottom-0 left-0 h-px bg-[#6E4C6F] dark:bg-[#F7E6E1] transition-all duration-300 ease-out',
                activeSection === 'science' ? 'w-full' : 'w-0',
              ]"
            />
          </a>
          <a
            href="#community"
            :class="[
              'relative transition-all duration-300 font-medium pb-1',
              activeSection === 'community'
                ? 'text-[#6E4C6F] dark:text-[#F7E6E1]'
                : 'text-[#2D2D2D] dark:text-[#F7E6E1]/80 hover:text-[#6E4C6F] dark:hover:text-[#F7E6E1]',
            ]"
            @click="setActiveSection('community')"
          >
            Community
            <span
              :class="[
                'absolute bottom-0 left-0 h-px bg-[#6E4C6F] dark:bg-[#F7E6E1] transition-all duration-300 ease-out',
                activeSection === 'community' ? 'w-full' : 'w-0',
              ]"
            />
          </a>
          <a
            href="#faqs"
            :class="[
              'relative transition-all duration-300 font-medium pb-1',
              activeSection === 'faqs'
                ? 'text-[#6E4C6F] dark:text-[#F7E6E1]'
                : 'text-[#2D2D2D] dark:text-[#F7E6E1]/80 hover:text-[#6E4C6F] dark:hover:text-[#F7E6E1]',
            ]"
            @click="setActiveSection('faqs')"
          >
            FAQs
            <span
              :class="[
                'absolute bottom-0 left-0 h-px bg-[#6E4C6F] dark:bg-[#F7E6E1] transition-all duration-300 ease-out',
                activeSection === 'faqs' ? 'w-full' : 'w-0',
              ]"
            />
          </a>
          <a
            href="#blog"
            :class="[
              'relative transition-all duration-300 font-medium pb-1',
              activeSection === 'blog'
                ? 'text-[#6E4C6F] dark:text-[#F7E6E1]'
                : 'text-[#2D2D2D] dark:text-[#F7E6E1]/80 hover:text-[#6E4C6F] dark:hover:text-[#F7E6E1]',
            ]"
            @click="setActiveSection('blog')"
          >
            Blog
            <span
              :class="[
                'absolute bottom-0 left-0 h-px bg-[#6E4C6F] dark:bg-[#F7E6E1] transition-all duration-300 ease-out',
                activeSection === 'blog' ? 'w-full' : 'w-0',
              ]"
            />
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
