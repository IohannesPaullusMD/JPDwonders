
/*
<style>
    #my-footer-1 {
        position: fixed;
        bottom: 0;
    }
</style>
*/
function pushBottom(push) {
    let style = '';
    if (push) {
        style = `
            <style>
                #my-footer-1 {
                    position: fixed;
                    bottom: 0;
                }
            </style>
        `;
    }

    return style;
}

class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            ${pushBottom(this.getAttribute('push-bottom'))}

            <div id="my-footer-1">
                <a href="${this.getAttribute('about-ref')}">
                    <h1>JPDwonders</h1>
                </a>
            </div>
        `;

        this.shadowRoot.styleSheets
    }

}
customElements.define('my-footer', Footer);
