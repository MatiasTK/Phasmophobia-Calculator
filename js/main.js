const cajas = document.querySelectorAll('.caja');
const btnCheck = document.querySelectorAll('.icon');

const fantasmas = [
  {
    nombre: 'Banshee',
    DOTS: true,
    Escritura: false,
    EMF: false,
    Orbes: true,
    Temperaturas: false,
    Spirit: false,
    Huellas: true,
    fortaleza: ' Se fija en un jugador para atacar',
    debilidad: ' A veces lo escuchas gritar desde el micrófono parabólico',
    wiki: 'https://phasmophobia.fandom.com/wiki/Banshee',
  },
  {
    nombre: 'Demonio',
    DOTS: true,
    Escritura: true,
    EMF: false,
    Orbes: false,
    Temperaturas: true,
    Spirit: false,
    Huellas: false,
    fortaleza: ' Ataca con mas frecuencia',
    debilidad: ' Menos agresivo cerca de un crucifijo',
    wiki: 'https://phasmophobia.fandom.com/wiki/Demon',
  },
  {
    nombre: 'Deogen',
    DOTS: true,
    Escritura: true,
    EMF: false,
    Orbes: false,
    Temperaturas: false,
    Spirit: true,
    Huellas: false,
    fortaleza: ' Sabe siempre donde esta el jugador y se mueve rápido hacia su posición',
    debilidad: ' Se mueve mas lento una vez que ve al jugador',
    wiki: 'https://phasmophobia.fandom.com/wiki/Deogen',
  },
  {
    nombre: 'Ente',
    DOTS: true,
    Escritura: false,
    EMF: false,
    Orbes: false,
    Temperaturas: false,
    Spirit: true,
    Huellas: true,
    fortaleza: ' Mirarlo directamente descenderá tu cordura rápidamente',
    debilidad: ' Sacarle una foto hará que desaparezca',
    wiki: 'https://phasmophobia.fandom.com/wiki/Phantom',
  },
  {
    nombre: 'Espectro',
    DOTS: true,
    Escritura: false,
    EMF: true,
    Orbes: false,
    Temperaturas: false,
    Spirit: true,
    Huellas: false,
    fortaleza: ' No dejan pisadas luego de pisar la sal',
    debilidad: ' Se volverán mas activos si pisan la sal',
    wiki: 'https://phasmophobia.fandom.com/wiki/Wraith',
  },
  {
    nombre: 'Espíritu',
    DOTS: false,
    Escritura: true,
    EMF: true,
    Orbes: false,
    Temperaturas: false,
    Spirit: true,
    Huellas: false,
    fortaleza: ' No tiene lol',
    debilidad: ' Utilizar un incienso cerca de ellos evitara que ataque por un largo periodo',
    wiki: 'https://phasmophobia.fandom.com/wiki/Spirit',
  },
  {
    nombre: 'Gemelos',
    DOTS: false,
    Escritura: false,
    EMF: true,
    Orbes: false,
    Temperaturas: true,
    Spirit: true,
    Huellas: false,
    fortaleza: ' Cualquiera de los gemelos puede iniciar una cacería aunque no al mismo tiempo',
    debilidad: ' Interactúa con mas frecuencia en el ambiente',
    wiki: 'https://phasmophobia.fandom.com/wiki/The_Twins',
  },
  {
    nombre: 'Goryo',
    DOTS: true,
    Escritura: false,
    EMF: true,
    Orbes: false,
    Temperaturas: false,
    Spirit: false,
    Huellas: true,
    fortaleza:
      ' Se va a mostrar solo cuando no hay nadie cerca y solo se lo puede ver en el dots con una cámara de video',
    debilidad: ' No se alejan mucho de su habitación',
    wiki: 'https://phasmophobia.fandom.com/wiki/Goryo',
  },
  {
    nombre: 'Hantu',
    DOTS: false,
    Escritura: false,
    EMF: false,
    Orbes: true,
    Temperaturas: true,
    Spirit: false,
    Huellas: true,
    fortaleza: ' Se mueve mas rápido en temperatura fría',
    debilidad: ' Se mueve mas lento en temperatura cálida',
    wiki: 'https://phasmophobia.fandom.com/wiki/Hantu',
  },
  {
    nombre: 'Jinn',
    DOTS: false,
    Escritura: false,
    EMF: true,
    Orbes: false,
    Temperaturas: true,
    Spirit: false,
    Huellas: true,
    fortaleza: ' Se mueve mas rápido cuando el jugador esta lejos',
    debilidad: ' Apagar los fusibles evita que pueda usar sus habilidades',
    wiki: 'https://phasmophobia.fandom.com/wiki/Jinn',
  },
  {
    nombre: 'Mimico',
    DOTS: false,
    Escritura: false,
    EMF: false,
    Orbes: true,
    Temperaturas: true,
    Spirit: true,
    Huellas: true,
    fortaleza: ' Pueden imitar las habilidades y rasgos de otros fantasmas ',
    debilidad: ' Aparecen orbes en la habitación del fantasma',
    wiki: 'https://phasmophobia.fandom.com/wiki/Mimic',
  },
  {
    nombre: 'Moroi',
    DOTS: false,
    Escritura: true,
    EMF: false,
    Orbes: false,
    Temperaturas: true,
    Spirit: true,
    Huellas: false,
    fortaleza:
      ' Se mueve mas rápido a poca cordura y hace que pierdan la cordura mas rápido mientras investigan',
    debilidad: ' Los inciensos lo vuelven ciego en la cacería por mas tiempo',
    wiki: 'https://phasmophobia.fandom.com/wiki/Moroi',
  },
  {
    nombre: 'Myling',
    DOTS: false,
    Escritura: true,
    EMF: true,
    Orbes: false,
    Temperaturas: false,
    Spirit: false,
    Huellas: true,
    fortaleza: ' Cuando ataca es mas difícil oir los pasos',
    debilidad: ' Hacen sonido paranormal mas frecuente en el micrófono parabólico',
    wiki: 'https://phasmophobia.fandom.com/wiki/Myling',
  },
  {
    nombre: 'Obake',
    DOTS: false,
    Escritura: false,
    EMF: true,
    Orbes: true,
    Temperaturas: false,
    Spirit: false,
    Huellas: true,
    fortaleza: ' Deja huellas que desaparecen mas rápido',
    debilidad: ' A veces cambia de forma / A veces deja 6 dedos en huella',
    wiki: 'https://phasmophobia.fandom.com/wiki/Obake',
  },
  {
    nombre: 'Oni',
    DOTS: true,
    Escritura: false,
    EMF: true,
    Orbes: false,
    Temperaturas: true,
    Spirit: false,
    Huellas: false,
    fortaleza: ' Tiene mayor actividad y eventos fantasma',
    debilidad: ' Son muy activos con las interacciones',
    wiki: 'https://phasmophobia.fandom.com/wiki/Oni',
  },
  {
    nombre: 'Onryo',
    DOTS: false,
    Escritura: false,
    EMF: false,
    Orbes: true,
    Temperaturas: true,
    Spirit: true,
    Huellas: false,
    fortaleza: ' Apagar una llama puede provocar un ataque',
    debilidad: ' La presencia de llamas reduce la habilidad de atacar',
    wiki: 'https://phasmophobia.fandom.com/wiki/Onryo',
  },
  {
    nombre: 'Pesadilla',
    DOTS: false,
    Escritura: true,
    EMF: false,
    Orbes: true,
    Temperaturas: false,
    Spirit: true,
    Huellas: false,
    fortaleza: ' Atacan con mas frecuencia si las luces están apagadas',
    debilidad: ' Atacan con menos frecuencia si las luces están encendidas',
    wiki: 'https://phasmophobia.fandom.com/wiki/Mare',
  },
  {
    nombre: 'Poltergeist',
    DOTS: false,
    Escritura: true,
    EMF: false,
    Orbes: false,
    Temperaturas: false,
    Spirit: true,
    Huellas: true,
    fortaleza: ' Puede tirar varios objetos al mismo tiempo',
    debilidad: ' Es inefectivo en habitaciones vacías',
    wiki: 'https://phasmophobia.fandom.com/wiki/Poltergeist',
  },
  {
    nombre: 'Raiju',
    DOTS: true,
    Escritura: false,
    EMF: true,
    Orbes: true,
    Temperaturas: false,
    Spirit: false,
    Huellas: false,
    fortaleza: ' Se mueve mas rápido con dispositivos eléctricos',
    debilidad: ' Interfiere con los aparatos electrónicos a mayor distancia cuando ataca',
    wiki: 'https://phasmophobia.fandom.com/wiki/Raiju',
  },
  {
    nombre: 'Revenant',
    DOTS: false,
    Escritura: true,
    EMF: false,
    Orbes: true,
    Temperaturas: true,
    Spirit: false,
    Huellas: false,
    fortaleza: ' Se mueve mas rápido si ve a un jugador en una cacería',
    debilidad: ' Se mueve lento cuando no esta siguiendo a un jugador',
    wiki: 'https://phasmophobia.fandom.com/wiki/Revenant',
  },
  {
    nombre: 'Sombra',
    DOTS: false,
    Escritura: true,
    EMF: true,
    Orbes: false,
    Temperaturas: true,
    Spirit: false,
    Huellas: false,
    fortaleza: ' Difícil de encontrar cuando hay dos o mas jugadores',
    debilidad: ' No ataca si hay varias personas cerca',
    wiki: 'https://phasmophobia.fandom.com/wiki/Shade',
  },
  {
    nombre: 'Thaye',
    DOTS: true,
    Escritura: true,
    EMF: false,
    Orbes: true,
    Temperaturas: false,
    Spirit: false,
    Huellas: false,
    fortaleza: ' Entrar en su habitación lo hace mas activo, defensivo y ágil',
    debilidad: ' Se vuelve mas lento y menos activo a medida que pasa el tiempo',
    wiki: 'https://phasmophobia.fandom.com/wiki/Thaye',
  },
  {
    nombre: 'Yokai',
    DOTS: true,
    Escritura: false,
    EMF: false,
    Orbes: true,
    Temperaturas: false,
    Spirit: true,
    Huellas: false,
    fortaleza: ' Hablar cerca aumenta las probabilidades de ataque',
    debilidad: ' Cuando esta cazando solo puede oir voces',
    wiki: 'https://phasmophobia.fandom.com/wiki/Yokai',
  },
  {
    nombre: 'Yurei',
    DOTS: true,
    Escritura: false,
    EMF: false,
    Orbes: true,
    Temperaturas: true,
    Spirit: false,
    Huellas: false,
    fortaleza: ' Tiene gran influencia en la cordura',
    debilidad: ' Si se usa un incienso en su habitación lo atrapa por 90 segundos',
    wiki: 'https://phasmophobia.fandom.com/wiki/Yurei',
  },
];

