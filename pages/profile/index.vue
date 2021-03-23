<template>
  <main class="profile wrapper">
    <h1 class="profile__title">
      Личный кабинет
    </h1>
    <section class="profile__section">
      <div class="profile__sectionHead">
        <h2 class="profile__sectionTitle">
          Машины и полисы
        </h2>
        <div class="profile__sectionAdd">
          <span>+</span> Добавить
        </div>
      </div>
      <div class="profile__sectionInner">
        <VehicleCard
          v-for="item in vehicles"
          :key="item.id"
          :vehicle-data="item"
        />
      </div>
    </section>
    <section class="profile__section">
      <div class="profile__sectionHead">
        <h2 class="profile__sectionTitle">
          Персоны
        </h2>
        <div class="profile__sectionAdd">
          <span>+</span> Добавить
        </div>
      </div>
      <div class="profile__sectionInner">
        <PersonCard
          v-for="item in persons"
          :key="item.id"
          :person-data="item"
          class="profileCard_short"
        />
      </div>
    </section>
    <section class="profile__section">
      <div class="profile__sectionHead">
        <h2 class="profile__sectionTitle">
          Настройки
        </h2>
      </div>
      <h3 class="profile__sectionSubtitle">
        Учётная запись
      </h3>
      <div class="profile__sectionInner">
        <div class="profile__input">
          <div class="profile__inputName">
            email
          </div>
          <div class="profile__inputInner">
            <input
              type="text"
              readonly="readonly"
              class="profile__inputValue"
              :value="email"
            >
            <div class="profile__inputEdit" @click="modalMail = true">
              <img src="~/assets/images/icons/pen-green.svg" alt="edit">
            </div>
          </div>
        </div>
        <div class="profile__input">
          <div class="profile__inputName">
            пароль
          </div>
          <div class="profile__inputInner">
            <input
              type="password"
              readonly="readonly"
              class="profile__inputValue"
              :value="password"
            >
            <div class="profile__inputEdit" @click="modalPassword = true">
              <img src="~/assets/images/icons/pen-green.svg" alt="edit">
            </div>
          </div>
        </div>
        <div class="profile__input">
          <div class="profile__inputName">
            телефон
          </div>
          <div class="profile__inputInner">
            <input
              type="text"
              readonly="readonly"
              class="profile__inputValue"
              :value="tel"
            >
            <div class="profile__inputEdit" @click="modalTel = true">
              <img src="~/assets/images/icons/pen-green.svg" alt="edit">
            </div>
          </div>
        </div>
      </div>
      <h3 class="profile__sectionSubtitle">
        Добавить вход через
      </h3>
      <div class="profile__sectionInner profile__sectionInner_social">
        <img src="~/assets/images/icons/facebook-logo.svg" alt="facebook" class="profile__social">
        <img src="~/assets/images/icons/google-logo.svg" alt="google" class="profile__social">
        <img src="~/assets/images/icons/vk-logo.svg" alt="vk" class="profile__social">
      </div>
    </section>
    <div class="profile__buttons">
      <BaseButton id="exit" class="profile__exit">
        Выйти из аккаунта
      </BaseButton>
      <span id="remove" class="profile__remove">
        Удалить аккаунт...
      </span>
    </div>

    <!-- modals start -->
    <BaseModal v-if="modalTel" class="modal modal_change" @closeModal="modalTel = false">
      <h2 class="modal__title">
        Изменить телефон
      </h2>
      <div class="baseField">
        <label for="modal-tel-field" class="baseField__label">
          Введите новый телефон, отправим на него смс
        </label>
        <BaseInput
          id="modal-tel-field"
          placeholder="+7"
          class="baseField__input"
        />
      </div>
      <BaseButton id="modal-tel-submit" class="modal__submit" @click.native="modalTel = false">
        Отправить
      </BaseButton>
    </BaseModal>
    <BaseModal v-if="modalMail" class="modal modal_change" @closeModal="modalMail = false">
      <h2 class="modal__title">
        Изменить почту
      </h2>
      <div class="baseField">
        <label for="modal-mail-field" class="baseField__label">
          Введите новый адрес, мы отправим на него письмо с подтверждением. Пройдёте по ссылке из письма — и адрес обновится.
        </label>
        <BaseInput
          id="modal-mail-field"
          placeholder="owner@domain.com"
          class="baseField__input"
        />
      </div>
      <BaseButton id="modal-mail-submit" class="modal__submit" @click.native="modalMail = false; modalMailConfirm = true">
        Отправить
      </BaseButton>
    </BaseModal>
    <BaseModal v-if="modalMailConfirm" class="modal modal_send" @closeModal="modalMailConfirm = false">
      <h2 class="modal__title">
        Ссылка отправлена
      </h2>
      <p class="modal__description">
        Ссылка отправлена на <b>owner@domain.com</b><br>Откройте почту и перейдите по ссылке чтобы подтвердить новый имейл
      </p>
      <BaseButton id="modal-mail-confirm-submit" class="modal__submit" @click.native="modalMailConfirm = false; modalMailSuccess = true">
        Закрыть
      </BaseButton>
    </BaseModal>
    <BaseModal v-if="modalMailSuccess" class="modal modal_success" @closeModal="modalMailSuccess = false">
      <h2 class="modal__title">
        Почта обновлена
      </h2>
      <BaseButton id="modal-mail-success-submit" class="modal__submit" @click.native="modalMailSuccess = false">
        В личный кабинет
      </BaseButton>
    </BaseModal>
    <BaseModal v-if="modalPassword" class="modal modal_change modal_password" @closeModal="modalPassword = false">
      <h2 class="modal__title">
        Изменить пароль
      </h2>
      <div class="baseField">
        <label for="modal-password-old" class="baseField__label">
          Старый пароль
        </label>
        <BaseInput
          id="modal-password-old"
          type="password"
          class="baseField__input"
        />
        <div class="baseField__hint baseField__hint_error">Неправильно</div>
      </div>
      <div class="modal__link" @click="modalPassword = false; modalPasswordRecovery = true">
        Отправить ссылку на восстановление пароля
      </div>
      <div class="baseField">
        <label for="modal-password-new" class="baseField__label">
          Новый пароль
        </label>
        <BaseInput
          id="modal-password-new"
          type="password"
          class="baseField__input"
        />
        <div class="baseField__conditions">
            <div class="baseField__conditionsItem baseField__conditionsItem_success">
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="baseField__conditionsIcon baseField__conditionsIcon_symbols">
                    <path d="M0.902344 3.91671L4.69401 7.70838L10.2357 1.58337" stroke-width="2"/>
                </svg>
                8+ символов
            </div>
            <div class="baseField__conditionsItem baseField__conditionsItem_error">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="baseField__conditionsIcon baseField__conditionsIcon_type">
                    <path d="M3.47769 4.49997L0.472656 7.505L1.46261 8.49495L4.46764 5.48992L7.47268 8.49495L8.46263 7.505L5.45759 4.49997L8.46261 1.49495L7.47266 0.505005L4.46764 3.51002L1.46263 0.505005L0.472676 1.49495L3.47769 4.49997Z" />
                </svg>
                Не 123456 и похожий
            </div>
        </div>
      </div>
      <BaseButton id="modal-password-submit" class="modal__submit" @click.native="modalPassword = false; modalPasswordSuccess = true">
        Сохранить
      </BaseButton>
    </BaseModal>
    <BaseModal v-if="modalPasswordSuccess" class="modal modal_success" @closeModal="modalPasswordSuccess = false">
        <h2 class="modal__title">Пароль изменён</h2>
        <BaseButton id="modal-password-success-submit" class="modal__submit" @click.native="modalPasswordSuccess = false">
            Закрыть
        </BaseButton>
    </BaseModal>
    <BaseModal v-if="modalPasswordRecovery" class="modal modal_send" @closeModal="modalPasswordRecovery = false">
      <h2 class="modal__title">
        Ссылка отправлена
      </h2>
      <p class="modal__description">
        Ссылка на восстановление пароля отправлена на <b>owner@domain.com</b><br>Откройте почту и перейдите по ссылке чтобы подтвердить новый имейл
      </p>
      <BaseButton id="modal-password-recovery-submit" class="modal__submit" @click.native="modalPasswordRecovery = false">
        Закрыть
      </BaseButton>
    </BaseModal>
    <!-- modals end -->
  </main>
