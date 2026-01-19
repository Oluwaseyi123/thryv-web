import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import type { IArticlesModel } from '@/types/articles-model'

export const useArticlesStore = defineStore('articlesStore', () => {
  const articles: Ref<IArticlesModel[]> = ref([
    {
      id: 1,
      category: 'Hormones',
      title: `Understanding Your Hormonal Cycle: A Beginner's Guide`,
      excerpt: `Learn how estrogen, progesterone, and other hormones influence your energy, mood, and physical performance throughout your cycle.`,
      image: `https://images.unsplash.com/photo-1687180948580-c4892a9a82c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHdvbWVuJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NjM0NjAwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral`,
      readTime: `5 min read`,
      categoryColor: `#6E4C6F`,
      blogUrl: '/blog/understanding-hormonal-cycle',
      content: 'Comprehensive guide to understanding hormones...',
      date: 'Nov 20, 2025',
      author: 'Thryve Editorial Team',
      featured: true
    },
    {
      id: 2,
      category: 'Cycle Syncing',
      title: 'The Ultimate Guide to Cycle-Based Training',
      content: 'Complete training guide...',
      excerpt:
        'Discover how to adjust your workouts for each phase of your cycle to maximize strength, recovery, and overall performance.',
      image:
        'https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd29tYW4lMjBzdHJlbmd0aHxlbnwxfHx8fDE3NjM0NjAwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '8 min read',
      categoryColor: '#CFE1D4',
      date: 'Nov 18, 2025',
      blogUrl: '/blog/cycle-based-training-guide',
      author: 'Emma Rodriguez'
    },
    {
      id: 3,
      category: 'PCOS',
      title: 'Managing PCOS: Nutrition Tips for Each Cycle Phase',
      content: 'PCOS nutrition strategies...',
      excerpt:
        'Expert-backed nutrition strategies to support hormone balance and reduce PCOS symptoms through cycle-aware eating.',
      image:
        'https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwZm9vZHxlbnwxfHx8fDE3NjMzNzc3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '6 min read',
      categoryColor: '#F7E6E1',
      date: 'Nov 18, 2025',
      blogUrl: '/blog/pcos-nutrition-tips',
      author: 'Thryve Editorial Team'
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
      author: 'Thryve Editorial Team',
      categoryColor: '#6E4C6F',
      blogUrl: '/blog/how-cortisol-affects-menstrual-cycle'
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
      categoryColor: '#CFE1D4',
      blogUrl: '/blog/eating-for-follicular-phase'
    }
  ])

  const getArticles = () => {
    return articles.value
  }

  return {
    articles,
    getArticles
  }
})
