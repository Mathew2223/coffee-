const popUp = document.getElementById('pop_up');
const cardTitle = document.getElementsByClassName('card-titleS')[0];
const cardText = document.getElementsByClassName('card-textS')[0];
const cardPrice = document.getElementsByClassName('doll7S', 'totall')[0];
const cardImg = document.getElementsByClassName('card-img-topS')[0];

const openModalWIndow = (title, description, price, imgSrc) => {
    popUp.classList.add('pop_up_active');
    cardTitle.textContent = title
    cardText.textContent = description
    cardPrice.textContent = price
    cardImg.src = imgSrc
    console.log(cardTitle, cardText, cardPrice, cardImg)
}


const closePopUp = () => {
    popUp.classList.remove('pop_up_active');
    console.log(popUp)
};

