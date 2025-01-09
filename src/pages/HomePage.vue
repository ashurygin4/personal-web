<template>
  <TheHeader :data="data.header" />
  <main>
    <TheSection>
      <TheButton>Resume</TheButton>
    </TheSection>
    <TheSection theme="dark">dark section</TheSection>
  </main>
  <footer></footer>
</template>

<script lang="ts">
import { data } from '@/shared/data/HomeData.ts'
import TheHeader from '@/widgets/Header/ui/TheHeader.vue'
import TheSection from '@/shared/Section/ui/TheSection.vue'
import TheButton from '@/shared/Button/ui/TheButton.vue'

export default {
  data() {
    return {
      data,
    }
  },
  components: {
    TheHeader,
    TheSection,
    TheButton,
  },
}
</script>
