<script setup lang="ts">
import { Instagram, Mail } from 'lucide-vue-next'
import ImageWithFallback from './ui/img-with-fallback'
import logoSvg from '../assets/images/logo.svg'

interface FooterItem {
  name: string
  href: string
}

interface SocialLink {
  icon: any
  href: string
  label: string
}

const footerLinks: { product: FooterItem[]; resources: FooterItem[] } = {
  product: [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Science', href: '#science' },
    { name: 'Community', href: '#community' }
  ],
  resources: [
    { name: 'Blog', href: '#blog' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ]
}

const socialLinks: SocialLink[] = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: 'mailto:hello@thryve.app', label: 'Email' }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="bg-linear-to-br from-primary to-[#5a3d5b] dark:from-dark-background dark:to-[#251c29] text-white dark:text-blush-pink border-t border-white/10 dark:border-blush-pink/10"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <!-- Main Footer Content -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12"
      >
        <!-- Brand Column -->
        <div class="col-span-1 sm:col-span-2 lg:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 dark:bg-blush-pink/10 backdrop-blur-sm"
            >
              <ImageWithFallback
                :src="logoSvg"
                alt="Thryve Logo"
                class="w-10 h-10 sm:w-10 sm:h-10"
              />
            </div>
            <span :style="{ fontSize: '1.5rem', fontWeight: '700' }"
              >Thryve</span
            >
          </div>
          <p
            class="text-white/90 dark:text-blush-pink/80 mb-6 max-w-md"
            :style="{ lineHeight: '1.7' }"
          >
            Hormone-aware wellness and cycle-syncing app designed to help women
            feel balanced, strong, and in flow.
          </p>

          <!-- Social Links -->
          <div class="flex items-center gap-3">
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.href"
              :aria-label="social.label"
              class="w-10 h-10 rounded-full bg-white/10 dark:bg-blush-pink/10 hover:bg-white/20 dark:hover:bg-blush-pink/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Product Links -->
        <div>
          <h3
            class="mb-4"
            :style="{
              fontSize: '0.875rem',
              fontWeight: '700',
              letterSpacing: '0.05em'
            }"
          >
            PRODUCT
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(link, index) in footerLinks.product"
              :key="`product-${index}`"
            >
              <a
                :href="link.href"
                class="text-white/80 dark:text-blush-pink/80 hover:text-white dark:hover:text-blush-pink transition-colors"
                :style="{ fontSize: '0.875rem' }"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources Links -->
        <div>
          <h3
            class="mb-4"
            :style="{
              fontSize: '0.875rem',
              fontWeight: '700',
              letterSpacing: '0.05em'
            }"
          >
            RESOURCES
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(link, index) in footerLinks.resources"
              :key="`resource-${index}`"
            >
              <a
                :href="link.href"
                class="text-white/80 dark:text-blush-pink/80 hover:text-white dark:hover:text-blush-pink transition-colors"
                :style="{ fontSize: '0.875rem' }"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-white/10 dark:border-blush-pink/10 mb-8" />

      <!-- Bottom Footer -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          class="text-white/70 dark:text-blush-pink/70 text-center md:text-left"
          :style="{ fontSize: '0.875rem' }"
        >
          © {{ currentYear }} Thryve. All rights reserved.
        </p>

        <p
          class="text-white/60 dark:text-blush-pink/60 text-center md:text-right max-w-2xl"
          :style="{ fontSize: '0.75rem', fontStyle: 'italic' }"
        >
          Thryve is for education and wellness support, not medical diagnosis.
          Always consult your healthcare provider for medical advice.
        </p>
      </div>
    </div>
  </footer>
</template>
