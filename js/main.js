const cajas = document.querySelectorAll(".caja");
const btnCheck = document.querySelectorAll(".icon");

const fantasmas = [
    {nombre: "Banshee", DOTS: true, Escritura: false, EMF: false, Orbes: true, Temperaturas: false,Spirit: false,Huellas: true, fortaleza:" Se fija en un jugador para atacar", debilidad:" A veces lo escuchas gritar desde el microfono parabolico"},
    {nombre: "Demonio", DOTS: false, Escritura: true, EMF: false, Orbes: false, Temperaturas: true,Spirit: false,Huellas: true, fortaleza:" Ataca con mas frecuencia", debilidad:" Menos agresivo cerca de un crucifijo"},
    {nombre: "Ente", DOTS: true, Escritura: false, EMF: false, Orbes: false, Temperaturas: false,Spirit: true,Huellas: true, fortaleza:" Mirarlo directamente descendera tu cordura rapidamente", debilidad:" Sacarle una foto hara que desaparezca"},
    {nombre: "Espectro", DOTS: true, Escritura: false, EMF: true, Orbes: false, Temperaturas: false,Spirit: true,Huellas: false, fortaleza:" No dejan pisadas luego de pisar la sal", debilidad:" Se volveran mas activos si pisan la sal"},
    {nombre: "Espiritu", DOTS: false, Escritura: true, EMF: true, Orbes: false, Temperaturas: false,Spirit: true,Huellas: false, fortaleza:" No tiene lol", debilidad:" Utilizar un incienso cerca de ellos evitara que ataque por un largo periodo"},
    {nombre: "Gemelos", DOTS: false, Escritura: false, EMF: true, Orbes: false, Temperaturas: true,Spirit: true,Huellas: false, fortaleza:" Cualquiera de los gemelos puede iniciar una caceria aunque no al mismo tiempo", debilidad:" Interactua con mas frecuencia en el ambiente"},
    {nombre: "Goryo", DOTS: true, Escritura: false, EMF: true, Orbes: false, Temperaturas: false,Spirit: false,Huellas: true, fortaleza:" Se va a mostrar solo cuando no hay nadie cerca y solo se lo puede ver en el dots con una camara de video", debilidad:" No se alejan mucho de su habitacion"},
    {nombre: "Hantu", DOTS: false, Escritura: false, EMF: false, Orbes: true, Temperaturas: true,Spirit: false,Huellas: true, fortaleza:" Se mueve mas rapido en temperatura fria", debilidad:" Se mueve mas lento en temperatura calida"},
    {nombre: "Jinn", DOTS: false, Escritura: false, EMF: true, Orbes: false, Temperaturas: true,Spirit: false,Huellas: true, fortaleza:" Se mueve mas rapido cuando el jugador esta lejos", debilidad:" Apagar los fusibles evita que pueda usar sus habilidades"},
    {nombre: "Mimico", DOTS: false, Escritura: false, EMF: false, Orbes: true, Temperaturas: true,Spirit: true,Huellas: true, fortaleza:" Pueden imitar las habilidades y rasgos de otros fantasmas ", debilidad:" Aparecen orbes en la habitacion del fantasma"},
    {nombre: "Myling", DOTS: false, Escritura: true, EMF: true, Orbes: false, Temperaturas: false,Spirit: false,Huellas: true, fortaleza:" Cuando ataca es mas dificil oir los pasos", debilidad: " Hacen sonido paranormal mas frecuente en el microfono parabolico"},
    {nombre: "Obake", DOTS: false, Escritura: false, EMF: true, Orbes: true, Temperaturas: false,Spirit: false,Huellas: true, fortaleza:" Deja huellas que desaparecen mas rapido", debilidad:" A veces cambia de forma / A veces deja 6 dedos en huella"},
    {nombre: "Oni", DOTS: true, Escritura: false, EMF: true, Orbes: false, Temperaturas: true,Spirit: false,Huellas: false, fortaleza:" Tiene mayor actividad y eventos fantasma", debilidad:" Son muy activos con las interacciones"},
    {nombre: "Onryo", DOTS: false, Escritura: false, EMF: false, Orbes: true, Temperaturas: true,Spirit: true,Huellas: false, fortaleza:" Apagar una llama puede provocar un ataque", debilidad:" La presencia de llamas reduce la habilidad de atacar"},
    {nombre: "Pesadilla", DOTS: false, Escritura: true, EMF: false, Orbes: true, Temperaturas: false,Spirit: true,Huellas: false, fortaleza:" Atacan con mas frecuencia si las luces estan apagadas", debilidad:" Atacan con menos frecuencia si las luces estan encendidas"},
    {nombre: "Poltergeist", DOTS: false, Escritura: true, EMF: false, Orbes: false, Temperaturas: false,Spirit: true,Huellas: true, fortaleza:" Puede tirar varios objetos al mismo tiempo", debilidad:" Es inefectivo en habitaciones vacias"},
    {nombre: "Raiju", DOTS: true, Escritura: false, EMF: true, Orbes: true, Temperaturas: false,Spirit: false,Huellas: false, fortaleza:" Se mueve mas rapido con dispostivos electricos", debilidad:" Interfiere con los aparatos electronicos a mayor distancia cuando ataca"},
    {nombre: "Revenant", DOTS: false, Escritura: true, EMF: false, Orbes: true, Temperaturas: true,Spirit: false,Huellas: false, fortaleza:" Se mueve mas rapido si ve a un jugador en una caceria", debilidad:" Se mueve lento cuando no esta siguiendo a un jugador"},
    {nombre: "Sombra", DOTS: false, Escritura: true, EMF: true, Orbes: false, Temperaturas: true,Spirit: false,Huellas: false, fortaleza:" Dificil de encontrar cuando hay dos o mas jugadores", debilidad:" No ataca si hay varias personas cerca"},
    {nombre: "Yokai", DOTS: true, Escritura: false, EMF: false, Orbes: true, Temperaturas: false,Spirit: true,Huellas: false, fortaleza:" Hablar cerca aumenta las probilidades de ataque", debilidad:" Cuando esta cazando solo puede oir voces"},
    {nombre: "Yurei", DOTS: true, Escritura: false, EMF: false, Orbes: true, Temperaturas: true,Spirit: false,Huellas: false, fortaleza:" Tiene gran influencia en la cordura", debilidad:" Si se usa un incienso en su habitacion lo atrapa por 90 segundos"}
]

