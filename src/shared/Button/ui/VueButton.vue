<template>
  <button
    :class="[
      styles.button,
      {
        [styles.medium]: size === 'medium',
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import styles from './TheButton.module.css'

export default {
  data() {
    return {
      styles,
    }
  },
  props: {
    size: {
      type: String,
    },
  },
}
</script>
