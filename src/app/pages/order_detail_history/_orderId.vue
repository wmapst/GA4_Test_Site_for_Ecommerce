<template lang="pug">
div
  h3 注文番号： {{ orderId }}
  div.my-2.col-auto(v-for="itemData in itemDatas")
    orderItemCard(:itemData="itemData")
</template>

<script>
import orderItemCard from '~/components/parts/orderItemCard'

export default {
  components: {
    orderItemCard,
  },
  data() {
    return {
      itemDatas: {},
      itemShow: false,
      order_id: '',
    };
  },
  async asyncData({ $axios, params }) {
    const localUrl = process.env.BASE_URL_LOCAL;
    const resItemList = await $axios.get(localUrl + '/getOrderItem', { params:{ order_id: params.orderId } });
    let itemShow = false;

    if(resItemList.data.data.length > 0 ){
        itemShow = true;
    }

    return {
      itemDatas: resItemList.data.data,
      itemShow: itemShow,
      orderId: params.orderId
    }
  }  
}
</script>
