$(document).ready(function(){
   
    var apdata = {
        "opciones1":[
            {"opcion":"¿Me querés comentar qué pasó?"},
            {"opcion":"No hay que darle importancia. Y disculpame, pero trabajo en el mismo lugar que vos y no quiero meterme en estos temas y tener problemas."},
            {"opcion":"Entiendo que sea grave lo que te está pasando, pero deberías pensar qué actitudes tomaste vos para que la situación se diera de esta manera."},
            ],
        "opciones2":[
            {"opcion":"Esto te pasó porque nunca antes le habías mencionado que estas situaciones te molestan o te ponen mal."},
            {"opcion":"Te creo. Estás atravesando una situación compleja y es importante que busquemos las herramientas para que lo puedas resolver de la mejor manera posible. Si te parece y te sentís cómoda, te puedo acompañar."},
            {"opcion":"Si bien la situación es complicada, vos podes defenderte. Deberías decirle nuevamente que cambie de actitud."},
            ],
        "feedbacks1":[
            {"feedb":"Es una buena respuesta. Debemos intentar que se genere un espacio de escucha empática comenzando por preguntas como: ¿Qué te sucedió? ¿Cómo puedo ayudarte? ¿Dónde sucedió? ¿Hace cuánto estás pasando por esta situación?"},
            {"feedb":"No es la respuesta adecuada. Debemos evitar comentarios del tipo “Ya se le va a pasar” o “no te pongas mal porque si no es peor; te ven débil y va a volver a hacer comentarios sobre vos o tu trabajo”. Es importante no desestimar la relevancia de los hechos y cómo le afectan a la víctima."},
            {"feedb":"No es la respuesta adecuada. Debemos evitar preguntas o comentarios que culpabilicen a la víctima por la situación que está atravesando. No debemos preguntar “¿Hiciste algo para que reaccionara de esa manera? o ¿Pensaste en que podría estar mal y por eso reaccionó así?"},
            ],
        "feedbacks2":[
            {"feedb":"Esta no sería la respuesta adecuada porque las interpretaciones rápidas que cierran el sentido de lo sucedido no dan lugar a la reflexión y culpabilizan a la víctima"},
            {"feedb":"Esta es la respuesta más adecuada ya que es importante validar el relato de la persona que se acerca, respetar sus tiempos y comentarle que la podemos acompañar sin juzgarla."},
            {"feedb":"No es la respuesta adecuada. Deberíamos acompañar a la persona sin indicarle cómo tiene que actuar y sin hacer comentarios del estilo “Yo en tu lugar haría…” o “Vos tendrías que…”."},
            ],
    }
    
    var opc1 = "<div class='opciones0'>";
    var opc2 = "<div class='opciones1'>";


    for(var i in apdata.opciones1) {
    opc1 += "<button class='btn opcion op0 button"+i+"' value='"+i+"''>"+apdata.opciones1[i].opcion+"</button>";
    }
    
    $(".contenedor-situaciones0").html(opc1);
    
    for(var i in apdata.opciones2) {
    opc2 += "<button class='btn opcion op1 button"+i+"' value='"+i+"'>"+apdata.opciones2[i].opcion+"</button>";
    }

    $(".contenedor-situaciones1").html(opc2);
    
    $(".laura0").hide();
    $(".laura1").hide();

    $(".op0").click(function(e){
        
        var i = e.target.value;
        $(this).hide(500);
        $(this).siblings().prop('disabled', true);
        $(".laura0").show(500);
        $(".respuesta0").text(apdata.opciones1[i].opcion);
        $(".respuesta0").attr('value', i);
        
    });
    
    $('.borrar0').click(function(){
        
        var i = $('.respuesta0').attr('value');
    
        $(".laura0").hide(500);
        $('.op0.button'+i).show(500);
        $('.opciones0').children().prop('disabled', false);
        $('.ver0').prop('disabled', false);
        $('.feedback0').hide();
        $('.respuesta0').removeAttr('value');
    });
    
    $('.ver0').click(function(){
        var i = $('.respuesta0').attr('value');
        
        if ( i == null ) {
            alert("Debes elegir una respuesta");
        } else {
            
            $(this).prop('disabled', true);
            $('.feedback0').show();
            $('.feedback0').html("<p>"+apdata.feedbacks1[i].feedb+"</p>");
        }
        
    });
    
    $(".op1").click(function(e){
        
        var i = e.target.value;
        $(this).hide(500);
        $(this).siblings().prop('disabled', true);
        $(".laura1").show(500);
        $(".respuesta1").text(apdata.opciones2[i].opcion);
        $(".respuesta1").attr('value', i);
        
    });
    
    $('.borrar1').click(function(){
        var i = $('.respuesta1').attr('value');
        
        $(".laura1").hide(500);
        $('.op1.button'+i).show(500);
        $('.opciones1').children().prop('disabled', false);
        $('.ver1').prop('disabled', false);
        $('.feedback1').hide();
        $('.respuesta1').removeAttr('value');
    });
    
    $('.ver1').click(function(){
        var i = $('.respuesta1').attr('value');

        if ( i == null ) {
            alert("Debes elegir una respuesta");
        } else {
            $(this).prop('disabled', true);
            $('.feedback1').show();
            $('.feedback1').html("<p>"+apdata.feedbacks2[i].feedb+"</p>");
        }
    });
});