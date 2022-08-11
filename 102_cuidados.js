$( document ).ready(function() {
    
    var opciones = ['SÍ', 'NO']; 

    var apdata = {
        "preguntas":[
            {"pregunta":"<p>¿Durante tu infancia alguien te cuidó?</p>"},
            {"pregunta":"<p>¿Tu principal cuidadora fue una mujer?</p>"},
            {"pregunta":"<p>¿Cuidás a alguna persona que lo necesita?</p>"},
            {"pregunta":"<p>¿Te ocupás de estas tareas de cuidados: higienizar, bañar o vestir?</p>"},
            {"pregunta":"<p>¿Dar de comer?</p>"},
            {"pregunta":"<p>¿Realizar paseos recreativos?</p>"},
            {"pregunta":"<p>¿Trasladar a la persona a un centro de salud?</p>"},
            {"pregunta":"<p>¿Administrar medicación?</p>"},
            {"pregunta":"<p>¿Trasladar a la escuela o a instituciones educativas o recreativas?</p>"},
            {"pregunta":"<p>¿Realizar trámites para o con una persona mayor o con discapacidad?</p>"},
            { "pregunta":"<p>¿Realizás trabajo doméstico en tu hogar?</p>"},
            { "pregunta":"<p>¿Barrer, lavar los platos, cocinar?</p>"},
            { "pregunta":"<p>¿Sentís que no podés contar con alguien para el cuidado de personas a tu cargo?</p>"},
            { "pregunta":"<p>¿Tuviste que abandonar los estudios por tener que cuidar a una persona?</p>"},
            { "pregunta":"<p>¿Alguna vez dejaste de asistir a una reunión de trabajo por cuidar de alguien?</p>"},
        ]
    };
    
    var cant_preg = apdata.preguntas.length;
    var preg = "<div class='situaciones'>";

    for(var i in apdata.preguntas){
        preg +="<div class='row justify-content-between pregunta' id='preg"+i+"'><div class='col-12 col-md-7 col-sm-12 texto'>"+apdata.preguntas[i].pregunta+"</div>";
        preg +="<div class='col-12 col-md-5 col-sm-12 respuesta' data-id='"+i+"'>"
            for(var j in opciones){
                preg +='<button class="button-sino button-'+j+'" value="'+j+'">' + opciones[j] + '</button>';
            }
        preg +="</div></div>";
    }

    preg+='</div>'

    $('.contenedor-pasos').html(preg);
    
    $('.button-sino').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active')
    })

    $('.verificar').click(function(){
        
        var steps = $('.button-0.active').length
        var length = $('.button-sino.active').length;
        
        if(length != cant_preg){
            alert('Debe responder todas las preguntas')
        }else{
            
            var showSteps = "<p class='resultado'>"+'Diste '+"<span class='steps'>"+steps+"</span>"+' pasos de 15 en total.'+"</p>";
           
           
            $(this).hide();
            $('.resultado').html(showSteps);
            $('.video-container').hide();
            $('.watch-video').css({'display':'block'});
            $('.pasos-text').hide();
            $('.comparti').css({'display':'block'});

            
            
        }
    
    $('.watch-video').click(function(){
        $('.video-container').show();
        $(this).hide();
    })
        
    });


})