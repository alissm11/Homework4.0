//document ready function
$(function(){

    //create a cart model as a simple object with
    //the properties we eventually need to post to
    //the server
    var cart = {
        name: null,
        address1: null,
        zip: null,
        phone: null,
        items: [] //empty array
    }; //cart data

    //click event handler for all buttons with the
    //style class 'add-to-cart'
    $('.add-to-cart').click(function(){
        //use the attributes on the button to construct
        //a new cart item object that we can add to the
        //cart's items array
        
        console.log(this); 
        var newCartItem = {
            type: this.getAttribute('data-type'),
            name: this.getAttribute('data-name'),
            size: this.getAttribute('data-size'),
            price: this.getAttribute('data-price')
        };

        //push the new item on to the items array
        cart.items.push(newCartItem);

        //render the cart's contents to the element
        //we're using to contain the cart information
        //note that you would need a <div> or some
        //other grouping element on the page that has a
        //style class of 'cart-container'
        renderCart(cart, $('.cart-items-container'));
        $('.remove-item').click(function(){
            var idxToRemove = this.getAttribute('data-index');
            cart.items.splice(idxToRemove, 1);
            renderCart(cart, $('.cart-items-container'));
        });
        
    });

    $('.place-order').click(function(){
        
        //TODO: validate the cart to make sure all the required
        //properties have been filled out, and that the 
        //total order is greater than $20 (see homework 
        //instructions)

        var subtotal; 
        var tax; 
        var grandTotal; 
        var totalPrice = 0;
        for (idx = 0; idx < cart.items.length; ++idx) {
            totalPrice = parseInt(totalPrice) + parseInt(cart.items[idx].price);
        }
        
        var tax = parseInt(totalPrice * .095); 
        tax = tax.toFixed(2);
        var allTotal = parseInt(totalPrice + tax); 
        allTotal = allTotal.toFixed(2); 

        if (allTotal > 20) {
            postCart(cart, $('.cart-form'));    
        } else {
            alert("Must purchase at least $20 for delivery.");
        }
        //postCart(cart, $('.cart-form'));

    });

}); //doc ready

// renderCart()
// renders the current cart information to the screen
// parameters are:
//  - cart (object) reference to the cart model
//  - container (jQuery object) reference to the container <div>
//
function renderCart(cart, container) {
    var idx, item;
    var template = $('.cart-item-template');
    var clonedTemplate;

    //empty the container of whatever is there currently
    container.empty();

    //for each item in the cart...
    for (idx = 0; idx < cart.items.length; ++idx) {
        item = cart.items[idx];

        //TODO: code to render the cart item
        clonedTemplate = template.clone();
        if (item.type == 'pizza') {
            clonedTemplate.find('.title').html(item.name + " (" + item.size + ")");     
        } else {
            clonedTemplate.find('.title').html(item.name); 
        }
        clonedTemplate.find('.price').html(item.price);
        clonedTemplate.removeClass('cart-item-template');
        container.append(clonedTemplate);
    } //for each cart item

    //TODO: code to render sub-total price of the cart
    //the tax amount (see instructions), 
    //and the grand total
    var subtotal = $('.subtotal'); 
    var tax = $('.tax'); 
    var grandTotal = $('.grand-total'); 
    var totalPrice = 0;
    for (idx = 0; idx < cart.items.length; ++idx) {
        totalPrice = parseInt(totalPrice) + parseInt(cart.items[idx].price);
    }
    subtotal.html(totalPrice);
    var taxTotal = totalPrice * .095; 
    tax.html(taxTotal.toFixed(2));
    var allTotal = totalPrice + taxTotal; 
    grandTotal.html(allTotal.toFixed(2));  

} //renderCart()

// postCart()
// posts the cart model to the server using
// the supplied HTML form
// parameters are:
//  - cart (object) reference to the cart model
//  - cartForm (jQuery object) reference to the HTML form
//
function postCart(cart, cartForm) {
    //find the input in the form that has the name of 'cart'    
    //and set it's value to a JSON representation of the cart model
    cartForm.find('input[name="cart"]').val(JSON.stringify(cart));

    //submit the form--this will navigate to an order confirmation page
    cartForm.submit();

} //postCart()