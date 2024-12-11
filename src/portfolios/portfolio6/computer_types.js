(() => {
    const tab = "&nbsp;&nbsp;&nbsp;&nbsp;";

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

    const rootContainer = document.querySelector('.root-container');

    for (let i = 0; i < computersText.length; i++) {
        const j = i + 1;
        const divTag = document.createElement('div');
        const pTag = document.createElement('p');
        const imgTag = document.createElement('img');
        const imgDivTag = document.createElement('div');
        
        pTag.innerHTML = computersText[i];
        pTag.className = 'computer-text';

        imgTag.src = `./images/figure${j}.png`;
        imgTag.alt = `figure${j}`;
        imgTag.className = 'img';

        imgDivTag.appendChild(imgTag);
        imgDivTag.id = `img-container${j}`;
        imgDivTag.className = 'img-container';

        divTag.appendChild(imgDivTag);
        divTag.appendChild(pTag);
        divTag.className = 'computer-type section';

        rootContainer.appendChild(divTag);
    }
})();
