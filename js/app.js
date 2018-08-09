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


    hogares.results.forEach(function (hogar) {
        console.log(hogar);
        name = hogar.title;
        imagen = hogar.thumbnail;
        precio = hogar.price;
        $("#elementos").append(armarTemplate(name, imagen))
    })
}

var armarTemplate = function (name, imagen, price) {
    var t = "<div class='card' style='width: 15rem;'><img class='card-img-top' src='" + imagen + "alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + name + "</h5><p class='card-text'><i class='fas fa-dollar-sign'></i> " + precio + "</p><a href='#' class='btn btn-primary'>Go somewhere</a></div></div>";
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
