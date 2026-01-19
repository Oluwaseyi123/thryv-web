<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => (colorMode.value === 'dark' ? '#171717' : 'white'))

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [{ rel: 'icon', href: '/ui/logo.svg' }],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: 'Thryve - Hormone-Aware Fitness & Wellness',
  description:
    'Transform your energy, training, and wellness by working with your cycle. Personalized workouts, nutrition, and insights tailored to your hormones.',
  ogTitle: 'Thryve - Hormone-Aware Fitness & Wellness',
  ogDescription:
    'Transform your energy, training, and wellness by working with your cycle. Personalized workouts, nutrition, and insights tailored to your hormones.',
  ogImage: '/og-image.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Thryve - Hormone-Aware Fitness & Wellness',
  twitterDescription:
    'Transform your energy, training, and wellness by working with your cycle. Personalized workouts, nutrition, and insights tailored to your hormones.',
  twitterImage: '/og-image.png'
})
</script>

<template>
  <UApp :toaster="{ expand: false }">
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
