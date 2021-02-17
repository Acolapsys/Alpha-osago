<template>
  <router-link :to="data.link" class="articlePost">
    <img :src="data.image" class="articlePost__image" alt="image">
    <div class="articlePost__info">
      <div class="articlePost__date mb-7">
        {{ data.date }}
      </div>
      <h3 class="articlePost__title mb-7">
        {{ data.title }}
      </h3>
      <p class="articlePost__description">
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
  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  border-radius: 10px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.2);
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
    &__info {
      padding: 21px 16px;
    }
  }
}
</style>
