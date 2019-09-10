<template>
  <e-icon :name="data.icon" @click="clickHandle" @mousedown="preventHandle($event)"></e-icon>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    preventHandle (ev) {
      ev.preventDefault()
    },
    clickHandle (ev) {
      this.$emit('selectModeHandle', this.data)
    }
  }
}
</script>
