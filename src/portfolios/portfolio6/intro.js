(() => {
        const tab = "&nbsp;&nbsp;&nbsp;&nbsp;";

        const introText = `${tab} Computers come in various forms and serve a lot of purposes. From the powerful
                        supercomputers used in research labs to the regular personal computers in homes and
                        offices, each type of computer is designed to meet specific needs. This study looks at
                        the different kinds of computers, comparing their features, performance, and usual
                        uses.
        `;

        const introTag = document.getElementById('intro-text');
        introTag.innerHTML = introText;
        introTag.style.textAlign = 'justify';
})();
