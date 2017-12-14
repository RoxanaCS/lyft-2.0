$(document).ready(function(){
//función para la aparición de la primera pantalla
  $(function(){
   setTimeout(function() {
     $('#splash').fadeOut(500);
   }, 1000);
  });
  $(function(){
  setTimeout(function() {
    $('.first-screen').removeClass('hidden');
  }, 2000);
  });
  $('#btn-singup').click(function(){
    $('.first-screen').hide();
    $('.formulario').removeClass('hidden');

  });
  //banderitas
  $("#demo").intlTelInput();
  //rescatar el valor del Input y que sean sólo números
  $('#demo').keydown(function(){
    var inputVal = $("#demo").val();
    //console.log(inputCont);
    if(event.keyCode>=48 && event.keyCode<=57 || event.keyCode==8){
      console.log(event.keyCode);
      var inputCont = $("#demo").val().length;
    } else {
      alert("Ingrese un número válido");
    }
    //cambiar el boton de color
    if(inputCont==9){
      $('.btn-color').addClass('btn-color2');
    }
    else{
      $('.boton').removeClass('btn-color2');
    }
  })
  //al hacer click al boton que se muestre un alert
  $('.boton').click(function(){
    if ($(this).hasClass('btn-color2')){
      alert('Tu código:LAB-' + code());
    }
  })
  //funcion que arroja el codigo ramdom
  function code(){
    var code = "";
    var str = "123456789";
    for (var i = 0; i < 3; i++) {
    	code += str.charAt(Math.floor(Math.random() * str.length));
    }
    return code;
  }
})
