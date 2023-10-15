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

var crustTypes = [
    "traditional",
    "thin crust",
    "deep dish",
    "hand tossed",
    "cauliflower"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce"
];

var cheeses = [
    "cheedar",
    "mozzarella",
    "feta",
    "pepper jack",
    "burrata",
    "goat cheese"
];

var toppings = [
    "tomato",
    "onions",
    "black olives",
    "basil",
    "chicken",
    "ham",
    "pineapple",
    "mushrooms",
    "pepperoni",
];

function randomRange(max, min){
    return Math.floor(Math.random() * max - min) + min;
}

function pickRandom(arr){
    var pick = Math.floor(arr.length * Math.random());
    return arr[pick];
}

function randomPizza(){
    pizza = {};
    pizza.crustType = pickRandom(crustTypes);
    pizza.sauceType = pickRandom(sauceTypes);
    pizza.cheese = [];
    pizza.toppings = [];
    // for loop to pick a range of different cheeses
    for(var i=0; i<randomRange(5,1); i++){
        pizza.cheese.push(pickRandom(cheeses));
    }
    // for loop to pick a range of different toppings
    for(var i=0; i<randomRange(5,0); i++){
        pizza.toppings.push(pickRandom(toppings));
    }
    return pizza;
}

var randomPizza = randomPizza();
console.log(randomPizza);