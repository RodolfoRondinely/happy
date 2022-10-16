    /* VARIAVEIS DO FORMULARIO */

const formSubmit = document.querySelector('#formSubmit')
const formNome = document.querySelector('#formNome')
const formEnd = document.querySelector('#formEnd')
const formTel = document.querySelector('#formTel')
const formMensagem = document.querySelector('#formMensagem')

formSubmit.addEventListener('click', element=>{
  element.preventDefault()
    const url = ("https://api.whatsapp.com/send?phone=553196197493&text=Olá Happynet :) %0AMeu nome é "+formNome.value+"%0Amoro na %0A "+formEnd.value+"%0Ameu telefone é : "+formTel.value+"%0A+"+formMensagem.value+"%0A");
window.open(url);
})

    /* ON CLICK PARA EXIBIR SECTION HISTORIA DA EMPRESA */

const historia = document.querySelector('#historia')
  historia.addEventListener('click',()=>{
  
  document.querySelector('.quemSomos').style.display='flex'
  document.querySelector('main').style.display='none'
  document.querySelector(".autoral").style.display='block'
  const liContato = document.querySelector('ul li')

  if (liContato.textContent=='Contato'){
    liContato.style.display='none'
    alert=(liContato)
  }

})

    /* ON CLICK PARA EXIBIR PAGINA PRINCIPAL */

const pageMain = document.querySelector('#pageMain')
  pageMain.addEventListener('click', ()=>{

  document.querySelector('main').style.display='inline'
  document.querySelector('.quemSomos').style.display='none'
  document.querySelector('.planosSection').style.display='none'
  document.querySelector(".autoral").style.display='block'
})

    /* ON CLICK QUE DIRECIONA PARA AREA DO CLIENTE EM NOVA JANELA */

const areaCl = document.querySelector('#ClientArea')
  areaCl.addEventListener('click',()=>{

    const urlCliente = ("https://sistema.happynet.net.br/radiusnet/cda")
      window.open(urlCliente)
})

 /* ON CLICK QUE DIRECIONA PARA AREA DO CLIENTE EM NOVA JANELA */

const planosSectionShow = document.querySelector('#boxPlanos')
  planosSectionShow.addEventListener('click', ()=>{

    document.querySelector('.planosSection').style.display='flex'
    document.querySelector('main').style.display='none'
    document.querySelector('.quemSomos').style.display='none'
    document.querySelector(".autoral").style.display='block'

  })

    /* SLIDES CARROSEL*/



document.querySelector('.carrosselSlides').style.width = `calc(100vw * $(totalSlides))`
   
/* 
function anterior (){
  currentSlides--
  if(currentSlides<0){
    currentSlides = totalSlides-1
  }
  updantingMargin()
}

function next (){
  currentSlides++
  if(currentSlides > (totalSlides-1)){
    currentSlides = 0
  }
  updantingMargin()
} */
function updantingMargin(){

  let newMargin =  (currentSlides* document.body.clientWidth)  
  document.querySelector('.carrosselSlides').style.marginLeft=`-${newMargin}vw`
  console.log('kkh');
}

setInterval (mostra,6000)

let imagens = document.querySelectorAll('.carrosselSlides img')
let tela = document.querySelector('.carrosselSlides')
let max = imagens.length
let currentImageIndex = 0 

function mostra(){
  currentImageIndex++
  tela.style.marginLeft=`calc(-100vw*${currentImageIndex})`
    if(currentImageIndex >= max){
      tela.style.marginLeft=0
        currentImageIndex=0
}
  console.log(tela);
  
}



const topo = document.querySelector('.topo')
topo.addEventListener('click', ()=>{
  window.scroll(0,0)
  window.scroll.smoth
})


    /* MENU hamburguer MOSTRAR E ESCONDER */

const hamburguer  = document.querySelector(".hambuerguer")
const header = document.querySelector('header')
const nav = document.querySelector('header')

/* const escondeNav = document.querySelector('nav ul')

escondeNav.addEventListener('click',()=>{
  if(window.clientWidth<'650px'){
    escondeNav.style.display='none'
  }
}) */

hamburguer.addEventListener('click', ()=>{

 let menuUL  = document.querySelector('nav ul')
if (menuUL.style.display=='none') {
  menuUL.style.display='flex'
  menuUL.style.flexDirection='column'
    //header.style.height='60vh'


  
    } else {
      menuUL.style.display='none'
      //header.style.height='20vh'

}

})
  
/* ENVIAR FORMULARIO DE CONTRATACAO DE PLANOS */
/* const btnContratar = document.querySelectorAll('.btnContratar input')

const enviarForm = (btnContratar) =>{
  
}
      btnContratar.forEach((item,posicao) =>{
        enviarForm(item)
        addEventListener('click',()=>{
          console.log('al',posicao);
          alert(p)
      
        })
      })


 */











