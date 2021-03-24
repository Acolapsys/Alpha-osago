<template>
  <div class="baseModal" :class="{ 'baseModal_short': short }">
    <div class="baseModal__wrapper" @click.self="closeModal">
      <div class="baseModal__box">
          <div class="baseModal__close" @click="closeModal">
              <img src="~/assets/images/icons/close-white.svg" alt="close" />
              <img src="~/assets/images/icons/close-gray.svg" alt="close" />
              <img src="~/assets/images/icons/close-black-small.svg" alt="close" />
          </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
      short: {
          type: Boolean,
          default: false
      }
  },
  methods: {
    closeModal(args) {
        document.body.removeAttribute('style')
        args ? this.$emit('closeModal', args) : this.$emit('closeModal')
    }
  },
  mounted() {
    document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + "px"
	document.body.style.overflow = 'hidden'
  },
  beforeDestroy() {
    this.closeModal()
  }
}
</script>

<style lang="scss" scoped>
.baseModal {
    $root: &;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.2);
    overflow: auto;
    &_short {
        #{$root}__box {
            width: 558px;
        }
    }
    &__wrapper {
        min-height: 100vh;
        padding-top: 160px;
        padding-bottom: 50px;
    }
    &__box {
        position: relative;
        width: 752px;
        margin: 0 auto;
        padding: 76px 60px 89px;
        background-color: #fff;
    }
    &__close {
        position: absolute;
        top: -68px;
        right: -68px;
        width: max-content;
        height: max-content;
        cursor: pointer;
        img {
            display: none;
            &:nth-child(1) {
                display: block;
            }
        }
    }
}
@media (max-width: 1023px) {
    .baseModal {
        $root: &;
        &_short {
            #{$root}__box {
                width: 526px;
            }
        }
        &__box {
            width: 708px;
        }
        &__close {
            top: 34px;
            right: 34px;
            img {
                &:nth-child(1) {
                    display: none;
                }
                &:nth-child(2) {
                    display: block;
                }
            }
        }
    }
}
@media (max-width: 767px) {
    .baseModal {
        $root: &;
        &_short {
            #{$root}__box {
                width: 95%;
            }
        }
        &__wrapper {
            padding-top: 50px;
        }
        &__box {
            width: 95%;
            padding: 47px 35px 67px;
            border-radius: 6px;
        }
        &__close {
            top: 8px;
            right: 12px;
            img {
                &:nth-child(2) {
                    display: none;
                }
                &:nth-child(3) {
                    display: block;
                }
            }
        }
    }
}
</style>
