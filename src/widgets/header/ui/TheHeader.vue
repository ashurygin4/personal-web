<template>
  <header :class="styles.header">
    <div class="container">
      <img :class="styles.logo" src="/images/logo.svg" alt="Personal" />
      <TheNavigation :nav="data.navigation" />
      <button>Resume</button>
    </div>
  </header>
</template>

<script lang="ts">
import styles from './TheHeader.module.css'
import TheNavigation from '@/shared/Navigation/ui/TheNavigation.vue'

export default {
  data() {
    return {
      styles,
    }
  },
  props: {
    data: Object,
  },
  components: {
    TheNavigation,
  },
}
</script>
<style lang=""></style>
