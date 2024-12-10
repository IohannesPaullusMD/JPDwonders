(() => {
    const footer = document.getElementsByClassName('footer')[0];
    footer.innerHTML = `
        <a href="${footer.getAttribute('about-ref')}">
            <h1>JPDwonders</h1>
        </a>
    `;
})();
