<template lang="pug">
div 
  b-card.list-card(tag="div" style="width: 100%")
    div(v-if="itemData.item_image_path")
      b-img-lazy.mx-3(:src="itemData.item_image_path" :alt="itemData.item_name" thumbnail left width="210px")
      h3 {{ itemData.item_name }}
      b-card-text 単価： ¥{{ itemData.item_price }}
      b-card-text 数量： {{ itemData.item_quantity }}
      b-card-text 金額： ¥{{ itemData.item_price * itemData.item_quantity }}
      b-form(@submit="onSubmit")
        b-button(type="submit" variant="danger") 削除
</template>

<script>
export default {
  props: {
    itemData: {},
  },
  methods: {
    async onSubmit( event ) {
      event.preventDefault();

      window.dataLayer.push({
        event: "remove_from_cart",
          ecommerce: {
          currency: 'JPY',
          value: this.itemData.item_price * this.itemQuantity,
          items: [{
            item_id: this.itemData.item_id,
            item_name: this.itemData.item_name,
            item_brand: this.itemData.item_brand,
            item_category: this.itemData.item_category1,
            item_category2: this.itemData.item_category2,
            item_category3: this.itemData.item_category3,
            item_category4: this.itemData.item_category4,
            item_category5: this.itemData.item_category5,
            price: this.itemData.item_price,
            currency: 'JPY',
            quantity: this.itemQuantity,
          }]
        }
      });

      try{
          const localUrl = process.env.BASE_URL_LOCAL;
          const config = {headers: {"Content-Type": "application/json"}};
          const res = await this.$axios.get(localUrl + "/deleteItemCart", { params:{ item_id: this.itemData.item_id } });
          
          window.location.href = '/cart'
      }
      catch(error) {
        console.log(error);
      }
    }
  }  
};
</script>
