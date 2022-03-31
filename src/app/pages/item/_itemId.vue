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
  mounted () {
    window.dataLayer.push({
      event: "view_item",
        ecommerce: {
        items: [{
          item_id: this.itemParams.item_id,
          item_name: this.itemParams.item_name,
          item_brand: this.itemParams.item_brand,
          item_category: this.itemParams.item_category1,
          item_category2: this.itemParams.item_category2,
          item_category3: this.itemParams.item_category3,
          item_category4: this.itemParams.item_category4,
          item_category5: this.itemParams.item_category5,
          price: this.itemParams.item_price,
          currency: 'JPY',
        }]
      }
    });
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
