class BurgerMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__menu-icon");
        this.menuContent = document.querySelector(".site-header__menu-content");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {
        //i can create classes like this and add styling 
        //which will appear and disappear (toggle) when clicked
        //so we can add extra styling for these elements
        this.menuContent.classList.toggle("site-header__menu-content--is-visible");
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
    }
}

export default BurgerMenu;