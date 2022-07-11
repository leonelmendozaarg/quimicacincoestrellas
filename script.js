
         document.getElementById('Nav').style.width = "0px";
         
         function openNav() {
           document.getElementById('Nav').style.width = "250px";
           document.getElementById('NavContent').style.display = 'block';
           console.log("Navigation open");
         }
         function closeNav() {
           document.getElementById('Nav').style.width = "0px";
           document.getElementById('NavContent').style.display = 'none';
           console.log("Navigation closed");
         }
         // Función "Modo Oscuro" con Ingreso de Rangos.
         function darkMode() {
           let rangeValue = document.getElementById('range').value;
           console.log("Dark mode: switch working.")
           let x = rangeValue <= 50;
           let z = rangeValue >= 50;
           if (x) {
             document.body.style.background = "white";
             document.getElementById('headerNav').style.background = "blue";
             console.log("Switched to white mode");
           } else if (z) {
             document.body.style.background = "black";
             document.getElementById('headerNav').style.background = //"#025348";
             console.log("Switched to black mode");
           } else {
             console.log("Wont work.")
              
           }
}
 function Contact() {
    var Contact = "contact.html";
    window.open(Contact);
 }
 
 function Us() {
     var Us = "us.html";
     window.open(Us);
 }
 
 function Products() {
     var Products = "products.html";
     window.open(Products);
 }

 /*
 console.log(window.scrollY);
 const scrollY = window.scrollY;
 let halfY = 50%;
 document.getElementById('Arrow').style.display = 'none';
 function Top() {
     if (scrollY == HalfY) {
         document.getElementById('Arrow').style.display = 'none';
     }
 }
 */