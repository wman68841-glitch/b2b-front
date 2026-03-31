<template>
  <div class="header">
    <div class="logo" @click="$router.push('/')">商搜协同</div>
    <div class="nav">
      <span @click="$router.push('/')">首页</span>
      <span @click="$router.push('/cart')">购物车</span>
      <span @click="$router.push('/rfq')">非标询价</span>
      <span @click="$router.push('/order')">对账结算</span>
    </div>
  </div>
</template>

<style scoped>
.header {
  background: #fff;
  padding: 16px 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #2c6eee;
}
.logo { font-size: 20px; font-weight: bold; color: #2c6eee; cursor: pointer; }
.nav { display: flex; gap: 24px; }
.nav span { cursor: pointer; }
</style>