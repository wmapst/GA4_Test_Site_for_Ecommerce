<template lang="pug">
div
  b-card.my-2.list-card(tag="div" style="width: 100%") 
    b-card-text ページビュー → event: "view_item", ecommerce: {{ ecommerce }}
  div 注文完了しました。
</template>

<script>
export default {
  data () {
    return {
      ecommerce: {},
      orderDatas: {},
      orderItemDatas: {}
    }
  },
  mounted () {
    window.dataLayer.push({
      event: "purchase",
      ecommerce: this.ecommerce
    });
  },
  async asyncData({ $axios, route }) {
    const localUrl = process.env.BASE_URL_LOCAL;
    
    const resOrder = await $axios.get(localUrl + "/getOrder", { params:{ order_id: route.query.order_id } });
    const resOrderItem = await $axios.get(localUrl + "/getOrderItem", { params:{ order_id: route.query.order_id } });
    let ecommerce = {
      currency: "JPY",
      transaction_id: resOrder.data.data[0].order_id,
      value: resOrder.data.data[0].order_total_amount,
      shipping: resOrder.data.data[0].order_shipping_fee,
      tax: resOrder.data.data[0].order_tax_amount,
      items: []
    };

    for(const orderItem of resOrderItem.data.data){
      ecommerce.items.push({
        item_id: orderItem.order_item_id,
        item_name: orderItem.item_brand,
        price: orderItem.order_item_unit_price,
        currency: "JPY",
        quantity: orderItem.order_item_quantity,
        item_category: orderItem.item_category1,
        item_category2: orderItem.item_category2,
        item_category3: orderItem.item_category3,
        item_category4: orderItem.item_category4,
        item_category5: orderItem.item_category5,
      });
    }

    return {
      orderDatas: resOrder.data.data,
      orderItemDatas: resOrderItem.data.data,
      ecommerce: ecommerce,
    };
  },
}
</script>