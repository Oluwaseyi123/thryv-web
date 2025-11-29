<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowLeft, Search, Calendar, Clock, Tag } from 'lucide-vue-next'
import ImageWithFallback from '@/components/ui/img-with-fallback'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

definePageMeta({
  layout: 'default'
})

type Article = {
  id: number
  category: string
  title: string
  excerpt: string
  content: string
  image: string
  readTime: string
  date: string
  author: string
  categoryColor: string
  featured?: boolean
}

const allArticles: Article[] = [
  {
    id: 1,
    category: 'Hormones',
    title: "Understanding Your Hormonal Cycle: A Beginner's Guide",
    excerpt:
      'Learn how estrogen, progesterone, and other hormones influence your energy, mood, and physical performance throughout your cycle.',
    content: 'Comprehensive guide to understanding hormones...',
    image:
      'https://images.unsplash.com/photo-1687180948580-c4892a9a82c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHdvbWVuJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NjM0NjAwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '5 min read',
    date: 'Nov 20, 2025',
    author: 'Dr. Sarah Chen',
    categoryColor: '#6E4C6F',
    featured: true
  },
  {
    id: 2,
    category: 'Cycle Syncing',
    title: 'The Ultimate Guide to Cycle-Based Training',
    excerpt:
      'Discover how to adjust your workouts for each phase of your cycle to maximize strength, recovery, and overall performance.',
    content: 'Complete training guide...',
    image:
      'https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd29tYW4lMjBzdHJlbmd0aHxlbnwxfHx8fDE3NjM0NjAwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '8 min read',
    date: 'Nov 18, 2025',
    author: 'Emma Rodriguez',
    categoryColor: '#CFE1D4'
  },
  {
    id: 3,
    category: 'PCOS',
    title: 'Managing PCOS: Nutrition Tips for Each Cycle Phase',
    excerpt:
      'Expert-backed nutrition strategies to support hormone balance and reduce PCOS symptoms through cycle-aware eating.',
    content: 'PCOS nutrition strategies...',
    image:
      'https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwZm9vZHxlbnwxfHx8fDE3NjMzNzc3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '6 min read',
    date: 'Nov 15, 2025',
    author: 'Dr. Maya Patel',
    categoryColor: '#F7E6E1'
  },
  {
    id: 4,
    category: 'Hormones',
    title: 'How Cortisol Affects Your Menstrual Cycle',
    excerpt:
      'Understanding the stress hormone and its impact on your cycle, plus practical strategies for stress management.',
    content: 'Cortisol and cycle connection...',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1080',
    readTime: '7 min read',
    date: 'Nov 12, 2025',
    author: 'Dr. Sarah Chen',
    categoryColor: '#6E4C6F'
  },
  {
    id: 5,
    category: 'Nutrition',
    title: 'Eating for Your Follicular Phase: Energy-Boosting Foods',
    excerpt:
      'Optimize your nutrition during the follicular phase with these hormone-supportive foods and meal ideas.',
    content: 'Follicular phase nutrition guide...',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1080',
    readTime: '5 min read',
    date: 'Nov 10, 2025',
    author: 'Emma Rodriguez',
    categoryColor: '#CFE1D4'
  },
  {
    id: 6,
    category: 'Cycle Syncing',
    title: 'Your Luteal Phase Survival Guide',
    excerpt:
      'Navigate PMS symptoms and support your body during the luteal phase with evidence-based strategies.',
    content: 'Luteal phase support guide...',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1080',
    readTime: '6 min read',
    date: 'Nov 8, 2025',
    author: 'Dr. Maya Patel',
    categoryColor: '#CFE1D4'
  },
  {
    id: 7,
    category: 'PCOS',
    title: 'Natural Supplements for PCOS: What Actually Works',
    excerpt:
      'A science-backed look at supplements that may help manage PCOS symptoms and support hormonal balance.',
    content: 'PCOS supplements research...',
    image:
      'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=1080',
    readTime: '9 min read',
    date: 'Nov 5, 2025',
    author: 'Dr. Sarah Chen',
    categoryColor: '#F7E6E1'
  },
  {
    id: 8,
    category: 'Wellness',
    title: 'Sleep and Your Cycle: Why Rest Matters More Than You Think',
    excerpt:
      'Discover how sleep patterns change throughout your cycle and how to optimize rest for hormonal health.',
    content: 'Sleep and hormones connection...',
    image:
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1080',
    readTime: '7 min read',
    date: 'Nov 3, 2025',
    author: 'Emma Rodriguez',
    categoryColor: '#CFE1D4'
  },
  {
    id: 9,
    category: 'Nutrition',
    title: 'Anti-Inflammatory Foods for Hormone Balance',
    excerpt:
      'Learn which foods help reduce inflammation and support healthy hormone production throughout your cycle.',
    content: 'Anti-inflammatory nutrition...',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1080',
    readTime: '6 min read',
    date: 'Nov 1, 2025',
    author: 'Dr. Maya Patel',
    categoryColor: '#CFE1D4'
  }
]

