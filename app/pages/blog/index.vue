<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { ArrowLeft, Search, Calendar, Clock, Tag } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ui/img-with-fallback'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useArticlesStore } from '@/stores/articlesStore'
import { storeToRefs } from 'pinia'
import BlogCard from '@/components/BlogCard.vue'

definePageMeta({
  layout: 'default'
})

const articlesStore = useArticlesStore()
const { articles } = storeToRefs(articlesStore)
const { getArticles } = articlesStore

const categories = ['All', 'Hormones', 'Cycle Syncing', 'PCOS', 'Nutrition', 'Wellness']

defineProps<{
  onBack?: () => void
}>()

const selectedCategory = ref<string>('All')
const searchQuery = ref<string>('')

onMounted(async () => {
  await getArticles()
})

const filteredArticles = computed(() =>
  articles.value.filter(article => {
    const matchesCategory = selectedCategory.value === 'All' || article.category === selectedCategory.value
    const query = searchQuery.value.toLowerCase()
    const matchesSearch = article.title.toLowerCase().includes(query) || article.excerpt.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })
)

const featuredArticle = computed(() => articles.value.find(a => a.featured))

const regularArticles = computed(() => filteredArticles.value.filter(a => !a.featured))

const handleBack = () => {
  navigateTo('/')
}

const handleSearchInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  searchQuery.value = target.value
}
</script>

