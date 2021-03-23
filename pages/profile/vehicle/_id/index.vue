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
        <BaseButton id="remove" class="profileItem__button" @click.native="modalRemoveAccount = true">
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
          <BaseButton id="post" class="profileItem__detailsButton" @click.native="modalSend = true">
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

    <!-- modals start -->
    <BaseModal v-if="modalRemove" class="modal modal_remove" @closeModal="modalRemove = false">
      <h2 class="modal__title">
        Удалить?
      </h2>
      <div class="modal__subjectTitle">
        Yamaha R3
      </div>
      <div class="modal__subjectSubtitle">
        5558 АВ 63
      </div>
      <p class="modal__description">
        <span class="color-red">Удаляем данные насовсем.</span><br> Восстановить нельзя, никак. Это последний шанс вернуться.
      </p>
      <div class="baseField">
        <label for="modal-remove-field" class="baseField__label">
          Может, отправить полис на почту? На всякий случай.
        </label>
        <BaseInput
          id="modal-remove-field"
          placeholder="owner@domain.com"
          class="baseField__input"
        />
      </div>
      <div class="modal__buttons">
        <BaseButton id="modal-remove-fast" class="modal__remove" @click.native="modalRemove = false; modalRemoved = true">
          Удалить без отправки
        </BaseButton>
        <BaseButton id="modal-remove-submit" class="modal__submit" @click.native="modalRemove = false; modalRemoved = true">
          Отправить на почту и удалить
        </BaseButton>
      </div>
    </BaseModal>
    <BaseModal v-if="modalRemoved" class="modal modal_removed" :short="true" @closeModal="modalRemoved = false">
      <h2 class="modal__title">
        Удалено
      </h2>
      <div class="modal__subjectTitle">
        Yamaha R3
      </div>
      <div class="modal__subjectSubtitle">
        5558 АВ 63
      </div>
      <p class="modal__description">
        Полис отправлен на owner@domain.com
      </p>
      <BaseButton id="modal-removed-submit" class="modal__submit" @click.native="modalRemoved = false">
        Закрыть
      </BaseButton>
    </BaseModal>
    <BaseModal v-if="modalSend" class="modal modal_send" @closeModal="modalSend = false">
      <h2 class="modal__title">
        Отправить полис
      </h2>
      <div class="modal__subjectTitle">
        Yamaha R3
      </div>
      <div class="modal__subjectSubtitle">
        5558 АВ 63
      </div>
      <div class="baseField">
        <label for="modal-send-field" class="baseField__label">
          На почту
        </label>
        <BaseInput
          id="modal-send-field"
          placeholder="owner@domain.com"
          class="baseField__input"
        />
      </div>
      <BaseButton id="modal-send-submit" class="modal__submit" @click.native="modalSend = false; modalSended = true">
        Отправить
      </BaseButton>
    </BaseModal>
    <BaseModal v-if="modalSended" class="modal modal_success" :short="true" @closeModal="modalSended = false">
      <h2 class="modal__title">
        Полис отправлен
      </h2>
      <p class="modal__description">
        на owner@domain.com
      </p>
      <BaseButton id="modal-sended-submit" class="modal__submit" @click.native="modalSended = false">
        Закрыть
      </BaseButton>
    </BaseModal>
    <BaseModal v-if="modalRemoveAccount" class="modal modal_remove" @closeModal="modalRemoveAccount = false">
      <h2 class="modal__title">
        Удалить аккаунт?
      </h2>
      <p class="modal__description">
        <span class="color-red">Удаляем данные насовсем.</span><br> Восстановить нельзя, никак. Это последний шанс вернуться. При этом полисы останутся у страховых.
      </p>
      <div class="baseField">
        <label for="modal-remove-account-field" class="baseField__label">
          Может, отправить полисы на почту? На всякий случай.
        </label>
        <BaseInput
          id="modal-remove-account-field"
          placeholder="owner@domain.com"
          class="baseField__input"
        />
      </div>
      <div class="modal__buttons">
        <BaseButton id="modal-remove-account-fast" class="modal__remove" @click.native="modalRemoveAccount = false; modalRemovedAccount = true">
          Удалить без отправки
        </BaseButton>
        <BaseButton id="modal-remove-account-submit" class="modal__submit" @click.native="modalRemoveAccount = false; modalRemovedAccount = true">
          Отправить на почту и удалить
        </BaseButton>
      </div>
    </BaseModal>
    <BaseModal v-if="modalRemovedAccount" class="modal modal_success" :short="true" @closeModal="modalRemovedAccount = false">
      <h2 class="modal__title">
        Аккаунт удалён
      </h2>
      <p class="modal__description">
        Полисы отправлен на owner@domain.com 
      </p>
      <BaseButton id="modal-removed-account-submit" class="modal__submit" @click.native="modalRemovedAccount = false">
        Закрыть
      </BaseButton>
    </BaseModal>
    <!-- modals end -->
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
  data () {
    return {
      modalRemove: false,
      modalRemoved: false,
      modalSend: false,
      modalSended: false,
      modalRemoveAccount: false,
      modalRemovedAccount: false
    }
  }
}
</script>
