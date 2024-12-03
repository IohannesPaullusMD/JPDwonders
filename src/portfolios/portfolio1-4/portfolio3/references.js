const container = document.getElementById('references');

let references = [
        // source 1
        `Aggarwal, K. K. (1987). Number Systems and Codes. 
        IETE Journal of Education, 28(2), 51–59. 
        doi:10.1080/09747338.1987.11436146`,
        // source 2
        `Berger, R. W. (1980). Digital Logic and Arithmetic: 
        Background for Interfacing Microcomputers. A I I E Transactions, 12(1), 3–14. 
        doi:10.1080/05695558008974484`,
        // source 3
        `Gupta, R. K. (2019). Number Systems. 
        In Numerical Methods: Fundamentals and Applications (pp. 1–12). 
        chapter, Cambridge: Cambridge University Press. 
        doi:10.1017/9781108685306.002`,
        // source 4
        `Kohavi, Z., & Jha, N. K. (2009). Number systems and codes. 
        Switching and Finite Automata Theory, 3–22. 
        doi:10.1017/cbo9780511816239.002`,
        // source 5
        `Shelburne, B. J. (2018). The Goldilocks of Number Systems. 
        Math Horizons, 25(4), 10–13. 
        https://doi.org/10.1080/10724117.2018.1434285`
];

for (let i = 0; i < references.length; i++) {
    let li = document.createElement('li');
    let p = document.createElement('p');
    
    p.innerHTML = references[i];
    p.style.textAlign = 'justify';
    li.appendChild(p);
    container.appendChild(li);
}
