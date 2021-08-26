console.log('ready');

function advert() {
    alert("Proximamente..");
};

function imprimir() {
    document.getElementById('footer').style.display = "none"; 
    await 5s;
    window.print()
}