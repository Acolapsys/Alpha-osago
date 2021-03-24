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
      <BaseButton id="submit" class="profileEdit__submit" @click.native="modalSuccess = true">
        Сохранить
      </BaseButton>
    </div>

    <!-- modals start -->
    <BaseModal v-if="modalSuccess" class="modal modal_success" :short="true" @closeModal="modalSuccess = false">
      <h2 class="modal__title">
        Сохранено
      </h2>
      <p class="modal__description">
        В ранее оформленных полисах остались прежние данные.
      </p>
      <BaseButton id="modal-success-submit" class="modal__submit" @click.native="modalSuccess = false">
          Закрыть
      </BaseButton>
    </BaseModal>
    <!-- modals end -->
  </main>
</template>

<script>
import Person from '~/components/Profile/Person'
import Certificate from '~/components/Profile/Certificate'
import BaseButton from '~/components/base/BaseButton'
import BaseModal from '~/components/base/BaseModal'
export default {
  components: {
    Person,
    Certificate,
    BaseButton,
    BaseModal
  },
  data() {
    return {
      modalSuccess: false
    }
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
