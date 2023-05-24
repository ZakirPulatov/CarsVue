<template>
  <tr>
    <th v-if="th" v-for="item in items">
      {{ item }}
    </th>

    <td v-else v-for="item in items">
      {{ item }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    th: {
      type: Boolean,
      default: false
    },

    items: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
  th, td {
    text-align: center;
    padding: 5px;
    border: 1px solid var(--color-text);
  }

  td {
    font-size: 14px;
  }
</style>