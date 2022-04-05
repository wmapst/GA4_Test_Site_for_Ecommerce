<template lang="pug">
div
  div.row.justify-content-start.mx-auto
    div.my-2.col-auto(v-for="orderData in orderDatas")
      listOrderHistoryCard(:orderData="orderData")
</template>

<script>
import listOrderHistoryCard from '~/components/parts/listOrderHistoryCard'

export default {
  components: {
    listOrderHistoryCard,
  },
  data() {
    return {
      orderDatas: {},
    };
  },
  async asyncData({ $axios }) {
    const localUrl = process.env.BASE_URL_LOCAL;
    const resOrderList = await $axios.get(localUrl + '/getOrderList');

    return {
      orderDatas: resOrderList.data.data,
    }
  },
}
</script>
