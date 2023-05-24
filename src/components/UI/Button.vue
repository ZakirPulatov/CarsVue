<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 15px;
  border: 1px solid var(--color-text);
  border-radius: 5px;
  color: var(--color-text);
  background: var(--color-background);
  transition: all 0.3s;
  cursor: pointer;
}

.button:hover {
  color: var(--color-background);
  background: var(--color-text);
}
</style>