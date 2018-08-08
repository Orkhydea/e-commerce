$(document).ready(function () {
    //   $("#buscar-productos").click(function (event) {
    console.log("Entro");
    // var hogar = $("#poke-text").val();
    ajaxHogar();
    //   });
});

var showHogar = function(hogares) {
    var name = "";
    var imagen = "";
  

  hogares.results.forEach(function (hogar) {
      console.log(hogar); 
      name=hogar.title;
      imagen=hogar.thumbnail;
      $("#elementos").append(armarTemplate(name,imagen))
  })
}

var armarTemplate = function (name, imagen) {
  var t = "<div class='elemento'><p>" + name + "</p><img src='" + imagen + "' width='150' heigth='150' /></div>";
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
