<template>
  <TheHeader :data="data.header" />
  <main>
    <TheSection> default section </TheSection>
    <TheSection theme="dark">dark section</TheSection>
  </main>
  <footer></footer>
</template>

<script lang="ts">
import '@/app/styles/fonts.css'
import '@/app/styles/global.css'
import { data } from '@/shared/data/HomeData.ts'
import TheHeader from '@/widgets/Header/ui/TheHeader.vue'
import TheSection from '@/shared/Section/ui/TheSection.vue'

export default {
  data() {
    return {
      data,
    }
  },
  components: {
    TheHeader,
    TheSection,
  },
}
</script>
