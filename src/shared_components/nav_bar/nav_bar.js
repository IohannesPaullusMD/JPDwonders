class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                button:hover {
                    background-color: #000000;
                    color: #ffffff;
                }
            </style>

            <span>
                <button id='home-button'> Home </button>
                <button id='portfolios-button'> Porfolios </button>
                <button id='about-button'> About </button>
            </span>
        `;

        this.shadowRoot.getElementById('home-button').style.cursor = 'pointer';
        this.shadowRoot.getElementById('portfolios-button').style.cursor = 'pointer';
        this.shadowRoot.getElementById('about-button').style.cursor = 'pointer';

        this.shadowRoot.getElementById('home-button').addEventListener('click', () => {
            window.location.href = this.getAttribute('home-ref');
        });

        this.shadowRoot.getElementById('portfolios-button').addEventListener('click', () => {
            window.location.href = this.getAttribute('portfolios-ref');
        });
        this.shadowRoot.getElementById('about-button').addEventListener('click', () => {
            window.location.href = this.getAttribute('about-ref');
        });
    }

}

customElements.define('my-nav-bar', NavBar);

