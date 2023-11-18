
function insert(num){
    expressao += num;
    atualizarVisor();
}
function clean() {
    expressao = "";
    atualizarVisor();
}
function back(){
    
}
function calcular(){
    
}

// usar a seguinte função nas outras funcionalidades
function atualizarVisor() {
    document.getElementById("resultado").innerText = expressao;
}
module.exports = {insert, clean, back, calcular}
