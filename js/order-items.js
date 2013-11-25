$(function(){
	renderPizza();
	renderDrink(); 
	renderDessert(); 
}); //doc ready

function renderPizza() {
	var idx;
	var pizza;
	var template = $('.tempp');
	var clonedTemplate;
	var container = $('.pizza');

    for (idx = 0; idx < com.dawgpizza.menu.pizzas.length; ++idx) {
        pizza = com.dawgpizza.menu.pizzas[idx];
        
        clonedTemplate = template.clone();
        clonedTemplate.find('.name').html(pizza.name);
        if (pizza.vegetarian) {
        	clonedTemplate.find('.pic').attr({
	            src: "img/carrot.png", 
	            alt: 'vegetarian icon'
	        });	
        }
        clonedTemplate.find('.sm').html('<button class="btn btn-default add-to-cart" type="button" data-type="pizza" data-name="'
        	+ pizza.name+ '" data-size="Small" data-index=' + idx + ' data-price='+ pizza.prices[0] + '>Small for $' + pizza.prices[0] + '</button>'); 
        clonedTemplate.find('.md').html('<button class="btn btn-default add-to-cart" type="button" data-type="pizza" data-name="'
        	+ pizza.name+ '" data-size="Medium" data-index=' + idx + ' data-price='+ pizza.prices[1] + '>Medium for $' + pizza.prices[1] + '</button>');
        clonedTemplate.find('.lg').html('<button class="btn btn-default add-to-cart" type="button" data-type="pizza" data-name="'
        	+ pizza.name+ '" data-size="Large" data-index=' + idx + ' data-price='+ pizza.prices[2] + '>Large for $' + pizza.prices[2] + '</button>'); 
        clonedTemplate.removeClass('tempp');
        container.append(clonedTemplate);
    } //for each pizza
}

function renderDrink() {
	var idx; 
	var drink;
	var template = $('.tempd');
	var clonedTemplate;
	var container = $('.drink');
	for (idx = 0; idx < com.dawgpizza.menu.drinks.length; ++idx) {
	    drink = com.dawgpizza.menu.drinks[idx];

	    clonedTemplate = template.clone();
        clonedTemplate.find('.name').html(drink.name);
        clonedTemplate.find('.price').html('<button class="btn btn-default add-to-cart" type="button" data-type="drink" data-name="' 
        	+ drink.name + '" data-size="" data-index=' + idx + ' data-price=' + drink.price + '>Add for $' + drink.price + '</button>');
        
        clonedTemplate.removeClass('tempd');
        container.append(clonedTemplate);

	} //for each drink
}

function renderDessert() {
	var idx; 
	var dessert;
	var template = $('.tempds');
	var clonedTemplate;
	var container = $('.dessert');
	for (idx = 0; idx < com.dawgpizza.menu.desserts.length; ++idx) {
	    dessert = com.dawgpizza.menu.desserts[idx];

	    clonedTemplate = template.clone();
        clonedTemplate.find('.name').html(dessert.name);
        clonedTemplate.find('.price').html(('<button class="btn btn-default add-to-cart" type="button" data-type="dessert" data-name="' 
        	+ dessert.name + '" data-size="" data-index=' + idx + ' data-price=' + dessert.price +'>Add for $' + dessert.price + '</button>'));
        
        clonedTemplate.removeClass('tempds');
        container.append(clonedTemplate);

	} //for each dessert
}