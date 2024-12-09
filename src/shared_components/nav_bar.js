(() => {
    const navBar = document.getElementsByClassName('nav-bar')[0];
    navBar.innerHTML = `
        <a href="${navBar.getAttribute('home-ref')}"> Home </a>
        <a href="${navBar.getAttribute('portfolios-ref')}"> Porfolios </a>
        <a href="${navBar.getAttribute('about-ref')}"> About </a>
    `;
})();
