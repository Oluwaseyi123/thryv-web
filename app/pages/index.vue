<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryCollection('content').first()
)
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value.seo?.title || page.value.title,
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description
})
</script>

<template>
  <div
    v-if="page"
    class="relative"
  >
    <Hero />
    <ComparisonSection />
    <WhySection />
    <FeaturesSection />
    <ScienceSection />
    <CommunitySection />
    <FaqSection />
    <BlogPreview />
  </div>
</template>
