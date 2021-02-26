<template>
  <div class="steps" :class="{ 'steps_active': listFlag }">
    <div class="steps__wrapper">
      <div class="steps__current" @click="modalToggle(!listFlag)">
        <span ref="currentText" class="steps__currentText">
          {{ steps[0].number }} / {{ steps.length - 1 }} {{ steps[0].name }}
        </span>
        <img
          src="~/assets/images/icons/arrow-down-black.svg"
          class="steps__currentArrow"
          :class="{ 'steps__currentArrow_active': listFlag }"
          alt="arrow"
        >
      </div>
      <div class="steps__list wrapper" :class="{ 'steps__list_active': listFlag }">
        <div v-for="(item, idx) in steps" :key="item.id" class="steps__item" @click="currentStep(idx)">
          <div class="steps__number">
            {{ item.number }}
          </div>
          <div class="steps__name">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  data () {
    return {
      listFlag: false,
      steps: [
        {
          number: 1,
          name: 'Транспортное средство'
        },
        {
          number: 2,
          name: 'Владелец'
        },
        {
          number: 3,
          name: 'Страхователь'
        },
        {
          number: 4,
          name: 'Водители'
        },
        {
          number: 5,
          name: 'Полис'
        },
        {
          number: '+',
          name: 'Помощь'
        }
      ]
    }
  },
  methods: {
    currentStep(id) {
      const stepsItems = document.querySelectorAll('.steps__item')
      const substr = (id !== this.steps.length - 1) ? ` / ${this.steps.length - 1}` : ''

      for (const item of stepsItems) {
        item.classList.remove('steps__item_active')
      }

      stepsItems[id].classList.add('steps__item_active')
      this.$refs.currentText.innerHTML = `${this.steps[id].number}${substr} ${this.steps[id].name}`
      this.modalToggle(false)
    },
    modalToggle(flag) {
      if (flag) {
        document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + "px"
        document.body.style.overflow = 'hidden'
      } else {
        document.body.removeAttribute('style')
      }
      
      this.listFlag = flag
    }
  }
}
</script>

<style lang="scss" scoped>
.steps {
    $root: &;
    padding: 18px 0;
    background-color: #fff;
    border-bottom: 1px solid #E6E6E6;
    &__current {
      display: none;
    }
    &__list {
        display: flex;
    }
    &__item {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 172px;
      margin-right: 20px;
      padding: 17px 15px;
      background: #F6F6F6;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s;
      &_active {
        background: #EBF7F3;
        #{$root}__number,
        #{$root}__name {
          color: #038661;
        }
      }
    }
    &__number {
      font-size: 26px;
      font-weight: bold;
      letter-spacing: -0.02em;
      color: #828282;
    }
    &__name {
      font-weight: bold;
      letter-spacing: -0.01em;
      color: #333333;
    }
}
@media (max-width: 1279px) {
  .steps {
    &__item {
      width: 146px;
      margin-right: 16px;
    }
  }
}
@media (max-width: 1024px) {
  .steps {
    &__list {
      overflow: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    &__list::-webkit-scrollbar {
      display: none;
    }
  }
}
@media (max-width: 767px) {
  .steps {
    position: fixed;
    top: 65px;
    left: 0;
    right: 0;
    z-index: 9;
    padding: 0;
    &_active {
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
    &__wrapper {
      position: relative;
    }
    &__current {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      padding: 14px 16px;
      background: #FFFFFF;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.06);
      cursor: pointer;
    }
    &__currentText {
      font-weight: bold;
      letter-spacing: -0.01em;
    }
    &__currentArrow {
      transition: 0.3s;
      transform: rotate(180deg);
      &_active {
        transform: rotate(0);
      }
    }
    &__list {
      position: absolute;
      left: 0;
      right: 0;
      flex-direction: column;
      padding: 0 16px 14px;
      background: #fff;
      transform: translateY(-100%);
      &_active {
        transition: 0.3s;
        transform: translateY(0);
      }
    }
    &__item {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin: 0;
      padding: 12px 0;
      background: inherit;
    }
    &__number {
      display: none;
    }
  }
}
</style>
