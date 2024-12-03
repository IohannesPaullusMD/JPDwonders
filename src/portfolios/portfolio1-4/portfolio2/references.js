const container = document.getElementById('references');

let references = [
        // source 1
        `Demchak, M. (1986). Designing a Management Information System for a Special Education Organization. 
        Journal of Special Education Technology, 7(4), 37–44. 
        doi:10.1177/016264348600700406`,
        // source 2
        `Lin, B., & Austin, J. A. (1990). Developing a Decision Support System for Enrollment Forecasting. 
        Journal of Educational Technology Systems, 19(2), 91–100. 
        doi:10.2190/kra1-uqkw-dxpu-xe42`,
        // source 3
        `Meadow, C. T., & Yuan, W. (1997). Measuring the impact of information: Defining the concepts. 
        Information Processing & Management, 33(6), 697–714. 
        doi:10.1016/s0306-4573(97)00042-3`,
        // source 4
        `Müller, L. S., & Hertel, G. (2023). 
        Trusting information systems in everyday work events – effects on cognitive resources,
        performance, and well-being. Ergonomics, 1–18. 
        https://doi.org/10.1080/00140139.2023.2286910`,
        // source 5
        `Nandhakumar, J. (1996). Executive Information System Development: 
        A Case Study of a Manufacturing Company. 
        Journal of Information Technology, 11(3), 199–209. 
        doi:10.1177/026839629601100302`,
        //source 6
        `Takahara, Y., Liu, Y., Chen, X., & Yano, Y. (2005). 
        Model theory approach to transaction processing system development. 
        International Journal of General Systems, 34(5), 537–557. 
        doi:10.1080/030810705001952504`
];

for (let i = 0; i < references.length; i++) {
    let li = document.createElement('li');
    let p = document.createElement('p');
    
    p.innerHTML = references[i];
    p.style.textAlign = 'justify';
    li.appendChild(p);
    container.appendChild(li);
}
