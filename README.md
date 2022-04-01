# GA4_Test_Site_for_Ecommerce
GA4テストサイト ecommerce向け  
※ページ遷移動作さえできればOKという要件の基、半日程度でザッと作ったので荒があるのはご容赦ください。  

実装済みページ  
 - 商品一覧 (src/app/pages/index.vue)
 - 商品詳細 (src/app/pages/item/index.vue)
 - 買い物カゴ (src/app/pages/cart/index.vue)
 - レジ (src/app/pages/regi/index.vue)
 - 購入完了 (src/app/pages/purchase/index.vue)
  
実装済みイベント
 - add_to_cart
 - view_item
 - select_item
 - purchase
 - remove_from_cart
 - begin_checkout
  
# 手順
1. 環境変数を用意する。
```
docker/.env
GTM_TRACKING_ID='GTM-XXXXXXX'
```

2. コンテナを起動する。
```
cd docker
docker compose up -d
```

3. http://127.0.0.1/ にアクセスする。

