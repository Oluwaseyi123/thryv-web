<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Moon, Sun } from 'lucide-vue-next'
import { Button } from './button'

const isDark = ref(false)

onMounted(() => {
  if (!import.meta.client) return

  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

const toggleTheme = () => {
  if (!import.meta.client) return

  isDark.value = !isDark.value

  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>

<template>
  <Button
    aria-label="Toggle theme"
    class="w-10 h-10 rounded-xl bg-[#F7E6E1] dark:bg-[#2d2534] border border-[#6E4C6F]/10 dark:border-[#F7E6E1]/10 flex items-center justify-center hover:bg-[#6E4C6F]/10 dark:hover:bg-[#F7E6E1]/10 transition-colors"
    @click="toggleTheme"
  >
    <Sun
      v-if="isDark"
      class="w-5 h-5 text-[#F7E6E1]"
    />
    <Moon
      v-else
      class="w-5 h-5 text-[#6E4C6F]"
    />
  </Button>
</template>
