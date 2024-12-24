<template>
  <TheHeader :nav="data.header.navigation" />
  <main></main>
  <footer></footer>
</template>

<script lang="ts">
import '@/app/styles/fonts.css'
import '@/app/styles/global.css'
import { data } from '@/shared/data/HomeData.ts'
import TheHeader from '@/widgets/Header/ui/TheHeader.vue'

export default {
  data() {
    return {
      data,
    }
  },
  components: {
    TheHeader,
  },
}
</script>
