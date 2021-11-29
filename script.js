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