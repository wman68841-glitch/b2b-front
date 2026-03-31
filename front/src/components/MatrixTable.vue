<template>
  <table class="matrix-table">
    <tr>
      <th>规格</th>
      <th>单价</th>
      <th>起订量</th>
      <th>采购数量</th>
      <th>小计</th>
    </tr>
    <tr v-for="s in detail.specList" :key="s">
      <td>{{ s }}</td>
      <td>¥ {{ price }}</td>
      <td>{{ detail.moq }}</td>
      <td><input v-model.number="qty[s]" type="number" min="0" @input="calc"></td>
      <td>¥ {{ ((qty[s] || 0) * price).toFixed(2) }}</td>
    </tr>
  </table>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps(['detail'])
const qty = ref({})
const price = computed(() => props.detail.basePrice || 0)
const calc = () => {}
</script>

<style scoped>
.matrix-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
td,th { padding: 12px; border: 1px solid #eee; text-align: left; }
</style>