import '../styles/styles.css';
import BurgerMenu from './modules/BurgerMenu';
import RevealOnScroll from './modules/RevealOnScroll';

new BurgerMenu();
new RevealOnScroll(document.querySelectorAll(".features__item"));
new RevealOnScroll(document.querySelectorAll(".testimonials__item"));

if(module.hot) {
    module.hot.accept()
}