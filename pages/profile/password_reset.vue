<template>
    <main class="profile wrapper">
        <h1 class="profile__title">
            Изменение пароля
        </h1>
        <div class="baseField">
            <label for="password" class="baseField__label">
                Новый пароль
            </label>
            <BaseInput
                id="password"
                type="password"
                class="baseField__input"
            />
            <div class="baseField__conditions">
                <div class="baseField__conditionsItem">
                    <img src="~/assets/images/icons/check-green.svg" alt="icon" />
                    8+ символов
                </div>
                <div class="baseField__conditionsItem">
                    <img src="~/assets/images/icons/close-green.svg" alt="icon" />
                    Не 123456 и похожий
                </div>
            </div>
        </div>
        <BaseButton id="submit" class="profile__submit" @click.native="modalError = true">
          Новый пароль
        </BaseButton>
        <BaseModal v-if="modalSuccess" class="modal modal_success" @closeModal="modalSuccess = false">
            <h2 class="modal__title">Пароль изменён</h2>
            <BaseButton id="modal-back" class="modal__back">
                В личный кабинет
            </BaseButton>
        </BaseModal>
        <BaseModal v-if="modalError" class="modal modal_error" @closeModal="modalError = false">
            <h2 class="modal__title">Ссылка устарела</h2>
            <div class="modal__link">Восстановить пароль...</div>
            <BaseButton id="modal-back" class="modal__back">
                На главную
            </BaseButton>
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
          modalSuccess: false,
          modalError: false
      }
  }
}
</script>

<style lang="scss" scoped>
.profile {
    width: 700px;
    .baseField,
    &__submit {
        width: 364px;
        margin: 0 auto;
    }
    &__submit {
        margin-top: 30px;
        border: 1.5px solid #333333;
    }
}
@media (max-width: 767px) {
    .profile {
        width: 100%;
        .baseField,
        &__submit {
            width: 90%;
        }
        &__submit {
            margin-top: 40px;
        }
    }
}
</style>
