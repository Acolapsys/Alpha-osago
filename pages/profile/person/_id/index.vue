<template>
  <main class="profileItem wrapper">
    <div class="profileItem__top">
      <div class="breadCrumbs">
        <nuxt-link to=".." class="breadCrumbs__item">
          Личный кабинет
        </nuxt-link>
        <span class="breadCrumbs__item breadCrumbs__item_current">Карточка водителя</span>
      </div>
    </div>
    <div class="profileItem__inner">
      <div class="profileItem__titles">
        <h1 class="profileItem__title">
          Селиверстова Елена Константиновна
        </h1>
      </div>
      <div class="profileItem__buttons">
        <nuxt-link to="~/edit">
          <BaseButton id="edit" class="profileItem__button">
            <img src="~/assets/images/icons/pen-blue.svg" alt="image">
            <span>Редактировать персону</span>
          </BaseButton>
        </nuxt-link>
        <BaseButton id="remove" class="profileItem__button" @click.native="modalRemove = true">
          <img src="~/assets/images/icons/delete-red.svg" alt="image">
          <span>Удалить персону</span>
        </BaseButton>
      </div>
    </div>
    <div class="profileItem__details">
      <div class="profileItem__detailsSection">
        <h2 class="profileItem__detailsTitle">
          КБМ 1.0
        </h2>
        <p class="profileItem__detailsDescription">
          Права действительный ещё 1 месяц. <span class="color-yellow">Пора менять</span>
        </p>
      </div>
      <div class="profileItem__detailsSection">
        <h2 class="profileItem__detailsTitle">
          Транспортные средства
        </h2>
        <div class="profileItem__detailsInner">
          <VehicleCard
            v-for="item in vehicles"
            :key="item.id"
            :vehicle-data="item"
          />
        </div>
      </div>
    </div>
    <BaseModal v-if="modalRemove" class="modal modal_remove" @closeModal="modalRemove = false">
      <h2 class="modal__title">
        Удалить?
      </h2>
      <div class="modal__subjectTitle">
        Селиверстова Елена Константиновна
      </div>
      <p class="modal__description">
        Мы удалим данные из персон, однако они останутся в полисах.<br><span class="color-red">Восстановить нельзя, только заново создать.</span>
      </p>
      <div class="modal__buttons">
        <BaseButton id="modal-remove-fast" class="modal__remove" @click.native="modalRemove = false; modalRemoved = true">
          Удалить?
        </BaseButton>
        <BaseButton id="modal-remove-submit" class="modal__submit" @click.native="modalRemove = false; modalRemoved = true">
          Отмена
        </BaseButton>
      </div>
    </BaseModal>
    <BaseModal v-if="modalRemoved" class="modal modal_removed" :short="true" @closeModal="modalRemoved = false">
      <h2 class="modal__title">
        Удалено
      </h2>
      <p class="modal__description">
        Но данные о человеке остались в полисах.<br>Их можно поменять только обратившись в страховую.
      </p>
      <BaseButton id="modal-removed-submit" class="modal__submit" @click.native="modalRemoved = false">
        Закрыть
      </BaseButton>
    </BaseModal>
  </main>
</template>
<script>
import VehicleCard from '~/components/Profile/VehicleCard'
import BaseButton from '~/components/base/BaseButton'
import BaseModal from '~/components/base/BaseModal'
export default {
  components: {
    VehicleCard,
    BaseButton,
    BaseModal
  },
  data () {
    return {
      modalRemove: false,
      modalRemoved: false,
      vehicles: [
        {
          link: '/profile/vehicle/1',
          vehicle: 'Toyota Land Cruiser',
          number: 'A 121 AA 163'
        },
        {
          link: '/profile/vehicle/2',
          vehicle: 'Yamaha R3',
          number: '5558 АВ 63'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .profileCard {
  &__details {
    display: none;
  }
}
.profileItem {
  &__detailsInner {
    justify-content: space-between;
    .profileCard {
      width: calc(50% - 10px);
      margin-bottom: 20px;
    }
  }
}
@media (max-width: 767px) {
  .profileItem {
    &__detailsInner {
      border-top: 0;
      .profileCard {
        width: 100%;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