const fantasmaBuscado = {
  nombre: null,
  DOTS: false,
  Escritura: false,
  EMF: false,
  Orbes: false,
  Temperaturas: false,
  Spirit: false,
  Huellas: false,
};
var listaPosibles = [];

document.addEventListener('DOMContentLoaded', () => {
  ocultarPosibles();
  cambiarColor();
  reiniciarCaja();
});

function ocultarPosibles() {
  const posibles = document.querySelector('.fantasmas__posibles');
  const fantasmas = document.querySelector('.fantasmas');
  if (posibles.innerHTML.trim() === '' || posibles.classList.contains('ocultar')) {
    fantasmas.classList.add('hidden');
  } else {
    fantasmas.classList.remove('hidden');
  }
}

function cambiarColor() {
  for (var i = 0; i < cajas.length; i++) {
    cajas[i].onclick = (e) => {
      if (e.currentTarget.classList.contains('caja__check')) {
        if (e.currentTarget.classList.contains('caja')) {
          e.currentTarget.classList.remove('caja__check');
          actualizarFantasma(Number(e.currentTarget.id) + 1, false);
        } else {
          e.path[3].classList.remove('caja__check');
          actualizarFantasma(Number(e.path[3].id) + 1, false);
        }
      } else {
        if (e.currentTarget.classList.contains('caja')) {
          e.currentTarget.classList.add('caja__check');
          actualizarFantasma(Number(e.currentTarget.id) + 1, true);
        } else {
          e.path[3].classList.add('caja__check');
          actualizarFantasma(Number(e.path[3].id) + 1, true);
        }
      }
      ocultarPosibles();
    };
  }
}

