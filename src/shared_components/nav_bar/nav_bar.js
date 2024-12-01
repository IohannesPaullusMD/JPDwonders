class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <span>
                <button id='home-button'> Home </button>
                <button id='portfolios-button'> Porfolios </button>
                <button id='about-button'> About </button>
            </span>
        `;

        this.shadowRoot.getElementById('home-button').addEventListener('click', goToHomePage);
        this.shadowRoot.getElementById('portfolios-button').addEventListener('click', goToPortfoliosPage);
        this.shadowRoot.getElementById('about-button').addEventListener('click', goToAboutPage);

    }

}
customElements.define('my-nav-bar', NavBar);

function goToHomePage() {
    window.location.href = '../home/page.html';
}

function goToPortfoliosPage() {
    window.location.href = '../portfolios/page.html';
}

function goToAboutPage() {
    window.location.href = '../about/page.html';
}
