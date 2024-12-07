class PortfolioLinks extends HTMLElement {
    constructor() {
        super();
        const page = this.getAttribute('page');

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <br>
            <div>
                <div class="links" id="portfolio1"> 
                    Portfolio#1 - Computer Science as Discipline, Computing Disciplines and Majors 
                </div>

                <div class="links" id="portfolio2"> 
                    Portfolio#2 - Data, Information, and Information Systems
                </div>

                <div class="links" id="portfolio3"> 
                    Portfolio#3 - Number Systems
                </div>

                <div class="links" id="portfolio4"> 
                    Portfolio#4 - Computer Hardware and Software: Their Implementation in the different institutions in the community
                </div>

                <div class="links" id="portfolio5"> 
                    Portfolio#5 - Comparative Study on Different Types of Motherboards 
                </div>

                <div class="links" id="portfolio6">
                    Portfolio#6 - Comparative Study on Different Types of Computers
                </div>
                
            </div>
            <br>
        `;

        for (let i = 1; i <= 6; i++) {
            let link = this.shadowRoot.getElementById(`portfolio${i}`)
            link.style.marginBottom = '10px';
            link.style.cursor = 'pointer';
            link.setAttribute('title', `Go to Portfolio#${i}`);
        }

        this.shadowRoot.getElementById('portfolio1').addEventListener('click', () => {
            window.location.href = `../portfolios/portfolio1-4/page.html?page=portfolio1&n-slides=8&prev-page=${page}`;
        });
        this.shadowRoot.getElementById('portfolio2').addEventListener('click', () => {
            window.location.href = `../portfolios/portfolio1-4/page.html?page=portfolio2&n-slides=8&prev-page=${page}`;
        });
        this.shadowRoot.getElementById('portfolio3').addEventListener('click', () => {
            window.location.href = `../portfolios/portfolio1-4/page.html?page=portfolio3&n-slides=8&prev-page=${page}`;
        });
        this.shadowRoot.getElementById('portfolio4').addEventListener('click', () => {
            window.location.href = `../portfolios/portfolio1-4/page.html?page=portfolio4&n-slides=11&prev-page=${page}`;
        });
        this.shadowRoot.getElementById('portfolio5').addEventListener('click', () => {
            window.location.href = `../portfolios/portfolio5/page.html?prev-page=${page}`;
        });
        this.shadowRoot.getElementById('portfolio6').addEventListener('click', () => {
            window.location.href = `../portfolios/portfolio6/page.html?prev-page=${page}`;
        });

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../portfolios/links_style.css';
        this.shadowRoot.appendChild(link);
    }

}
customElements.define('portfolio-links', PortfolioLinks);


