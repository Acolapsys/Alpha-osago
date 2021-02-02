<template>
  <div class="article">
    <div class="image">
      <img :src="article.image" alt="image">
    </div>
    <div class="text">
      {{ article.text }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Article',
  props: {
    article: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.article {
    width: 267px;
    height: 282px;
}
.image {
    @apply w-full;
    height: 217px;
}
</style>
