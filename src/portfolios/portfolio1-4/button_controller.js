function fn() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const img = document.getElementById('slides');
    const pageNum = document.getElementById('page-num');
    const nSlides = img.getAttribute('n-slides');
    const page = img.getAttribute('page');

    let currSlide = img.getAttribute('curr-slide');
    
    nextButton.addEventListener('click', () => {
        
        if (currSlide >= nSlides) return;
        
        currSlide++;
        img.setAttribute('src', `${page}/slides/Slide${currSlide}.SVG`);
        img.setAttribute('curr-slide', currSlide);

        pageNum.innerHTML = `${currSlide}/${nSlides}`
    });

    prevButton.addEventListener('click', () => {
        
        if (currSlide <= 1) return;
        
        currSlide--;
        img.setAttribute('src', `${page}/slides/Slide${currSlide}.SVG`);
        img.setAttribute('curr-slide', currSlide);

        pageNum.innerHTML = `${currSlide}/${nSlides}`
    });
}

fn();

