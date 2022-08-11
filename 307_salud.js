$( document ).ready(function(){
    
    var opciones = [ "V", "F" ];
    
    var apdata = {
        "lecciones":[
            {"leccion": "Es un método anticonceptivo permanente", "rta": "0", "explicacion": "VERDADERO. Aunque existe una cirugía llamada vaso-vasostomía que se utiliza para revertir la vasectomía, la efectividad es variable de acuerdo con el método utilizado y el tiempo que haya transcurrido entre ambas cirugías."},
            {"leccion": "Se realiza con anestesia total", "rta":"1", "explicacion": "FALSO. Se realiza con anestesia local, en forma ambulatoria, y la operación no suele durar más de 30 minutos."},
            {"leccion": "Luego de la intervención, es necesario esperar 3 meses para que sea efectiva", "rta":"0", "explicacion": "VERDADERO.  Por lo que se sugiere usar otro método anticonceptivo en ese período, ya que el semen producido antes de la cirugía puede conservar espermatozoides activos."},
            {"leccion": "Modifica el aspecto y puede dañar los testículos", "rta":"1","explicacion": "FALSO. No modifica el aspecto, no afecta ni daña los testículos y no tiene efectos colaterales a largo plazo."},
            {"leccion": "Luego de la intervención cambian las relaciones sexuales y no se presenta eyaculación", "rta":"1","explicacion": "FALSO. Se eyacula semen, sólo que no contiene espermatozoides, con lo cual no se produce el embarazo."},
            {"leccion": "Es necesario continuar utilizando preservativo para protegerse contra las ITS", "rta":"0","explicacion": "VERDADERO. La vasectomía interrumpe la llegada del espermatozoide al semen, por tanto sólo previene la fecundación. Para prevenir infecciones de transmisión sexual sigue siendo necesario el uso de métodos de barrera."}
        ]
    }
    
    var cant_lec = apdata.lecciones.length;
    
    var lec = "<div>"; 
    
    for(var i in apdata.lecciones) {
        lec += '<div class="container">'
        lec += "<div class='row lec-box leccion"+i+"'>";
        lec += '<i class="col-3 col-lg-2 col-xs-2 align-self-center correcta307 '+i+'" id="'+i+'"></i>';
        lec += '<i class="col-3 col-lg-2 col-xs-2 align-self-center incorrecta307 '+i+'" id="'+i+'"></i>';
        lec += "<div class='col-xl-8 col-lg-8 lec align-self-center text'>"+apdata.lecciones[i].leccion+"</div>";
        lec +="<div class='col-2 col-xs-2 col-lg-3 ms-md-auto align-self-center respuesta'>";
        for (var j in opciones) {
            lec +="<button class='btn-v-f button-"+j+"' key='"+i+"' value='"+j+"' id='"+apdata.lecciones[i].rta+"'><span class='v-f'>"+opciones[j]+"</span></button>";
        };
        lec += "</div></div>";
        lec += "<div class='row lec-box justify-content-start explicacion307'>";
        lec += "<div class='col-10 align-self-center text'><p>"+apdata.lecciones[i].explicacion+"</p></div>";
        lec += "</div></div>"
    }   
    
    lec += "</div>";
    
    $(".contenedor-lecciones").html(lec);
    $(".correcta307").hide();
    $(".incorrecta307").hide();
    $(".explicacion307").hide();
    
     $('.btn-v-f').click(function(){
        $(this).siblings().removeClass('active');
        $(this).siblings().addClass('inactive');
        $(this).addClass('active')
    })
    
    $(".verificar307").click(function(){
        
        var act = $('.active').length;
        $(this).hide();

        if(act != cant_lec){
         
            alert("¡Debes contestar todas!");
            
        };
        
        if(act === cant_lec){
            
            $(".btn-v-f.active").each(function(){
                
                var val = $(this).attr("value");
                var rta = $(this).attr("id");
                var key = $(this).attr("key")
                
                if (val === rta) {
                    $(".correcta307."+key).show();
                }else {
                    $(".incorrecta307."+key).show();
                }
                
                $(".btn-v-f.active").siblings().hide();
                $(window).resize(function() {
                  if (window.innerWidth <= 1000) {
                    $(".lec").addClass("order-first");
                    $(".respuesta").css({"width":"80px"});
                    $(".respuesta").removeClass("ms-md-auto");
                  } else {
                    $(".lec").removeClass("order-first");
                    $(".respuesta").addClass("ms-md-auto");
                  }
                });
                $(".explicacion307").show();
                $(window).scrollTop(1400);
        
            })
        }
            
            
        


    })
    
})