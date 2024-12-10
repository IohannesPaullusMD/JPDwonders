(() => {
    const tab = "&nbsp;&nbsp;&nbsp;&nbsp;";

    const introText = `
            ${tab} Hi there! Welcome to JPDwonders, my portfolio website. 
            This site shows the work I've done for my Introduction to Computing course. 
            Each portfolio project explores different topics in computing, 
            driven by my interest and passion for the subject.
            Feel free to explore each portfolio to see 
            my journey through these fascinating topics. 
            I hope you find these projects as interesting 
            and enlightening as I did while creating them. 
            Thanks for visiting, and enjoy your stay!
    `;

    const introTag = document.getElementById('intro-text');
    introTag.innerHTML = introText;
})();
