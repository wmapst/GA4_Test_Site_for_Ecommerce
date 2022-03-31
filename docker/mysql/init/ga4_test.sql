# DROP SCHEMA IF EXISTS ga4_test;
# CREATE SCHEMA ga4_test;
USE ga4_test;

DROP TABLE IF EXISTS mst_item;
DROP TABLE IF EXISTS tbl_cart;
DROP TABLE IF EXISTS tbl_order;
DROP TABLE IF EXISTS tbl_order_item;

CREATE TABLE `mst_item` (
  `item_id` bigint(20) NOT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `item_brand` varchar(255) DEFAULT NULL,
  `item_category1` varchar(255) DEFAULT NULL,
  `item_category2` varchar(255) DEFAULT NULL,
  `item_category3` varchar(255) DEFAULT NULL,
  `item_category4` varchar(255) DEFAULT NULL,
  `item_category5` varchar(255) DEFAULT NULL,
  `item_price` int(8) DEFAULT NULL,
  `item_image_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tbl_cart` (
  `cart_item_id` bigint(20) NOT NULL,
  `cart_item_quantity` int(8) DEFAULT NULL,
  PRIMARY KEY (`cart_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tbl_order` (
  `order_id` varchar(255) NOT NULL,
  `order_shipping_fee` int(8) DEFAULT NULL,
  `order_tax_amount` int(8) DEFAULT NULL,
  `order_total_amount` int(8) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tbl_order_item` (
  `order_id` varchar(255) NOT NULL,
  `order_item_id` bigint(20) NOT NULL,
  `order_item_quantity` int(8) DEFAULT NULL,
  `order_item_unit_price` int(8) DEFAULT NULL,
  PRIMARY KEY (`order_id`,`order_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO mst_item(item_id, item_name, item_brand, item_category1, item_category2, item_category3, item_category4, item_category5, item_price, item_image_path)
VALUES
(0, 'とある本', 'とあるブランド', 'と', 'あ', 'る', 'ほ', 'ん', 1000, '/image/item/book.jpg'),
(1, '熊さんが作ったケーキ', 'ベアードパパ', 'べ', 'あ', 'ど', 'ぱ', 'ぱ', 1500, '/image/item/cake.jpg'),
(2, 'BTCで買ったピザ', 'ピザキャップ', 'ぴ', 'ざ', 'き', 'つ', 'ぷ', 3000, '/image/item/pizza.jpg'),
(3, '自在に曲がるスプーン', 'ミスターマジック', '自在', 'に', 'ま', 'が', 'る', 500, '/image/item/spoon.jpg')
;
