<template lang="pug">
div
  b-card.list-card(tag="div" style="width: 100%")
    h3 注文番号： {{ orderData.order_id }}
    b-card-text 送料： ¥{{ orderData.order_shipping_fee }}
    b-card-text 合計金額： ¥{{ orderData.order_total_amount }}
    b-card-text 消費税(内税)： ¥{{ orderData.order_tax_amount }}
    a(:href="orderData.order_id | orderLink")
      b-button(block variant="primary") 注文詳細ページ
</template>

<script>
export default {
  props: {
    orderData: {},
  },
  filters: {
    orderLink(orderId) {
      return "/order_detail_history/" + orderId;
    },
  },
};
</script>
