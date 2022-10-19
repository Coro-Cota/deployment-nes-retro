let nes = document.querySelector('img');

const helloAlert = evt => {
    alert('You just purchased 200 copies of E.T. for Atari!');
}

nes.addEventListener('click', helloAlert);