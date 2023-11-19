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
function calcular() {
    // Obtém o elemento #resultado
    const resultadoElemento = document.getElementById('resultado');
  
    // Obtém a expressão do conteúdo do elemento
    const expressao = resultadoElemento.innerHTML;
  
    // Remove espaços em branco da expressão e verifica se está vazia
    if (!expressao.trim()) {
      // Se a expressão estiver vazia, exibe a mensagem 'Nada para calcular'
      resultadoElemento.innerHTML = 'Nada para calcular';
      return;
    }
  
    try {
      // Tenta realizar o cálculo
      const resultado = Function('"use strict";return (' + expressao + ')')();
  
      // Atualiza o conteúdo do elemento #resultado com o resultado calculado
      resultadoElemento.innerHTML = resultado.toString();
    } catch (error) {
      // Em caso de erro, define o conteúdo do elemento como 'Erro'
      resultadoElemento.innerHTML = 'Erro';
    }
  }

// usar a seguinte função nas outras funcionalidades
function atualizarVisor() {
    document.getElementById("resultado").innerText = expressao;
}
module.exports = {insert, clean, back, calcular}
