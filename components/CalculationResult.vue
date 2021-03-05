<template>
  <div class="calculationResult">
    <div class="calculationResult__inner">
      <img src="~/assets/images/eagle-rosgosstrakh.png" alt="image" class="calculationResult__img">
      <div class="calculationResult__item calculationResult__item_price">
        <div class="calculationResult__name">
          База
        </div>
        <div class="calculationResult__coefficient">
          <span>{{ calculationOptions.price }}</span> ₽
        </div>
      </div>
      <div v-for="item in calculationOptions.items" :key="item.id" class="calculationResult__item">
        <div class="calculationResult__name">
          {{ item.name }}
        </div>
        <div class="calculationResult__coefficient">
          {{ item.coefficient }}
        </div>
      </div>
      <div class="calculationResult__item calculationResult__item_result">
        <div class="calculationResult__name">
          Стоимость
        </div>
        <div class="calculationResult__coefficient">
          <span>{{ result }}</span> ₽
        </div>
      </div>
    </div>
    <BaseButton class="calculationResult__button">
      Оформить ОСАГО
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from '~/components/base/BaseButton'
export default {
  components: {
    BaseButton
  },
  props: {
    calculationOptions: {
      type: Object,
      required: true
    }
  },
  computed: {
    result () {
      return this.calculationOptions.price
    }
  }
}
</script>

<style lang="scss" scoped>
.calculationResult {
    $root: &;
    display: flex;
    justify-content: space-between;
    padding: 34px 37px;
    background-color: #fff;
    border-radius: 6px;
    &__inner {
        display: flex;
        align-items: flex-end;
    }
    &__item {
        flex-shrink: 0;
        position: relative;
        margin-left: 30px;
        color: #BDBDBD;
        &_price {
            #{$root}__coefficient {
                color: #333;
            }
        }
        &_result {
            margin-left: 50px;
            &::before {
                content: '=';
                position: absolute;
                left: -28px;
                bottom: 2px;
                font-size: 15px;
            }
            #{$root}__coefficient {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
        }
        &:not(&_price):not(&_result)::before {
            content: 'x';
            position: absolute;
            left: -20px;
            bottom: 0;
            font-size: 14px;
        }
    }
    &__name {
        text-transform: uppercase;
        font-size: 10px;
        letter-spacing: 1.5px;
    }
    &__coefficient {
        font-size: 14px;
    }
    &__button {
        width: 210px;
        color: #fff;
        background: #FDB215;
    }
}
</style>
