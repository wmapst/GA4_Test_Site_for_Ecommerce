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
      b-button(block variant="primary") 商品詳細ページ
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
};
</script>

<style lang="stylus" scoped>
@media screen and (min-width:768px) 
  .list-card
    width: 22rem


</style>