<template>
  <section class="osagoForm wrapper">
    <h2 class="osagoForm__title">
      <span>2. </span>Владелец
    </h2>
    <div class="osagoForm__row">
      <ForLogged :list="loggedOwners" />
    </div>
    <div class="osagoForm__wrapper">
      <div class="osagoForm__left">
        <div class="osagoForm__row osagoForm__row_data">
          <div class="baseField">
            <label for="owner-data-surname" class="baseField__label">Фамилия</label>
            <BaseInput
              id="owner-data-surname"
              class="baseField__input"
            />
          </div>
          <div class="baseField">
            <label for="owner-data-name" class="baseField__label">Имя</label>
            <BaseInput
              id="owner-data-name"
              class="baseField__input"
            />
          </div>
          <div class="baseField">
            <label for="owner-data-patronymic" class="baseField__label">Отчество</label>
            <BaseInput
              id="owner-data-patronymic"
              class="baseField__input"
            />
          </div>
          <div class="baseField">
            <label for="owner-data-birth" class="baseField__label">Дата рождения</label>
            <BaseInput
              id="owner-data-birth"
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
              id="owner-gender"
              name="ownerGender"
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
              <label for="owner-passport-number" class="baseField__label">Серия и номер</label>
              <BaseInput
                id="owner-passport-number"
                placeholder="10 цифр"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label for="owner-passport-date" class="baseField__label">Дата выдачи</label>
              <BaseInput
                id="owner-passport-date"
                type="date"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label for="owner-passport-code" class="baseField__label">Код подразделения</label>
              <BaseInput
                id="owner-passport-code"
                placeholder="6 цифр"
                class="baseField__input"
              />
            </div>
          </div>
          <div class="osagoForm__row osagoForm__row_passportAddress">
            <div class="baseField">
              <label for="owner-passport-address" class="baseField__label">Адрес регистрации (как в паспорте)</label>
              <BaseInput
                id="owner-passport-address"
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
              <label for="owner-photos-front" class="baseField__label">Лицевая сторона</label>
              <BaseFile
                id="owner-photos-front"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label for="owner-photos-back" class="baseField__label">Оборотная сторона</label>
              <BaseFile
                id="owner-photos-back"
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
import ForLogged from '~/components/ForLogged'
export default {
  components: {
    BaseInput,
    BaseRadio,
    BaseFile,
    ForLogged
  },
  data () {
    return {
      loggedOwners: [
        {
          title: 'Новый человек'
        },
        {
          title: 'Селиверстов Иван Петрович'
        },
        {
          title: 'Селиверстова Елена Константиновна'
        }
      ],
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
