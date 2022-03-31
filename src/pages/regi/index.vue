<template lang="pug">
div
  div(v-if="itemShow")
    div.my-2.col-auto
      regiAmountCard(:itemDatas="itemDatas" :orderId="orderId")
  div(v-else)
    div 買い物かごが空っぽです。
</template>

<script>
import regiAmountCard from '~/components/parts/regiAmountCard'

export default {
  components: {
    regiAmountCard
  },
  data() {
    return {
      itemDatas: {},
      orderId: '',
      itemShow: false,
    };
  },
  async asyncData({ $axios, $dateFns }) {
    const localUrl = 'http://127.0.0.1/api';
    const resItemList = await $axios.get(localUrl + '/getItemCartList');
    let itemShow = false;

    if(resItemList.data.data.length > 0 ){
        itemShow = true;
    }

    return {
      itemDatas: resItemList.data.data,
      orderId: 'Order_' + $dateFns.format(new Date(), 'yyyyMMddHHmmss'),
      itemShow: itemShow,
    }
  }
}
</script>