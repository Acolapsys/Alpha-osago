<template>
  <section class="osagoForm wrapper">
    <div :id="ancor" class="osagoForm__ancor" />
    <h2 class="osagoForm__title">
      <span v-if="number">{{ number }}. </span>Права
    </h2>
    <div class="osagoForm__wrapper">
        <div class="osagoForm__left">
            <div class="osagoForm__row osagoForm__row_certificateData">
                <div class="baseField">
                    <label for="certificate-number" class="baseField__label">Серияя и номер прав</label>
                    <BaseInput
                        id="certificate-number"
                        class="baseField__input"
                    />
                </div>
                <div class="baseField">
                    <label for="certificate-date" class="baseField__label">Дата выдачи</label>
                    <BaseInput
                        id="certificate-date"
                        type="date"
                        class="baseField__input"
                    />
                </div>
            </div>
            <div class="osagoForm__row osagoForm__row_certificateAdditional">
                <div class="baseField">
                    <label for="certificate-exp" class="baseField__label">Начало стажа</label>
                    <BaseInput
                        id="certificate-exp"
                        type="date"
                        class="baseField__input"
                    />
                </div>
                <div class="baseField">
                    <label for="certificate-past" class="baseField__label">Серия и номер прошлых прав</label>
                    <BaseInput
                        id="certificate-past"
                        class="baseField__input"
                    />
                </div>
            </div>
            <section class="osagoForm__section">
                <h3 class="osagoForm__sectionTitle osagoForm__sectionTitle_photos">
                    Фотографии документа
                </h3>
                <div class="osagoForm__row osagoForm__row_photos">
                    <div class="baseField">
                        <label for="certificate-photos-front" class="baseField__label">Лицевая сторона</label>
                        <BaseFile
                            id="certificate-photos-front"
                            class="baseField__input"
                        />
                    </div>
                    <div class="baseField">
                        <label for="certificate-photos-back" class="baseField__label">Оборотная сторона</label>
                        <BaseFile
                            id="certificate-photos-back"
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
import BaseFile from '~/components/base/BaseFile'
export default {
  name: 'Certificate',
  components: {
    BaseInput,
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
  }
}
</script>

<style lang="scss" scoped>
.osagoForm {
    &__row {
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
    &__left {
        border-right: 0;
    }
}
@media (max-width: 1279px) {
    .osagoForm {
        &__row {
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
        &__row {
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
