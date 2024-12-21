<template>
  <ul class="list">
    <li :class="item.class" v-for="item in data.todoList" :key="item">
      <div>{{ item.text }} {{ item.class }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
import './App.css'
import { data } from './mockData.js'

export default {
  data() {
    return {
      positionScroll: 0,
      data,
    }
  },
  mounted() {
    this.scrollPosition()
  },
  methods: {
    scrollPosition() {
      const list = this.$el
      const activeItem = this.$el.querySelector('.active')

      const positionActiveItem = activeItem.offsetTop
      const positionList = this.$el.offsetTop
      const summuryPosition = positionActiveItem - positionList

      console.log(summuryPosition)
      list.scrollTo(0, summuryPosition)
    },
  },
}
</script>
