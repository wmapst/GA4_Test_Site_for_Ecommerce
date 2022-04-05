<template lang="pug">
div 
  b-card.list-card(tag="div" style="width: 100%")
    b-card-text 送料： ¥{{ shippingFee }}
    b-card-text 合計金額： ¥{{ totalAmount }}
    b-card-text 消費税(内税)： ¥{{ totalAmount * taxRate }}
    b-form(@submit="onSubmit")
      b-button(type="submit" variant="primary") レジに進む

</template>

<script>
export default {
  props: {
    itemDatas: {},
  },
  data() {
    return {
      totalAmount: 0,
      shippingFee: 300,
      taxAmount: 0,
      taxRate: 0.1,
    }
  },
  mounted () {
    this.totalAmount = 0;
    this.shippingFee = 300;

    for(const itemData of this.itemDatas) {
      this.totalAmount += itemData.item_price * itemData.item_quantity;
    }

    this.totalAmount = this.totalAmount + this.shippingFee;
    this.taxAmount = this.totalAmount * this.taxRate;
  },
  methods: {
    async onSubmit( event ) {
      event.preventDefault();
      window.location.href = '/regi';
    }
  }    
};
</script>
