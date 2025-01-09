<template>
  <button><slot></slot></button>
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
    theme: {
      type: String,
      default: 'white',
    },
  },
}
</script>
