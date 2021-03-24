<template>
  <section class="osagoForm wrapper">
    <div :id="ancor" class="osagoForm__ancor" />
    <h2 class="osagoForm__title">
      <span v-if="number">{{ number }}. </span>Персона
    </h2>
    <div class="osagoForm__wrapper">
      <div class="osagoForm__left">
        <div class="osagoForm__row osagoForm__row_data">
          <div class="baseField">
            <label for="person-data-surname" class="baseField__label">Фамилия</label>
            <BaseInput
              id="person-data-surname"
              class="baseField__input"
            />
          </div>
          <div class="baseField">
            <label for="person-data-name" class="baseField__label">Имя</label>
            <BaseInput
              id="person-data-name"
              class="baseField__input"
            />
          </div>
          <div class="baseField">
            <label for="person-data-patronymic" class="baseField__label">Отчество</label>
            <BaseInput
              id="person-data-patronymic"
              class="baseField__input"
            />
          </div>
          <div class="baseField">
            <label for="person-data-birth" class="baseField__label">Дата рождения</label>
            <BaseInput
              id="person-data-birth"
              type="date"
              class="baseField__input"
            />
          </div>
        </div>
        <section class="osagoForm__section">
          <h3 class="osagoForm__sectionTitle">
            Пол
          </h3>
          <div class="osagoForm__row">
            <BaseRadio
              id="person-gender"
              name="personGender"
              :options="genderType"
            />
          </div>
        </section>
      </div>
      <div class="osagoForm__right">
        <section class="osagoForm__section">
          <h3 class="osagoForm__sectionTitle">
            Паспорт
          </h3>
          <div class="osagoForm__row osagoForm__row_passportData">
            <div class="baseField">
              <label for="person-passport-number" class="baseField__label">Серия и номер</label>
              <BaseInput
                id="person-passport-number"
                placeholder="10 цифр"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label for="person-passport-date" class="baseField__label">Дата выдачи</label>
              <BaseInput
                id="person-passport-date"
                type="date"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label for="person-passport-code" class="baseField__label">Код подразделения</label>
              <BaseInput
                id="person-passport-code"
                placeholder="6 цифр"
                class="baseField__input"
              />
            </div>
          </div>
          <div class="osagoForm__row osagoForm__row_passportAddress">
            <div class="baseField">
              <label for="person-passport-address" class="baseField__label">Адрес регистрации (как в паспорте)</label>
              <BaseInput
                id="person-passport-address"
                class="baseField__input"
              />
            </div>
          </div>
        </section>
        <section class="osagoForm__section">
          <h3 class="osagoForm__sectionTitle osagoForm__sectionTitle_photos">
            Фотографии документа
          </h3>
          <div class="osagoForm__row osagoForm__row_photos">
            <div class="baseField">
              <label for="person-photos-front" class="baseField__label">Лицевая сторона</label>
              <BaseFile
                id="person-photos-front"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label for="person-photos-back" class="baseField__label">Оборотная сторона</label>
              <BaseFile
                id="person-photos-back"
                class="baseField__input"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import BaseInput from '~/components/base/BaseInput'
import BaseRadio from '~/components/base/BaseRadio'
import BaseFile from '~/components/base/BaseFile'
export default {
  name: 'Person',
  components: {
    BaseInput,
    BaseRadio,
    BaseFile
  },
  props: {
    number: {
      type: [Number, String],
      default: null
    },
    ancor: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      genderType: [
        {
          value: 1,
          text: 'Мужчина',
          checked: true
        },
        {
          value: 2,
          text: 'Женщина',
          checked: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.osagoForm {
    &__row {
        &_data {
            .baseField {
                width: 154px;
                margin-bottom: 16px;
            }
        }
        &_passportData {
            .baseField {
                width: 154px;
            }
        }
        &_passportAddress {
            .baseField {
                width: 100%;
            }
        }
        &_photos {
            .baseField {
                width: 236px;
            }
        }
    }
}
@media (max-width: 1279px) {
    .osagoForm {
        &__row {
            &_data {
                .baseField {
                    width: 136px;
                }
            }
            &_passportData {
                .baseField {
                    width: 136px;
                }
            }
            &_photos {
                .baseField {
                    width: 220px;
                }
            }
        }
    }
}
@media (max-width: 1023px) {
    .osagoForm {
        &__row {
            &_data {
                .baseField {
                    width: 31%;
                }
            }
            &_passportData {
                .baseField {
                    width: 31%;
                }
            }
            &_photos {
                .baseField {
                    width: 46%;
                }
            }
        }
    }
}
@media (max-width: 767px) {
    .osagoForm {
        &__row {
            &_data {
                .baseField {
                    width: 100%;
                    &:last-child {
                        width: 46%;
                    }
                }
            }
            &_passportData {
                .baseField {
                    width: 46%;
                    margin-bottom: 16px;
                    &:nth-child(3) {
                        width: 100%;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>
