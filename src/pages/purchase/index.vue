<template lang="pug">
div
  div 注文完了
  div {{ ecommerce }}
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
  async asyncData({ $axios, route }) {
    const localUrl = 'http://127.0.0.1/api';
    
    const resOrder = await $axios.get(localUrl + "/getOrder", { params:{ order_id: route.query.order_id } });
    const resOrderItem = await $axios.get(localUrl + "/getOrderItem", { params:{ order_id: route.query.order_id } });
    let ecommerce = {
      currency: "JPY",
      transaction_id: resOrder.data.data[0].order_id,
      value: resOrder.data.data[0].order_amount,
      shipping: resOrder.data.data[0].order_shipping_fee,
      tax: resOrder.data.data[0].order_tax_amount,
      items: []
    };

    for(const orderItem of resOrderItem.data.data){
      ecommerce.items.push({
        item_id: orderItem.order_item_id,
        item_name: orderItem.item_brand,
        price: orderItem.order_item_unit_price,
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
  head () {
    return {
      script:[
        {
            innerHTML: `
            dataLayer.push({
                event: "purchase",
                ecommerce: ${JSON.stringify(this.ecommerce)}
            });
        `,
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
    }
  },
}
</script>