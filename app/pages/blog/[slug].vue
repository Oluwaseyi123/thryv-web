<script setup lang="ts">
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Heart } from 'lucide-vue-next'

import ImageWithFallback from '@/components/ui/img-with-fallback'
import { Button } from '@/components/ui/button'

const route = useRoute()
const slug = route.params.slug

const { data: article } = await useAsyncData(() =>
  queryCollection('content')
    .path('/' + slug)
    .first()
)

const emit = defineEmits(['back', 'articleClick'])

useSeoMeta({
  title: article.value?.title,
  description: article.value?.description
})

definePageMeta({
  layout: 'default'
})

const router = useRouter()
const goBack = () => {
  router.push('/blog')
}
</script>

<template>
  <NuxtLayout>
    <div class="min-h-screen bg-background dark:bg-dark-background transition-colors">
      <!-- Article not found -->
      <div v-if="!article" class="min-h-screen bg-background dark:bg-dark-background flex items-center justify-center">
        <div class="text-center">
          <h2 class="text-foreground dark:text-blush-pink mb-4" :style="{ fontSize: '2rem', fontWeight: '700' }">
            Article not found
          </h2>
          <Button
            class="bg-primary hover:bg-[#5a3d5b] dark:bg-blush-pink dark:hover:bg-white dark:text-dark-background text-white rounded-xl px-8 cursor-pointer"
            @click="emit('back')"
          >
            Back to Blog
          </Button>
        </div>
      </div>

      <template v-else>
        <section
          class="pt-24 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blush-pink/30 via-background to-[#CFE1D4]/20 dark:from-[#2d2534] dark:via-dark-background dark:to-[#2a3432]/20"
        >
          <div class="container mx-auto max-w-4xl">
            <button
              class="inline-flex items-center gap-2 mb-8 text-foreground dark:text-blush-pink hover:text-primary dark:hover:text-white transition-colors group cursor-pointer"
              @click="goBack"
            >
              <ArrowLeft class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span :style="{ fontWeight: '500' }">Back to Blog</span>
            </button>

            <!-- Category Badge -->
            <div class="mb-6">
              <span
                class="inline-block px-4 py-2 rounded-full"
                :style="{
                  backgroundColor:
                    article.categoryColor === '#6E4C6F' ? 'rgba(110, 76, 111, 0.15)' : 'rgba(207, 225, 212, 0.3)',
                  color: article.categoryColor
                }"
              >
                <span :style="{ fontSize: '0.875rem', fontWeight: '600' }">
                  {{ article.category }}
                </span>
              </span>
            </div>

            <!-- Title -->
            <h1
              class="text-foreground dark:text-blush-pink mb-6"
              :style="{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '700',
                lineHeight: '1.1'
              }"
            >
              {{ article.title }}
            </h1>

            <!-- Excerpt -->
            <p
              class="text-foreground/70 dark:text-blush-pink/70 mb-8"
              :style="{ fontSize: '1.25rem', lineHeight: '1.6' }"
            >
              {{ article.description }}
            </p>

            <!-- Meta Information -->
            <div
              class="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-primary/10 dark:border-blush-pink/10"
            >
              <div class="flex items-center gap-3">
                <ImageWithFallback
                  :src="article.author.avatar"
                  alt="Author Image"
                  class="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p class="text-foreground dark:text-blush-pink" :style="{ fontSize: '0.875rem', fontWeight: '600' }">
                    {{ article.author.name }}
                  </p>
                  <p class="text-foreground/60 dark:text-blush-pink/60" :style="{ fontSize: '0.75rem' }">
                    {{ article.author.title }}
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-4 text-foreground/60 dark:text-blush-pink/60">
                <div class="flex items-center gap-2">
                  <Calendar class="w-4 h-4" />
                  <span :style="{ fontSize: '0.875rem' }">
                    {{ article.date }}
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <Clock class="w-4 h-4" />
                  <span :style="{ fontSize: '0.875rem' }">
                    {{ article.readTime }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-3">
              <Button
                class="bg-white dark:bg-[#251c29] hover:bg-blush-pink/50 dark:hover:bg-[#2d2534] text-foreground dark:text-blush-pink border border-primary/20 dark:border-blush-pink/20 rounded-xl px-6 flex items-center gap-2"
              >
                <Share2 class="w-4 h-4" />
                Share
              </Button>
              <Button
                class="bg-white dark:bg-[#251c29] hover:bg-blush-pink/50 dark:hover:bg-[#2d2534] text-foreground dark:text-blush-pink border border-primary/20 dark:border-blush-pink/20 rounded-xl px-6 flex items-center gap-2"
              >
                <Bookmark class="w-4 h-4" />
                Save
              </Button>
              <Button
                class="bg-white dark:bg-[#251c29] hover:bg-blush-pink/50 dark:hover:bg-[#2d2534] text-foreground dark:text-blush-pink border border-primary/20 dark:border-blush-pink/20 rounded-xl px-6 flex items-center gap-2"
              >
                <Heart class="w-4 h-4" />
                236
              </Button>
            </div>
          </div>
        </section>

        <!-- Featured Image -->
        <section class="px-4 sm:px-6 lg:px-8 mb-12">
          <div class="container mx-auto max-w-4xl">
            <div
              class="aspect-[16/9] rounded-2xl overflow-hidden bg-blush-pink/30 dark:bg-[#2d2534]/30 border border-primary/10 dark:border-blush-pink/10"
            >
              <ImageWithFallback :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <!-- Article Content -->
        <article class="px-4 sm:px-6 lg:px-8 mb-16">
          <div class="container mx-auto max-w-3xl">
            <!-- <div
              class="article-content text-foreground/85 dark:text-blush-pink/85"
              :style="{ fontSize: '1.125rem', lineHeight: '1.8' }"
              v-html="article.content"
            /> -->
            <div
              class="article-content text-foreground/85 dark:text-blush-pink/85"
              :style="{ fontSize: '1.125rem', lineHeight: '1.8' }"
            >
              <ContentRenderer :value="article" />
            </div>
          </div>
        </article>

        <!-- Author Bio -->
        <section class="px-4 sm:px-6 lg:px-8 mb-16">
          <div class="container mx-auto max-w-3xl">
            <div
              class="bg-gradient-to-br from-blush-pink/30 to-[#CFE1D4]/20 dark:from-[#2d2534]/50 dark:to-[#2a3432]/30 rounded-2xl p-8 border border-primary/10 dark:border-blush-pink/10"
            >
              <div class="flex flex-col sm:flex-row gap-6">
                <ImageWithFallback
                  :src="article.author.avatar"
                  :alt="article.author.name"
                  class="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-[#251c29]"
                />
                <div class="flex-1">
                  <h3
                    class="text-foreground dark:text-blush-pink mb-2"
                    :style="{ fontSize: '1.25rem', fontWeight: '600' }"
                  >
                    {{ article.author.name }}
                  </h3>
                  <p
                    class="text-primary dark:text-blush-pink/80 mb-3"
                    :style="{ fontSize: '0.875rem', fontWeight: '500' }"
                  >
                    {{ article.author.title }}
                  </p>
                  <p
                    class="text-foreground/70 dark:text-blush-pink/70"
                    :style="{ fontSize: '0.875rem', lineHeight: '1.6' }"
                  >
                    {{ article.author.bio }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Related Articles -->
        <!-- <section
          class="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blush-pink/20 via-white to-[#CFE1D4]/10 dark:from-dark-background dark:via-dark-background dark:to-dark-background"
        >
          <div class="container mx-auto max-w-6xl">
            <h2
              class="text-foreground dark:text-blush-pink mb-8"
              :style="{ fontSize: '2rem', fontWeight: '700' }"
            >
              Related Articles
            </h2>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <article
                v-for="related in article.related"
                :key="related.id"
                @click="emit('articleClick', related.id)"
                class="group bg-white dark:bg-[#251c29] rounded-2xl overflow-hidden border border-primary/10 dark:border-blush-pink/10 hover:shadow-xl hover:border-primary/20 dark:hover:border-blush-pink/20 transition-all duration-300 cursor-pointer"
              >
                <div
                  class="relative aspect-[16/10] overflow-hidden bg-blush-pink/30 dark:bg-[#2d2534]/30"
                >
                  <ImageWithFallback
                    :src="related.image"
                    :alt="related.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    class="absolute top-4 left-4 px-3 py-1 rounded-full backdrop-blur-sm"
                    :style="{
                      backgroundColor:
                        related.categoryColor === '#6E4C6F'
                          ? 'rgba(110, 76, 111, 0.9)'
                          : 'rgba(207, 225, 212, 0.9)'
                    }"
                  >
                    <span
                      :style="{ fontSize: '0.75rem', fontWeight: '600' }"
                      :class="
                        related.categoryColor === '#6E4C6F'
                          ? 'text-white'
                          : 'text-foreground'
                      "
                    >
                      {{ related.category }}
                    </span>
                  </div>
                </div>

                <div class="p-6 space-y-3">
                  <h3
                    class="text-foreground dark:text-blush-pink group-hover:text-primary dark:group-hover:text-white transition-colors"
                    :style="{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      lineHeight: '1.4'
                    }"
                  >
                    {{ related.title }}
                  </h3>

                  <div
                    class="flex items-center gap-2 text-foreground/50 dark:text-blush-pink/50"
                  >
                    <Clock class="w-3.5 h-3.5" />
                    <span :style="{ fontSize: '0.75rem' }">
                      {{ related.readTime }}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section> -->

        <!-- Comments/Engagement Section -->
        <!-- <section
          class="px-4 sm:px-6 lg:px-8 py-16 border-t border-primary/10 dark:border-blush-pink/10"
        >
          <div class="container mx-auto max-w-3xl text-center">
            <div
              class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blush-pink/50 dark:bg-[#2d2534]/50 mb-6"
            >
              <MessageCircle
                class="w-8 h-8 text-primary dark:text-blush-pink"
              />
            </div>

            <h2
              class="text-foreground dark:text-blush-pink mb-4"
              :style="{ fontSize: '2rem', fontWeight: '700' }"
            >
              Join the conversation
            </h2>

            <p
              class="text-foreground/70 dark:text-blush-pink/70 mb-8 max-w-xl mx-auto"
              :style="{ fontSize: '1.125rem', lineHeight: '1.6' }"
            >
              Share your thoughts and experiences with our community. Sign up
              for free to leave comments and connect with other readers.
            </p>

            <Button
              class="bg-primary hover:bg-[#5a3d5b] dark:bg-blush-pink dark:hover:bg-white dark:text-dark-background text-white rounded-xl px-8 py-6"
            >
              Sign Up to Comment
            </Button>
          </div>
        </section> -->
      </template>
      <!-- <ContentRenderer v-if="data" :value="data" />
      <div v-else>Home not found</div>
      {{ data }} -->
    </div>
  </NuxtLayout>
</template>
