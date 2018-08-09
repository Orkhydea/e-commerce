$(document).ready(function () {
    //   $("#buscar-productos").click(function (event) {
    console.log("Entro");
    // var hogar = $("#poke-text").val();
    ajaxHogar();
    //   });
});

var showHogar = function (hogares) {
    var name = "";
    var imagen = "";
    var precio = "";


    hogares.results.forEach(function (hogar) {
        console.log(hogar);
        name = hogar.title;
        imagen = hogar.thumbnail;
        precio = hogar.price;
        $("#elementos").append(armarTemplate(name, imagen, precio))
    })
}

var armarTemplate = function (name, imagen, precio) {
    var t = "<div class='card' style='width: 15rem;'><img class='card-img-top' src='" + imagen + "alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + name + "</h5><p class='card-text'><i class='fas fa-dollar-sign'></i> " + precio + "</p><a href='#' class='btn btn-primary'>Comprar</a></div></div>";
    return t;
}

var ajaxHogar = function () {
    $.ajax({
        url: `https://api.mercadolibre.com/sites/MLM/search?category=MLM1574`,
        type: 'GET',
        datatype: 'json',
        //   data: {
        //       q : hogar,
        //   }
    })
        .done(function (response) {
            console.log(response);
            showHogar(response);
        })
        .fail(function (xhr) {
            console.log("error");
        });
}
/* incorporando funcion de pago con paypal*/

paypal.Button.render({
    // Configure environment
    env: 'sandbox',
    client: {
      sandbox: 'demo_sandbox_client_id',
      production: 'demo_production_client_id'
    },
    // Customize button (optional)
    locale: 'en_US',
    style: {
      size: 'small',
      color: 'gold',
      shape: 'pill',
    },
    // Set up a payment
    payment: function (data, actions) {
      return actions.payment.create({
        transactions: [{
          amount: {
            total: '0.01',
            currency: 'MX'
          }
        }]
      });
    },
    // Execute the payment
    onAuthorize: function (data, actions) {
      return actions.payment.execute()
        .then(function () {
          // Show a confirmation message to the buyer
          window.alert('Thank you for your purchase!');
        });
    }
  }, '#paypal-button');