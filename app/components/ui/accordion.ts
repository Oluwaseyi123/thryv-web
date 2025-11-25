// components/ui/accordion.ts
import {
  defineComponent,
  type InjectionKey,
  type PropType,
  type Ref,
  ref,
  computed,
  inject,
  provide,
  h
} from 'vue'
import { ChevronDownIcon } from 'lucide-vue-next'
import { cn } from './utils'

type AccordionType = 'single' | 'multiple'

interface AccordionContext {
  type: AccordionType
  collapsible: boolean
  openValues: Ref<string[]>
  toggle: (value: string) => void
}

interface AccordionItemContext {
  value: string
  isOpen: Ref<boolean>
}

const AccordionSymbol: InjectionKey<AccordionContext> = Symbol('AccordionRoot')
const AccordionItemSymbol: InjectionKey<AccordionItemContext>
  = Symbol('AccordionItem')

/**
 * <Accordion>
 * Root component – provides context for items (single/multiple, collapsible, etc.)
 */
export const Accordion = defineComponent({
  name: 'Accordion',
  inheritAttrs: false,
  props: {
    type: {
      type: String as PropType<AccordionType>,
      default: 'single'
    },
    collapsible: {
      type: Boolean,
      default: true
    },
    /**
     * Optional controlled value — array for `multiple`, string for `single`
     * If you don’t need controlled behavior, ignore this prop.
     */
    modelValue: {
      type: [String, Array] as PropType<string | string[] | undefined>,
      default: undefined
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots, attrs, emit }) {
    const internalValues = ref<string[]>([])

    const openValues = computed<string[]>({
      get() {
        if (props.modelValue === undefined) return internalValues.value
        return Array.isArray(props.modelValue)
          ? props.modelValue
          : props.modelValue
            ? [props.modelValue]
            : []
      },
      set(next) {
        if (props.modelValue === undefined) {
          internalValues.value = next
        } else {
          if (props.type === 'multiple') {
            emit('update:modelValue', next)
          } else {
            emit('update:modelValue', next[0] ?? '')
          }
        }
      }
    })

    const toggle = (value: string) => {
      const current = openValues.value
      const isOpen = current.includes(value)

      if (props.type === 'multiple') {
        if (isOpen) {
          openValues.value = current.filter(v => v !== value)
        } else {
          openValues.value = [...current, value]
        }
      } else {
        if (isOpen) {
          if (!props.collapsible) return
          openValues.value = []
        } else {
          openValues.value = [value]
        }
      }
    }

    provide(AccordionSymbol, {
      type: props.type,
      collapsible: props.collapsible,
      openValues,
      toggle
    })

    const { class: classAttr, ...restAttrs } = attrs
    const baseClass = 'data-slot-accordion'
    const classes = cn(baseClass, classAttr as any)

    return () =>
      h(
        'div',
        {
          ...restAttrs,
          'data-slot': 'accordion',
          'class': classes
        },
        slots.default?.()
      )
  }
})

/**
 * <AccordionItem>
 * Wraps a single item & registers its value in context.
 */
export const AccordionItem = defineComponent({
  name: 'AccordionItem',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      required: true
    }
  },
  setup(props, { slots, attrs }) {
    const accordion = inject(AccordionSymbol)
    if (!accordion) {
      throw new Error('AccordionItem must be used inside Accordion.')
    }

    const isOpen = computed(() =>
      accordion.openValues.value.includes(props.value)
    )

    provide(AccordionItemSymbol, {
      value: props.value,
      isOpen
    })

    const { class: classAttr, ...restAttrs } = attrs
    const baseClass = 'border-b last:border-b-0'
    const classes = cn(baseClass, classAttr as any)

    return () =>
      h(
        'div',
        {
          ...restAttrs,
          'data-slot': 'accordion-item',
          'data-state': isOpen.value ? 'open' : 'closed',
          'class': classes
        },
        slots.default?.()
      )
  }
})

/**
 * <AccordionTrigger>
 * Clickable header – toggles open/closed state.
 */
export const AccordionTrigger = defineComponent({
  name: 'AccordionTrigger',
  inheritAttrs: false,
  setup(_, { slots, attrs }) {
    const accordion = inject(AccordionSymbol)
    const item = inject(AccordionItemSymbol)

    if (!accordion || !item) {
      throw new Error(
        'AccordionTrigger must be used inside AccordionItem within Accordion.'
      )
    }

    const onClick = (event: MouseEvent) => {
      event.preventDefault()
      accordion.toggle(item.value)
    }

    const { class: classAttr, ...restAttrs } = attrs
    const baseClass
      = 'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50'
    const classes = cn(baseClass, classAttr as any)

    const iconBaseClass
      = 'text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200'

    return () =>
      h('div', { 'data-slot': 'accordion-header', 'class': 'flex' }, [
        h(
          'button',
          {
            ...restAttrs,
            'type': 'button',
            'data-slot': 'accordion-trigger',
            'data-state': item.isOpen.value ? 'open' : 'closed',
            'class': classes,
            onClick
          },
          [
            // label / children
            ...(slots.default ? slots.default() : []),
            // Chevron icon (rotates when open)
            h(ChevronDownIcon, {
              class: cn(iconBaseClass, item.isOpen.value && 'rotate-180')
            })
          ]
        )
      ])
  }
})

/**
 * <AccordionContent>
 * Collapsible content area for each item.
 */
export const AccordionContent = defineComponent({
  name: 'AccordionContent',
  inheritAttrs: false,
  setup(_, { slots, attrs }) {
    const item = inject(AccordionItemSymbol)

    if (!item) {
      throw new Error('AccordionContent must be used inside AccordionItem.')
    }

    const { class: classAttr, ...restAttrs } = attrs
    const baseClass
      = 'grid overflow-hidden text-sm transition-[height] duration-200 ease-out'
    const wrapperClass = cn('pt-0 pb-4 overflow-hidden', classAttr as any)

    return () =>
      h(
        'div',
        {
          ...restAttrs,
          'data-slot': 'accordion-content',
          'data-state': item.isOpen.value ? 'open' : 'closed',
          'class': baseClass,
          'style': item.isOpen.value ? 'height: 90px' : 'height: 0px;'
        },
        [
          h(
            'div',
            {
              class: wrapperClass
            },
            slots.default?.()
          )
        ]
      )
  }
})
