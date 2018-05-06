<template lang="html">
  <transition name="fade">
    <div class="shy__loading-bar" v-show="isShow">
      <div class="shy__loading-bar-inner"
        :class="innerClasses"
        :style="styles"
      />
    </div>
  </transition>
</template>

<script>

const prefixCls = 'shy__loading-bar'

export default {

  props: {
    percent: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      default: 'success'
    },
    isShow: {
      type: Boolean,
      required: true
    },
    color: {
      type: String
    },
    failedColor: {
      type: String
    }
  },
  data () {
    return {}
  },
  computed: {
    styles () {
      let style = {
        width: `${this.percent}%`
      }
      if (this.status === 'success' && this.color && this.color !== 'success' && this.color !== 'error') {
        style.backgroundColor = this.color
      }

      if (this.status === 'error' && this.failedColor && this.failedColor !== 'success' && this.failedColor !== 'error') {
        style.backgroundColor = this.failedColor
      }

      return style
    },
    innerClasses () {
      return {
        [`${prefixCls}-inner-color-success`]: this.status === 'success',
        [`${prefixCls}-inner-color-error`]: this.status === 'error'
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .shy__loading-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 2px;
    z-index: 99999;
  }
  .shy__loading-bar-inner {
    transition: width .2s linear;
    height: 2px;
    width: 0%;
  }
  .shy__loading-bar-inner-color-success {
    background-color: #2d8cf0;
  }
  .shy__loading-bar-inner-color-error {
    background-color: #ed3f14;
  }
</style>
