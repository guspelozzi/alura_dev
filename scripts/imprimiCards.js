let dadosCard = JSON.parse(localStorage.getItem("dadosCard"))

function imprimiCard() {
    let imprimi = document.getElementById('result')
    let card = ""

    for (i = 0; i < dadosCard.length; i++) {
        card += `<div class="card__edit">`
        card += `<div class="card__fundo-codigo" style="background-color:${dadosCard[i].cor}">`
        card += `<div class="card__container-cod">`
        card += `<div class="circles card__circles">`
        card += `<div class="circle1"></div>`
        card += `<div class="circle2"></div>`
        card += `<div class="circle3"></div>`
        card += `</div>`
        card += `<div class="card__inpt-dev">`
        card += `<code spellcheck="false">`
        card += dadosCard[i].cod
        card += `</code>`
        card += `</div>`
        card += `</div>`
        card += `</div>`
        card += `</section >`

        card += `<section class="card__dados">`
        card += `<div class="card__info-card">`
        card += `<h2 class="card__title">`
        card += dadosCard[i].title
        card += `</h2>`
        card += `<p class="card__description">`
        card += dadosCard[i].description
        card += `</p>`
        card += `</div>`
        card += `<div class="card__social">`
        card += `<div class="card__likes-comments">`
        card += `<div class="card__comments">`
        card += `<img src="./img/Comments.svg" alt="Comentários"></img>`
        card += `<p class="card__n-comments">0</p>`
        card += `</div>`
        card += `<div class="card__likes">`
        card += `<img src="./img/Like.svg" alt="Likes"></img>`
        card += `<p class="card__n-likes">0</p>`
        card += `</div>`
        card += `</div>`
        card += `<div class="card__user">`
        card += `<img src="https://criticalhits.com.br/wp-content/uploads/2021/11/zoro-one-piece.jpg" alt="Usuário" class="card__img-user"></img>`
        card += `<p class="card__user-name">`
        card += `@Harry`
        card += `</p>`
        card += `</div>`
        card += `</div>`
        card += `</div>`
        card += `</div>`


        /* console.log(`O item 5 do array é ${dados[i].id} e ${dados[i].nome}.`) */
    }

    imprimi.innerHTML = card
}

/* imprimiCard() */

window.addEventListener("load", imprimiCard)