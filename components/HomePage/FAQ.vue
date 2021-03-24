<template>
  <div class="faq w-full py-120 bg-grey">
    <div class="wrapper flex justify-between w-full lg-max:flex-col lg-max:items-center">
      <div class="title max-w-340 lg-max:mb-40 lg-max:max-w-full">
        <h1>Часто задаваемые вопросы</h1>
      </div>
      <div class="accordion max-w-750 lg-max:max-w-full">
        <div class="faq_item py-25">
          <div class="faq-title flex">
            <p class="body-big-2">
              Я могу ездить на другой машине со своей страховкой!
            </p>
            <div v-if="!bottom_clicked" class="info_button" @click="more_info">
              <img src="../../assets/images/icons/arrow_bottom.png" alt="">
            </div>
            <div v-if="!top_clicked" class="info_button" @click="less_info">
              <img src="../../assets/images/icons/arrow_top.png" alt="">
            </div>
          </div>
          <div v-if="desc_info" class="faq-desc">
            <p class="body-regular">
              Нет, так страховка не работает. Полис ОСАГО оформляется на
              транспортное средство, а не на водителя.
            </p>
          </div>
        </div>
        <div class="faq_item py-25">
          <div class="faq-title flex">
            <p class="body-big-2">
              Что такое страховой случай?
            </p>
            <div v-if="!bottom_clicked2" class="info_button" @click="more_info2">
              <img src="../../assets/images/icons/arrow_bottom.png" alt="">
            </div>
            <div v-if="!top_clicked2" class="info_button" @click="less_info2">
              <img src="../../assets/images/icons/arrow_top.png" alt="">
            </div>
          </div>
          <div v-if="desc_info2" class="faq-desc">
            <p class="body-regular">
              Нет, так страховка не работает. Полис ОСАГО оформляется на
              транспортное средство, а не на водителя.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    top_clicked: true,
    bottom_clicked: false,
    desc_info: false,
    top_clicked2: true,
    bottom_clicked2: false,
    desc_info2: false
  }),
  methods: {
    more_info () {
      this.bottom_clicked = true
      this.top_clicked = false
      this.desc_info = true
    },
    less_info () {
      this.bottom_clicked = false
      this.top_clicked = true
      this.desc_info = false
    },
    more_info2 () {
      this.bottom_clicked2 = true
      this.top_clicked2 = false
      this.desc_info2 = true
    },
    less_info2 () {
      this.bottom_clicked2 = false
      this.top_clicked2 = true
      this.desc_info2 = false
    }
  }
}
</script>
<style lang="scss" scoped>
.faq_item {
    @apply border-grey5 border-t-1;
}
.body-big-2{
  width: 750px;
}
.faq-title{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.info_button{
  max-width: 100%;
  padding-top: 11.8px;
  cursor: pointer;
  img{
    width: 100%;
  }
}
</style>
