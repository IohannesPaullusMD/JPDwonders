class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                #my-footer-1 {
                    position: fixed;
                    bottom: 0;
                }
            </style>
            
            <div>
                <a id="my-footer-1" href="../about/page.html">
                    <h1>JPDwonders</h1>
                </a>
            </div>
        `;

    }

}
customElements.define('my-footer', Footer);
