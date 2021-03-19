<template>
  <div class="osagoForm__block">
    <div class="osagoForm__head">
      <div class="osagoForm__row osagoForm__row_headInner">
        <h3 class="osagoForm__headTitle">
          Водитель
        </h3>
        <span class="osagoForm__headCopy">Скопировать владельца</span>
      </div>
      <div class="osagoForm__headRemove" @click="$emit('removeDriver')">
        <img src="~/assets/images/icons/close-red.svg" alt="close red">
        Удалить водителя
      </div>
    </div>
    <div class="osagoForm__body">
      <div class="osagoForm__row">
        <ForLogged :list="loggedDrivers" />
      </div>
      <div class="osagoForm__wrapper">
        <div class="osagoForm__left">
          <div class="osagoForm__row osagoForm__row_data">
            <div class="baseField">
              <label :for="`driver${number}-data-surname`" class="baseField__label">Фамилия</label>
              <BaseInput
                :id="`driver${number}-data-surname`"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label :for="`driver${number}-data-name`" class="baseField__label">Имя</label>
              <BaseInput
                :id="`driver${number}-data-name`"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label :for="`driver${number}-data-patronymic`" class="baseField__label">Отчество</label>
              <BaseInput
                :id="`driver${number}-data-patronymic`"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label :for="`driver${number}-data-birth`" class="baseField__label">Дата рождения</label>
              <BaseInput
                :id="`driver${number}-data-birth`"
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
                :id="`driver${number}-gender`"
                name="driverGender"
                :options="genderType"
              />
            </div>
          </section>
        </div>
        <div class="osagoForm__right">
          <div class="osagoForm__row osagoForm__row_certificateData">
            <div class="baseField">
              <label :for="`driver${number}-certificate-number`" class="baseField__label">Серия и номер прав</label>
              <BaseInput
                :id="`driver${number}-certificate-number`"
                placeholder="10 цифр"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label :for="`driver${number}-certificate-date`" class="baseField__label">Дата выдачи</label>
              <BaseInput
                :id="`driver${number}-certificate-date`"
                type="date"
                class="baseField__input"
              />
            </div>
          </div>
          <div class="osagoForm__row osagoForm__row_certificateAdditional">
            <div class="baseField">
              <label :for="`driver${number}-certificate-exp`" class="baseField__label">Начало стажа</label>
              <BaseInput
                :id="`driver${number}-certificate-exp`"
                type="date"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label :for="`driver${number}-certificate-past`" class="baseField__label">Серия и номер прошлых прав</label>
              <BaseInput
                :id="`driver${number}-certificate-past`"
                placeholder="10 цифр"
                class="baseField__input"
              />
              <span class="baseField__hint">Можно не заполнять, если нет</span>
            </div>
          </div>
          <section class="osagoForm__section">
            <h3 class="osagoForm__sectionTitle osagoForm__sectionTitle_photos">
              Фотографии документа
            </h3>
            <div class="osagoForm__row osagoForm__row_photos">
              <div class="baseField">
                <label :for="`driver${number}-photos-front`" class="baseField__label">Лицевая сторона</label>
                <BaseFile
                  :id="`driver${number}-photos-front`"
                  class="baseField__input"
                />
              </div>
              <div class="baseField">
                <label :for="`driver${number}-photos-back`" class="baseField__label">Оборотная сторона</label>
                <BaseFile
                  :id="`driver${number}-photos-back`"
                  class="baseField__input"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '~/components/base/BaseInput'
import BaseRadio from '~/components/base/BaseRadio'
import BaseFile from '~/components/base/BaseFile'
import ForLogged from '~/components/ForLogged'
export default {
  name: 'DriverItem',
  components: {
    BaseInput,
    BaseRadio,
    BaseFile,
    ForLogged
  },
  props: {
    number: {
      type: [String, Number],
      default: 0
    }
  },
  data () {
    return {
      loggedDrivers: [
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
        &_headInner {
            margin-bottom: 0;
        }
        &_data {
            .baseField {
                width: 146px;
                margin-bottom: 16px;
            }
        }
        &_certificateData {
            justify-content: flex-start;
            .baseField {
                width: 146px;
                margin-right: 20px;
                &:last-child {
                  margin-right: 0;
                }
            }
        }
        &_certificateAdditional {
            justify-content: flex-start;
            margin-bottom: 31px;
            .baseField {
                width: 146px;
                margin-right: 20px;
                &:last-child {
                  width: 313px;
                  margin-right: 0;
                }
            }
        }
        &_photos {
            .baseField {
                width: 229px;
            }
        }
    }
}
@media (max-width: 1279px) {
    .osagoForm {
        &__row {
            &_data {
                .baseField {
                    width: 138px;
                }
            }
            &_certificateData {
                .baseField {
                    width: 138px;
                }
            }
            &_certificateAdditional {
                .baseField {
                    width: 138px;
                    &:last-child {
                        width: 260px;
                    }
                }
            }
            &_photos {
                .baseField {
                    width: 200px;
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
            &_certificateData {
                .baseField {
                    width: 31%;
                }
            }
            &_certificateAdditional {
                .baseField {
                    width: 31%;
                    &:last-child {
                        width: 62%;
                    }
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
        .baseFile {
            background-color: #fff;
        }
        &__row {
            &_data {
                .baseField {
                    width: 100%;
                }
            }
            &_certificateData {
                justify-content: space-between;
                .baseField {
                    width: 46%;
                }
            }
            &_certificateAdditional {
                .baseField {
                    width: 100%;
                    margin-right: 0;
                    margin-bottom: 16px;
                    &:last-child {
                        width: 100%;
                    }
                }
            }
            &_photos {
                .baseField {
                    width: 46%;
                }
            }
        }
        &__left {
            border-bottom: 0;
        }
    }
}
</style>
