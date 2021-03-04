<template>
  <div class="forLogged">
    <div v-for="item in list" :key="item.id" class="forLogged__item">
      <div class="forLogged__title">
        {{ item.title }}
      </div>
      <div class="forLogged__subtitle">
        {{ item.subtitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.forLogged {
    display: flex;
    padding-bottom: 16px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 5px;
        height: 10px;
        background-color: #F6F6F6;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: #333;
        border-radius: 4px;
    }
    &__item {
        flex-shrink: 0;
        width: 241px;
        margin-right: 20px;
        padding: 15px 20px 25px;
        font-weight: bold;
        background: #F6F6F6;
        border-radius: 5px;
        box-sizing: border-box;
        cursor: pointer;
        transition: 0.3s;
        &_active,
        &:hover {
            background: #EBF7F3;
        }
    }
    &__title {
        font-size: 18px;
        color: #333;
    }
    &__subtitle {
        margin-top: 7px;
        color: #828282;
    }
}
</style>