const categories = [
  'All',
  'Hormones',
  'Cycle Syncing',
  'PCOS',
  'Nutrition',
  'Wellness'
]

const props = defineProps<{
  onBack?: () => void
}>()

const selectedCategory = ref<string>('All')
const searchQuery = ref<string>('')

const filteredArticles = computed(() =>
  allArticles.filter((article) => {
    const matchesCategory =
      selectedCategory.value === 'All' ||
      article.category === selectedCategory.value
    const query = searchQuery.value.toLowerCase()
    const matchesSearch =
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })
)

const featuredArticle = computed(() => allArticles.find((a) => a.featured))

const regularArticles = computed(() =>
  filteredArticles.value.filter((a) => !a.featured)
)

const handleBack = () => {
  if (props.onBack) {
    props.onBack()
  } else {
    // Fallback: go back in history (Nuxt will auto-import useRouter)
    const router = useRouter()
    router.back()
  }
}

const handleSearchInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  searchQuery.value = target.value
}
</script>

<template>
  <NuxtLayout name="default">
    <div
      class="min-h-screen bg-background dark:bg-dark-background transition-colors"
    >
      <!-- Hero Section -->
      <section
        class="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blush-pink/30 via-background to-secondary/20 dark:from-[#2d2534] dark:via-dark-background dark:to-[#2a3432]/20"
      >
        <div class="container mx-auto max-w-6xl">
          <button
            class="inline-flex items-center gap-2 mb-8 text-foreground dark:text-blush-pink hover:text-primary dark:hover:text-white transition-colors group"
            @click="handleBack"
          >
            <ArrowLeft
              class="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            />
            <span :style="{ fontWeight: '500' }">Back to Home</span>
          </button>

          <div class="text-center space-y-6 max-w-3xl mx-auto">
            <div
              class="inline-block px-4 py-2 bg-white/60 dark:bg-[#251c29]/60 backdrop-blur-sm rounded-full border border-primary/10 dark:border-blush-pink/10"
            >
              <span
                class="text-primary dark:text-blush-pink"
                :style="{ fontSize: '0.875rem', fontWeight: '600' }"
              >
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

            <p
              class="text-foreground/70 dark:text-blush-pink/70"
              :style="{ fontSize: '1.25rem', lineHeight: '1.6' }"
            >
              Evidence-based insights on cycle syncing, hormonal health, and
              thriving through every phase
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
            <h2
              class="text-foreground dark:text-blush-pink"
              :style="{ fontSize: '1.5rem', fontWeight: '600' }"
            >
              Featured Article
            </h2>
          </div>

          <article
            class="group bg-white dark:bg-[#251c29] rounded-2xl overflow-hidden border border-primary/10 dark:border-blush-pink/10 hover:shadow-2xl transition-all duration-300"
          >
            <div class="grid md:grid-cols-2 gap-8">
              <div
                class="relative aspect-4/3 md:aspect-auto overflow-hidden bg-blush-pink/30 dark:bg-[#2d2534]/30"
              >
                <ImageWithFallback
                  :src="featuredArticle!.image"
                  :alt="featuredArticle!.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  class="absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-sm"
                  :style="{ backgroundColor: 'rgba(110, 76, 111, 0.9)' }"
                >
                  <span
                    class="text-white"
                    :style="{ fontSize: '0.875rem', fontWeight: '600' }"
                  >
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

                <div
                  class="flex flex-wrap items-center gap-4 mb-6 text-foreground/60 dark:text-blush-pink/60"
                >
                  <div class="flex items-center gap-2">
                    <Calendar class="w-4 h-4" />
                    <span :style="{ fontSize: '0.875rem' }">{{
                      featuredArticle!.date
                    }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Clock class="w-4 h-4" />
                    <span :style="{ fontSize: '0.875rem' }">{{
                      featuredArticle!.readTime
                    }}</span>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-linear-to-br from-primary to-blush-pink"
                  />
                  <div>
                    <p
                      class="text-foreground dark:text-blush-pink"
                      :style="{ fontSize: '0.875rem', fontWeight: '600' }"
                    >
                      {{ featuredArticle!.author }}
                    </p>
                    <p
                      class="text-foreground/50 dark:text-blush-pink/50"
                      :style="{ fontSize: '0.75rem' }"
                    >
                      Hormone Health Specialist
                    </p>
                  </div>
                </div>

                <Button
                  class="mt-8 bg-primary hover:bg-[#5a3d5b] dark:bg-blush-pink dark:hover:bg-white dark:text-dark-background text-white rounded-xl px-8 py-6"
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
              <h2
                class="text-foreground dark:text-blush-pink"
                :style="{ fontSize: '1.5rem', fontWeight: '600' }"
              >
                {{
                  selectedCategory === 'All' ? 'All Articles' : selectedCategory
                }}
              </h2>
              <p
                class="text-foreground/60 dark:text-blush-pink/60"
                :style="{ fontSize: '0.875rem' }"
              >
                {{ regularArticles.length }}
                {{ regularArticles.length === 1 ? 'article' : 'articles' }}
              </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <article
                v-for="article in regularArticles"
                :key="article.id"
                class="group bg-white dark:bg-[#251c29] rounded-2xl overflow-hidden border border-primary/10 dark:border-blush-pink/10 hover:shadow-xl hover:border-primary/20 dark:hover:border-blush-pink/20 transition-all duration-300"
              >
                <!-- Image -->
                <div
                  class="relative aspect-16/10 overflow-hidden bg-blush-pink/30 dark:bg-[#2d2534]/30"
                >
                  <ImageWithFallback
                    :src="article.image"
                    :alt="article.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    class="absolute top-4 left-4 px-3 py-1 rounded-full backdrop-blur-sm"
                    :style="{
                      backgroundColor:
                        article.categoryColor === '#6E4C6F'
                          ? 'rgba(110, 76, 111, 0.9)'
                          : article.categoryColor === '#CFE1D4'
                            ? 'rgba(207, 225, 212, 0.9)'
                            : 'rgba(247, 230, 225, 0.9)'
                    }"
                  >
                    <span
                      :style="{ fontSize: '0.75rem', fontWeight: '600' }"
                      :class="
                        article.categoryColor === '#6E4C6F'
                          ? 'text-white'
                          : 'text-foreground'
                      "
                    >
                      {{ article.category }}
                    </span>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-6 space-y-4">
                  <div
                    class="flex items-center gap-3 text-foreground/50 dark:text-blush-pink/50"
                  >
                    <div class="flex items-center gap-1">
                      <Calendar class="w-3.5 h-3.5" />
                      <span :style="{ fontSize: '0.75rem' }">
                        {{ article.date }}
                      </span>
                    </div>
                    <span>•</span>
                    <div class="flex items-center gap-1">
                      <Clock class="w-3.5 h-3.5" />
                      <span :style="{ fontSize: '0.75rem' }">
                        {{ article.readTime }}
                      </span>
                    </div>
                  </div>

                  <h3
                    class="text-foreground dark:text-blush-pink group-hover:text-primary dark:group-hover:text-white transition-colors"
                    :style="{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      lineHeight: '1.4'
                    }"
                  >
                    {{ article.title }}
                  </h3>

                  <p
                    class="text-foreground/70 dark:text-blush-pink/70"
                    :style="{ fontSize: '0.875rem', lineHeight: '1.6' }"
                  >
                    {{ article.excerpt }}
                  </p>

                  <div
                    class="pt-2 border-t border-primary/10 dark:border-blush-pink/10"
                  >
                    <p
                      class="text-foreground/60 dark:text-blush-pink/60"
                      :style="{ fontSize: '0.75rem' }"
                    >
                      By {{ article.author }}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </template>

          <div v-else class="text-center py-16">
            <div
              class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blush-pink/50 dark:bg-[#2d2534]/50 mb-4"
            >
              <Search class="w-8 h-8 text-primary dark:text-blush-pink" />
            </div>
            <h3
              class="text-foreground dark:text-blush-pink mb-2"
              :style="{ fontSize: '1.25rem', fontWeight: '600' }"
            >
              No articles found
            </h3>
            <p class="text-foreground/60 dark:text-blush-pink/60">
              Try adjusting your search or filter
            </p>
          </div>
        </div>
      </section>

      <!-- Newsletter Section -->
      <section
        class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary to-[#5a3d5b] dark:from-[#2d2534] dark:to-dark-background"
      >
        <div class="container mx-auto max-w-4xl text-center">
          <div
            class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6"
          >
            <Tag class="w-8 h-8 text-white" />
          </div>

          <h2
            class="text-white mb-4"
            :style="{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '700' }"
          >
            Never miss an insight
          </h2>

          <p
            class="text-white/80 mb-8 max-w-2xl mx-auto"
            :style="{ fontSize: '1.125rem', lineHeight: '1.6' }"
          >
            Get our latest articles on hormonal health, cycle syncing, and
            wellness delivered to your inbox every week.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              class="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 rounded-xl px-6 py-6 focus:border-white"
            />
            <Button
              class="bg-white hover:bg-white/90 text-primary rounded-xl px-8 py-6 whitespace-nowrap"
            >
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
