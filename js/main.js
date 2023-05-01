const selects = document.querySelectorAll('.select');
selects.forEach(el => {
    new Choices(el, {
        shouldSort: false,
        position: 'bottom',
        searchEnabled: false,
    });
});

const scrollBtn = document.querySelector('.go-to-top');
const coords = document.documentElement.clientHeight;
window.onscroll = () => {
    if (window.scrollY > coords) {
        scrollBtn.classList.add('go-to-top--show');
    } else {
        scrollBtn.classList.remove('go-to-top--show');
    }
}
scrollBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}