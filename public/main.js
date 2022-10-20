let nes = document.querySelector('img');

const secretPurchase = evt => {
    alert(`You've just purchased 200 copies of E.T. for Atari!`);
}

nes.addEventListener('click', secretPurchase);