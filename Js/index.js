let display = document.getElementById("tela")
let expressao = ''

function adicionaValores(valores){
    // Verifica se o valor é um número ou um sinal não operante
    if (!isNaN(valores) || valores === '.' || valores === '(' || valores === ')') {
        // Se for um número ou ponto, adiciona ao final da expressão
        expressao += valores
    } else if ('+-*/'.includes(valores)){
        // Se for um sinal, substitui o último sinal da expressão pelo novo
        const ultimoValor = expressao.slice(-1)
        if ('+-*/'.includes(ultimoValor)){
            expressao = expressao.slice(0, -1) + valores

        } else {
            expressao += valores;
        }
    }
    display.value = expressao
}
/*Os valores vêm direitamente dos botões!*/
adicionaValores(valores)

/*Botão igual =*/
function calcular(){

    while(expressao.slice(-1) === '+' || expressao.slice(-1) === '-' || expressao.slice(-1) === '*' || expressao.slice(-1) === '/'){
        expressao = expressao.slice(0, -1);
    }

    let res = eval(expressao)

    if(display.value == 0 || res == undefined){
        window.alert(`Digite um número!`)
        res = '0'
    }else{
        display.value = res
        //expressao = res
    } 
}

/*Botão Deleta Del */
function deleta1(){
    expressao = expressao.slice(0, -1);
    display.value = expressao
}

/*Botão limpar C*/
function limpar(){
    display.value = "0" 
    expressao = ''
}