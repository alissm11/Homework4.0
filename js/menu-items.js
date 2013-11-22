

$(function(){
	renderPizza();
	renderDrink(); 
	renderDessert(); 
});

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
        clonedTemplate.find('.description').html(pizza.description);
        clonedTemplate.find('.sm').html(pizza.prices[0]); 
        clonedTemplate.find('.md').html(pizza.prices[1]);
        clonedTemplate.find('.lg').html(pizza.prices[2]); 
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
        clonedTemplate.find('.price').html(drink.price);
        
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
        clonedTemplate.find('.price').html(dessert.price);
        
        clonedTemplate.removeClass('tempds');
        container.append(clonedTemplate);

	} //for each dessert
}