console.log("Load");
//document.getElementById('contenido').style.display = 'none';
function openNav() {
  document.getElementById('contenido').style.display = '', 100;
};
if (window.scrollY >= 50) {
document.getElementsById('top').style.display = 'block';
console.log(window.scrollY);
} else if (window.scrollY <= 50) {
  document.getElementById('top').style.display = 'none';
  console.log(window.scrollY);
}

         function onloading() {
          let rangeValue = document.getElementById('range').value;
          let x = 0;
          let y = x * 100;
          console.log("data is changing")
          if (rangeValue != y) {
            document.getElementById('contenido').style.fontSize = rangeValue + "px";
            console.log("The fontSize is: " + rangeValue + "px");
          } else {
            console.log('is not');
          }
         };
         document.getElementById('headerNav').style.width = "0px";
         function openHeaderNav() {
           document.getElementById('headerNav').style.width = "250px";
           document.getElementById('headerNavContent').style.display = 'block';
           console.log("Navigation open");
         }
         function closeHeaderNav() {
           document.getElementById('headerNav').style.width = "0px";
           document.getElementById('headerNavContent').style.display = 'none';
           console.log("Navigation closed");
         }
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