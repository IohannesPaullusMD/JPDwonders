(() => {
    const container = document.getElementById('references');

    let references = [
            // source 1
            `Atchison, W. F. (1971). Computer Science as a New Discipline. 
            International Journal of Electrical Engineering Education, 
            9(2), 130–135. doi:10.1177/002072097100900209 `,
            // source 2
            `Bernroider, E. W., Pilkington, A., & Córdoba, J.-R. (2013). 
            Research in information systems: 
            a study of diversity and inter-disciplinary discourse in the AIS basket journals between 1995 and 2011. 
            Journal of Information Technology, 28(1), 74-89. doi:10.1057/jit.2013.5`,
            // source 3
            `Clark, M. (2003). Computer Science: A hard-applied discipline? 
            Teaching in Higher Education, 8(1), 71–87. 
            https://doi.org/10.1080/1356251032000052339`,
            // source 4
            `Fahmi, M. (2008). Vagueness and software engineering. 
            Interdisciplinary Science Reviews, 33(3), 244–253. 
            doi:10.1179/174327908x366932`,
            // source 5
            `Hodgson, R. M., Stephenson, F. W., & Whitehead, D. G. (1975). 
            An Undergraduate Course in Computer Engineering. 
            International Journal of Electrical Engineering Education, 12(3), 235–245. 
            doi:10.1177/002072097501200309`,
            //source 6
            `McKenzie, S., Coldwell-Neilson, J., & Palmer, S. (2017).
            Informing the career development of IT students by understanding
            their career aspirations and skill development action plans. 
            Australian Journal of Career Development, 26(1), 14–23. 
            doi:10.1177/1038416217697972`
    ];

    for (let i = 0; i < references.length; i++) {
        let li = document.createElement('li');
        let p = document.createElement('p');
        
        p.innerHTML = references[i];
        p.style.textAlign = 'justify';
        li.appendChild(p);
        container.appendChild(li);
    }

})();
