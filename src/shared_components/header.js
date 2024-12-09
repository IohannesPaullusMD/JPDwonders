(() => {
    const header = document.getElementsByClassName('header')[0];
    header.innerHTML = `
        <a href="${header.getAttribute('home-ref')}">
            <h1>JPDwonders</h1>
        </a>
    `;
})();
