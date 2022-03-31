<template lang="pug">
div
  div(v-if="itemShow")
    div.my-2.col-auto(v-for="itemData in itemDatas")
      cartItemCard(:itemData="itemData")
    div.my-2.col-auto
      cartAmountCard(:itemDatas="itemDatas")
  div(v-else)
    div 買い物かごが空っぽです。
</template>

<script>
import cartItemCard from '~/components/parts/cartItemCard'
import cartAmountCard from '~/components/parts/cartAmountCard'

export default {
  components: {
    cartItemCard,
    cartAmountCard
  },
  data() {
    return {
      itemDatas: {},
      itemShow: false,
    };
  },
  async asyncData({ $axios }) {
    const localUrl = process.env.BASE_URL_LOCAL;
    const resItemList = await $axios.get(localUrl + '/getItemCartList');
    let itemShow = false;

    if(resItemList.data.data.length > 0 ){
        itemShow = true;
    }

    return {
      itemDatas: resItemList.data.data,
      itemShow: itemShow,
    }
  }  
}
</script>
