document.querySelector('html')
document.querySelector('#timer')
document.querySelector('.app__card-primary-button')
document.querySelector('.app__image')
document.querySelector('.app__title')
//primeiro passo. buscando os elementos la no html pelo queryselector.


const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const displayTempo = document.querySelector('#timer')
const botaoIniciar = document.querySelector('.app__card-primary-button')
const titulo = document.querySelector('.app__title')
const tempFoco = 1500;
const tempDescanso = 300;
const tempDescansoLongo = 900;
//segundo/terceiro passo. criamos variaveis para guardar cada tipo de elemento selecionado. as constantes serão utilizadas para a definição dos botões!


focoBt.addEventListener('click', () => {
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    
    switch (contexto) {
        case "foco":
            titulo.innerHTML = 
            `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            //inserimos o texto, juntamente com a sua classe
        
        break;
        
        case "descanso-curto":
            titulo.innerHTML = 
            `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`
        break;

        case "descanso-longo":
            titulo.innerHTML =
            ` Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`

        default:
            break;
    
    }
//switch = permite a execução de diferentes blocos de código com base no valor de uma expressão. neste caso, "contexto".
}










