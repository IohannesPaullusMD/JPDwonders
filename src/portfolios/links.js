class PortfolioLinks extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <br>
            <div>
                <ul>
                    <li> <a href="../portfolios/page.html"> Portfolio 1</a> </li>
                    <li> <a href="../portfolios/page.html"> Portfolio 2</a> </li>
                    <li> <a href="../portfolios/page.html"> Portfolio 3</a> </li>
                    <li> <a href="../portfolios/page.html"> Portfolio 4</a> </li>
                    <li> <a href="../portfolios/page.html"> Portfolio 5</a> </li>
                    <li> <a href="../portfolios/page.html"> Portfolio 6</a> </li>
                </ul>
            </div>
            <br>
        `;
    }

}
customElements.define('portfolio-links', PortfolioLinks);
