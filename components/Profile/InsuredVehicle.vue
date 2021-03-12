<template>
  <div class="insuredVehicle">
    <div class="insuredVehicle__link">
      <img src="~/assets/images/icons/arrow-right-green-big.svg" alt="arrow">
    </div>
    <div class="insuredVehicle__vehicle">
      {{ vehicleData.vehicle }}
    </div>
    <div class="insuredVehicle__number">
      {{ vehicleData.number }}
    </div>
    <div class="insuredVehicle__drivers">
      {{ vehicleData.drivers }}
    </div>
    <div class="insuredVehicle__details">
      <div class="insuredVehicle__detailsInner">
        <div class="insuredVehicle__detailsBlock">
          <div class="insuredVehicle__detailsTitle">
            Страховка
          </div>
          <div class="insuredVehicle__detailsText" v-html="vehicleData.insurance" />
        </div>
        <div class="insuredVehicle__detailsBlock">
          <div class="insuredVehicle__detailsTitle">
            Технический осмотр
          </div>
          <div class="insuredVehicle__detailsText" v-html="vehicleData.inspection" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InsuredVehicle',
  props: {
    vehicleData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.insuredVehicle {
    position: relative;
    padding: 28px 53px 31px 43px;
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25), 4px 4px 40px rgba(0, 0, 0, 0.08);
    &__link {
        position: absolute;
        top: 26px;
        right: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
        background-color: rgba(3, 134, 97, 0.06);
        border-radius: 6px;
        cursor: pointer;
    }
    &__vehicle {
        margin-bottom: 8px;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: -0.02em;
        color: #333333;
    }
    &__number {
        margin-bottom: 6px;
        font-size: 18px;
        letter-spacing: -0.02em;
        color: #828282;
    }
    &__drivers {
        letter-spacing: -0.01em;
        color: #BDBDBD;
    }
    &__details {
        margin-top: 10px;
        padding-top: 16px;
        border-top: 1px solid #F2F2F2;
    }
    &__detailsInner {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    &__detailsBlock {
        max-width: 50%;
        &:first-child {
            margin-right: 30px;
        }
    }
    &__detailsTitle {
        margin-bottom: 5px;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1px;
        color: #BDBDBD;
    }
    &__detailsText {
        line-height: 23px;
        letter-spacing: -0.01em;
        color: #333333;
    }
}
@media (max-width: 1023px) {
    .insuredVehicle {
        &__detailsInner {
          flex-direction: column;
        }
        &__detailsBlock {
          max-width: 100%;
          &:first-child {
            margin-right: 0;
            margin-bottom: 16px;
          }
        }
    }
}
@media (max-width: 1023px) {
    .insuredVehicle {
        padding: 15px 20px 18px;
        &__link {
            top: 15px;
            width: 30px;
            height: 30px;
        }
        &__vehicle {
            margin-bottom: 0;
            font-size: 18px;
        }
        &__number {
            margin-bottom: 0;
            font-size: 16px;
        }
        &__details {
            display: none;
        }
    }
}
</style>
