$('.cart').append('<ul id="list"></ul>');
$('.cart').append('<h3 id="total"></h3>');
$('.cart').append('<h4 id="tax"></h4>');
$('.cart').append('<h1 id="subtotal"></h1>');


var total = 0;
var tax = 0;
var subtotal =0;

//$($price).each( function(){
  //total += $(this).val();});

const handleClick = function(event) {
  console.log( event.target.value );
  //var $parents = $(this).parents();
  var $price = $(this).parents().children()[3].innerHTML;
  var $name = $(this).parents().children()[2].innerHTML;

  //console.log($parents);
  $priceNum = parseFloat($price.substring(1));
  console.log($priceNum);
  console.log($name);
total +=$priceNum;
tax +=$priceNum*0.1;
subtotal = total + tax

  //var $shopcart = $('.cart');
  //$shopcart.append('<ul id="list"></ul>');
  //$shopcart.append($price);
  //console.log($shopcart);

  $('#list').append(`<li>${$name} - ${$price}</li>`)
  $('#total').text(`Subtotal = $${total}`)
  $('#tax').text(`Tax = $${tax}`)
  $('#subtotal').text(`Total = $${subtotal}`)

};


$( '.item_add' ).on( 'click', handleClick );
