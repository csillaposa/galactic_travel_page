import axios from "axios";

class ClientArea {
    constructor() {
        this.injectHTML();
        this.form = document.querySelector(".client-area__form");
        this.field = document.querySelector(".client-area__input");
        this.contentArea = document.querySelector(".client-area__content-area");
        this.events();
    }

    events() {
        this.form.addEventListener("submit", e => {
            //to not let the page refresh
            e.preventDefault();
            this.sendRequest();
        })
    }

    //to communicate with the cloud function
    sendRequest() {
        //axios request results in a PROMISE
        axios.post('https://awesome-roentgen-df94b5.netlify.app/.netlify/functions/secret-area', {password: this.field.value}).then(response => {
            this.form.remove();
            this.contentArea.innerHTML = response.data;
        }).catch(() => {
            this.contentArea.innerHTML = `<p class="client-area__error">The secret phrase is not correct. Try again. Or not.</p>`;
            this.field.value = '';
            this.field.focus();
        });
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="client-area">
        <h2 class="section-title">Secret Client Area</h2>
        <form class="client-area__form" action="">
          <input class="client-area__input" type="text" placeholder="Enter the secret phrase">
          <button class="client-area__btn">Submit</button>
        </form>
        <div class="client-area__content-area"></div>
        </div>
        `)
    }
}

export default ClientArea;