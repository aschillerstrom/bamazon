# bamazon

In this activity, I created an Amazon-like storefront with the MySQL and NodeJS. The app will take in orders from customers and deplete stock from the store's inventory.

The app prompts users with two messages.

The first asks them the ID of the product they would like to buy.
The second message asks how many units of the product they would like to buy.
Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.

[Successful Purchase Image](https://postimg.cc/image/x10yx57ad/)




If not, the app logs a phrase regarding the lack of inventory and provides the amount of inventory available, and then prevents the order from going through.

[Unsuccessful Purchase Image](https://postimg.cc/image/h2s97107p/)

If the store does have enough of the product, it fulfills the customer's order and informs teh customer of the cost of their purchase.

The SQL database is updated to reflect the remaining quantity.
