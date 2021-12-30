console.log("Código cargado");

/*    Función de px por rangos     */
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

/*        Navegación       */
document.getElementById('headerNav').style.width = "0px";

    // Función abrir navegación
function openHeaderNav() {
  document.getElementById('headerNav').style.width = "250px";
  document.getElementById('headerNavContent').style.display = 'block';
  console.log("The navigation is open.");
  };

    // Función cerrar navegación
function closeHeaderNav() {
  document.getElementById('headerNav').style.width = "0px";
  document.getElementById('headerNavContent').style.display = 'none';
  console.log("The navigation is closed.");
  };