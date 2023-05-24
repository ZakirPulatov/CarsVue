<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'Input',
  props: {
    modelValue: [String, Number]
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  background: none;
  border: 1px solid var(--color-text);
  color: var(--color-text);
  padding: 15px;
  width: 100%;
  border-radius: 5px;
  margin: 5px 0;
  outline: none;
}
</style>