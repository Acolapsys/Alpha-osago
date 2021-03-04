<template>
  <section class="osagoForm wrapper">
    <h2 class="osagoForm__title">
      <span>5. </span>Полис
    </h2>
    <div class="osagoForm__row osagoForm__row_date">
        <div class="baseField">
            <label for="police-date-begin" class="baseField__label">Дата начала страховки</label>
            <BaseInput
                id="police-date-begin"
                type="date"
                class="baseField__input"
            />
        </div>
        <div class="baseField">
            <span class="baseField__label">Срок действия полиса</span>
            <BaseSelect
                id="police-term"
                :options="termTime"
                :default="termDefault"
                class="baseField__input"
            />
        </div>
        <span class="osagoForm__hint">Последний день действия полиса — 11 сентября 2021</span>
    </div>
    <div class="osagoForm__row osagoForm__row_target">
        <div class="baseField">
            <span class="baseField__label">Цель использования</span>
            <BaseSelect
                id="police-target"
                :options="targetType"
                class="baseField__input"
            />
        </div>
    </div>
    <div class="osagoForm__row osagoForm__row_contacts">
        <div class="baseField">
            <label for="police-email" class="baseField__label">Электронная почта, на которую прислать полис</label>
            <BaseInput
                id="police-email"
                type="email"
                placeholder="owner@domain.com"
                class="baseField__input"
            />
        </div>
        <div class="baseField">
            <label for="police-tel" class="baseField__label">Телефон</label>
            <BaseInput
                id="police-tel"
                placeholder="+7 (927) 775 34 02"
                class="baseField__input"
            />
        </div>
    </div>
    <div class="osagoForm__row osagoForm__row_hint">Эти данные нужны страховым, передадим только им. Сами ничего присылать не будем.</div>
  </section>
</template>

<script>
import BaseInput from '~/components/base/BaseInput'
import BaseSelect from '~/components/base/BaseSelect'
export default {
  components: {
    BaseInput,
    BaseSelect
  },
  data () {
    return {
        termTime: ['1 месяц', '6 месяцев', '12 месяцев'],
        termDefault: '12 месяцев',
        targetType: ['Личная', 'Юридическая', 'Общая']
    }
  }
}
</script>

<style lang="scss" scoped>
.osagoForm {
    $root: &;
    &__row {
        &_date {
            flex-wrap: nowrap;
            justify-content: flex-start;
            .baseField {
                flex-shrink: 0;
                width: 241px;
                &:first-child {
                    margin-right: 20px;
                }
            }
            #{$root}__hint {
                margin-left: 20px;
                color: #808080;
            }
        }
        &_target {
            .baseField {
                width: 241px;
            }
        }
        &_contacts {
            justify-content: flex-start;
            margin-top: 36px;
            padding-top: 20px;
            border-top: 1px solid #E6E6E6;
            .baseField {
                &:first-child {
                    width: 502px;
                    margin-right: 20px;
                }
                &:last-child {
                    width: 241px;
                }
            }
        }
        &_hint {
            margin-bottom: 0;
            color: #333;
        }
    }
}
@media (max-width: 1023px) {
    .osagoForm {
        $root: &;
        &__row {
            &_date {
                .baseField {
                    width: 200px;
                }
            }
            &_target {
                .baseField {
                    width: 200px;
                }
            }
            &_contacts {
                .baseField {
                    &:first-child {
                        width: 440px;
                    }
                    &:last-child {
                        width: 200px;
                    }
                }
            }
        }
    }
}
@media (max-width: 767px) {
    .osagoForm {
        $root: &;
        &__row {
            &_date {
                flex-direction: column;
                align-items: flex-start;
                .baseField {
                    width: 100%;
                    margin-bottom: 16px;
                    &:first-child {
                        width: 160px;
                        margin-right: 0;
                    }
                }
                #{$root}__hint {
                    margin-left: 0;
                }
            }
            &_target {
                .baseField {
                    width: 100%;
                }
            }
            &_contacts {
                .baseField {
                    &:first-child,
                    &:last-child {
                        width: 100%;
                        margin-right: 0;
                    }
                }
            }
        }
    }
}
</style>
