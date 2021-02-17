<template>
  <div class="article">
    <div class="image">
      <img :src="article.image" alt="image">
    </div>
    <div class="body-big-1 flex justify-center items-center min-h-65">
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
    max-width: 267px;
    height: 282px;
    background: #FFFFFF;
border: 1px solid #F2F2F2;
box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.2);
border-radius: 10px;
}
.image {
    @apply w-full;
    height: 217px;
    width: 267px;
}
</style>
