

function cambioimagen(opcion){

switch (opcion) {

case imagen0: document.getElementById("primero").src = "imagenes/ciro/FOTO CIRO.png";
              document.getElementById("segundo").src = "imagenes/ciro/FOTO CIRO.png"; document.getElementById("tercero").src =
              "imagenes/ciro/FOTO CIRO.png"; document.getElementById("hslide").innerHTML = 'Ciro Hernandez';
              document.getElementById("hslide2").innerHTML = 'Ciro Hernandez'; document.getElementById("hslide3").innerHTML = 'Ciro Hernandez'; document.getElementById("tslide1").innerHTML = 'Graphic Designer, 3D art';
              document.getElementById("tslide2").innerHTML = 'Maya, Mudbxo, ZBrush,Phptoshop,';
              document.getElementById("tslide3").innerHTML = 'Metal Ray, FurryBall and others Software.';

break;

case imagen1: document.getElementById("primero").src = "imagenes/gato/Bills f.jpg";
              document.getElementById("segundo").src = "imagenes/gato/Bills b.jpg"; document.getElementById("tercero").src =
              "imagenes/gato/Bills l.jpg"; document.getElementById("hslide").innerHTML = 'Gato';
              document.getElementById("hslide2").innerHTML = 'Gato'; document.getElementById("hslide3").innerHTML = 'Gato';
              document.getElementById("tslide1").innerHTML = 'Presentacion frontal del gato';
              document.getElementById("tslide2").innerHTML = 'Presentacion trasera del gato';
              document.getElementById("tslide3").innerHTML = 'Presentacion lateral del gato';

break;


case imagen2: document.getElementById("primero").src = "imagenes/granada/ciro-hernandez-1.jpg"; document.getElementById("segundo").src
              = "imagenes/granada/ciro-hernandez-2.jpg"; document.getElementById("tercero").src =
              "imagenes/granada/ciro-hernandez-3.jpg"; document.getElementById("hslide").innerHTML = 'Granada';
              document.getElementById("hslide2").innerHTML ='Granada'; document.getElementById("hslide3").innerHTML = 'Granada';
              document.getElementById("tslide1").innerHTML = 'Presentacion frontal del granada';
              document.getElementById("tslide2").innerHTML = 'Presentacion trasera del granada';
              document.getElementById("tslide3").innerHTML = 'Presentacion lateral del granada';
break;
case imagen3: document.getElementById("primero").src = "imagenes/krilin/krilin1.jpg"; document.getElementById("segundo").src =
              "imagenes/krilin/krilin2.jpg"; document.getElementById("tercero").src = "imagenes/krilin/krilin3.jpg";
              document.getElementById("hslide").innerHTML = 'Krilin'; document.getElementById("hslide2").innerHTML ='Krilin';
              document.getElementById("hslide3").innerHTML = 'Krilin'; document.getElementById("tslide1").innerHTML = 'Presentacion frontal del krilin'; document.getElementById("tslide2").innerHTML = 'Presentacion trasera del krilin';
              document.getElementById("tslide3").innerHTML = 'Presentacion lateral del krilin';
break;
case imagen4: document.getElementById("primero").src = "imagenes/mono/mono1.jpg"; document.getElementById("segundo").src =
              "imagenes/mono/mono2.jpg"; document.getElementById("tercero").src = "imagenes/mono/mono3.jpg";
              document.getElementById("hslide").innerHTML = 'Mono'; document.getElementById("hslide2").innerHTML ='Mono';
              document.getElementById("hslide3").innerHTML = 'Mono'; document.getElementById("tslide1").innerHTML = 'Presentacion frontal del mono'; document.getElementById("tslide2").innerHTML = 'Presentacion trasera del mono';
              document.getElementById("tslide3").innerHTML = 'Presentacion lateral del mono';
break; 


case imagen5: document.getElementById("primero").src = "imagenes/muñeca/ciro-hernandez-6.jpg";
              document.getElementById("segundo").src = "imagenes/muñeca/ciro-hernandez-2.jpg"; document.getElementById("tercero").src
              = "imagenes/muñeca/ciro-hernandez-3.jpg"; document.getElementById("hslide").innerHTML = 'Muñeca';
              document.getElementById("hslide2").innerHTML = 'Muñeca'; document.getElementById("hslide3").innerHTML = 'Muñeca';
              document.getElementById("tslide1").innerHTML = 'Presentacion frontal del muñeca';
              document.getElementById("tslide2").innerHTML = 'Presentacion trasera del muñeca';
              document.getElementById("tslide3").innerHTML = 'Presentacion lateral del muñeca';
break;


case imagen6: document.getElementById("primero").src = "imagenes/panda/panda1.jpg"; document.getElementById("segundo").src =
              "imagenes/panda/panda2.jpg"; document.getElementById("tercero").src = "imagenes/panda/panda3.jpg";
              document.getElementById("hslide").innerHTML = 'Panda'; document.getElementById("hslide2").innerHTML ='Panda';
              document.getElementById("hslide3").innerHTML = 'Panda'; document.getElementById("tslide1").innerHTML = 'Presentacion frontal del panda'; document.getElementById("tslide2").innerHTML = 'Presentacion trasera del panda';
              document.getElementById("tslide3").innerHTML = 'Presentacion lateral del panda';
break;
default: break; 

}  
 
}

var imagenes = ['1.png','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg'];
var titulos = ['titulo 1','titulo 2','titulo 3','titulo 4','titulo 5','titulo 6','titulo 7'];


var i = 0;
var imagentext = ""
for (imagen of imagenes){

    imagentext = "imagen"+ i;
     galeria.innerHTML += `<article id="articulo"> <img id=${imagentext} class= "imagen-galeria"  src= "${imagen}"  alt="img1" onclick="cambioimagen(${imagentext})"  style="border-radius: 50%;"  />  <figcaption id = "texto-imagen">"${titulos[i]}"</figcaption> </a> </article>`;
      i++;
     

 }




