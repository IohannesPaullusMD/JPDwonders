(() => {
    const introText = `
        Hi! I'm JP Denaya, and I wish you a peaceful mind. Here's a bit about me and my journey.
        <br><br>

        <b> Interests and Hobbies </b> <br>
        I like acquiring new skills. I'm a musician and enjoy solving problems through coding. 
        These hobbies keep me engaged and constantly learning.
        <br><br>

        <b> My Path to Computing and Technology </b> <br>
        My interest in computing started with the amazing idea 
        that we can create AI from simple materials like silicon. 
        This transformation from rocks to powerful technology 
        fascinates me and drives my interest in this field.
        <br><br>

        <b> Key Experiences </b> <br>
        Growing up, I was quite introverted and preferred my own company. 
        But college has pushed me to step out of my comfort zone 
        and be more social, even if I'm still not very talkative. 
        This change has been important for my personal growth.
        <br><br>

        <b> Future Goals and Aspirations </b> <br>
        I aim to be a polymath—a person with knowledge in many different areas. 
        This goal motivates me to keep learning and exploring various subjects.
        <br><br>
        
        Thanks for reading about my journey. I hope to keep growing and making a difference through my interests and skills.
    `;

    const introTag = document.getElementById('biography-text');
    introTag.innerHTML = introText;
    introTag.style.textAlign = 'justify';
})();
