// components/ui/input.ts
import { defineComponent, computed, h, type PropType } from 'vue'
import { cn } from './utils'

export const Input = defineComponent({
  name: 'UiInput',
  props: {
    type: {
      type: String as PropType<string>,
      default: 'text'
    },
    modelValue: {
      type: [String, Number, null] as PropType<string | number | null>,
      default: ''
    },
    // extra classes like React's className
    class: {
      type: [String, Array, Object] as PropType<any>,
      default: undefined
    }
  },
  emits: ['update:modelValue', 'input', 'change', 'blur', 'focus'],
  setup(props, { emit, attrs }) {
    const classes = computed(() =>
      cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        props.class
      )
    )

    const onInput = (event: Event) => {
      const target = event.target as HTMLInputElement
      emit('update:modelValue', target.value)
      emit('input', event)
    }

    const onChange = (event: Event) => emit('change', event)
    const onBlur = (event: FocusEvent) => emit('blur', event)
    const onFocus = (event: FocusEvent) => emit('focus', event)

    return () =>
      h('input', {
        ...attrs,
        type: props.type,
        'data-slot': 'input',
        class: classes.value,
        value: props.modelValue ?? '',
        onInput,
        onChange,
        onBlur,
        onFocus
      })
  }
})

export default Input
