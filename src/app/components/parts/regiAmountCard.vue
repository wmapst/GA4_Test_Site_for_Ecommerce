<template lang="pug">
div 
  b-card.list-card(tag="div" style="width: 100%")
    b-card-title {{ orderId }}
    b-card-text 合計金額： ¥{{ totalAmount }}
    b-card-text 送料： ¥{{ shippingFee }}
    b-card-text 消費税(内税)： ¥{{ totalAmount * taxRate }}
    b-form(@submit="onSubmit")
      b-button(type="submit" variant="primary") 決済確定
</template>

<script>
export default {
  props: {
    itemDatas: {},
    orderId: '',
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
    this.taxAmount = this.totalAmount * this.taxRate;
  },
  methods: {
    async onSubmit( event ) {
      event.preventDefault();

      try{
          const localUrl = process.env.BASE_URL_LOCAL;
          
          const config = {headers: {"Content-Type": "application/json"}};

          const res_order = await this.$axios.post(localUrl + "/postOrder", {
            order_id: this.orderId,
            order_shipping_fee: this.shippingFee,
            order_tax_amount: this.taxAmount,
            order_total_amount: this.totalAmount,
          }, config);

          for(const itemData of this.itemDatas) {
            let res_order_item = await this.$axios.post(localUrl + "/postOrderItem", {
              order_id: this.orderId,
              order_item_id: itemData.item_id,
              order_item_quantity: itemData.item_quantity,
              order_item_unit_price: itemData.item_price,
            }, config);
          }

          const resCartDelete = await this.$axios.get(localUrl + "/deleteCart" );
          
          window.location.href = `/purchase?order_id=${this.orderId}`;
      }
      catch(error) {
        console.log(error);
      }
    }
  }    
};
</script>
