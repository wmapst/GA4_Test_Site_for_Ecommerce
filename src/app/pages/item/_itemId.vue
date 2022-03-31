<template lang="pug">
div
  div.mx-auto
    div.m-2
      div.row.justify-content-start.mx-auto
        div.my-2.col-auto
          detailItemCard(:itemParams="itemParams")
</template>

<script>
import detailItemCard from "~/components/parts/detailItemCard.vue";

export default {
  components: {
    detailItemCard,
  },
  data() {
    return {
      itemParams: {},
    }
  },
  async asyncData({ $axios, params }) {
    const localUrl = process.env.BASE_URL_LOCAL;

    const resItemDetail = await $axios.get(localUrl + "/getItemDetail", { params:{ item_id: params.itemId } });

    return {
      itemParams: resItemDetail.data.data[0],
    };
  },
}
</script>
