$( document ).ready(function() {
    
    var opciones = ['Seleccioná un mandato...','Mandato de aguante','Mandato de autocentramiento','Mandato de rendimiento','Mandato de autosuficiencia','Mandato de no expresar emociones']
    
    var apdata = {
        "situaciones":[
            { "imagen": "<img src='img/302_2.png' alt='Viñeta 2: captura chat en grupo wsp “Los +Kpitos”: 1- Che, q onda anoche, no me acuerdo de nada. Tengo la remera rota y la jeta hinchada. 2- jajja, te zarpaste con la novia de un pibe, se picó y el patova te sacó del boliche. 1- naaa, y con quién me fui a las manos, con el patova? 3- todos nos fuimos a las manos, con el pibe y sus amigos. 1- jajaj alta noche gato'>",
                "rta": 1, 
            	"explicacion": "Los varones, en general, asumen conductas temerarias como mecanismo de validación ante sus pares. Para demostrar su aguante, se exceden en el consumo de sustancias, conducen de manera imprudente y a velocidad excesiva y se involucran con frecuencia en situaciones de violencia callejera."
            },
            {"imagen": "<img src='img/302_1.png' alt='Dos varones en el centro de la cancha. Varon 1: Vos no estagas lesionado? Varon 2: Lo estoy, pero ni loco me pierdo este partido. Estoy infiltrado.'>", 
            	"rta": 3, 
            	"explicacion": "Los varones, en general, construyen sus cuerpos como máquinas para el rendimiento laboral, deportivo o sexual, sin registrar necesidades de cuidado y auto-atención, llegando al límite de sus posibilidades físicas."
            },
            { "imagen": "<img src='img/302_3.png' alt='Viñeta 3: un varón sobre una mujer, bajo las sábanas. Varón: Por una vez no pasa nada, ahora disfrutemos, cualquier cosa te compro la pastilla del día después.'>",
            	"rta": 2,
            	"explicacion": "Los varones, en general, sostienen prácticas que los exponen, a ellos mismos y a otras personas, a contraer infecciones de transmisión sexual (ITS) como el VIH/SIDA, la sífilis, las hepatitis B y C, entre otras. Además, en las relaciones heterosexuales, suelen privilegiar su experiencia y rendimiento, por sobre el placer, la reciprocidad y el consentimiento de la otra persona." 
            },
            { "imagen": "<img src='img/302_4.png' alt='Viñeta 4: Dos varones, uno se ve triste. Varón le dice: no necesitas terapia, sino que hagamos una buena joda, con minas y escabio y vas a ver cómo se te pasa.'>",
            	"rta": 5,
            	"explicacion": "Los varones, en general, no exponen sus sentimientos frente a otros varones, no demuestran vulnerabilidad ni solicitan ayuda por temor a ser devaluados en su masculinidad." 
            }, 
            {"imagen": "<img src='img/302_5.png' alt='Viñeta 5: una pareja (varón - mujer). Mujer dice: amor, te saqué turno al cardiólogo. Varón: otra vez? si me hice un electro el año pasado. Por qué no vas vos?'>",
				"rta": 4,
				"explicacion": "Los varones, en general, realizan con menor frecuencia prácticas preventivas como tomar la presión arterial, medir la glucemia o el colesterol. Frecuentemente, asisten al médico por gestión e insistencia de terceros, generalmente mujeres. Ellas suelen postergan el cuidado de sí para atender a las necesidades ajenas."
			},
        ]
    }
    
    var cant_situ = apdata.situaciones.length;	

	var situ = "<div class='situaciones'>";
	
	for(var i in apdata.situaciones){					
				situ +="<div class='situacion302' id='situ"+i+"' >" + apdata.situaciones[i].imagen;
				situ +='<div class="respuesta302 row" id="respuesta'+i+'">';
				situ +='<i class="col-1 align-self-center correcta302" id="correcta'+i+'"></i>';
                situ +='<i class="col-1 align-self-center incorrecta302" id="incorrecta'+i+'"></i>';
				situ +='<div class="col-lg-5 col-md-8 col-sm-8 col-8 align-self-center tachar" id="tachado'+i+'"></div>';
				situ +='<div class="col-lg-5 col-md-8 col-sm-8 col-8 align-self-center franja" id="franja'+i+'"></div></div>';
				situ+= '<div class="explicacion" id="explicacion'+i+'"><p>'+ apdata.situaciones[i].explicacion+'</p></div>';
				situ +='<select class="select302" data-id="'+i+'">';
				for(var j in  opciones){
					situ +='<option value="'+j+'">'+opciones[j]+'</option>';
				}
				situ+= "</select></div>";
        
	}
	
	situ +="</div></div>";

		
	$(".contenedor-situaciones").html(situ);
	$(".respuesta302").hide();
    $(".correcta302").hide();
    $(".incorrecta302").hide();


  
 $('.situaciones select').change(function()
 {
    var id=$(this).attr('data-id');
    var respuesta=$(this).find('option:selected').val();
    var correcta= apdata.situaciones[id].rta;
    
	$("#respuesta"+id).show();
    $('#franja'+id).html(opciones[correcta]);
    $('#franja'+id).addClass('franja');
    $(this).hide();

    if(respuesta==correcta) {
        $("#correcta"+id).show();
        $('#franja'+id).addClass('col-lg-7');
    }else {
        $('#tachado'+id).html(opciones[respuesta]);
        $('#tachado'+id).show();
        $('#tachado'+id).addClass('tachado');
        $("#incorrecta"+id).show();
    }

    $('#explicacion'+id).show();

 });

});
    