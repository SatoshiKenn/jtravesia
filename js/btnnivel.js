const cunamayor = document.querySelector("#btncuna");
const cunacerrar = document.querySelector("#cunacerrar");
const nivelmedio = document.querySelector("#btnmedio");
const transicion = document.querySelector("#btntransicion");


cunamayor.addEventListener("click", function() {
    document.querySelector("#cunamayor").style.display = "block";
})

cunacerrar.addEventListener("click", function() {
    document.querySelector("#cunamayor").style.display = "none";
})