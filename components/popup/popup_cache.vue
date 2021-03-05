<template>
  <div class="popup__wrapper">
    <div class="popup__cache">
      <div class="popup__cache__header">
<!--        <p>Кэшбек</p>-->
        <div
          class="popup__cache__header-button"
          @click="closePopup"
        >
          <img src="../../assets/images/icons/close.png" alt="">
        </div>
      </div>
      <div class="popup__cache__content">
        <p>Вернем 5% от стоимости оформленного полиса на карту</p>
        <div class="popup__cache__content-lists">
          <div class="list">
            <div class="line"><img src="../../assets/images/icons/line.png" alt=""></div>
            <p>Карта должна быть привязана к телефону, указанному в личном кабинете. Если карта не привязана или хотите получить кэшбек на другую карту, напишите в чат</p>
          </div>
          <div class="list">
            <div class="line"><img src="../../assets/images/icons/line.png" alt=""></div>
            <p>Только для самостоятельного оформления (для несегмента кэшбек не делаем).</p>
          </div>
          <div class="list">
            <div class="line"><img src="../../assets/images/icons/line.png" alt=""></div>
            <p>Возврат в течение шуток</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupCache',
  methods: {
    closePopup () {
      this.$emit("closePopup");
    }
  },
}
</script>

<style scoped lang="scss">
.popup__wrapper{
  position: absolute;
  z-index: 10;
  margin:0 auto;
  .popup__cache{
    height: 259px;
    width: 1027.12px;
    &__header{
      display: flex;
      justify-content: flex-end;
      //p{
      //  padding-left: 18px;
      //  width: 140px;
      //  height: 42px;
      //  font-style: normal;
      //  font-weight: normal;
      //  font-size: 36px;
      //  line-height: 42px;
      //  letter-spacing: 0.05em;
      //  color: #000000;
      //}
      &-button{
        padding-top: 10px;
        max-width: 100px;
        cursor: pointer;
        img{
          width: 100%;
        }
      }
    }
    &__content{
      padding-top: 31px;
      padding-left: 26px;
      width: 980px;
      height: 199px;
      background: #FFFFFF;
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25), 4px 4px 40px rgba(0, 0, 0, 0.08);
      border-radius: 5px;
      p:first-child{
        padding-left: 15px;
        font-family: Casper;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
        letter-spacing: -0.02em;
        color: #333333;
      }
      &-lists{
        margin-top: 8px;
        .list{
          display: flex;
          .line{
            max-width: 100px;
            margin-right: 8px;
            padding-top: 10px;
            img{
              width: 100%;
            }
          }
        }
      }
    }
  }
}

</style>
