<template>
  <tr>
    <td v-for="item in items">
      <div v-if="!Array.isArray(item)">
        <div v-for="el in itemKeys">
          <strong>
            {{ `${itemHeaders[el]}: ` }}
          </strong>
          <span>
            {{ `${item[el]}` }}
          </span>
        </div>
      </div>

      <div v-else>
        
        <div v-for="car in item">
          <span v-for="el in arrayKeys">
            <strong>
              {{ `${arrayHeaders[el]}: ` }}
            </strong>
            <span>
              {{ `${car[el]} ` }}
            </span>
          </span>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TableRowWithUser',
  data() {
    return {
      itemKeys: [],
      arrayKeys: []
    }
  },
  props: {
    items: {
      type: Object,
      default: {}
    },

    itemHeaders: {
      type: Object,
      default: {}
    },

    arrayHeaders: {
      type: Object,
      default: {}
    }
  },

  mounted() {
    this.itemKeys = Object.keys(this.itemHeaders)
    this.arrayKeys = Object.keys(this.arrayHeaders)
  }
}
</script>

<style scoped>
td {
  text-align: center;
  padding: 5px;
  border: 1px solid var(--color-text);
  width: 50%;
}

td {
  font-size: 14px;
}
</style>