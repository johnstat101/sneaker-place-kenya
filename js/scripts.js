//Constructor for user inputs
function userInputs(name, prices){
    this.name = name;
    this.prices = prices;
}

userInputs.prototype.userTotal = function(){
    return this.size + this.toppings + this.crust
}

// define prices
function sizePrize(){
    this.small = 400;
    this.medium = 500;
    this.large = 600;
}
function crustPrize(){
    this.crispy = 50;
    this.stuffed = 80;
    this.glutenFree = 100;
}
function toppingsPrize(){
    this.pepperoni = 80;
    this.mushrooms = 60;
    this.onions = 50;
    this.extraCheese = 45;
}



// user logic
$(document).ready(function(){
    $("#btnAdd").click(function(event){
        event.preventDefault();
//user input
        var name = $("#userName").val();
        var size = $("#size").val();
        var crust = $("#crust").val();
        var toppings = $("#toppings").val();

        var newUser = new userInputs(name, [sizePrize.size, crustPrize.crust, toppingsPrize.toppings])
        console.log(newUser);

    })

})