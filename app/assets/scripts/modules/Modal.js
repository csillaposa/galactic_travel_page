class Modal {
    constructor() {
        this.injectHTML();
        this.modal = document.querySelector(".modal");
        this.closeIcon = document.querySelector(".modal__close");
        this.openModalButtons = document.querySelectorAll(".open-modal");
        this.events();
    }

    events() {
        //listen for open click
        this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))
        //listen for close click
        this.closeIcon.addEventListener("click", () => this.closeTheModal());
        //esc key is pressed
        document.addEventListener("keyup", e => this.keyPressHandler(e));
    }

    openTheModal(e) {
        e.preventDefault();
        this.modal.classList.add("modal--is-visible");
    }

    closeTheModal() {
        this.modal.classList.remove("modal--is-visible");
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeTheModal();
        }
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
      <div class="modal__inner">
        <div class="modal__inner-title-img">
          <img src="assets/images/icons/mail.png" class="section-title__icon">
          <h2> Get in <strong>Touch</strong></h2>
        </div>
        <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
  
        <div class="modal__social-icons">
          <a href="#" class="modal__social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
          <a href="#" class="modal__social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
          <a href="#" class="modal__social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
          <a href="#" class="modal__social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
        </div>
      </div>
      <div class="modal__close">X</div>
    </div>
        `)
    }
}

export default Modal;