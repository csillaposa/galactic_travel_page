class BurgerMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__menu-icon");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {
        console.log("Hooray");
    }
}

export default BurgerMenu;