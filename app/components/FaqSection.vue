<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    label: 'Is Thryve a medical app?',
    content:
      'No. Thryve is an educational and wellness app that provides guidance based on peer-reviewed research. It is not a medical device and does not diagnose, treat, or prevent any medical conditions. Always consult with your healthcare provider for medical advice, diagnosis, or treatment.'
  },
  {
    label: 'Does Thryve work if my cycle is irregular or I have PCOS?',
    content: `Yes! Thryve is specifically designed to be flexible and inclusive. We have a PCOS-friendly mode that adapts to irregular cycles. You don't need a perfect 28-day cycle to benefit from cycle syncing — we'll help you identify your unique patterns and work with your body's natural rhythm, whatever that looks like for you.`
  },
  {
    label: 'Do I need a wearable to use Thryve?',
    content: `No, you don't need any wearable device to use Thryve. The app works with simple daily check-ins where you track your energy, mood, and symptoms. However, if you do use a fitness tracker or period tracking app, Thryve can integrate with those to provide even more personalized insights.`
  },
  {
    label: 'Will this help with weight loss?',
    content:
      'Thryve is not a weight loss app. Our focus is on helping you optimize your energy, strength, and hormonal balance through cycle-aware training and nutrition. Some users may experience body composition changes as a result of training more effectively and feeling better overall — but our goal is sustainable wellness, not restrictive dieting or quick fixes.'
  },
  {
    label: 'When will Thryve be available?',
    content: `We're currently in beta testing with early access users. By joining the waitlist, you'll be among the first to know when we launch publicly. We're aiming for a full release in 2025, with both iOS and Android versions available.`
  },
  {
    label: 'How much will Thryve cost?',
    content: `We're still finalizing pricing details, but we're committed to making Thryve accessible. Early access members on the waitlist will receive special launch pricing. We'll share more details as we get closer to launch.`
  },
  {
    label: 'Is my data private and secure?',
    content:
      'Absolutely. Your health data is sensitive, and we take privacy very seriously. All data is encrypted, stored securely, and never shared with third parties without your explicit consent. You own your data and can delete it anytime.'
  },
  {
    label: `Can I use Thryve if I'm not trying to get pregnant?`,
    content: `Yes! Thryve is for any woman who wants to understand her cycle and optimize her wellness. Whether you're focused on fitness, managing PCOS, improving energy levels, or just understanding your body better — Thryve is designed to support you, regardless of your reproductive goals.`
  }
]
</script>

<template>
  <section id="faqs" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-background">
    <div class="container mx-auto max-w-4xl">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16 space-y-4">
        <div
          class="inline-block px-4 py-2 bg-blush-pink/50 dark:bg-[#2d2534]/60 backdrop-blur-sm rounded-full border border-primary/10 dark:border-blush-pink/10"
        >
          <span class="text-primary dark:text-blush-pink" :style="{ fontSize: '0.875rem', fontWeight: '600' }">
            FAQs
          </span>
        </div>

        <h2
          class="text-foreground dark:text-blush-pink"
          :style="{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700'
          }"
        >
          Questions, meet answers.
        </h2>

        <p class="text-foreground/70 dark:text-blush-pink/70 max-w-2xl mx-auto">
          Everything you need to know about Thryve.
        </p>
      </div>

      <!-- Accordion -->
      <Accordion type="single" collapsible class="space-y-4">
        <AccordionItem
          v-for="(faq, index) in faqs"
          :key="index"
          :value="`item-${index}`"
          class="bg-linear-to-br from-white to-blush-pink/10 dark:from-[#251c29] dark:to-[#2d2534]/30 border border-primary/10 dark:border-blush-pink/10 rounded-xl px-6 data-[state=open]:shadow-lg dark:data-[state=open]:shadow-2xl dark:data-[state=open]:shadow-blush-pink/5"
        >
          <AccordionTrigger
            class="text-left text-foreground dark:text-blush-pink hover:text-primary dark:hover:text-secondary hover:no-underline py-5"
            :style="{ fontSize: '1.125rem', fontWeight: '600' }"
          >
            {{ faq.label }}
          </AccordionTrigger>
          <AccordionContent class="text-foreground/80 dark:text-blush-pink/80 pb-5">
            {{ faq.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <!-- Still have questions CTA -->
      <div class="mt-12 text-center">
        <p class="text-foreground/70 dark:text-blush-pink/70 mb-4">Still have questions?</p>
        <a
          href="mailto:hello@thryve.app"
          class="inline-flex items-center gap-2 text-primary dark:text-secondary hover:underline"
          :style="{ fontSize: '1.125rem', fontWeight: '600' }"
        >
          Get in touch
        </a>
      </div>
    </div>
  </section>
</template>
