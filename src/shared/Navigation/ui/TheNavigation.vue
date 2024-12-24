<template>
  <ul :class="styles.navigation">
    <li>Navigation</li>
  </ul>
</template>

<script lang="ts">
import styles from './TheNavigation.module.css'

export default {
  data() {
    return {
      styles,
    }
  },
}
</script>
