<script setup lang="ts">
import { onMounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { useArticlesStore } from '@/stores/articlesStore'
import { storeToRefs } from 'pinia'
import BlogCard from './BlogCard.vue'

const articlesStore = useArticlesStore()
const { articles } = storeToRefs(articlesStore)
const { getArticles } = articlesStore

const top3Articles = computed(() => {
  return articles.value.slice(0, 3)
})
onMounted(async () => {
  await getArticles()
})

const router = useRouter()
const navigateTo = (url: string) => {
  router.push(url)
}
</script>

<template>
  <section
    id="blog"
    class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-secondary/20 via-white to-blush-pink/30 dark:from-dark-background dark:via-dark-background dark:to-[#251c29]"
  >
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12 sm:mb-16 space-y-4">
        <div
          class="inline-block px-4 py-2 bg-white/60 dark:bg-[#2d2534]/60 backdrop-blur-sm rounded-full border border-primary/10 dark:border-blush-pink/10"
        >
          <span
            class="text-primary dark:text-blush-pink"
            :style="{ fontSize: '0.875rem', fontWeight: '600' }"
          >
            LEARN & THRIVE
          </span>
        </div>

        <h2
          class="text-foreground dark:text-blush-pink"
          :style="{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            lineHeight: '1.2'
          }"
        >
          Evidence-based insights
        </h2>

        <p
          class="text-foreground/70 dark:text-blush-pink/70 max-w-2xl mx-auto"
          :style="{ fontSize: '1.125rem' }"
        >
          Explore our library of articles on hormones, cycle syncing, nutrition,
          and wellness.
        </p>
      </div>

      <BlogCard :articles="top3Articles" />

      <div class="text-center">
        <button
          class="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-[#251c29] hover:bg-blush-pink/50 dark:hover:bg-[#2d2534] text-primary dark:text-secondary rounded-xl border border-primary/20 dark:border-blush-pink/20 hover:border-primary/40 dark:hover:border-blush-pink/40 transition-all group"
          @click="navigateTo('/blog')"
        >
          <span
            :style="{ fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }"
          >
            View All Articles
          </span>
          <ArrowRight
            class="w-5 h-5 group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  </section>
</template>
