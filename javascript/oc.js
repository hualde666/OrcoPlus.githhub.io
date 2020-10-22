

function cambioimagen(i){
    var imagen1=["imagenes/ciro/FOTO CIRO.png",'imagenes/gato/Bills f.jpg',"imagenes/granada/ciro-hernandez-2.jpg","imagenes/krilin/krilin1.jpg","imagenes/mono/mono1.jpg","imagenes/muñeca/ciro-hernandez-6.jpg","imagenes/panda/panda1.jpg"];
    var imagen2=["imagenes/ciro/FOTO CIRO.png","imagenes/gato/Bills b.jpg","imagenes/granada/ciro-hernandez-1.jpg","imagenes/krilin/krilin2.jpg", "imagenes/mono/mono2.jpg","imagenes/muñeca/ciro-hernandez-2.jpg","imagenes/panda/panda2.jpg"];
    var imagen3=["imagenes/ciro/FOTO CIRO.png","imagenes/gato/Bills l.jpg","imagenes/granada/ciro-hernandez-3.jpg","imagenes/krilin/krilin3.jpg","imagenes/mono/mono3.jpg","imagenes/muñeca/ciro-hernandez-3.jpg","imagenes/panda/panda3.jpg"];
    var hslider1=['Ciro Hernandez','Gato','Granada','Krilin','mono','muñeca','panda'];
    var tslider1=['Graphic Designer, 3D art','Presentacion frontal del gato','Presentacion frontal del granada','Presentacion frontal del krilin','Presentacion frontal del mono','Presentacion frontal del muñeca','Presentacion frontal del panda'];
    var tslider2=['Graphic Designer, 3D art','Presentacion trasera del gato','Presentacion trasera del granada','Presentacion trasera del krilin','Presentacion trasera del mono','Presentacion trasera del muñeca','Presentacion trasera del panda'];
    var tslider3=['Graphic Designer, 3D art','Presentacion lateral del gato','Presentacion lateral del granada','Presentacion lateral del krilin','Presentacion lateral del mono','Presentacion lateral del muñeca','Presentacion lateral del panda'];

            // asignamos imagenes carrusel
            document.getElementById("primero").src =imagen1[i];
            document.getElementById("segundo").src =imagen2[i];
            document.getElementById("tercero").src =imagen3[i];
 
            // titulo de cada imagen del carrusel
            document.getElementById("hslide").innerHTML = hslider1[i];
            document.getElementById("hslide2").innerHTML = hslider1[i]; 
            document.getElementById("hslide3").innerHTML = hslider1[i];

            // descripcion de cada imagen del carrusel
            document.getElementById("tslide1").innerHTML = tslider1[i];
            document.getElementById("tslide2").innerHTML = tslider2[i];
            document.getElementById("tslide3").innerHTML = tslider3[i];
// switch (opcion) {


// case imagen6: document.getElementById("primero").src = "imagenes/panda/panda1.jpg"; document.getElementById("segundo").src =
//               "imagenes/panda/panda2.jpg"; document.getElementById("tercero").src = "imagenes/panda/panda3.jpg";
//               document.getElementById("hslide").innerHTML = 'Panda'; document.getElementById("hslide2").innerHTML ='Panda';
//               document.getElementById("hslide3").innerHTML = 'Panda'; document.getElementById("tslide1").innerHTML = 'Presentacion frontal del panda'; document.getElementById("tslide2").innerHTML = 'Presentacion trasera del panda';
//               document.getElementById("tslide3").innerHTML = 'Presentacion lateral del panda';
// break;
// default: break; 

// }  
 
}

var imagenes = ['1.png','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg'];
var titulos = ['titulo 1','titulo 2','titulo 3','titulo 4','titulo 5','titulo 6','titulo 7'];


var i = 0;
var imagentext = ""
for (imagen of imagenes){

    imagentext = "imagen"+ i;
     galeria.innerHTML += ` <article class="articulo"> <img id=${imagentext} class= "imagen-galeria"  src= "${imagen}"  alt="img1" onclick="cambioimagen(${i})"    />  <figcaption id = "texto-imagen">"${titulos[i]}"</figcaption> </a> </article>`;
      i++;
     

 }




