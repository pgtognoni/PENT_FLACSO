$( document ).ready(function(){

    var opciones = ["SELECCIONAR", "LÍMITES SALUDABLES", "MALOS TRATOS"];

    var apdata ={
        "lecciones":[
            {"leccion":"Están orientados en reparar el daño causado","rta": "1"},
            {"leccion":"Ayudan a comprender las consecuencias de los propios actos","rta": "1"},
            {"leccion":"Nos hacen más vulnerables a sufrir violencia o ejercerla en otras situaciones y relaciones","rta": "2"},
            {"leccion":"Posibilitan hacerse responsable de ellos","rta": "1"},
            {"leccion":"Implican castigos físicos, insultos, gritos o amenazas","rta": "2"},
            {"leccion":"Llevan a que se perciban a las personas y la sociedad como lugares amenazantes","rta": "2"},
            {"leccion":"Son claros y explicados de manera tranquila y respetuosa","rta": "1"},
            {"leccion":"Provocan indefensión, rechazo y una serie de emociones que hacen más difícil comprender y recapacitar sobre lo sucedido","rta": "2"},
            {"leccion":"Incluyen ejemplos, alternativas y nuevos compromisos","rta": "1"},
            {"leccion":"No permiten responsabilizarse por sus actos, ni aprender formas de repararlos","rta": "2"},
            {"leccion":"Afectan la autoestima, humillan, dificultan el desarrollo y aprendizaje","rta": "2"},
            {"leccion":"Son proporcionados, lo más inmediatos y breves que se pueda","rta": "1"},
        ]
    }

    var cant_lec = apdata.lecciones.length;

    var lecc = "<div class='lecciones'>";
    

    for(var i in apdata.lecciones) {

        lecc += "<div class='row lec-box leccion"+i+"'><div class='col-xl-9 col-lg-8 align-self-center text '>"+apdata.lecciones[i].leccion+"</div>";
        lecc += "<div class='col-xl-3 col-lg-4'><select class='options' data-id='"+i+"'>";
        for(var j in opciones){
            lecc += '<option class="opcion'+j+'" value="'+j+'">'+opciones[j]+"</option>";
        }
        lecc += "</select></div></div>";
    }

    lecc += "</div>";

    $(".contenedor-lecciones").html(lecc);

    var limt = "<div>";

    for(var i in apdata.lecciones) {

        var val = apdata.lecciones[i].rta;

        limt += "<div class='limites lec-box row justify-content-around' id='div"+i+"' value='"+val+"' key='"+i+"'>";
        limt += '<i class="col-2 col-xs-3 align-self-center correcta div'+i+'" id="'+i+'"></i>';
        limt += '<i class="col-2 col-xs-3 align-self-center incorrecta div'+i+'" id="'+i+'"></i>';
        limt += "<div class='col-9 col-xs-6 align-self-center text res-text'>" +apdata.lecciones[i].leccion+"</div>";
        limt += "<button class='col-1 ms-auto btn-cambiar'>"+"X"+"</button>";
        limt += "</div>";
    }

    limt += "</div></div>";

    $(".contenedor-limites").html(limt);
    $(".limites").hide();

    var malt = "<div>";

    for(var i in apdata.lecciones) {

        var val = apdata.lecciones[i].rta;

        malt += "<div class='row lec-box maltrato' id='div2"+i+"' value='"+val+"' key='"+i+"'>"
        malt += '<i class="col-2 col-xs-3 align-self-center correcta div2'+i+'" id="'+i+'"></i>';
        malt += '<i class="col-2 col-xs-3 align-self-center incorrecta div2'+i+'" id="'+i+'"></i>';
        malt += "<div class='col-9 align-self-center text res-text'>" +apdata.lecciones[i].leccion+"</div>";
        malt += "<button class='col-1 ms-auto btn-cambiar'>"+"X"+"</button>";
        malt += "</div>";
    }

    malt += "</div></div>";

    $(".contenedor-maltrato").html(malt);
    $(".maltrato").hide();
    $(".correcta").hide();
    $(".incorrecta").hide();


    $(".lecciones select").change(function(){
        
        var id = $(this).attr("data-id");
        var respuesta = $(this).find('option:selected').val();
    
        $(".leccion"+id).animate({"height": 0, "opacity":0}, 300, "swing", function () {
            $(this).hide();
        });
        
        if(respuesta === "1"){
            $("#div"+id).animate({"height": "100%"}, 300, "swing", function () {
            $(this).show("slow");});
            $("#div"+id).addClass('active');
            $(".intro-res-lim").hide();
        };
        if(respuesta === "2"){
            $("#div2"+id).animate({"height": "100%"}, 300, "swing", function () {
            $(this).show("slow");});
            $("#div2"+id).addClass('active');
            $(".intro-res-mal").hide();
        };
    })

    $(".btn-cambiar").click(function(){
        
        var id = $(this).siblings(".correcta").attr("id");

        $(this).parent().animate({"height": 0}, 300, "swing", function () {
            $(this).hide();
        });
        $(this).parent().removeClass('active');
        $(".leccion"+id).animate({"height": "100%", "opacity": 1}, function () {
            $(this).show("slow");
        });
        $("option:selected").prop("selected", false);
        $(".div"+id).hide();
        $(".div2"+id).hide();
    })


    $(".verificar").click(function(){
        
        var act = $('.active').length;

        if(act != cant_lec){
         
         alert("¡Debes seleccionar todas!");
            
        };

        if(act === cant_lec){

            $(".limites.active").each(function() {
                
                var val = $(this).attr("value");
                var id = $(this).attr("id");
                
                if (val === "1"){
                    $(".correcta."+id).show();
                    $(".correcta."+id).addClass("ms-md-auto")
                    $(".res-text").addClass("ms-md-auto")
                }else {
                    $(".incorrecta."+id).show();
                    $(".incorrecta."+id).addClass("ms-md-auto")
                    $(".res-text").addClass("ms-md-auto")
                }
            })
    
            $(".maltrato.active").each(function() {
                
                var val = $(this).attr("value");
                var id = $(this).attr("id");
                
                if (val === "2"){
                    $(".correcta."+id).show();
                    $(".correcta."+id).addClass("ms-md-auto");
                    $(".res-text").addClass("ms-md-auto");
                }else {
                    $(".incorrecta."+id).show();
                    $(".incorrecta."+id).addClass("ms-md-auto");
                    $(".res-text").addClass("ms-md-auto");
                }
            });

            $(window).scrollTop(600);
            
            $(".btn-cambiar").hide();
            
        }
            
    })
});