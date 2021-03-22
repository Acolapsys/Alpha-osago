<template>
  <main class="profileEdit">
    <div class="breadCrumbs profileEdit__wrapper wrapper">
      <nuxt-link to="/profile" class="breadCrumbs__item">
        Личный кабинет
      </nuxt-link>
      <span class="breadCrumbs__item" @click="$router.go(-1)">
        Yamaha R3
      </span>
      <span class="breadCrumbs__item breadCrumbs__item_current">Редактирование</span>
    </div>
    <Vehicle class="vehicle" />
    <Owner class="owner" />
    <div class="profileEdit__wrapper wrapper">
      <BaseButton id="submit" class="profileEdit__submit" @click.native="modalSuccess = true">
        Сохранить
      </BaseButton>
    </div>
    <BaseModal v-if="modalSuccess" class="modal modal_success" :short="true" @closeModal="modalSuccess = false">
      <h2 class="modal__title">Сохранено</h2>
      <p class="modal__description">
        В ранее оформленных полисах остались прежние данные.
      </p>
      <BaseButton id="modal-back" class="modal__back" @click.native="modalSuccess = false">
          Закрыть
      </BaseButton>
    </BaseModal>
  </main>
</template>

<script>
import Vehicle from '~/components/Vehicle'
import Owner from '~/components/Owner'
import BaseButton from '~/components/base/BaseButton'
import BaseModal from '~/components/base/BaseModal'
export default {
  components: {
    Vehicle,
    Owner,
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
.vehicle {
  margin-top: 76px;
}
.owner {
  margin-top: 31px;
}
@media (max-width: 1023px) {
  .vehicle {
    margin-top: 30px;
  }
}
@media (max-width: 767px) {
  .owner {
    margin-top: 0px;
    border-top: 1px solid #E0E0E0;
    box-shadow: none;
  }
}
</style>
