<template>
  <div class="faq w-full py-120 bg-grey">
    <div class="wrapper flex justify-between w-full lg-max:flex-col lg-max:items-center">
      <div class="title max-w-340 lg-max:mb-40 lg-max:max-w-full">
        <h1>Часто задаваемые вопросы</h1>
      </div>
      <div class="accordion max-w-750 lg-max:max-w-full">
        <div class="faq_item py-25">
          <div class="faq-title ">
            <p class="body-big-2">
              Я могу ездить на другой машине со своей страховкой!
            </p>
          </div>
          <div class="faq-desc">
            <p class="body-regular">
              Нет, так страховка не работает. Полис ОСАГО оформляется на
              транспортное средство, а не на водителя.
            </p>
          </div>
        </div>
        <div class="faq_item py-25">
          <div class="faq-title ">
            <p class="body-big-2">
              Что такое страховой случай?
            </p>
          </div>
          <div class="faq-desc">
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

}
</script>
<style lang="scss" scoped>
.faq_item {
    @apply border-grey5 border-t-1;
}
</style>
