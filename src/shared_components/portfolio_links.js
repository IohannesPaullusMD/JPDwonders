(() => {
    const links = document.getElementsByClassName('portfolio-links')[0];
    const currPage = links.getAttribute('page');
    const portfolioTitles = [
        'Portfolio#1 - Computer Science as Discipline, Computing Disciplines and Majors',
        'Portfolio#2 - Data, Information, and Information Systems',
        'Portfolio#3 - Number Systems',
        'Portfolio#4 - Computer Hardware and Software: Their Implementation in the different institutions in the community',
        'Portfolio#5 - Comparative Study on Different Types of Motherboards',
        'Portfolio#6 - Comparative Study on Different Types of Computers'
    ];
    const portfolioLinks = [
        `../portfolios/portfolio1-4/page.html?page=portfolio1&n-slides=8&prev-page=${currPage}`,
        `../portfolios/portfolio1-4/page.html?page=portfolio2&n-slides=8&prev-page=${currPage}`,
        `../portfolios/portfolio1-4/page.html?page=portfolio3&n-slides=8&prev-page=${currPage}`,
        `../portfolios/portfolio1-4/page.html?page=portfolio4&n-slides=11&prev-page=${currPage}`,
        `../portfolios/portfolio5/page.html?prev-page=${currPage}`,
        `../portfolios/portfolio6/page.html?prev-page=${currPage}`
    ];

    links.innerHTML = '<h2>Portfolio Links</h2>';

    for (let i = 0; i < portfolioTitles.length; i++) {
        const aTag = document.createElement('a');
        // const pTag = document.createElement('p');
        aTag.innerHTML = portfolioTitles[i] + '<br><br>';
        aTag.href = portfolioLinks[i];
        links.appendChild(aTag);
    }

})();
