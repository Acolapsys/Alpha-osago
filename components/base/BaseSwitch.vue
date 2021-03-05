<template>
  <label class="switch">
    <input :id="id" type="checkbox" @click="onSwitch">
    <span class="slider" />
  </label>
</template>
<script>
export default {
  name: 'BaseSwitch',
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data: () => ({
    value: false
  }),
  methods: {
    onSwitch () {
      this.value = !this.value
    }
  }
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 38px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  border-radius: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #D3D8DF;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  border-radius: 50%;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #038661;
}

input:focus + .slider {
  box-shadow: 0 0 1px#038661;
}

input:checked + .slider:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}
</style>
