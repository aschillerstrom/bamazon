CREATE SCHEMA bamazon;

CREATE TABLE `products` (
  `item_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `department_name` varchar(100) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `stock_quantity` int(10) NOT NULL,
  PRIMARY KEY (`item_id`)
) 

INSERT INTO `products` (`product_name`, `department_name`, `price`, `stock_quantity`)
    VALUES  ("bluetooth headphones", "electonics", 19.47, 120),
            ("chew toy", "pets", 10.87, 345),
            ("pawbo camera", "pets", 159.00, 2345),
            ("liquid chalk markers", "office", 10.99, 987),
            ("polarized sunglasses", "sports", 15.98, 1364),
            ("basketball", "sports", 9.87, 9482),
            ("zesty paws chews", "pets", 19.75, 24875),
            ("headband", "sports", 5.35, 836),
            ("lightning cables", "electronics", 11.24, 87648),
            ("scissors", "office", 2.21, 9487);