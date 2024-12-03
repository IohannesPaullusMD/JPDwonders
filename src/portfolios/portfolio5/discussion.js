function fn() {
        const tab = "&nbsp;&nbsp;&nbsp;&nbsp;";

        const discussionText = `${tab}Starting with the AT motherboard, this was one of the first types designed and is mostly
                outdated now. It was big and bulky, with few features and limited room for upgrades. While AT
                motherboards played a crucial role in the early days of personal computers, they have now
                been surpassed by ATX motherboards. ATX motherboards are the most common and versatile
                motherboard, suitable for a wide range of applications from basic desktops to high-end gaming
                builds. Micro-ATX motherboard, this is a smaller version of the ATX, giving a good balance
                between size and functionality. Moving on to Mini-ITX Motherboards, these are extremely
                compact motherboards, perfect for small form factor computer builds, but they have limited
                expandability and fewer features. Extended-ATX motherboards, these are larger than standard
                ATX motherboards, offering more features and better performance for high-end builds. Lastly,
                BTX motherboards, these were designed to address some of the heating and layout issues of
                ATX motherboards, but they never became popular since most new computer systems stick with
                ATX because it's familiar and well-supported. In conclusion, choosing the right motherboard
                depends on the users’ specific needs and the type of build they’re planning. For most users, an
                ATX or Micro-ATX motherboard will offer the best balance of features, size, and cost. For
                high-end or specialized builds, an Extended-ATX or BTX motherboard might be more suitable.
        `;

        const discussionTag = document.getElementById('discussion');
        discussionTag.innerHTML = discussionText;
        discussionTag.style.textAlign = 'justify';
}

fn();