<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-background dark:bg-dark-background transition-colors">
      <!-- Hero Section -->
      <section
        class="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blush-pink/30 via-background to-secondary/20 dark:from-[#2d2534] dark:via-dark-background dark:to-[#2a3432]/20"
      >
        <div class="container mx-auto max-w-6xl">
          <button
            class="inline-flex items-center gap-2 mb-8 text-foreground dark:text-blush-pink hover:text-primary dark:hover:text-white transition-colors group"
            @click="handleBack"
          >
            <ArrowLeft class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span :style="{ fontWeight: '500' }">Back to Home</span>
          </button>

          <div class="text-center space-y-6 max-w-3xl mx-auto">
            <div
              class="inline-block px-4 py-2 bg-white/60 dark:bg-[#251c29]/60 backdrop-blur-sm rounded-full border border-primary/10 dark:border-blush-pink/10"
            >
              <span class="text-primary dark:text-blush-pink" :style="{ fontSize: '0.875rem', fontWeight: '600' }">
                THRYVE BLOG
              </span>
            </div>

            <h1
              class="text-foreground dark:text-blush-pink"
              :style="{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                lineHeight: '1.1'
              }"
            >
              Your guide to hormone-aware wellness
            </h1>

            <p class="text-foreground/70 dark:text-blush-pink/70" :style="{ fontSize: '1.25rem', lineHeight: '1.6' }">
              Evidence-based insights on cycle syncing, hormonal health, and thriving through every phase
            </p>

            <!-- Search Bar -->
            <div class="relative max-w-md mx-auto mt-8">
              <Search
                class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40 dark:text-blush-pink/40"
              />
              <Input
                type="text"
                placeholder="Search articles..."
                class="pl-12 pr-4 py-6 bg-white dark:bg-[#251c29] border-primary/20 dark:border-blush-pink/20 rounded-xl focus:border-primary dark:focus:border-blush-pink text-foreground dark:text-blush-pink"
                :value="searchQuery"
                @input="handleSearchInput"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Category Filter -->
      <section
        class="py-8 px-4 sm:px-6 lg:px-8 border-b border-primary/10 dark:border-blush-pink/10 bg-white/50 dark:bg-[#251c29]/50 backdrop-blur-sm sticky top-16 sm:top-20 z-40"
      >
        <div class="container mx-auto max-w-6xl">
          <div class="flex flex-wrap gap-3 justify-center">
            <button
              v-for="category in categories"
              :key="category"
              class="px-6 py-2.5 rounded-xl transition-all"
              :class="[
                selectedCategory === category
                  ? 'bg-primary dark:bg-blush-pink text-white dark:text-dark-background shadow-lg'
                  : 'bg-white dark:bg-[#251c29] text-foreground dark:text-blush-pink border border-primary/20 dark:border-blush-pink/20 hover:border-primary dark:hover:border-blush-pink'
              ]"
              :style="{
                fontWeight: selectedCategory === category ? '600' : '500'
              }"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </section>

      <!-- Featured Article -->
      <section
        v-if="featuredArticle && selectedCategory === 'All' && !searchQuery"
        class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      >
        <div class="container mx-auto max-w-6xl">
          <div class="mb-6">
            <h2 class="text-foreground dark:text-blush-pink" :style="{ fontSize: '1.5rem', fontWeight: '600' }">
              Featured Article
            </h2>
          </div>

          <article
            class="group bg-white dark:bg-[#251c29] rounded-2xl overflow-hidden border border-primary/10 dark:border-blush-pink/10 hover:shadow-2xl transition-all duration-300"
          >
            <div class="grid md:grid-cols-2 gap-8">
              <div class="relative aspect-4/3 md:aspect-auto overflow-hidden bg-blush-pink/30 dark:bg-[#2d2534]/30">
                <ImageWithFallback
                  :src="featuredArticle!.image"
                  :alt="featuredArticle!.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  class="absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-sm"
                  :style="{ backgroundColor: 'rgba(110, 76, 111, 0.9)' }"
                >
                  <span class="text-white" :style="{ fontSize: '0.875rem', fontWeight: '600' }">
                    {{ featuredArticle!.category }}
                  </span>
                </div>
              </div>

              <div class="p-8 sm:p-10 flex flex-col justify-center">
                <div class="inline-block mb-4">
                  <span
                    class="px-3 py-1 bg-blush-pink dark:bg-[#2d2534] text-primary dark:text-blush-pink rounded-full"
                    :style="{ fontSize: '0.75rem', fontWeight: '600' }"
                  >
                    FEATURED
                  </span>
                </div>

                <h3
                  class="text-foreground dark:text-blush-pink mb-4"
                  :style="{
                    fontSize: '2rem',
                    fontWeight: '700',
                    lineHeight: '1.2'
                  }"
                >
                  {{ featuredArticle!.title }}
                </h3>

                <p
                  class="text-foreground/70 dark:text-blush-pink/70 mb-6"
                  :style="{ fontSize: '1.125rem', lineHeight: '1.7' }"
                >
                  {{ featuredArticle!.excerpt }}
                </p>

                <div class="flex flex-wrap items-center gap-4 mb-6 text-foreground/60 dark:text-blush-pink/60">
                  <div class="flex items-center gap-2">
                    <Calendar class="w-4 h-4" />
                    <span :style="{ fontSize: '0.875rem' }">{{ featuredArticle!.date }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Clock class="w-4 h-4" />
                    <span :style="{ fontSize: '0.875rem' }">{{ featuredArticle!.readTime }}</span>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-linear-to-br from-primary to-blush-pink" />
                  <div>
                    <p
                      class="text-foreground dark:text-blush-pink"
                      :style="{ fontSize: '0.875rem', fontWeight: '600' }"
                    >
                      {{ featuredArticle!.author }}
                    </p>
                    <p class="text-foreground/50 dark:text-blush-pink/50" :style="{ fontSize: '0.75rem' }">
                      Women's Health & Performance
                    </p>
                  </div>
                </div>

                <Button
                  class="mt-8 bg-primary hover:bg-[#5a3d5b] dark:bg-blush-pink dark:hover:bg-white dark:text-dark-background text-white rounded-xl px-8 py-6"
                  @click="navigateTo(featuredArticle!.blogUrl || '/blog')"
                >
                  Read Full Article
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Articles Grid -->
      <section class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div class="container mx-auto max-w-6xl">
          <template v-if="regularArticles.length > 0">
            <div class="mb-8 flex items-center justify-between">
              <h2 class="text-foreground dark:text-blush-pink" :style="{ fontSize: '1.5rem', fontWeight: '600' }">
                {{ selectedCategory === 'All' ? 'All Articles' : selectedCategory }}
              </h2>
              <p class="text-foreground/60 dark:text-blush-pink/60" :style="{ fontSize: '0.875rem' }">
                {{ regularArticles.length }}
                {{ regularArticles.length === 1 ? 'article' : 'articles' }}
              </p>
            </div>

            <BlogCard :articles="regularArticles" />
          </template>

          <div v-else class="text-center py-16">
            <div
              class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blush-pink/50 dark:bg-[#2d2534]/50 mb-4"
            >
              <Search class="w-8 h-8 text-primary dark:text-blush-pink" />
            </div>
            <h3 class="text-foreground dark:text-blush-pink mb-2" :style="{ fontSize: '1.25rem', fontWeight: '600' }">
              No articles found
            </h3>
            <p class="text-foreground/60 dark:text-blush-pink/60">Try adjusting your search or filter</p>
          </div>
        </div>
      </section>

      <!-- Newsletter Section -->
      <section
        class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary to-[#5a3d5b] dark:from-[#2d2534] dark:to-dark-background"
      >
        <div class="container mx-auto max-w-4xl text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Tag class="w-8 h-8 text-white" />
          </div>

          <h2 class="text-white mb-4" :style="{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '700' }">
            Never miss an insight
          </h2>

          <p class="text-white/80 mb-8 max-w-2xl mx-auto" :style="{ fontSize: '1.125rem', lineHeight: '1.6' }">
            Get our latest articles on hormonal health, cycle syncing, and wellness delivered to your inbox every week.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              class="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 rounded-xl px-6 py-6 focus:border-white"
            />
            <Button class="bg-white hover:bg-white/90 text-primary rounded-xl px-8 py-6 whitespace-nowrap">
              Subscribe
            </Button>
          </div>

          <p class="text-white/60 mt-4" :style="{ fontSize: '0.75rem' }">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>
