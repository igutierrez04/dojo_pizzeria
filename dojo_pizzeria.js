function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var deepDish = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(deepDish)

var handTossed = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(handTossed);

var margheritaPizza = pizzaOven("thin crust", "tomatoe", ["mozzarella", "parmesan"], ["basil leaves", "balsamic glaze"]);
console.log(margheritaPizza);

var tacoPizza = pizzaOven("traditional", "refried bean spread", ["cheddar cheese"], ["ranch dressing", "tortilla chips", "romain lettuce", "tomatoes", "onions", "black olives", "hot sauce"]);
console.log(tacoPizza);