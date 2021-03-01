<template>
  <section class="osagoForm wrapper">
    <h2 class="osagoForm__title">
      <span>1. </span>Транспортное средство
    </h2>
    <div class="osagoForm__wrapper">
      <div class="osagoForm__left">
        <div class="osagoForm__row osagoForm__row_stateNumber">
          <div class="baseField">
            <label for="vehicle-state-number" class="baseField__label">Государственный номер</label>
            <BaseInput
              id="vehicle-state-number"
              class="baseField__input"
            />
          </div>
          <BaseCheckbox id="vehicle-no-number">Номера нет</BaseCheckbox>
        </div>
        <div v-if="billet" class="osagoForm__billet">
          <img
            src="~/assets/images/icons/close-black.svg"
            alt="close"
            class="osagoForm__billetClose"
            @click="billet = false"
          >
          Найдено Mitsubishi Pajero 2010 по этому номеру<br /><span class="osagoForm__billetFill">Заполнить поля этим авто</span>
        </div>
        <div class="osagoForm__row osagoForm__row_params">
          <div class="baseField">
            <span class="baseField__label">Тип ТС</span>
            <BaseSelect
              id="vehicle-type"
              :options="paramsType"
              class="baseField__input"
            />
          </div>
          <div class="baseField">
            <label for="vehicle-brand" class="baseField__label">Марка</label>
            <BaseInput
              id="vehicle-brand"
              class="baseField__input"
            />
          </div>
          <div class="baseField">
            <label for="vehicle-model" class="baseField__label">Модель</label>
            <BaseInput
              id="vehicle-model"
              class="baseField__input"
            />
          </div>
          <div class="baseField">
            <label for="vehicle-year" class="baseField__label">Год выпуска</label>
            <BaseInput
              id="vehicle-year"
              class="baseField__input"
            />
          </div>
          <div class="baseField">
            <label for="vehicle-power" class="baseField__label">Мощность</label>
            <BaseInput
              id="vehicle-power"
              placeholder="100 л.с."
              type="number"
              class="baseField__input"
            />
          </div>
          <div class="baseField baseField_eq">
            <BaseInput
              id="vehicle-output"
              placeholder="73.6 кВт"
              readonly="readonly"
              class="baseField__input"
            />
          </div>
        </div>
        <section class="osagoForm__section">
          <h3 class="osagoForm__sectionTitle">Идентификатор ТС</h3>
          <div class="osagoForm__row">
            <BaseRadio
              name="idType"
              :options="idType"
              id="vehicle-id-type"
            />
          </div>
          <div class="osagoForm__row osagoForm__row_idNumber">
            <div class="baseField">
              <label for="vehicle-id-number" class="baseField__label">Номер идентификатора</label>
              <BaseInput
                id="vehicle-id-number"
                placeholder="17 символов"
                class="baseField__input"
              />
            </div>
          </div>
          <div class="osagoForm__row osagoForm__row_trailer">
            <BaseSwitch id="vehicle-trailer" />
            <label for="vehicle-trailer">Есть прицеп</label>
          </div>
        </section>
      </div>
      <div class="osagoForm__right">
        <section class="osagoForm__section">
          <h3 class="osagoForm__sectionTitle">Документы на автомобиль</h3>
          <div class="osagoForm__row">
            <BaseRadio
              name="docType"
              :options="docType"
              id="vehicle-doc-type"
            />
          </div>
          <div class="osagoForm__row osagoForm__row_passportNumber">
            <div class="baseField">
              <label for="vehicle-passport-number" class="baseField__label">Серия и номер</label>
              <BaseInput
                id="vehicle-passport-number"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label for="vehicle-passport-date" class="baseField__label">Дата выдачи</label>
              <BaseInput
                id="vehicle-passport-date"
                type="date"
                class="baseField__input"
              />
            </div>
          </div>
          <div class="osagoForm__row osagoForm__row_passportIssue">
            <div class="baseField">
              <label for="vehicle-passport-issue" class="baseField__label">Кем выдано</label>
              <BaseInput
                id="vehicle-passport-issue"
                class="baseField__input"
              />
            </div>
          </div>
        </section>
        <section class="osagoForm__section">
          <h3 class="osagoForm__sectionTitle osagoForm__sectionTitle_photos">Фотографии документа</h3>
          <div class="osagoForm__row osagoForm__row_photos">
            <div class="baseField">
              <label for="vehicle-photos-front" class="baseField__label">Лицевая сторона</label>
              <BaseFile
                id="vehicle-photos-front"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label for="vehicle-photos-back" class="baseField__label">Оборотная сторона</label>
              <BaseFile
                id="vehicle-photos-back"
                class="baseField__input"
              />
            </div>
          </div>
        </section>
        <section class="osagoForm__section">
          <h3 class="osagoForm__sectionTitle">Технический осмотр</h3>
          <div class="osagoForm__row osagoForm__row_inspectionNumber">
            <div class="baseField">
              <label for="vehicle-inspection-number" class="baseField__label">Номер диагностической карты</label>
              <BaseInput
                id="vehicle-inspection-number"
                placeholder="22 цифры"
                class="baseField__input"
              />
            </div>
          </div>
          <div class="osagoForm__row osagoForm__row_inspectionDate">
            <div class="baseField">
              <label for="vehicle-inspection-from" class="baseField__label">Дата выдачи</label>
              <BaseInput
                id="vehicle-inspection-from"
                type="date"
                class="baseField__input"
              />
            </div>
            <div class="baseField">
              <label for="vehicle-inspection-to" class="baseField__label">Действительна до</label>
              <BaseInput
                id="vehicle-inspection-to"
                type="date"
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
import BaseCheckbox from '~/components/base/BaseCheckbox'
import BaseRadio from '~/components/base/BaseRadio'
import BaseSwitch from '~/components/base/BaseSwitch'
import BaseSelect from '~/components/base/BaseSelect'
import BaseFile from '~/components/base/BaseFile'
export default {
  components: {
    BaseInput,
    BaseCheckbox,
    BaseRadio,
    BaseSwitch,
    BaseSelect,
    BaseFile
  },
  data() {
    return {
      billet: true,
      paramsType: [
        'Седан',
        'Универсал',
        'Хэтчбек',
        'Минивен',
        'Внедорожник',
        'Купе',
        'Кабриолет',
        'Пикап',
        'Лимузин',
        'Тарга'
      ],
      idType: [
        {
          value: 1,
          text: 'VIN номер',
          checked: true
        },
        {
          value: 2,
          text: 'Номер кузова',
          checked: false
        },
        {
          value: 3,
          text: 'Номер шасси',
          checked: false
        }
      ],
      docType: [
        {
          value: 1,
          text: 'ПТС',
          checked: true
        },
        {
          value: 2,
          text: 'СРТС',
          checked: false
        },
        {
          value: 3,
          text: 'ЭПТС',
          checked: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.baseField {
  &_eq {
    position: relative;
    &::before {
      content: '=';
      position: absolute;
      top: 50%;
      left: -20px;
      display: block;
      transform: translateY(-50%);
    }
  }
}
.osagoForm {
  &__row {
    &_stateNumber {
      justify-content: flex-start;
      align-items: flex-end;
      .baseCheckbox {
        margin: 0 0 11px 20px;
      }
    }
    &_params {
      align-items: flex-end;
      .baseField {
        width: 154px;
        margin-bottom: 16px;
      }
    }
    &_idNumber {
      .baseField {
        width: 328px;
      }
    }
    &_trailer {
      justify-content: flex-start;
      .switch {
        margin-right: 16px;
      }
    }
    &_passportNumber {
      .baseField {
        width: 241px;
      }
    }
    &_passportIssue {
      .baseField {
        width: 100%;
      }
    }
    &_photos {
      .baseField {
        width: 236px;
      }
    }
    &_inspectionNumber,
    &_inspectionDate {
      .baseField {
        width: 241px;
      }
    }
  }
}
@media (max-width: 1279px) {
  .baseField {
    &_eq {
      &::before {
        left: -15px;
      }
    }
  }
  .osagoForm {
    &__row {
      &_params {
        .baseField {
          width: 136px;
        }
      }
      &_passportNumber {
        .baseField {
          width: 220px;
        }
      }
      &_photos {
        .baseField {
          width: 220px;
        }
      }
      &_inspectionNumber,
      &_inspectionDate {
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
      &_params {
        .baseField {
          width: 31%;
        }
      }
      &_passportNumber {
        .baseField {
          width: 46%;
        }
      }
      &_photos {
        .baseField {
          width: 46%;
        }
      }
      &_inspectionNumber,
      &_inspectionDate {
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
      &_stateNumber {
        flex-direction: column;
        align-items: flex-start;
        .baseField {
          width: 100%;
        }
        .baseCheckbox {
          margin: 16px 0 0;
        }
      }
      &_params {
        .baseField {
          &:nth-child(1) {
            width: 100%;
          }
          &:nth-child(2),
          &:nth-child(3) {
            width: 46%;
          }
          &:nth-child(4) {
            width: 46%;
            margin-right: 100px;
          }
          &:nth-child(5),
          &:nth-child(6) {
            width: 46%;
          }
        }
      }
      &_idNumber {
        .baseField {
          width: 100%;
        }
      }
      &_inspectionNumber {
        .baseField {
          width: 100%;
        }
      }
    }
  }
}
</style>
