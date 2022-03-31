# GA4_Test_Site_for_Ecommerce
GA4テスト用ダミーECサイト  
※ページ遷移動作さえできればOKという要件の基、半日程度でザッと作ったので荒があるのはご容赦ください。  

実装済みページ  
 - 商品一覧 (src/app/pages/index.vue)
 - 商品詳細 (src/app/pages/item/index.vue)
 - 買い物カゴ (src/app/pages/cart/index.vue)
 - レジ (src/app/pages/regi/index.vue)
 - 購入完了 (src/app/pages/purchase/index.vue)
  
購入完了ページでは、コンバージョントラッキング用のデータ(dataLayer.push)を吐き出しています。  
  
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

