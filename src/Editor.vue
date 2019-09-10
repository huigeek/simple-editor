<template>
  <div class="container">

    <div class="tool">
      <icon
        v-for="(item, idx) in buttons"
        :key="idx"
        :data="item"
        :class="{'iconActive': item.isActive}"
        @selectModeHandle="selectModeHandle">
      </icon>
    </div>

    <panel></panel>

  </div>
</template>

<script>
import Icon from './Icon'
import panel from './panel'
import config from './config'

export default {
  components: { Icon, panel },
  data () {
    return {
      buttons: [],
      activeData: {}
    }
  },
  created () {
    this.buttons = config.buttonList
  },
  mounted () {
  },
  methods: {
    selectModeHandle (data) {
      this.buttons.map((item) => {
        if (item.name === data.name) {
          item.isActive = true
          this.activeData = data
          document.execCommand(data.name, false, '')
        }
        else {
          item.isActive = false
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss';
</style>
