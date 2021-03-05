<template>
  <div class="faqPage wrapper">
    <h1 class="faqPage__title title text-center mb-7">
      Полезная информация
    </h1>
    <p class="faqPage__subtitle subtitle text-center">
      Здесь можно узнать о том, что такое КБМ, от чего зависит цена полиса, зачем нужно ТО и какие изменения в законодательстве ждут автомобилистов
    </p>
    <section class="faqPage__articles">
      <ArticlePost v-for="article in articles" :key="article.id" class="faqPage__article" :data="article" />
    </section>
    <BaseButton class="faqPage__loadButton mx-auto">
      Показать ещё статьи
    </BaseButton>
  </div>
</template>

<script>
import ArticlePost from '~/components/FAQ/ArticlePost'
import BaseButton from '~/components/base/BaseButton'

export default {
  components: {
    ArticlePost,
    BaseButton
  },
  data () {
    return {
      articles: [
        {
          link: '/faq/1',
          image: require('~/assets/images/article-post1.png'),
          date: '21 сентября 2020',
          title: 'Почему отказывают все страховые?',
          description: 'Страховые выделяют группы риска и стараются не продавать страховку тем, кто в такие группы попадает. Точные критерии...'
        },
        {
          link: '/faq/2',
          image: require('~/assets/images/article-post2.png'),
          date: '21 сентября 2020',
          title: 'Нюансы автострахования или как не остаться “с носом”',
          description: 'Как выбрать страховую компанию, как правильно компенсировать расходы после ДТП, в какой срок должны поступить выплаты.'
        },
        {
          link: '/faq/3',
          image: require('~/assets/images/article-post3.png'),
          date: '21 сентября 2020',
          title: 'Нюансы автострахования или как не остаться “с носом”',
          description: 'Как выбрать страховую компанию, как правильно компенсировать расходы после ДТП, в какой срок должны поступить выплаты.'
        },
        {
          link: '/faq/4',
          image: require('~/assets/images/article-post4.png'),
          date: '21 сентября 2020',
          title: 'Нюансы автострахования или как не остаться “с носом”',
          description: 'Как выбрать страховую компанию, как правильно компенсировать расходы после ДТП, в какой срок должны поступить выплаты.'
        },
        {
          link: '/faq/5',
          image: require('~/assets/images/article-post5.png'),
          date: '21 сентября 2020',
          title: 'Нюансы автострахования или как не остаться “с носом”',
          description: 'Как выбрать страховую компанию, как правильно компенсировать расходы после ДТП, в какой срок должны поступить выплаты.'
        },
        {
          link: '/faq/6',
          image: require('~/assets/images/article-post6.png'),
          date: '21 сентября 2020',
          title: 'Нюансы автострахования или как не остаться “с носом”',
          description: 'Как выбрать страховую компанию, как правильно компенсировать расходы после ДТП, в какой срок должны поступить выплаты.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.faqPage {
  padding-top: 76px;
  padding-bottom: 93px;
  &__articles {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 73px;
    padding-bottom: 53px;
  }
  &__article {
    width: calc(50% - 10px);
    margin-bottom: 25px;
  }
  &__loadButton {
    color: #04A678;
    border: 1px solid #04A678;
    border-radius: 5px;
  }
}
@media (max-width: 1199px) {
  .faqPage {
    padding-top: 50px;
    padding-bottom: 69px;
    &__articles {
      margin-bottom: 20px;
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
}
@media (max-width: 767px) {
  .faqPage {
    padding-top: 100px;
    padding-bottom: 53px;
    &__title {
      font-size: 26px;
    }
    &__subtitle {
      text-align: left;
      font-size: 16px;
    }
    &__articles {
      flex-direction: column;
      padding-top: 29px;
      padding-bottom: 24px;
    }
    &__article {
      width: 100%;
      margin-bottom: 12px;
    }
  }
}
</style>
