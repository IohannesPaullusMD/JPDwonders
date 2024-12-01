class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div>
                <a href="../home/page.html">
                    <h1>JPDwonders</h1>
                </a>
            </div>
        `;
    }

}
customElements.define('my-header', Header);
