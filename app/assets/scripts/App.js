import '../styles/styles.css';
import BurgerMenu from './modules/BurgerMenu';

new BurgerMenu();

if(module.hot) {
    module.hot.accept()
}