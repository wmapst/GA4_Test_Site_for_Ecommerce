// 商品一覧取得
exports.sqlItemListGet = function() {
  const strsql = 
  `
    select
    item_id,
    item_name,
    item_brand,
    item_price,
    item_image_path
    from ga4_test.mst_item
    ;
  `

  return strsql
}

// 商品詳細取得
exports.sqlItemDetailGet = function() {
  const strsql = 
  `
    select
    item_id,
    item_name,
    item_brand,
    item_category1,
    item_category2,
    item_category3,
    item_category4,
    item_category5,
    item_price,
    item_image_path
    from ga4_test.mst_item
    where item_id = ?
    ;
  `

  return strsql
}

// 商品買い物かご削除
exports.sqlItemCartDelete = function() {
  const strsql = 
  `
    delete 
    from ga4_test.tbl_cart
    where cart_item_id = ?
    ;
  `

  return strsql
}

// 商品買い物かご追加
exports.sqlItemCartAdd = function() {
  const strsql = 
  `
    replace into ga4_test.tbl_cart(cart_item_id, cart_item_quantity)
    values(?, ?)
    ;
  `

  return strsql
}

// 商品買い物かご取得
exports.sqlItemCartGet = function() {
  const strsql = 
  `
    select
    ca.cart_item_id as 'item_id',
    ca.cart_item_quantity as 'item_quantity',
    it.item_name,
    it.item_brand,
    it.item_category1,
    it.item_category2,
    it.item_category3,
    it.item_category4,
    it.item_category5,
    it.item_price,
    it.item_image_path
    from ga4_test.tbl_cart as ca
    inner join ga4_test.mst_item as it
    on ca.cart_item_id = it.item_id
    ;
  `

  return strsql
}

// 商品買い物かご削除
exports.sqlItemCartDelete = function() {
  const strsql = 
  `
    delete 
    from ga4_test.tbl_cart
    where cart_item_id = ?
    ;
  `

  return strsql
}
// ALL買い物かご削除
exports.sqlCartDelete = function() {
  const strsql = 
  `
    delete 
    from ga4_test.tbl_cart
    ;
  `

  return strsql
}

// 注文データ追加
exports.sqlOrderAdd = function() {
  const strsql = 
  `
    insert into ga4_test.tbl_order(order_id, order_shipping_fee, order_tax_amount, order_total_amount)
    values(?, ?, ?, ?)
    ;
  `

  return strsql
}

// 注文商品データ追加
exports.sqlOrderItemAdd = function() {
  const strsql = 
  `
    insert into ga4_test.tbl_order_item(order_id, order_item_id, order_item_quantity, order_item_unit_price)
    values(?, ?, ?, ?)
    ;
  `

  return strsql
}

// 注文データ取得
exports.sqlOrderGet = function() {
  const strsql = 
  `
    select
    order_id,
    order_shipping_fee,
    order_tax_amount,
    order_total_amount
    from ga4_test.tbl_order
    where order_id = ?
    ;
  `

  return strsql
}

// 注文商品データ取得
exports.sqlOrderItemGet = function() {
  const strsql = 
  `
    select
    od.order_id,
    od.order_item_id,
    od.order_item_quantity,
    od.order_item_unit_price,
    it.item_name,
    it.item_brand,
    it.item_category1,
    it.item_category2,
    it.item_category3,
    it.item_category4,
    it.item_category5
    from ga4_test.tbl_order_item as od
    inner join ga4_test.mst_item as it
    on od.order_item_id = it.item_id
    where od.order_id = ?
    ;
  `

  return strsql
}
