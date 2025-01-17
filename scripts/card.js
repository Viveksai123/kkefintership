
        const serviceData = {
            consulting: {
                title: "Software Consulting Services",
                description: "As one of the most sought-after custom software consulting companies, we analyze your business needs, conceptualize software structure, and help you get the best value from its development. Our dedicated team of experts leverages its technical prowess to deliver tailored software solutions that drive efficiency and productivity.",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'/3E%3Ccircle cx='9' cy='7' r='4'/%3E%3Cpath d='M23 21v-2a4 4 0 0 0-3-3.87'/3E%3Cpath d='M16 3.13a4 4 0 0 1 0 7.75'/%3E%3C/svg%3E"
            },
            custom: {
                title: "Custom Software Development Services",
                description: "We specialize in developing custom software solutions tailored to your specific business requirements. Our team of experienced developers uses cutting-edge technologies to create scalable, secure, and efficient applications that help your business grow.",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1'/%3E%3Cpath d='M16 3h1a2 2 0 0 1 2 2v5c0 1.1.9 2 2 2a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1'/%3E%3C/svg%3E"
            },
            enterprise: {
                title: "Enterprise Software Development Services",
                description: "Transform your enterprise with our comprehensive software development services. We deliver robust, scalable solutions that streamline operations, enhance productivity, and provide valuable insights for data-driven decision making.",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Crect x='2' y='3' width='20' height='14' rx='2' ry='2'/%3E%3Cline x1='8' y1='21' x2='16' y2='21'/%3E%3Cline x1='12' y1='17' x2='12' y2='21'/%3E%3C/svg%3E"
            },
            product: {
                title: "Software Product Development Services",
                description: "From concept to launch, we guide you through the entire product development lifecycle. Our expert team ensures your software product is designed, developed, and delivered to meet market demands with exceptional quality and functionality.",
                icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cline x1='12' y1='8' x2='12' y2='12'/%3E%3Cline x1='12' y1='16' x2='12' y2='16'/%3E%3C/svg%3E"
            }
        };

        const serviceItems = document.querySelectorAll(".service-item");
        const serviceContent = document.querySelector(".service-content");
        const serviceIcon = serviceContent.querySelector(".service-icon img");
        const serviceTitle = serviceContent.querySelector(".service-title");
        const serviceDescription = serviceContent.querySelector(".service-description");

        serviceItems.forEach(item => {
            item.addEventListener("click", () => {
                // Update active class
                serviceItems.forEach(i => i.classList.remove("active"));
                item.classList.add("active");

                // Fetch service data
                const serviceKey = item.getAttribute("data-service");
                const { title, description, icon } = serviceData[serviceKey];

                // Update content
                serviceIcon.src = icon;
                serviceTitle.textContent = title;
                serviceDescription.textContent = description;
            });
        });
    