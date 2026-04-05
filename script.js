// ===============================
// MENU MOBILE FUNCIONAL CORRETO
// ===============================

// Seleciona o botão do menu (☰)
const menuToggle = document.getElementById('menu-toggle')

// Seleciona a lista do menu (UL)
const menu = document.querySelector('.menu-principal ul')

// Evento de clique no botão
menuToggle.addEventListener('click', () => {
    // Adiciona ou remove a classe 'active'
    menu.classList.toggle('active')
})

// Seleciona todos os links do menu
const links = document.querySelectorAll('.menu-principal ul li a')

// Para cada link...
links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove a classe active (fecha o menu)
        menu.classList.remove('active')
    })
})

// ===============================
// SCROLL SUAVE ENTRE SEÇÕES
// ===============================

// Seleciona todos os links que começam com #
const linksInternos = document.querySelectorAll('a[href^="#"]')

// Para cada link...
linksInternos.forEach(link => {
    link.addEventListener('click', function(e) {

        // Impede o comportamento padrão (pulo seco)
        e.preventDefault()

        // Pega o ID da seção (ex: #home)
        const id = this.getAttribute('href')

        // Seleciona a seção correspondente
        const secao = document.querySelector(id)

        // Faz o scroll suave
        secao.scrollIntoView({
            behavior: 'smooth'
        })
    })
})

// ===============================
// DESTACAR MENU ATIVO AO ROLAR
// ===============================

const secoes = document.querySelectorAll('section')
const menuLinks = document.querySelectorAll('.menu-principal ul li a')

window.addEventListener('scroll', () => {

    let scrollY = window.pageYOffset

    secoes.forEach(secao => {

        const alturaSecao = secao.offsetHeight
        const topoSecao = secao.offsetTop - 100
        const id = secao.getAttribute('id')

        if (scrollY > topoSecao && scrollY <= topoSecao + alturaSecao) {

            menuLinks.forEach(link => {
                link.classList.remove('active')
            })

            document
                .querySelector(`.menu-principal ul li a[href*=${id}]`)
                .classList.add('active')
        }
    })
})

// ===============================
// ANIMAÇÃO AO ROLAR
// ===============================

// Seleciona todos os elementos que queremos animar
const elementosAnimar = document.querySelectorAll('.animar')

// Função que verifica se o elemento está na tela
function animarAoRolar() {

    // Altura da tela
    const alturaTela = window.innerHeight

    elementosAnimar.forEach(elemento => {

        // Posição do elemento
        const topoElemento = elemento.getBoundingClientRect().top

        // Se o elemento estiver visível na tela
        if (topoElemento < alturaTela - 100) {
            elemento.classList.add('ativo')
        }
    })
}

// Evento de scroll
window.addEventListener('scroll', animarAoRolar)

// Executa ao carregar a página
animarAoRolar()

// ===============================
// VALIDAÇÃO DE FORMULÁRIO
// ===============================

// Seleciona o formulário
const form = document.getElementById('form-contato')

// Evento de envio
form.addEventListener('submit', function(e) {

    // Impede envio padrão
    e.preventDefault()

    // Pegando os valores
    const nome = form.nome.value.trim()
    const email = form.email.value.trim()
    const telefone = form.telefone.value.trim()
    const mensagem = form.mensagem.value.trim()

    // Validação simples
    if (nome === '' || email === '' || telefone === '' || mensagem === '') {
        alert('⚠️ Por favor, preencha todos os campos!')
        return
    }

    // Validação de email simples
    if (!email.includes('@') || !email.includes('.')) {
        alert('⚠️ Digite um email válido!')
        return
    }

    // Sucesso
    alert('✅ Mensagem enviada com sucesso! Em breve entraremos em contato.')

    // Limpa o formulário
    form.reset()
})

