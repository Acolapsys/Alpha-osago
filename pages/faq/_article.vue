<template>
  <div class="faqArticle wrapper">
    <div class="breadCrumbs">
      <router-link to="./" class="breadCrumbs__item">
        Полезная информация
      </router-link>
      <span class="breadCrumbs__item breadCrumbs__item_current">Почему отказывают все страховые?</span>
    </div>
    <main class="faqArticle__main">
      <h1 class="faqArticle__title title text-center mb-12">
        Почему отказывают все страховые?
      </h1>
      <div class="faqArticle__date text-center mb-25">
        21 сентября 2020
      </div>
      <img src="~/assets/images/article-post1.png" alt="image" class="faqArticle__image">
      <p class="faqArticle__text">
        Страховые выделяют группы риска и стараются не продавать страховку тем, кто в такие группы попадает. Страховые выделяют группы риска и стараются не продавать страховку тем, кто в такие группы попадает. Страховые выделяют группы риска и стараются не продавать страховку тем, кто в такие группы попадает. Страховые выделяют группы риска и стараются не продавать страховку тем, кто в такие группы попадает. Страховые выделяют группы риска и стараются не продавать страховку тем, кто в такие группы попадает.
      </p>
    </main>
    <router-link to="./" class="faqArticle__back">
      <img class="faqArticle__back-arrow" src="~/assets/images/icons/arrow-left-blue.svg" alt="arrow">
      Все статьи
    </router-link>
    <section class="faqArticle__also">
      <h3 class="faqArticle__also-title">
        Посмотрите ещё
      </h3>
      <div class="faqArticle__also-wrapper">
        <ArticlePost v-for="article in articles" :key="article.id" class="faqArticle__also-article" :data="article" />
      </div>
    </section>
  </div>
</template>

<script>
import ArticlePost from '~/components/FAQ/ArticlePost'

export default {
  components: {
    ArticlePost
  },
  data () {
    return {
      articles: [
        {
          link: '/faq/1',
          image: require('~/assets/images/article-post1.png'),
          title: 'Нюансы автострахования',
          mini: true
        },
        {
          link: '/faq/2',
          image: require('~/assets/images/article-post2.png'),
          title: 'Нюансы автострахования',
          mini: true
        },
        {
          link: '/faq/3',
          image: require('~/assets/images/article-post3.png'),
          title: 'Нюансы автострахования',
          mini: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.faqArticle {
  padding-top: 58px;
  padding-bottom: 120px;
  &__main {
    margin-top: 45px;
    margin-bottom: 35px;
    padding: 53px 97px;
    border-radius: 5px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.2);
  }
  &__date {
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #BDBDBD;
  }
  &__image {
    @apply w-full;
    margin-bottom: 38px;
    object-fit: cover;
  }
  &__back {
    font-weight: bold;
    letter-spacing: -0.01em;
    color: #088DED;
    &-arrow {
      display: inline-block;
      margin-right: 7px;
    }
  }
  &__also {
    margin-top: 48px;
    &-title {
      margin-bottom: 26px;
    }
    &-wrapper {
      display: flex;
    }
    &-article {
      width: 267px;
      margin-right: 24px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
@media (max-width: 1023px) {
  .faqArticle {
    padding-top: 32px;
    &__main {
      padding: 34px 64px;
    }
    &__title {
      font-size: 28px;
    }
    &__date {
      margin-bottom: 19px;
    }
    &__also {
      &-article {
        &:last-child {
          display: none;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .faqArticle {
    padding-bottom: 75px;
    &__main {
      margin-top: 0;
      padding: 0;
      box-shadow: none;
    }
    &__title {
      text-align: left;
    }
    &__date {
      text-align: left;
    }
    &__image {
      max-height: 265px;
    }
    &__also {
      margin-top: 36px;
      &-wrapper {
        flex-direction: column;
      }
      &-article {
        width: 100%;
        margin-bottom: 12px;
        margin-right: 0;
        &:last-child {
          display: block;
        }
      }
    }
  }
}
</style>
