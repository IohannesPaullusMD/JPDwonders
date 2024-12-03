
/*
<style>
    #my-footer-1 {
        position: fixed;
        bottom: 0;
    }
</style>
*/

class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            
            
            <div>
                <a id="my-footer-1" href="${this.getAttribute('about-ref')}">
                    <h1>JPDwonders</h1>
                </a>
            </div>
        `;

    }

}
customElements.define('my-footer', Footer);
