import '../styles/styles.css';
import BurgerMenu from './modules/BurgerMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';
import StickyHeader from './modules/StickyHeader';

new BurgerMenu();
new RevealOnScroll(document.querySelectorAll(".features__item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonials__item"), 60);
new Modal();
new StickyHeader();

if(module.hot) {
    module.hot.accept()
}