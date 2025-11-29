<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import ImageWithFallback from './ui/img-with-fallback'

interface Article {
  category: string
  title: string
  excerpt: string
  image: string
  readTime: string
  categoryColor: string
  blogUrl?: string
}

const articles: Article[] = [
  {
    category: 'Hormones',
    title: `Understanding Your Hormonal Cycle: A Beginner's Guide`,
    excerpt: `Learn how estrogen, progesterone, and other hormones influence your energy, mood, and physical performance throughout your cycle.`,
    image: `https://images.unsplash.com/photo-1687180948580-c4892a9a82c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHdvbWVuJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NjM0NjAwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral`,
    readTime: `5 min read`,
    categoryColor: `#6E4C6F`,
    blogUrl: '/blog/understanding-hormonal-cycle'
  },
  {
    category: 'Cycle Syncing',
    title: 'The Ultimate Guide to Cycle-Based Training',
    excerpt:
      'Discover how to adjust your workouts for each phase of your cycle to maximize strength, recovery, and overall performance.',
    image:
      'https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd29tYW4lMjBzdHJlbmd0aHxlbnwxfHx8fDE3NjM0NjAwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '8 min read',
    categoryColor: '#CFE1D4',
    blogUrl: '/blog/cycle-based-training-guide'
  },
  {
    category: 'PCOS',
    title: 'Managing PCOS: Nutrition Tips for Each Cycle Phase',
    excerpt:
      'Expert-backed nutrition strategies to support hormone balance and reduce PCOS symptoms through cycle-aware eating.',
    image:
      'https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwZm9vZHxlbnwxfHx8fDE3NjMzNzc3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    readTime: '6 min read',
    categoryColor: '#F7E6E1',
    blogUrl: '/blog/pcos-nutrition-tips'
  }
]
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

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <article
          v-for="(article, index) in articles"
          :key="index"
          class="group bg-white dark:bg-[#251c29] rounded-2xl overflow-hidden border border-primary/10 dark:border-blush-pink/10 hover:shadow-xl hover:border-primary/20 dark:hover:border-blush-pink/20 transition-all duration-300"
        >
          <!-- Image -->
          <div
            class="relative aspect-16/10 overflow-hidden bg-blush-pink/30 dark:bg-[#2d2534]/30"
          >
            <ImageWithFallback
              :src="article.image"
              :alt="article.title"
              class="w-full h-full object-cover transition-transform duration-300"
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
          <div class="p-6 space-y-3">
            <h3
              class="text-foreground dark:text-blush-pink group-hover:text-primary dark:group-hover:text-secondary transition-colors"
              :style="{
                fontSize: '1.25rem',
                fontWeight: '600',
                lineHeight: '1.3'
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

            <div class="flex items-center justify-between pt-3">
              <span
                class="text-foreground/50 dark:text-blush-pink/50"
                :style="{ fontSize: '0.75rem' }"
              >
                {{ article.readTime }}
              </span>
              <button
                type="button"
                class="flex items-center gap-1 text-primary dark:text-secondary group-hover:gap-2 transition-all"
                @click="navigateTo(article.blogUrl || '/blog')"
              >
                <span
                  :style="{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }"
                  >Read more
                </span>
                <ArrowRight class="w-4 h-4" />
              </button>
            </div>
          </div>
        </article>
      </div>

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
