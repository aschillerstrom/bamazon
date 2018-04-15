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
    queryInventory = 'SELECT * FROM products';

    connection.query(queryInventory, function(err,data){
        if (err) throw err;

        console.log ("-------Current Inventory-------");
        console.log ("-------------------------------\n");

        var inventory = ' ';
        for (var i=0; i<data.length; i++){
            inventory = ' ';
            inventory += 'Item ID: '+ data[i].item_id + ' -- ';
            inventory += 'Product Name: ' + data[i].product_name + ' -- ';
            inventory += 'Proce:  ' + data[i].price + ' -- \n';

            console.log (inventory);

        }

        console.log ("-------------------------------\n");

        purchase();
    })

};

//get purchase from user

function purchase()

