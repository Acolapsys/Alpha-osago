<template>
  <main class="profileItem wrapper">
    <div class="profileItem__top">
      <div class="breadCrumbs">
        <nuxt-link to=".." class="breadCrumbs__item">
          Личный кабинет
        </nuxt-link>
        <span class="breadCrumbs__item breadCrumbs__item_current">Yamaha R3</span>
      </div>
    </div>
    <div class="profileItem__inner">
      <div class="profileItem__titles">
        <h1 class="profileItem__title">
          Yamaha R3
        </h1>
        <div class="profileItem__subtitle">
          5558 АВ 63
        </div>
      </div>
      <div class="profileItem__buttons">
        <nuxt-link to="~/edit">
          <BaseButton id="edit" class="profileItem__button">
            <img src="~/assets/images/icons/pen-blue.svg" alt="image">
            <span>Редактировать ТС</span>
          </BaseButton>
        </nuxt-link>
        <BaseButton id="remove" class="profileItem__button" @click.native="modalRemoveVehicle = true">
          <img src="~/assets/images/icons/delete-red.svg" alt="image">
          <span>Удалить ТС</span>
        </BaseButton>
      </div>
    </div>
    <div class="profileItem__details">
      <div class="profileItem__detailsSection">
        <h2 class="profileItem__detailsTitle">
          Страховка до 20 сентября 2020
          <span class="color-yellow">(осталось 5 дней)</span>
        </h2>
        <p class="profileItem__detailsDescription">
          Чтобы записать другого водителя, изменить сезонность, закрыть полис при продаже
          (и получить компенсацию), обратитесь в страховую компанию РЕСО.
        </p>
        <div class="profileItem__detailsInner">
          <BaseButton id="pdf" class="profileItem__detailsButton">
            <div>
              <img src="~/assets/images/icons/pdf.svg" class="icon" alt="icon">
              Открыть PDF
            </div>
            <img src="~/assets/images/icons/arrow-right-gray.svg" class="arrow" alt="arrow">
          </BaseButton>
          <BaseButton id="post" class="profileItem__detailsButton">
            <div>
              <img src="~/assets/images/icons/mail.svg" class="icon" alt="icon">
              Отправить на почту
            </div>
            <img src="~/assets/images/icons/arrow-right-gray.svg" class="arrow" alt="arrow">
          </BaseButton>
          <BaseButton id="police" class="profileItem__detailsButton">
            <div>
              <img src="~/assets/images/icons/refresh.svg" class="icon" alt="icon">
              Продлить полис
            </div>
            <img src="~/assets/images/icons/arrow-right-gray.svg" class="arrow" alt="arrow">
          </BaseButton>
        </div>
      </div>
      <div class="profileItem__detailsSection">
        <h2 class="profileItem__detailsTitle">
          Техосмотр до 12 ноября 2021
        </h2>
        <p class="profileItem__detailsDescription">
          AG12313141123 — Номер диагностической карты
        </p>
      </div>
      <div class="profileItem__detailsSection">
        <h2 class="profileItem__detailsTitle">
          Водители
        </h2>
        <nuxt-link to="~/person/1" class="profileItem__detailsLink">
          Селиверстов Иван Петрович
        </nuxt-link>
        <nuxt-link to="~/person/2" class="profileItem__detailsLink">
          Селиверстова Елена Константиновна
        </nuxt-link>
      </div>
    </div>
    <BaseModal v-if="modalRemoveVehicle" class="modal modal_remove modal_removeVehicle" @closeModal="modalRemoveVehicle = false">
      <h2 class="modal__title">Удалить?</h2>
      <div class="modal__subjectTitle">Yamaha R3</div>
      <div class="modal__subjectSubtitle">5558 АВ 63</div>
      <p class="modal__description">
        <span class="color-red">Удаляем данные насовсем.</span><br /> Восстановить нельзя, никак. Это последний шанс вернуться.
      </p>
      <div class="baseField">
        <label for="modal-remove-mail" class="baseField__label">
          Может, отправить полис на почту? На всякий случай.
        </label>
        <BaseInput
          id="modal-remove-mail"
          placeholder="owner@domain.com"
          class="baseField__input"
        />
      </div>
      <div class="modal__buttons">
        <BaseButton id="modal-remove-fast" class="modal__remove">
            Удалить без отправки
        </BaseButton>
        <BaseButton id="modal-remove-submit" class="modal__submit">
            Отправить на почту и удалить
        </BaseButton>
      </div>
      
    </BaseModal>
  </main>
</template>
<script>
import BaseInput from '~/components/base/BaseInput'
import BaseButton from '~/components/base/BaseButton'
import BaseModal from '~/components/base/BaseModal'

export default {
  components: {
    BaseInput,
    BaseButton,
    BaseModal
  },
  data() {
    return {
      modalRemoveVehicle: false
    }
  }
}
</script>
