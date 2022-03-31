<template lang="pug">
div 
  b-card.list-card(tag="div" style="width: 22rem")
    div(v-if="itemData.item_image_path")
      b-img-lazy.mb-3(:src="itemData.item_image_path" :alt="itemData.item_name" fluid center style="object-fit: cover; height: 22rem; width: 100%;")
    div(v-else)
      b-img-lazy.mb-3(src="/image/user/no-image-320.png" :alt="itemData.item_name" fluid center style="object-fit: cover; height: 22rem; width: 100%;")    
    h3 {{ itemData.item_name }}
    b-card-text 価格： ¥{{ itemData.item_price }}
    a(:href="itemData.item_id | itemLink")
      b-button(block variant="primary" @click="selectItem") 商品詳細ページ
</template>

<script>
export default {
  props: {
    itemData: {},
  },
  filters: {
    itemLink(itemId) {
      return "/item/" + itemId;
    },
  },
  methods: {
    selectItem() {
      window.dataLayer.push({
          event: "select_item",
          ecommerce: {
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
            }]
          }
        }
      )
    }
  },
};
</script>

<style lang="stylus" scoped>
@media screen and (min-width:768px) 
  .list-card
    width: 22rem


</style>