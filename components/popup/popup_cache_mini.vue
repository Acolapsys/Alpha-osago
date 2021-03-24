<template>
  <div class="popup__wrapper">
    <div class="popup__cache">
      <div
        class="popup__cache__button"
        @click="closePopup2"
      >
        <img src="../../assets/images/icons/UnionX.png" alt="">
      </div>
      <div class="popup__cache__content">
        <!--        <p>Кэшбек</p>-->
        <p><strong>Вернем 5% от стоимости оформленного полиса на карту</strong></p>
        <div class="lists">
          <div class="list">
            <div class="line">
              <img src="../../assets/images/icons/line.png" alt="">
            </div>
            <p>Карта должна быть привязана к телефону, указанному в личном кабинете. Если карта не привязана или хотите получить кэшбек на другую карту, напишите в чат</p>
          </div>
          <div class="list">
            <div class="line">
              <img src="../../assets/images/icons/line.png" alt="">
            </div>
            <p>Только для самостоятельного оформления (для несегмента кэшбек не делаем).</p>
          </div>
          <div class="list">
            <div class="line">
              <img src="../../assets/images/icons/line.png" alt="">
            </div>
            <p>Возврат в течение шуток</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupCachemini',
  methods: {
    closePopup2 () {
      this.$emit('closePopup2')
    }
  }
}
</script>

<style scoped lang="scss">
*{
  box-sizing: border-box;
}
.popup__wrapper{
  position: absolute;
  z-index: 10;
  margin-top: 50px;

  //margin:0 auto;
  .popup__cache {
    max-height: 199px;
    max-width: 745px;
    background: #FFFFFF;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25), 4px 4px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    &__button{
      max-width: 13.7px;
      padding-top: 13.15px;
      margin-left: 716px;
      cursor: pointer;
      img{
        width: 100%;
      }
    }
    &__content {
      padding: 4.15px 0px 26px 26px;
      p {
        margin-left: 15px;
      }
      .lists {
        margin-top: 8px;
        .list {
          display: flex;
          align-items: center;

          .line {
            max-width: 11px;
            img {
              width: 100%;
            }
          }

          p {
            margin-left: 8px;
          }
        }

        .list:first-child {
          .line {
            margin-bottom: 25px;
          }
        }
      }
    }
  }
}

</style>
