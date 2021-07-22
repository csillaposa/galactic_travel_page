import '../styles/styles.css';
import BurgerMenu from './modules/BurgerMenu';
import RevealOnScroll from './modules/RevealOnScroll';

new BurgerMenu();
new RevealOnScroll(document.querySelectorAll(".features__item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonials__item"), 60);

if(module.hot) {
    module.hot.accept()
}