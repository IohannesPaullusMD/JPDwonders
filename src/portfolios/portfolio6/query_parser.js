function fn() {
    let prevPage = new URLSearchParams(window.location.search).get('prev-page');

    if (prevPage === 'home') {
        prevPage =  '../../home/page.html';
    } else if (prevPage === 'portfolios') {
        prevPage =  '../page.html';
    }

    document.getElementById('go-back').setAttribute('href', prevPage);
}

fn();
