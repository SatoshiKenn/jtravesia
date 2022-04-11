const cunamayor = document.querySelector("#btncuna");
const cunacerrar = document.querySelector("#cunacerrar");
const nivelmedio = document.querySelector("#btnmedio");
const mediocerrar = document.querySelector("#nivelmedio");
const transicion = document.querySelector("#btntransicion");
const transicioncerrar = document.querySelector("#transicioncerrar");


cunamayor.addEventListener("click", function() {
    document.querySelector("#cunamayor").style.display = "block";
})

cunacerrar.addEventListener("click", function() {
    document.querySelector("#cunamayor").style.display = "none";
})

nivelmedio.addEventListener("click", function() {
    document.querySelector("#nivelmedio").style.display = "block";
})

mediocerrar.addEventListener("click", function() {
    document.querySelector("#nivelmedio").style.display = "none";
})

transicion.addEventListener("click", function() {
    document.querySelector("#transicion").style.display = "block";
})

transicioncerrar.addEventListener("click", function() {
    document.querySelector("#transicion").style.display = "none";
})