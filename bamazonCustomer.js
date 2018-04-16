//node reqs

var inquirer = require("inquirer");
var mysql = require("mysql");

//get database

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon'
});

//display inventory
function displayItems(){
    //console.log ("display"); //make sure in display function
    queryInventory = 'SELECT * FROM products';

    connection.query(queryInventory, function(err,data){
        if (err) throw err;

        console.log ("-------Current Inventory-------");
        console.log ("-------------------------------\n");

        var inventory = ' ';
        for (var i=0; i<data.length; i++){
            inventory = ' ';
            inventory += 'Item ID Number: '+ data[i].item_id + ' ** ';
            inventory += 'Product Name: ' + data[i].product_name + ' ** ';
            inventory += 'Price:  ' + data[i].price + ' ** \n';

            console.log (inventory);

        }

        console.log ("-------------------------------\n");

        purchase();
    })

}

//get purchase from user


function purchase() {

    //console.log("get user imput"); //make sure in purchase function

    inquirer.prompt([
        {
            type: 'input',
            name: 'item_id',
            message: 'Please enter the Item ID Number of the item you would like to purchase.',
            filter: Number
        },

        {
            type: 'input',
            name: 'quantity',
            message: "How many would you like to purchase?",
            filter: Number
        }
    ]).then (function(input) {
        //console.log (input.item_id + "  " + input.quantity); //see if we can see what the user wants to purchase

        var item = input.item_id;
        var quantity = input.quantity;

        var inventory = 'SELECT * FROM products WHERE ?';           //does the item exist and is there enough of item?

        connection.query(inventory, {item_id:item}, function(err, data) {
            if (err) throw err;

            if( data.length === 0){
                console.log("Please input a valid Item ID Number");
                displayItems();
            }
            else {
                var itemInfo = data[0];

                if (quantity <= itemInfo.stock_quantity) {
                    console.log ("Thank you for shopping with us!")

                    var updateInventory = 'UPDATE products SET stock_quantity= ' + (itemInfo.stock_quantity - quantity) + ' WHERE item_id = ' + item;
                    connection.query(updateInventory, function(err, data){
                        if (err) throw err;
                        console.log("Enjoy your purchase.  Your total is $" + (itemInfo.price*quantity) +".");

                        connection.end();
                    })
                }
                else{
                    console.log ("Sorry, we cannot fill your order at this time due to low inventory. We only have " + itemInfo.stock_quantity + " units of that item in stock.");
                    displayItems();
                }
            }
        })

    })

}

function run(){
    displayItems();
}

run();

