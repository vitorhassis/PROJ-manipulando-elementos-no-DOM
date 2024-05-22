const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')

//criamos constantes que sao relativas a cada botao la em html, dps atribuimos eventos em cada um, em que, no momento do click, o elemento data-contexto no HTML terá seu valor modificado para foco, descanso-curto, e descanso-longo. os quais, possuem caracteristicas diferentes que foram definidas no CSS




focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    //foco, descanso curto, e descanso longo seria o data-contexto em css, e cada um possui propriedades diferentes (cores)
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})


document.querySelector('html')
document.querySelector('#timer')
document.querySelector('.app__card-primary-button')
document.querySelector('.app__image')
document.querySelector('.app__title')


const startpBt = document.querySelector('.app__card-primary-button')
