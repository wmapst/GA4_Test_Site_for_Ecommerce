<template lang="pug">
div 
  b-card.list-card(tag="div" style="width: 100%")
    div(v-if="itemData.item_image_path")
      b-img-lazy.mx-3(:src="itemData.item_image_path" :alt="itemData.item_name" thumbnail left width="210px")
      h3 {{ itemData.item_brand }} / {{ itemData.item_name }}
      b-card-text 単価： ¥{{ itemData.order_item_unit_price }}
      b-card-text 数量： {{ itemData.order_item_quantity }}
      b-card-text 金額： ¥{{ itemData.order_item_unit_price * itemData.order_item_quantity }}
</template>

<script>
export default {
  props: {
    itemData: {},
  },
};
</script>
