(() => {
        const tab = "&nbsp;&nbsp;&nbsp;&nbsp;";

        const introText = `${tab}Motherboards are the backbone of any computer system, serving as the central
                hub that connects all the components of a computer and allows them to communicate
                with each other. Motherboards come in various types and form factors that are designed
                to meet specific needs and preferences. This study aims to explore the different types of
                motherboards, focusing on their unique features, advantages, and disadvantages. By
                understanding the difference between these motherboards, users can make informed
                decisions when building or upgrading their computer systems. This study will only cover
                common motherboard types such as AT, ATX, Micro-ATX, Mini-ITX, Extended-ATX, and
                BTX, providing an overview of their characteristics and suitability for different uses.
        `;

        const introTag = document.getElementById('intro-text');

        introTag.innerHTML = introText;
        introTag.style.textAlign = 'justify';

})();
