<template>
  <section :class="[styles.section, { [styles.dark]: theme === 'dark' }]">
    <div :class="styles.container">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import styles from './TheSection.module.css'

export default {
  data() {
    return {
      styles,
    }
  },
  props: {
    theme: {
      type: String,
      default: 'white',
    },
  },
}
</script>
