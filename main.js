//char = a,b,c
//string = texto

//number=1,2,3

//boolean= true ou false

//DOM Documento Object Model

//Abre e fecha menu quando clicar no ícone: hamburguer e x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show') //se tem o show tira se n tem bota
  })
}

//Quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar o header da página quando der scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //scroll maior ou igual que a altura do header
    header.classList.add('scroll')
  } else {
    //scroll menor que a altura do header
    header.classList.remove('scroll')
  }
}

//Carrosel de Depoimentos Swiper
const swiper = new Swiper('.swiper-container', {
  //funções construtoras como Swiper e ScrollReveal começam com letra maiúscula
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//ScrollReveal: Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
//pode fzr aspas com crase e da pra da enter
scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services .header, #services .card,
  #testimonials .header, #testimonials .testmonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

//Botão voltar pro topo
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//Menu ativo conforme a secção visível na página
const sections = document.querySelectorAll('main section[id]')
//toda section que contém o [id]

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  //divide a página

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
