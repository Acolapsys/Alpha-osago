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
                <div class="baseField__conditionsItem baseField__conditionsItem_success">
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="baseField__conditionsIcon baseField__conditionsIcon_symbols">
                        <path d="M0.902344 3.91671L4.69401 7.70838L10.2357 1.58337" stroke-width="2"/>
                    </svg>
                    8+ символов
                </div>
                <div class="baseField__conditionsItem baseField__conditionsItem_success">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="baseField__conditionsIcon baseField__conditionsIcon_type">
                        <path d="M3.47769 4.49997L0.472656 7.505L1.46261 8.49495L4.46764 5.48992L7.47268 8.49495L8.46263 7.505L5.45759 4.49997L8.46261 1.49495L7.47266 0.505005L4.46764 3.51002L1.46263 0.505005L0.472676 1.49495L3.47769 4.49997Z" />
                    </svg>
                    Не 123456 и похожий
                </div>
            </div>
        </div>
        <BaseButton id="submit" class="profile__submit" @click.native="modalError = true">
          Новый пароль
        </BaseButton>

        <!-- modals start -->
        <BaseModal v-if="modalSuccess" class="modal modal_success" @closeModal="modalSuccess = false">
            <h2 class="modal__title">Пароль изменён</h2>
            <BaseButton id="modal-success-submit" class="modal__submit">
                В личный кабинет
            </BaseButton>
        </BaseModal>
        <BaseModal v-if="modalError" class="modal modal_error" @closeModal="modalError = false">
            <h2 class="modal__title">Ссылка устарела</h2>
            <div class="modal__link">Восстановить пароль...</div>
            <BaseButton id="modal-error-submit" class="modal__submit">
                На главную
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
