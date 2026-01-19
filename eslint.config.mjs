// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@stylistic/operator-linebreak': 'off',
    'operator-linebreak': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/arrow-parens': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
})
