(() => {
        const tab = "&nbsp;&nbsp;&nbsp;&nbsp;";

        const introText = `${tab} Computers come in various forms and serve a lot of purposes. From the powerful
                        supercomputers used in research labs to the regular personal computers in homes and
                        offices, each type of computer is designed to meet specific needs. This study looks at
                        the different kinds of computers, comparing their features, performance, and usual
                        uses.
        `;

        const computersText = [
                        // supercomputer
                        `${tab} Supercomputers like IBM Summit are the powerhouses of the
                        computing world, designed to handle extremely complex calculations and
                        simulations. Their multiple CPUs and parallel processing capabilities
                        enable them to achieve processing
                        speeds measured in petaflops, making them ideal for scientific
                        research, weather forecasting, and large-scale simulations. However,
                        their high energy consumption is a notable trade-off for their immense computing power.`, 
                        // mainframe
                        `${tab} Mainframes like IBM Z15 are built for large-scale reliability
                        and transaction processing. They are commonly used in industries such as
                        banking, insurance, and government. With high memory and CPU capacity,mainframes
                        excel at handling vast amounts of data and ensuring continuous, uninterrupted service.`,
                        // mini computer
                        `${tab} Minicomputers, such as PDP-11, are smaller than mainframes
                        but still offer good processing power. They are suitable for small
                        to medium businesses that require robust computing for tasks
                        like database management and business applications. They
                        balance processing power and energy efficiency, making them a
                        practical choice for many organizations.`, 
                        // server computer
                        `${tab} Servers like Dell PowerEdge are essential for networked environments 
                        where they provide resources, data storage, and services to multiple clients. 
                        Their multi-core CPUs and high memory capacity ensure efficient handling of
                        tasks and high performance, although they consume a significant amount of energy.`, 
                        // workstation
                        `${tab}  Workstations, such as the HP Z Workstation, are designed for technical
                        and scientific applications that require high performance. They are used by
                        engineers, graphic designers, and video editors who need powerful
                        computing capabilities for tasks like CAD and 3D modeling. Workstations
                        offer high calculating power and moderate energy consumption.`, 
                        // micro computer
                        `${tab} Microcomputers, including the popular Raspberry Pi, are designed
                        for individual use. They are versatile and affordable, making them ideal for
                        educational purposes, hobby projects, and basic computing tasks.
                        Despite their lower calculating power and processing speed, they are
                        highly energy-efficient and accessible to a wide audience.`        
        ];

        const introTag = document.getElementById('intro');
        introTag.innerHTML = introText;
        introTag.style.textAlign = 'justify';

        const container = document.getElementById('intro-container');
        // TODO: add more style
        for (let i = 0; i < computersText.length; i++) {
                const pTag = document.createElement('p');
                const imgTag = document.createElement('img');
                const divTag1 = document.createElement('div');
                const divTag2 = document.createElement('div'); // <p> container
                const divTag3 = document.createElement('div'); // <img> container


                pTag.innerHTML = computersText[i];
                pTag.style.textAlign = 'justify';
                pTag.style.margin = '0px 10px';

                imgTag.src = `./images/figure${i + 1}.png`;
                imgTag.alt = `figure${i + 1}`;

                divTag1.className = `intro-div computer${i + 1}`;
                divTag2.id = `p-container`;
                divTag3.id = `img-container`;

                divTag2.appendChild(pTag);
                divTag3.appendChild(imgTag);
                divTag1.appendChild(divTag2);
                divTag1.appendChild(divTag3);
                container.appendChild(divTag1);
                container.appendChild(document.createElement('br'));
        }
})();
