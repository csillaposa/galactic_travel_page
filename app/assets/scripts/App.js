import '../styles/styles.css';
import BurgerMenu from './modules/BurgerMenu';
import RevealOnScroll from './modules/RevealOnScroll';

new BurgerMenu();
new RevealOnScroll();

if(module.hot) {
    module.hot.accept()
}