</template>

<script>
import VehicleCard from '~/components/Profile/VehicleCard'
import PersonCard from '~/components/Profile/PersonCard'
import BaseButton from '~/components/base/BaseButton'
import BaseModal from '~/components/base/BaseModal'
export default {
  components: {
    VehicleCard,
    PersonCard,
    BaseButton,
    BaseModal
  },
  data () {
    return {
      vehicles: [
        {
          link: '/profile/vehicle/1',
          vehicle: 'Toyota Land Cruiser',
          number: 'A 121 AA 163',
          drivers: '1 водитель',
          insurance: 'до 20 декабря 2020 (ещё 3 месяца)',
          inspection: 'Нужен ТО для следующей страовки'
        },
        {
          link: '/profile/vehicle/2',
          vehicle: 'Yamaha R3',
          number: '5558 АВ 63',
          drivers: '2 водителя',
          insurance: 'до 20 сентября 2020 <span class="color-yellow">(осталось 5 дней)</span>',
          inspection: 'ТО до 12 ноября 2021'
        },
        {
          link: '/profile/vehicle/3',
          vehicle: 'Honda CBR 600',
          number: 'А 121 АА  163',
          drivers: '1 водитель',
          insurance: '<span class="color-red">Истекла</span>',
          inspection: 'ТО до 1 сентября 2021'
        }
      ],
      persons: [
        {
          link: '/profile/person/1',
          person: 'Селиверстов Иван Петрович',
          kbm: '1.0',
          certificate: 'Действительны ещё 6 лет'
        },
        {
          link: '/profile/person/2',
          person: 'Селиверстова Елена Константиновна',
          kbm: '1.0',
          certificate: '<span class="color-yellow">Действительны ещё 1 месяц</span>'
        }
      ],
      email: 'registered_email@mail.ru',
      password: '324234532',
      tel: '+7 999 123 00-00',
      modalTel: false,
      modalMail: false,
      modalMailConfirm: false,
      modalMailSuccess: false,
      modalPassword: false,
      modalPasswordSuccess: false,
      modalPasswordRecovery: false
    }
  }
}
</script>

<style lang="scss" scope>
.profile {
  &__sectionInner {
    .profileCard {
      width: calc(50% - 12px);
      margin-bottom: 24px;
    }
    &_social {
      justify-content: flex-start;
    }
  }
  &__input {
    width: 32%;
  }
}
@media (max-width: 1023px) {
  .profile {
    &__input {
      width: calc(50% - 10px);
      margin-bottom: 20px;
    }
  }
}
@media (max-width: 767px) {
  .profile {
    &__sectionInner {
      .profileCard {
        width: 100%;
        margin-bottom: 12px;
      }
    }
    &__input {
      width: 100%;
      margin-bottom: 12px;
    }
  }
}
</style>
