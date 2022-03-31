<template lang="pug">
b-card(tag="div" style="max-width: 1000px")
  b-row
    b-col(md="6")
      b-img-lazy.mb-3(:src="itemParams.item_image_path" :alt="itemParams.item_name" fluid center)
    b-col(md="6")
      h3 {{ itemParams.item_brand }} / {{ itemParams.item_name }}
      b-card-text 価格： ¥{{ itemParams.item_price }}
      b-card-text 分類1：{{ itemParams.item_category1 }}
      b-card-text 分類2：{{ itemParams.item_category2 }}
      b-card-text 分類3：{{ itemParams.item_category3 }}
      b-card-text 分類4：{{ itemParams.item_category4 }}
      b-card-text 分類5：{{ itemParams.item_category5 }}
      b-form(@submit="onSubmit")
        b-card-text 個数：
            b-form-input(type="number" v-model="itemQuantity")
        b-button(type="submit" variant="primary") カゴに入れる
</template>

<script>
export default {
  props: {
    itemParams: {},
  },
  data() {
    return {
      itemQuantity: 1,
    }
  },
  methods: {
    async onSubmit( event ) {
      event.preventDefault();

      try{
          const localUrl = process.env.BASE_URL_LOCAL;

          const config = {headers: {"Content-Type": "application/json"}};
          const res = await this.$axios.post(localUrl + "/postItemCart", {
            item_id: this.itemParams.item_id,
            item_quantity: this.itemQuantity
          }, config);

          window.location.href = '/cart';
      }
      catch(error) {
        console.log(error);
      }
    }
  }  
};
</script>

