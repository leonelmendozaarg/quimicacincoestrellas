console.log('ready');

function advert() {
    alert("Proximamente..");
};

function print() {
    document.getElementById('footer').style.display = "none"; 
    await 5s;
    window.print()
}