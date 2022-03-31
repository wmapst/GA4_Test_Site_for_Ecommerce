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
      console.log('hoge');
      try{
          const localUrl = process.env.BASE_URL_LOCAL;
          console.log('hoge');
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
