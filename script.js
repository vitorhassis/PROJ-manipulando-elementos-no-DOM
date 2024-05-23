document.querySelector('html')
document.querySelector('#timer')
document.querySelector('.app__card-primary-button')
document.querySelector('.app__image')
document.querySelector('.app__title')

//primeiro passo. buscando os elementos la no html pelo queryselector.

//como estamos voltando aos estudos de js, vou deixar assim. mas vc n precisa, e nem deve ser bom, primeiro fazer o query selector e dps criar a constante, voce consegue fazer direto! mais eficiente.

const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const displayTempo = document.querySelector('#timer')
const botaoIniciar = document.querySelector('.app__card-primary-button')
const titulo = document.querySelector('.app__title')
const musicafocoInput = document.querySelector('#alternar-musica')
const iniciarOuPausarBt = document.querySelector('#start-pause span') //pegamos o <span>Começar</span>
const iniciarOuPausarImag = document.querySelector('.app__card-primary-butto-icon')
const botoes = document.querySelectorAll('.app__card-button')
const tempoNaTela = document.querySelector('#timer')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const startPauseBt = document.querySelector('#start-pause')
const audioTempoFinalizado = new Audio('/sons/beep.mp3')
const audioPlay = new Audio('/sons/play.wav')
const audioPausa = new Audio('/sons/pause.mp3')
//new Audio =  é a BASE para MANIPULAR AUDIOS em JavaScript. Você pode usá-la para carregar, reproduzir, pausar e controlar outros aspectos da reprodução de áudio em sua aplicação web.
let tempoDecorridoEmSegundos = 1500; 
let intervaloId = null;
musica.loop = true;
const tempFoco = 1500;
const tempDescanso = 300;
const tempDescansoLongo = 900;
//segundo-terceiro passo. criamos variaveis para guardar cada tipo de elemento selecionado. as constantes serão utilizadas para a definição dos botões!

//'change' evento usado quando trabalhamos com input do tipo checkbox, que eh true or false, ou seja, o botao estiver acionado ou nao.
musicafocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})


focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco')
    focoBt.classList.add('active') 
    //CLASSLIST trabalha com classes. adicionamos a classe "active", que por sua vez, está configurado em css para ficar esse estilo de fundo, que é presente ao clicar em Foco, Descanso curto, Descanso longo.
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900 //15 min x 60 = 900 segundos
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
    
})

function alterarContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function (contexto){
    //forEach eh um metodo de array que itera sobre cada elemento na COLEÇÃO BOTÕES. Ou seja, para cada elemento "botoes", a função de callback eh executada.
        contexto.classList.remove('active');
    })
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

//criamos um if pq ele nao iria parar nunca de fazer a contagem.
const contagemRegressiva = () => {  
    if(tempoDecorridoEmSegundos<=0) {
        audioTempoFinalizado.play()
        alert('Tempo finalizado!')
        zerar()
        return //colocamos o return para parar de executar
    }
    tempoDecorridoEmSegundos -= 1 //decremento de tempo
    mostrarTempo();
}
//função dentro de uma variavel, n podemos fazer o eventlistener antes dela, apenas depois

//evento de clique adicionado ao botao startpauseBt. qnd o botao for clicado, a função iniciarOuPausar eh executada.
startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() { //controla o inicio e a pausa do temporizador
    if(intervaloId){
       audioPausa.play(); 
        zerar();
        return
    } else {
    audioPlay.play(); //audio executado quando o cronometro iniciar
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar"
    iniciarOuPausarImag.setAttribute('src', `/imagens/pause.png`)
    //criamos uma const q pega o span "começar", e aq definimos que ela terá seu texto alterado, passando de começar para Pausar
    }
}

//função criada para parar o interromper o alerta
function zerar() {
    clearInterval(intervaloId) //parar o intervaloId
    iniciarOuPausarBt.textContent = "Começar"
    iniciarOuPausarImag.setAttribute('src', `/imagens/play_arrow.png`)

    intervaloId = null //indica que o temporizador nao esta mais em execução  
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}` //texto em html sempre entre crases. essa string eh para aparecer entao a const tempo no espaço que até entao estava vazio.
}

mostrarTempo() //puxamos a função para fora, para ela ficar sempre em exposição!