const fantasmaBuscado = {nombre:null, DOTS:false, Escritura:false, EMF:false, Orbes:false, Temperaturas:false,Spirit:false,Huellas:false};
var listaPosibles = [];

document.addEventListener("DOMContentLoaded", ()=> {
    ocultarPosibles();
    cambiarColor();
    reiniciarCaja();
})

function ocultarPosibles(){
    const posibles = document.querySelector(".fantasmas__posibles");
    const fantasmas = document.querySelector(".fantasmas");
    console.log(posibles.innerHTML);
    if(posibles.innerHTML.trim() === "" || posibles.classList.contains("ocultar")){
        fantasmas.classList.add("hidden");
    }else{
        fantasmas.classList.remove("hidden");
    }
}

function cambiarColor(){
    for(var i = 0; i < cajas.length; i++){
        cajas[i].onclick = e=>{
            if(e.currentTarget.classList.contains("caja__check")){
                if(e.currentTarget.classList.contains("caja")){
                    e.currentTarget.classList.remove("caja__check");
                    actualizarFantasma(Number(e.currentTarget.id)+1,false);
                }else{
                    e.path[3].classList.remove("caja__check");
                    actualizarFantasma(Number(e.path[3].id)+1,false);
                }
            }else{
                if(e.currentTarget.classList.contains("caja")){
                    e.currentTarget.classList.add("caja__check");
                    actualizarFantasma(Number(e.currentTarget.id)+1,true);
                }else{
                    e.path[3].classList.add("caja__check");
                    actualizarFantasma(Number(e.path[3].id)+1,true);
                }
            }
            ocultarPosibles();
        }
    }
}

function actualizarFantasma(botonId, booleano){
    let iteraciones = 0;

    for(prueba in fantasmaBuscado){
        if(iteraciones == botonId){
            fantasmaBuscado[prueba] = booleano;
        }
        iteraciones++;
    }

    let lista = buscarFantasma();
    borrarLista();
    aniadirFantasmasPosibles(lista);
}

function buscarFantasma(){
    listaPosibles = [];

    fantasmas.forEach( fantasma => {
        coincide = true;
        for(prueba in fantasma){
            if(fantasmaBuscado[prueba] == true && fantasma[prueba] !== true){
               coincide = false;
            }
        }  
        if(coincide){
            listaPosibles.push(fantasma);
        }
    });
    
    return listaPosibles;
}

function encontrarPruebas(fantasma, primer_prueba, segunda_prueba, tercera_prueba, cuarta_prueba){
    primero_ocupado = false;
    segundo_ocupado = false;
    tercero_ocupado = false;
    cuarto_ocupado = false;

    for(prueba in fantasma){
        if(primero_ocupado == false && fantasma[prueba] == true){
            primer_prueba.textContent = String(prueba);
            primero_ocupado = true;

            if(fantasmaBuscado[prueba] == true){
                primer_prueba.classList.add("caja__check");
            }else{
                primer_prueba.classList.remove("caja__check");
            }
        }else if(segundo_ocupado == false && fantasma[prueba] == true){
            segunda_prueba.textContent = String(prueba);
            segundo_ocupado = true;

            if(fantasmaBuscado[prueba] == true){
                segunda_prueba.classList.add("caja__check");
            }else{
                segunda_prueba.classList.remove("caja__check");
            }
        }else if(tercero_ocupado == false && fantasma[prueba] == true){
            tercera_prueba.textContent = String(prueba);
            tercero_ocupado = true;

            if(fantasmaBuscado[prueba] == true){
                tercera_prueba.classList.add("caja__check");
            }else{
                tercera_prueba.classList.remove("caja__check");
            }
        }else if(cuarto_ocupado == false && fantasma[prueba] == true){
            cuarta_prueba.textContent = String(prueba);
            cuarto_ocupado = true;

            if(fantasmaBuscado[prueba] == true){
                cuarta_prueba.classList.add("caja__check");
            }else{
                cuarta_prueba.classList.remove("caja__check");
            }
        }
    }
}

