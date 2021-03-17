<template>
  <main class="profileEdit">
    <div class="breadCrumbs profileEdit__wrapper wrapper">
      <nuxt-link to="/profile" class="breadCrumbs__item">
        Личный кабинет
      </nuxt-link>
      <span class="breadCrumbs__item" @click="$router.go(-1)">
        Селиверстрова Е.К.
      </span>
      <span class="breadCrumbs__item breadCrumbs__item_current">Редактирование</span>
    </div>
    <Person class="person" />
    <Certificate class="certificate" />
    <div class="profileEdit__wrapper wrapper">
      <BaseButton id="submit" class="profileEdit__submit">
        Сохранить
      </BaseButton>
    </div> 
  </main>
</template>

<script>
import Person from '~/components/Profile/Person'
import Certificate from '~/components/Profile/Certificate'
import BaseButton from '~/components/base/BaseButton'
export default {
  components: {
    Person,
    Certificate,
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.person {
  margin-top: 76px;
}
.certificate {
  margin-top: 31px;
}
@media (max-width: 1023px) {
  .person {
    margin-top: 30px;
  }
}
@media (max-width: 767px) {
  .certificate {
    margin-top: 0px;
    border-top: 1px solid #E0E0E0;
    box-shadow: none;
  }
}
</style>
