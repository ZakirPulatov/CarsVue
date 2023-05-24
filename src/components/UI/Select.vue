<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option value="">Не выбрано</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>


<script>
export default {
  name: 'Select',
  props: {
    modelValue: {
      type: String
    },

    options: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>


<style>
.select {
  background: var(--color-background);
  border: 1px solid var(--vt-c-white);
  border-radius: 5px;
  padding: 10px;
  color: var(--vt-c-white);
  cursor: pointer;
}
</style>