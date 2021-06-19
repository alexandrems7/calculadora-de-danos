/* Indica meus inimigos e os titans */
const viloes = document.querySelectorAll('.vilao');
const titans = document.querySelectorAll('.titan');

let vilaoSelecionado = 0;
let titanSelecionado = 0;
let nomeVilao = 0;
let memoria = 0

// ENTENDER QUE EU CLIQUEI EM UM INIMIGO, E SELECIONAR ESTE INIMIGO
for (const vilao of viloes) {

    vilao.addEventListener('click', function () {


        if (document.getElementsByClassName('vilao-selecionado').length < 1) { // caso a quantidade de classes 'inimigo-selecionado' forem MENOR que 1, ou seja, ZERO, executa o if abaixo
            this.classList.add('vilao-selecionado'); // adiciona a classe 'inimigo-selecionado' ao elemento clicado
            vilaoSelecionado = this.getAttribute('data-vida'); // adiciona o valor de 'data-vida' do elemento clicado à variável inimigoSelecionado
            nomeVilao = this.getAttribute('data-nome');
        } else { // caso a quantidade de classes 'inimigo-selecionado' forem MAIOR que 1, executa o else
            this.classList.remove('vilao-selecionado'); // ao ser clicado, remove a classe 'inimigo-selecionado' do meu elemento se este já possui esta classe
            vilaoSelecionado = 0
            nomevilao = 0
        }
    })
}
// ENTENDER QUE EU CLIQUEI EM UM TITAN, E SELECIONAR ESTA ARMA
for (const titan of titans) {

    titan.addEventListener('click', function () {

        if (document.getElementsByClassName('titan-selecionado').length < 1) {
            this.classList.add('titan-selecionado');
            titanSelecionado = this.getAttribute('data-dano');

        } else {
            this.classList.remove('titan-selecionado');
            titanSelecionado = 0
        }
    })
}

function calcularDano() {
    const vidaVilao = vilaoSelecionado - titanSelecionado;
    



    let resultado = 'Vilão ';

    if (vilaoSelecionado == false && titanSelecionado == false) {
        alert('Ops! \nVocê precisa selecionar um inimigo e um TITAN!!!')}
        /*  window.alert('Você precisa selecionar um inimigo e uma arma!!!'); */

    if (vilaoSelecionado == true || titanSelecionado == false) {
        alert('Ops! \nVocê se esqueceu de selecionar um TITAN!!!')}
        

    
    if (vilaoSelecionado == 0 || titanSelecionado == 1) {
        alert('Ops! \nVocê se esqueceu de selecionar um INIMIGO!!!')}





     else {
        if (vidaVilao == 0) {
            resultado += 'possui ' + vidaVilao + ' de vida. PARABÉNS, você matou ' + nomeVilao + '!';
            /* window.alert(`Vida VILÃO: ${vidaVilao}! PARABÉNS! Você matou ${nomeVilao}!!!`); */
        }if (vidaVilao < 0) {
            resultado += 'possui 0 de vida. PARABÉNS, você matou ' + nomeVilao+ '!';
            /*  window.alert(`Vida VILÃO = 0 ! PARABÉNS! Você matou ${nomeVilao}!!!`);} */

        }if (vidaVilao > 0) {
            resultado += ' ainda possui ' + vidaVilao + ' de vida. TENTE NOVAMENTE com outro Titan!!!'

            
            /* window.alert((`${nomeVilao} ainda possui ${vidaVilao} de vida.\n`)+ (`TENTE NOVAMENTE com outro Titan!!!`)) */;
            }
        }
        document.getElementById('dano').innerHTML = resultado;
        document.getElementById('vilao').classList.remove('vilao-selecionado');
        document.getElementById('titan').classList.remove('titan-seleciondo');

    }
