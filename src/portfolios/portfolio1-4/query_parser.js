function getTitle(page) {
    let title = 'null';

    switch (page) {
        case 'portfolio1':
            title = 'Portfolio#1 - Computer Science as Discipline, Computing Disciplines and Majors'
            break;
    
        case 'portfolio2':
            title = 'Portfolio#2 - Data, Information, and Information Systems'
            break;

        case 'portfolio3':
            title = 'Portfolio#3 - Number Systems'
            break;

        case 'portfolio4':
            title = 'Portfolio#4 - Computer Hardware and Software: Their Implementation in the different institutions in the community'
            break;
    }

    return title;
}

(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    const nSlides = params.get('n-slides');
    const pageNum = document.getElementById('page-num');
    let prevPage = params.get('prev-page');
    
    if (page && nSlides && prevPage) {
        const img = document.getElementById('slides');
        const refScript = document.getElementById('ref-script');

        img.setAttribute('page', page);
        img.setAttribute('n-slides', nSlides);
        img.setAttribute('src', `${page}/slides/Slide1.SVG`);
        img.setAttribute('curr-slide', '1');

        refScript.setAttribute('src', `${page}/references.js`);     
        pageNum.innerHTML = `1/${nSlides}`;
        document.getElementById('title').innerHTML = getTitle(page);

        if (prevPage === 'home') {
            prevPage =  '../../home/page.html';
        } else if (prevPage === 'portfolios') {
            prevPage =  '../page.html';
        }

        document.getElementById('go-back').setAttribute('href', prevPage);
    } else {
        window.location.href = '../page.html';
    }
})();
