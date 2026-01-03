<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import ImageWithFallback from './ui/img-with-fallback'

import type { IArticlesModel } from '@/types/articles-model'

const props = defineProps<{
  articles: IArticlesModel[]
}>()
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
    <article
      v-for="(article, index) in props.articles"
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
            >
              Read more
            </span>
            <ArrowRight class="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  </div>
</template>