function actualizarFantasma(botonId, booleano) {
  let iteraciones = 0;

  for (prueba in fantasmaBuscado) {
    if (iteraciones == botonId) {
      fantasmaBuscado[prueba] = booleano;
    }
    iteraciones++;
  }

  let lista = buscarFantasma();
  borrarLista();
  aniadirFantasmasPosibles(lista);
}

function buscarFantasma() {
  listaPosibles = [];

  fantasmas.forEach((fantasma) => {
    coincide = true;
    for (prueba in fantasma) {
      if (fantasmaBuscado[prueba] == true && fantasma[prueba] !== true) {
        coincide = false;
      }
    }
    if (coincide) {
      listaPosibles.push(fantasma);
    }
  });

  return listaPosibles;
}

function encontrarPruebas(fantasma, primer_prueba, segunda_prueba, tercera_prueba, cuarta_prueba) {
  primero_ocupado = false;
  segundo_ocupado = false;
  tercero_ocupado = false;
  cuarto_ocupado = false;

  for (prueba in fantasma) {
    if (primero_ocupado == false && fantasma[prueba] == true) {
      primer_prueba.textContent = String(prueba);
      primero_ocupado = true;

      if (fantasmaBuscado[prueba] == true) {
        primer_prueba.classList.add('caja__check');
      } else {
        primer_prueba.classList.remove('caja__check');
      }
    } else if (segundo_ocupado == false && fantasma[prueba] == true) {
      segunda_prueba.textContent = String(prueba);
      segundo_ocupado = true;

      if (fantasmaBuscado[prueba] == true) {
        segunda_prueba.classList.add('caja__check');
      } else {
        segunda_prueba.classList.remove('caja__check');
      }
    } else if (tercero_ocupado == false && fantasma[prueba] == true) {
      tercera_prueba.textContent = String(prueba);
      tercero_ocupado = true;

      if (fantasmaBuscado[prueba] == true) {
        tercera_prueba.classList.add('caja__check');
      } else {
        tercera_prueba.classList.remove('caja__check');
      }
    } else if (cuarto_ocupado == false && fantasma[prueba] == true) {
      cuarta_prueba.textContent = String(prueba);
      cuarto_ocupado = true;

      if (fantasmaBuscado[prueba] == true) {
        cuarta_prueba.classList.add('caja__check');
      } else {
        cuarta_prueba.classList.remove('caja__check');
      }
    }
  }
}

