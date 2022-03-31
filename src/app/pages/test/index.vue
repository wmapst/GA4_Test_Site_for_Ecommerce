<template lang="pug">
div
  div
  b-button(onclick="onProductClick()") イベントテスト
  b-button(@click="clickTest") イベントテスト

</template>

<script>
export default {
  data () {
    return {
      ecommerce: {},
      orderDatas: {},
      orderItemDatas: {}
    }
  }, 
  methods: {
    clickTest() {
      window.dataLayer.push(
        {
          event: "select_item",
          ecommerce: {
            items: [{
              item_id: 'SKU_12345',
              item_name: 'jeggings',
            }]
          }
        }
      )
    }
  },
}
</script>