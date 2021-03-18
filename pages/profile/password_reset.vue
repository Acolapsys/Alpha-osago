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
        <BaseButton id="back" class="profile__back">
          Новый пароль
        </BaseButton>
    </main>
</template>

<script>
import BaseInput from '~/components/base/BaseInput'
import BaseButton from '~/components/base/BaseButton'

export default {
  components: {
      BaseInput,
      BaseButton
  }
}
</script>

<style lang="scss" scoped>
.profile {
    width: 700px;
    .baseField,
    &__back {
        width: 364px;
        margin: 0 auto;
    }
    &__back {
        margin-top: 30px;
        border: 1.5px solid #333333;
    }
}
@media (max-width: 767px) {
    .profile {
        width: 100%;
        .baseField,
        &__back {
            width: 90%;
        }
        &__back {
            margin-top: 40px;
        }
    }
}
</style>
