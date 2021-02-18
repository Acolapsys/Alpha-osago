<template>
  <router-link :to="data.link" class="articlePost" :class="{ articlePost_mini: data.mini }">
    <img :src="data.image" class="articlePost__image" alt="image">
    <div class="articlePost__info">
      <div v-if="data.date" class="articlePost__date mb-7">
        {{ data.date }}
      </div>
      <h3 class="articlePost__title mb-7">
        {{ data.title }}
      </h3>
      <p v-if="data.description" class="articlePost__description">
        {{ data.description }}
      </p>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'ArticlePost',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.articlePost {
  $root: &;
  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  border-radius: 10px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  &_mini {
    #{$root}__image {
      height: 162px;
    }
    #{$root}__info {
      padding: 14px;
    }
    #{$root}__title {
      margin-bottom: 0;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: -0.01em;
    }
  }
  &__image {
    width: 100%;
    height: 355px;
    object-fit: cover;
  }
  &__info {
    padding: 23px;
  }
  &__date {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #BDBDBD;
  }
  &__title {
    font-size: 20px;
    letter-spacing: -0.02em;
    color: #333;
  }
  &__description {
    letter-spacing: -0.01em;
  }
}
@media (max-width: 767px) {
  .articlePost {
    &__image {
      height: 180px;
    }
    &__info {
      padding: 21px 16px;
    }
  }
}
</style>
