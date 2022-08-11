$( document ).ready(function() {
    
    var opciones = ["PRESENTE", "AUSENTE"];

    var apdata = {
        "situaciones":[
            {"situacion":"<p>Estudios médicos prenatales y/o curso preparto</p>"},
            {"situacion":"<p>Nacimiento</p>"},
            {"situacion":"<p>Primeras palabras y pasos de los hijos/as</p>"},
            {"situacion":"<p>Cambio de pañales</p>"},
            {"situacion":"<p>Baños</p>"},
            {"situacion":"<p>Vestimentas</p>"},
            {"situacion":"<p>Lectura de cuentos</p>"},
            {"situacion":"<p>Juegos</p>"},
            {"situacion":"<p>Reuniones escolares</p>"},
            {"situacion":"<p>Chat de madres/padres</p>"},
            {"situacion":"<p>Actos escolares</p>"},
            {"situacion":"<p>Ayuda con la tarea escolar</p>"},
            {"situacion":"<p>Turnos médicos</p>"},
            {"situacion":"<p>Fiestas de cumpleaños</p>"},
            {"situacion":"<p>Compra de ropa</p>"},
            {"situacion":"<p>Regalos de cumpleaños de amistades y compañeros/as de la escuela</p>"}
        ]
    };

    var sit_lenght = apdata.situaciones.length;
    var situ = "<div class='situaciones'>";

    for(var i in apdata.situaciones){
        situ +="<div class='row justify-content-between situacion' id='preg"+i+"'><div class='col-lg-6 col-xs-12 texto'>" + apdata.situaciones[i].situacion + "</div>";
        situ +="<div class='col-lg-6 col-xs-12 respuesta'>";
            for (var j in opciones) {
                situ +="<button class='btn-pre-aus button-"+j+"' value='"+j+"'>" + opciones[j] +"</button>";
            }
        situ +="</div></div>";
    }

    situ +="</div>";

    $('.contenedor-situaciones').html(situ);

    $('.btn-pre-aus').click(function(){

        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
});