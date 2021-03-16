<template>
  <main class="faqArticle wrapper">
    <div class="breadCrumbs">
      <nuxt-link to="./" class="breadCrumbs__item">
        Полезная информация
      </nuxt-link>
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
        Страховые выделяют группы риска и стараются не продавать страховку тем, кто в такие группы
        попадает. Точные критерии групп риска никто не публикует, но некоторые хорошо известы:<br>
        — Мотоциклы;<br>
        — Спецтехника;<br>
        — Южные регионы<br>
        — Работа в такси;<br>
        Страховку для этих групп не получается оформить даже через систему гарантированного страхования
        — вылетают ошибки. Также, страховые могут отказывать по формальным признакам.
        Наши специалисты попробуют подать заявление на страховку так, что формально отказать будет
        невозможно. Цена — стоимость полиса + 800 ₽. Деньги списываются только после оформления полиса.
        Изначально банк заморозит на вашем счету максимальную стоимость полиса + 800 ₽. Когда полис
        будет оформлен, спишется фактическая стоимость полиса + 800 ₽. Если мы не оформим полис за 48
        часов, банк автоматически разморозит деньги, даже не списав.
      </p>
    </main>
    <nuxt-link to="./" class="faqArticle__back">
      <img class="faqArticle__backArrow" src="~/assets/images/icons/arrow-left-blue-big.svg" alt="arrow">
      Все статьи
    </nuxt-link>
    <section class="faqArticle__also">
      <h3 class="faqArticle__alsoTitle">
        Посмотрите ещё
      </h3>
      <div class="faqArticle__alsoWrapper">
        <ArticlePost v-for="article in articles" :key="article.id" class="faqArticle__alsoArticle" :data="article" />
      </div>
    </section>
  </main>
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
  }
  &__backArrow {
    display: inline-block;
    margin-right: 7px;
  }
  &__also {
    margin-top: 48px;
  }
  &__alsoTitle {
    margin-bottom: 26px;
  }
  &__alsoWrapper {
    display: flex;
  }
  &__alsoArticle {
    width: 267px;
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
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
    &__alsoArticle {
      &:last-child {
        display: none;
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
    &__title,
    &__date {
      text-align: left;
    }
    &__image {
      max-height: 265px;
    }
    &__also {
      margin-top: 36px;
    }
    &__alsoWrapper {
      flex-direction: column;
    }
    &__alsoArticle {
      width: 100%;
      margin-bottom: 12px;
      margin-right: 0;
      &:last-child {
        display: block;
      }
    }
  }
}
</style>
