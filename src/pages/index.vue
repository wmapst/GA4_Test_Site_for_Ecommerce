<template lang="pug">
div
  div.row.justify-content-start.mx-auto
    div.my-2.col-auto(v-for="itemData in itemDatas")
      listItemCard(:itemData="itemData")
</template>

<script>
import listItemCard from '~/components/parts/listItemCard'

export default {
  components: {
    listItemCard,
  },
  data() {
    return {
      itemDatas: {},
    };
  },
  async asyncData({ $axios }) {
    const localUrl = 'http://127.0.0.1/api';

    const resItemList = await $axios.get(localUrl + '/getItemList');

    return {
      itemDatas: resItemList.data.data,
    }

  }
  
}
</script>
