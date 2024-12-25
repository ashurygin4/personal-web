<template>
  <nav :class="styles.navigation">
    <ul :class="styles['navigation-list']">
      <li :class="styles['navigation-item']" v-for="item in nav" :key="item.id">
        <a :class="styles['navigation-link']" :href="item.link">{{ item.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import styles from './TheNavigation.module.css'

export default {
  data() {
    return {
      styles,
    }
  },
  props: {
    nav: Array,
  },
}
</script>
