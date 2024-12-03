const container = document.getElementById('references');

let references = [
        // source 1
        `Fluency with information technology: Skills, concepts, & capabilities, Snyder, L, 2015`,
        // source 2
        `Introduction to Information Systems 13th Edition by 
        James O'Brien , George Marakas,  McGraw-Hill/Irwin; 13 edition (October 26, 2005), 
        ISBN-10: 0073043559,  ISBN-13: 978-0073043555`,
        // source 3
        `https://simple.wikipedia.org/wiki/Software`,
        // source 4
        `https://usc.instructure.com/courses/42279/pages/software-concepts`,
        // source 5
        `https://en.wikipedia.org/wiki/Computer_hardware`,
        //source 6
        `https://searchnetworking.techtarget.com/definition/hardware`
];

for (let i = 0; i < references.length; i++) {
    let li = document.createElement('li');
    let p = document.createElement('p');
    
    p.innerHTML = references[i];
    p.style.textAlign = 'justify';
    li.appendChild(p);
    container.appendChild(li);
}
