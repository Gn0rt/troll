const yes = document.getElementById('yes');
const no = document.getElementById('no');

no.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 200));
    const y = Math.floor(Math.random() * (window.innerHeight - 200));

    no.style.left = `${x}px`;
    no.style.top = `${y}px`;



});
const modal = document.querySelector('.modal');
const modalCl = document.querySelector('.modal-close');

yes.addEventListener('click', showBuy);
modalCl.addEventListener('click', closeModal);
function showBuy() {
    modal.classList.add('open');
}
function closeModal() {
    modal.classList.remove('open');
}
console.log(yes, no);
