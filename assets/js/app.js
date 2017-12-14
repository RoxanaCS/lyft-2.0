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
    }, 1000);
  });
  $('#btn-singup').click(function(){
    $('.first-screen').addClass('hidden');
    $('.formulario').removeClass('hidden');
  });
  //banderitas
  $("#demo").intlTelInput();
  //cambiar el boton de color
  $('#demo').keydown(function(){
    var inputCont = $("#demo").val().length;
    if(inputCont==9){
      $('.btn-color').addClass('btn-color2');
    }
    else{
      $('.boton').removeClass('btn-color2');
    }
  });
  //al hacer click al boton que se muestre un alert
  $('.boton').click(function(){
    if ($(this).hasClass('btn-color2')){
    //alert('Tu código:LAB-' + code());
      if(confirm('Tu código:LAB-' + code())){
        $('.formulario').addClass('hidden');
        $('.codigo').removeClass('hidden');
      }
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
  //funcion para cambiar validar codigo2
  $('#codigo-number').keydown(function(){
    var inputCont = $("#codigo-number").val().length;
    //cambiar el boton de color
    if(inputCont==2){
      $('.btn-codigo').addClass('btn-codigo2');
    }
    else{
      $('.btn-codigo').removeClass('btn-codigo2');
    }
  })
  //se genera un nuevo codigo si el usuario hace click en resend
  $('.btn-resend').click(function(){
    alert('Tu código:LAB-' + code());
  })
  //pasar a la pantalla del formulario
  $('.btn-codigo').click(function(){
    if ($(this).hasClass('btn-codigo2')){
      $('.codigo').addClass('hidden');
      $('.formulario2').removeClass('hidden');
    }
  })
  //cambiar el color del botón
  $('input[type=checkbox]').click(function(){
    if($(this).is(':checked')){
      $('.btn-form').addClass('btn-form2');
    }
    else{
      $('.btn-form').removeClass('btn-form2');
    }
  })
  //pasar a la última pantalla
  $('.btn-form').click(function(){
    if ($(this).hasClass('btn-form2')){
    $('.formulario2').addClass('hidden');
    $('.approved').removeClass('hidden');
   }
  })
  //volver a la vista anterior con las flechitas
  $('#section1').click(function(){
      $('.formulario').addClass('hidden');
      $('.first-screen').removeClass('hidden');
  })
  $('#section2').click(function(){
      $('.formulario').removeClass('hidden');
      $('.codigo').addClass('hidden');
  })
  $('#section3').click(function(){
      $('.codigo').removeClass('hidden');
      $('.formulario2').addClass('hidden');
  })
})
