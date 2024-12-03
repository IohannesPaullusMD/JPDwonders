class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div>
                <a href="${this.getAttribute('home-ref')}">
                    <h1>JPDwonders</h1>
                </a>
            </div>
        `;
    }

}
customElements.define('my-header', Header);
