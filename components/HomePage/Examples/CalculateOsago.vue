<template>
  <div class="calculate-osago flex justify-between pt-42 pb-50 w-full">
    <div class="info">
      <h3 class="title mb-10">
        {{ example.title }}
      </h3>
      <p class="body-regular mb-33">
        {{ example.desc }}
      </p>
      <div class="calculator flex">
        <div class="col">
          <div class="first_row flex">
            <div class="part flex items-center">
              <p>База</p>
              <div class="logo"><img src="../../../assets/images/icons/question.png" alt=""></div>
            </div>
            <div class="part flex items-center">
              <p>кт</p>
              <div class="logo"><img src="../../../assets/images/icons/question.png" alt=""></div>
            </div>
            <div class="part flex items-center">
              <p>кмб</p>
              <div class="logo"><img src="../../../assets/images/icons/question.png" alt=""></div>
            </div>
            <div class="part flex items-center">
              <p>квс</p>
              <div class="logo"><img src="../../../assets/images/icons/question.png" alt=""></div>
            </div>
            <div class="part flex items-center">
              <p>ко</p>
              <div class="logo"><img src="../../../assets/images/icons/question.png" alt=""></div>
            </div>
            <div class="part flex items-center">
              <p>км</p>
              <div class="logo"><img src="../../../assets/images/icons/question.png" alt=""></div>
            </div>
            <div class="part flex items-center">
              <p>кс</p>
              <div class="logo"><img src="../../../assets/images/icons/question.png" alt=""></div>
            </div>
            <p class="part__price">стоимость</p>
          </div>
          <div class="second_row mt-9 flex items-center">
            <p class="second_row__price">3 750₽</p>
            <div class="x ml-13"><img src="../../../assets/images/icons/x.png" alt=""></div>
            <p class="second_row__cof ml-13">1.0</p>

            <div class="x ml-13"><img src="../../../assets/images/icons/x.png" alt=""></div>
            <p class="second_row__cof ml-13">1.0</p>
            <div class="x ml-13"><img src="../../../assets/images/icons/x.png" alt=""></div>
            <p class="second_row__cof ml-13">1.0</p>
            <div class="x ml-13"><img src="../../../assets/images/icons/x.png" alt=""></div>
            <p class="second_row__cof ml-13">1.0</p>
            <div class="x ml-13"><img src="../../../assets/images/icons/x.png" alt=""></div>
            <p class="second_row__cof ml-13">1.0</p>
            <div class="x ml-13"><img src="../../../assets/images/icons/x.png" alt=""></div>
            <p class="second_row__cof ml-13">1.0</p>
            <div class="x ml-13"><img src="../../../assets/images/icons/x.png" alt=""></div>
            <p class="second_row__cof ml-13">1.0</p>
            <div class="equal"><img src="../../../assets/images/icons/equal.png" alt=""></div>
            <p>4 749 ₽</p>
          </div>
        </div>
      </div>
    </div>
    <div class="image">
      <img :src="example.image" alt="статья">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    example: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.calculate-osago {
  border-bottom: 1px dashed #E0E0E0;

}
.info {
  max-width: 654px;
}
.image {
  max-width: 300px;
}
.part{
  margin-right: 24.3px;
  p{
    margin-right: 3.8px;
    font-family: Casper;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #BDBDBD;
  }
  .logo{
    max-width: 14.4px;
    img{
      width: 100%;
    }
  }
  &__price{
    margin-left: 29.53px;
    font-family: Casper;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #BDBDBD;
  }
}
.part:last-child{
  margin-right: 0px;
}
.second_row{
  &__price{
    font-family: Casper;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #333333;
  }
  &__cof{
    font-family: Casper;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #B3B3B3;
  }
  .equal{
    max-width: 9px;
    margin-left: 46.5px;
    img{
      width: 100%;
    }
  }
  p:last-child{
    margin-left: 32px;
    font-family: Casper;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.01em;
    color: #333333;
  }
}
</style>
