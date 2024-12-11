function fn() {
        const tab = "&nbsp;&nbsp;&nbsp;&nbsp;";

        const discussionText = `${tab} Supercomputers are the giants of the computing world, designed for complex
                        computations that require immense processing power. They are used in fields such as
                        climate research, quantum mechanics, and space exploration. Mainframes, on the other
                        hand, are powerful computers used primarily by large organizations for critical
                        applications, large-scale transaction processing, and database management.
                        <br> <br>
                        ${tab} Mini Computers offer moderate processing speed and memory capacity, making
                        them suitable for small to medium-sized applications within business environments.
                        They consume less power than mainframes but more than microcomputers and are
                        designed for multi-user tasks. On the other hand, microcomputers, commonly known as
                        personal computers, have the lowest processing speed and memory capacity among
                        the six types. They are energy-efficient, compact, and ideal for individual use, handling
                        everyday tasks like word processing and web browsing.
                        <br> <br>
                        ${tab} Workstations boast high processing speeds and memory capacity, designed for
                        professional tasks that require significant computational power, such as 3D rendering
                        and scientific simulations. They consume more power than microcomputers due to their
                        advanced hardware. Lastly, Servers, these are built for managing network resources
                        and handling large databases, offering high processing speeds and substantial memory
                        capacity. They have high power consumption to ensure reliability and continuous
                        operation, varying in size from compact units to large systems.
                        <br> <br>
                        ${tab}  In conclusion, each type of computer serves specific roles, from the powerful
                        supercomputers used in scientific research to the accessible microcomputers used in
                        education and hobby projects. Understanding the characteristics and capabilities of
                        each type helps in selecting the right computer for specific needs and applications.
        `;

        const discussionTag = document.getElementById('discussion-text');
        discussionTag.innerHTML = discussionText;
        discussionTag.style.textAlign = 'justify';
}

fn();