function aniadirFantasmasPosibles(listaPosibles) {
  if (document.querySelectorAll('.caja__check').length <= 0) {
    return;
  }

  const lista = document.querySelector('.fantasmas__posibles');
  lista.classList.remove('ocultar');

  for (let i = 0; i < listaPosibles.length; i++) {
    const strength = document.createElement('i');
    strength.classList.add('fa-solid', 'fa-circle-exclamation');

    const weakness = document.createElement('i');
    weakness.classList.add('fa-solid', 'fa-circle-info');

    const fantasma = document.createElement('li');

    const div_pruebas = document.createElement('div');
    div_pruebas.classList.add('fantasma__pruebas');

    const primer_prueba = document.createElement('span');
    primer_prueba.classList.add('fantasma__prueba');

    const segunda_prueba = document.createElement('span');
    segunda_prueba.classList.add('fantasma__prueba');

    const tercera_prueba = document.createElement('span');
    tercera_prueba.classList.add('fantasma__prueba');

    if (listaPosibles[i].nombre == 'Mimico') {
      div_pruebas.classList.add('fantasma__pruebas--mimico');
      const cuarta_prueba = document.createElement('span');
      cuarta_prueba.classList.add('fantasma__prueba');
      encontrarPruebas(
        listaPosibles[i],
        primer_prueba,
        segunda_prueba,
        tercera_prueba,
        cuarta_prueba
      );
      div_pruebas.appendChild(cuarta_prueba);
    } else {
      encontrarPruebas(listaPosibles[i], primer_prueba, segunda_prueba, tercera_prueba);
    }

    div_pruebas.appendChild(primer_prueba);
    div_pruebas.appendChild(segunda_prueba);
    div_pruebas.appendChild(tercera_prueba);

    const div_propiedades = document.createElement('div');
    div_propiedades.classList.add('fantasma__propiedades');

    const boton = document.createElement('div');
    boton.classList.add('boton-flex');
    const eliminar = document.createElement('div');
    eliminar.classList.add('boton-x');
    const eliminar_texto = document.createElement('p');
    eliminar_texto.textContent = 'X';
    eliminar.appendChild(eliminar_texto);
    boton.appendChild(eliminar);
    div_propiedades.appendChild(boton);

    const nombre = document.createElement('a');
    nombre.classList.add('fantasma__nombre');
    nombre.setAttribute('href', listaPosibles[i].wiki);
    nombre.setAttribute('target', '_blank');
    nombre.textContent = listaPosibles[i].nombre;

    const fortaleza = document.createElement('div');
    fortaleza.appendChild(strength);
    const fortaleza_span = document.createElement('span');
    fortaleza_span.textContent = 'Fortaleza:' + listaPosibles[i]['fortaleza'];
    fortaleza.appendChild(fortaleza_span);
    fortaleza.classList.add('fantasma__habilidades');

    const debilidad = document.createElement('div');
    debilidad.appendChild(weakness);
    const debilidad_span = document.createElement('span');
    debilidad_span.textContent = 'Debilidad:' + listaPosibles[i]['debilidad'];
    debilidad.appendChild(debilidad_span);
    debilidad.classList.add('fantasma__habilidades');

    div_propiedades.appendChild(nombre);
    div_propiedades.appendChild(div_pruebas);
    div_propiedades.appendChild(fortaleza);
    div_propiedades.appendChild(debilidad);

    fantasma.appendChild(div_propiedades);

    fantasma.classList.add('caja-fantasma', 'animate__animated', 'animate__zoomIn');
    lista.appendChild(fantasma);

    eliminar.addEventListener('click', (e) => e.path[3].remove());
  }
}

function borrarLista() {
  const cajas_fantasma = document.querySelectorAll('.caja-fantasma');

  for (let i = 0; i < cajas_fantasma.length; i++) {
    cajas_fantasma[i].remove();
  }
}

function reiniciarCaja() {
  const caja = document.querySelector('.reiniciar-caja');
  const seccionFantasmas = document.querySelector('.fantasmas__posibles');

  caja.onclick = (e) => {
    for (let i = 0; i < cajas.length; i++) {
      cajas[i].classList.remove('caja__check');
      actualizarFantasma(Number(i) + 1, false);
    }
    seccionFantasmas.classList.add('ocultar');
    ocultarPosibles();
  };
}