function aniadirFantasmasPosibles(listaPosibles){

    const lista = document.querySelector(".fantasmas__posibles");
    lista.classList.remove("ocultar");

    
    for(let i = 0; i < listaPosibles.length; i++){

        const warning = document.createElement("img");
        warning.src = "https://img.icons8.com/external-kmg-design-outline-color-kmg-design/16/000000/external-warning-maps-navigation-kmg-design-outline-color-kmg-design.png";

        const check = document.createElement("img");
        check.src = "https://img.icons8.com/color/16/000000/checked--v4.png";

        const fantasma = document.createElement("li");
              
        const div_pruebas = document.createElement("div");
        div_pruebas.classList.add("fantasma__pruebas");

        const primer_prueba = document.createElement("span");
        primer_prueba.classList.add("fantasma__prueba");
       
        const segunda_prueba = document.createElement("span");
        segunda_prueba.classList.add("fantasma__prueba");

        const tercera_prueba = document.createElement("span");
        tercera_prueba.classList.add("fantasma__prueba");

        if(listaPosibles[i].nombre == "Mimico"){
            div_pruebas.classList.add("fantasma__pruebas--mimico");
            const cuarta_prueba = document.createElement("span");
            cuarta_prueba.classList.add("fantasma__prueba");
            encontrarPruebas(listaPosibles[i], primer_prueba, segunda_prueba, tercera_prueba, cuarta_prueba);
            div_pruebas.appendChild(cuarta_prueba);
        }else{
            encontrarPruebas(listaPosibles[i], primer_prueba, segunda_prueba, tercera_prueba);
        }

        div_pruebas.appendChild(primer_prueba);
        div_pruebas.appendChild(segunda_prueba);
        div_pruebas.appendChild(tercera_prueba);

        const div_propiedades = document.createElement("div");
        div_propiedades.classList.add("fantasma__propiedades");

        const boton = document.createElement("div");
        boton.classList.add("boton-flex")
        const eliminar = document.createElement("div");
        eliminar.classList.add("boton-x");
        const eliminar_texto = document.createElement("p");
        eliminar_texto.textContent = "X";
        eliminar.appendChild(eliminar_texto);
        boton.appendChild(eliminar);
        div_propiedades.appendChild(boton);
        
        const nombre = document.createElement("span");
        nombre.classList.add("fantasma__nombre");
        nombre.textContent = listaPosibles[i].nombre;
        
        const fortaleza = document.createElement("div");
        fortaleza.appendChild(warning);
        const fortaleza_span = document.createElement("span");
        fortaleza_span.textContent = "Fortaleza:" + listaPosibles[i]["fortaleza"];
        fortaleza.appendChild(fortaleza_span);
        fortaleza.classList.add("fantasma__habilidades");
        
        const debilidad = document.createElement("div");
        debilidad.appendChild(check);
        const debilidad_span = document.createElement("span");
        debilidad_span.textContent = "Debilidad:" + listaPosibles[i]["debilidad"];
        debilidad.appendChild(debilidad_span);
        debilidad.classList.add("fantasma__habilidades");
        
        div_propiedades.appendChild(nombre);
        div_propiedades.appendChild(div_pruebas);
        div_propiedades.appendChild(fortaleza);
        div_propiedades.appendChild(debilidad);

        fantasma.appendChild(div_propiedades);

        fantasma.classList.add("caja-fantasma");
        lista.appendChild(fantasma);

        eliminar.addEventListener("click", (e) => e.path[3].remove());
    }
}

function borrarLista(){
    const cajas_fantasma = document.querySelectorAll(".caja-fantasma");

    for(let i = 0; i < cajas_fantasma.length; i++){
        cajas_fantasma[i].remove();
    }
}

function reiniciarCaja(){
    const caja = document.querySelector(".reiniciar-caja");
    const seccionFantasmas = document.querySelector(".fantasmas__posibles");

    caja.onclick = (e)=> {
        for(let i = 0; i < cajas.length; i++){
            cajas[i].classList.remove("caja__check");
            actualizarFantasma(Number(i)+1,false);
        }
        seccionFantasmas.classList.add("ocultar");
        ocultarPosibles();
    }

}