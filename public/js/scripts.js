var expressao ='';
function insert(num){
    expressao += num;
    atualizarVisor();
}
function clean() {
    expressao = "";
    atualizarVisor();
}
function back(){
    expressao = expressao.slice(0, -1);
    atualizarVisor();
}
function calcular(){
    try {
        expressao = eval(expressao).toString();
        atualizarVisor();
    } catch (error) {
        expressao = "Erro";
        atualizarVisor();
    }
}

// usar a seguinte função nas outras funcionalidades
function atualizarVisor() {
    document.getElementById("resultado").innerText = expressao;
}
module.exports = {insert, clean, back, calcular}
