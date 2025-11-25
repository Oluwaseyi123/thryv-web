<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import ImageWithFallback from "./ui/img-with-fallback";

interface Article {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  categoryColor: string;
}

const articles: Article[] = [
  {
    category: "Hormones",
    title: "Understanding Your Hormonal Cycle: A Beginner's Guide",
    excerpt:
      "Learn how estrogen, progesterone, and other hormones influence your energy, mood, and physical performance throughout your cycle.",
    image:
      "https://images.unsplash.com/photo-1687180948580-c4892a9a82c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHdvbWVuJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NjM0NjAwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    readTime: "5 min read",
    categoryColor: "#6E4C6F",
  },
  {
    category: "Cycle Syncing",
    title: "The Ultimate Guide to Cycle-Based Training",
    excerpt:
      "Discover how to adjust your workouts for each phase of your cycle to maximize strength, recovery, and overall performance.",
    image:
      "https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd29tYW4lMjBzdHJlbmd0aHxlbnwxfHx8fDE3NjM0NjAwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    readTime: "8 min read",
    categoryColor: "#CFE1D4",
  },
  {
    category: "PCOS",
    title: "Managing PCOS: Nutrition Tips for Each Cycle Phase",
    excerpt:
      "Expert-backed nutrition strategies to support hormone balance and reduce PCOS symptoms through cycle-aware eating.",
    image:
      "https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwZm9vZHxlbnwxfHx8fDE3NjMzNzc3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    readTime: "6 min read",
    categoryColor: "#F7E6E1",
  },
];
</script>

<template>
  <section
    id="blog"
    class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CFE1D4]/20 via-white to-[#F7E6E1]/30 dark:from-[#2a3432]/20 dark:via-[#1a1420] dark:to-[#251c29]"
  >
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12 sm:mb-16 space-y-4">
        <div
          class="inline-block px-4 py-2 bg-white/60 dark:bg-[#2d2534]/60 backdrop-blur-sm rounded-full border border-[#6E4C6F]/10 dark:border-[#F7E6E1]/10"
        >
          <span
            class="text-[#6E4C6F] dark:text-[#F7E6E1]"
            :style="{ fontSize: '0.875rem', fontWeight: '600' }"
          >
            LEARN & THRIVE
          </span>
        </div>

        <h2
          class="text-[#2D2D2D] dark:text-[#F7E6E1]"
          :style="{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            lineHeight: '1.2',
          }"
        >
          Evidence-based insights
        </h2>

        <p
          class="text-[#2D2D2D]/70 dark:text-[#F7E6E1]/70 max-w-2xl mx-auto"
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
          class="group bg-white dark:bg-[#251c29] rounded-2xl overflow-hidden border border-[#6E4C6F]/10 dark:border-[#F7E6E1]/10 hover:shadow-xl hover:border-[#6E4C6F]/20 dark:hover:border-[#F7E6E1]/20 transition-all duration-300"
        >
          <!-- Image -->
          <div
            class="relative aspect-[16/10] overflow-hidden bg-[#F7E6E1]/30 dark:bg-[#2d2534]/30"
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
                      : 'rgba(247, 230, 225, 0.9)',
              }"
            >
              <span
                :style="{ fontSize: '0.75rem', fontWeight: '600' }"
                :class="
                  article.categoryColor === '#6E4C6F'
                    ? 'text-white'
                    : 'text-[#2D2D2D]'
                "
              >
                {{ article.category }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 space-y-3">
            <h3
              class="text-[#2D2D2D] dark:text-[#F7E6E1] group-hover:text-[#6E4C6F] dark:group-hover:text-[#CFE1D4] transition-colors"
              :style="{
                fontSize: '1.25rem',
                fontWeight: '600',
                lineHeight: '1.3',
              }"
            >
              {{ article.title }}
            </h3>

            <p
              class="text-[#2D2D2D]/70 dark:text-[#F7E6E1]/70"
              :style="{ fontSize: '0.875rem', lineHeight: '1.6' }"
            >
              {{ article.excerpt }}
            </p>

            <div class="flex items-center justify-between pt-3">
              <span
                class="text-[#2D2D2D]/50 dark:text-[#F7E6E1]/50"
                :style="{ fontSize: '0.75rem' }"
              >
                {{ article.readTime }}
              </span>
              <button
                type="button"
                class="flex items-center gap-1 text-[#6E4C6F] dark:text-[#CFE1D4] group-hover:gap-2 transition-all"
              >
                <span
                  :style="{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
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
          class="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-[#251c29] hover:bg-[#F7E6E1]/50 dark:hover:bg-[#2d2534] text-[#6E4C6F] dark:text-[#CFE1D4] rounded-xl border border-[#6E4C6F]/20 dark:border-[#F7E6E1]/20 hover:border-[#6E4C6F]/40 dark:hover:border-[#F7E6E1]/40 transition-all group"
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
