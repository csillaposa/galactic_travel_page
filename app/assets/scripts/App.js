import '../styles/styles.css';
import 'lazysizes';
import BurgerMenu from './modules/BurgerMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

new BurgerMenu();
new RevealOnScroll(document.querySelectorAll(".features__item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonials__item"), 60);
new StickyHeader();

let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        //promise
        //if the promise is returned, then() is called, where we create the new instance of the object
        //if there is a problem, catch() is called
        if (typeof modal == "undefined") {
            import('./modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20);
            }).catch(() => console.log("There was a problem."));
        } else {
            modal.openTheModal();
        }
    })
})

if(module.hot) {
    module.hot.accept()
}