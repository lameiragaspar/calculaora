let display = document.getElementById("tela")
let exprecao = ''

function adicionaValores(valores){
    if(display.value == 0 ){
        exprecao = valores
    }else{
        exprecao += valores
    }
    display.value = exprecao
}
/*Os valores vêm direitamente dos botões!*/
adicionaValores(valores)

function calcular(){
    let res = eval(exprecao)

    if(display.value == 0 || res == undefined){
        window.alert(`Digite um número!`)
        res = '0'
    }else{
        display.value = res
        exprecao = res
    } 
}

function limpar(){
    display.value = "0" 
    exprecao = ''
}