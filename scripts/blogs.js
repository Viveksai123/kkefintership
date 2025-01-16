// // Dummy Data (Fallback Data if API Fails)
// // const fallbackBlogs = [{
// //         image: 'assets/blogs/image1.webp',
// //         date: 'Dec 9, 2024',
// //         title: 'Top signs your computer needs immediate repair',
// //         description: 'Is your computer acting up? This blog highlights the key signs that indicate your computer needs professional repair.',
// //         link: '#'
// //     },
// //     {
// //         image: 'assets/blogs/image2.webp',
// //         date: 'Dec 9, 2024',
// //         title: 'How to safeguard your business from cyber threats',
// //         description: 'In today’s digital age, cyber threats are a constant concern for businesses. This blog explores practical steps you can take.',
// //         link: '#'
// //     },
// //     {
// //         image: 'assets/blogs/image3.webp',
// //         date: 'Dec 9, 2024',
// //         title: 'Maximizing productivity with these simple IT hacks',
// //         description: 'Boosting productivity doesn’t always require expensive software or tools. In this blog, we share easy IT hacks that can help you.',
// //         link: '#'
// //     }
// // ];

// const fallbackBlogs = [{
//         image: 'assets/blogs/image1.webp',
//         date: 'Dec 9, 2024',
//         title: 'Key IT Maintenance Tips',
//         description: 'Discover key IT maintenance strategies to ensure your systems run smoothly and securely.',
//         link: '#'
//     },
//     {
//         image: 'assets/blogs/image2.webp',
//         date: 'Dec 9, 2024',
//         title: 'Protecting IT from Cyber Threats',
//         description: 'Learn how to protect your IT systems from modern cyber threats with proactive strategies.',
//         link: '#'
//     },
//     {
//         image: 'assets/blogs/image3.webp',
//         date: 'Dec 9, 2024',
//         title: 'IT Solutions for Efficiency',
//         description: 'Innovative IT solutions that can streamline your operations and boost productivity.',
//         link: '#'
//     }
// ];


// // Fetch Data from Backend API or Use Fallback Data
// async function fetchBlogs() {
//     try {
//         const response = await fetch('https://api.example.com/blogs'); // Replace with actual API URL
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const blogs = await response.json();
//         renderBlogs(blogs);
//     } catch (error) {
//         console.warn('API failed, using fallback data:', error);
//         renderBlogs(fallbackBlogs);
//     }
// }

// // Render Blogs to the DOM
// function renderBlogs(blogs) {
//     const blogSection = document.querySelector('.blogs-card-section .row');
//     blogSection.innerHTML = ''; // Clear any existing content

//     blogs.forEach(blog => {
//         const blogCard = `
//             <div class="col-12 col-md-6 col-lg-4 animate__animated animate__bounceIn animate__animated animate__bounceIn">
//                 <div class="card border-0 shadow-lg w-100 rounded-4 position-relative mb-4">
//                     <img src="${blog.image}" class="rounded-top-4" alt="${blog.title}">
//                     <p class="date-section position-absolute top-0 bg-black text-light rounded-pill px-3 py-1 mt-4 ms-4 fw-semibold">
//                         ${blog.date}
//                     </p>
//                     <div class="card-body text-light bg-black rounded-bottom-4">
//                         <h5 class="blogs-card-heading">${blog.title}</h5>
//                         <p class="blogs-card-text">${blog.description}</p>
//                         <button href="${blog.link}" class="btn px-4 py-2  ms-0 text-light btn-dark">
//                             Learn More
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                                 class="bi bi-arrow-right" viewBox="0 0 16 16">
//                                 <path fill-rule="evenodd"
//                                     d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         `;
//         blogSection.insertAdjacentHTML('beforeend', blogCard);
//     });
// }

// // Initialize
// fetchBlogs();



const fallbackBlogs = [{
        image: 'assets/blogs/image1.webp',
        date: 'Dec 9, 2024',
        title: 'Key IT Maintenance Tips',
        description: 'Discover key IT maintenance strategies to ensure your systems run smoothly and securely.',
        link: '#'
    },
    {
        image: 'assets/blogs/image2.webp',
        date: 'Dec 9, 2024',
        title: 'Protecting IT from Cyber Threats',
        description: 'Learn how to protect your IT systems from modern cyber threats with proactive strategies.',
        link: '#'
    },
    {
        image: 'assets/blogs/image3.webp',
        date: 'Dec 9, 2024',
        title: 'IT Solutions for Efficiency',
        description: 'Innovative IT solutions that can streamline your operations and boost productivity.',
        link: '#'
    }
];

// Fetch Data from Backend API or Use Fallback Data
async function fetchBlogs() {
    try {
        const response = await fetch('https://api.example.com/blogs'); // Replace with actual API URL
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const blogs = await response.json();
        renderBlogs(blogs);
    } catch (error) {
        console.warn('API failed, using fallback data:', error);
        renderBlogs(fallbackBlogs);
    }
}

// Render Blogs to the DOM
function renderBlogs(blogs) {
    const blogSection = document.querySelector('.blogs-card-section .row');
    blogSection.innerHTML = ''; // Clear any existing content
    blogs.forEach(blog => {
        const blogCard = `
        <div class="col-12 col-md-6 col-lg-4 animate__animated" data-animation="animate__bounceIn">
            <div class="card border-0 shadow-lg w-100 rounded-4 position-relative mb-4">
                <img src="${blog.image}" class="rounded-top-4" alt="${blog.title}">
                <p class="date-section position-absolute top-0 bg-black text-light rounded-pill px-3 py-1 mt-4 ms-4 fw-semibold">
                    ${blog.date}
                </p>
                <div class="card-body text-light bg-black rounded-bottom-4 animate__animated" data-animation="animate__fadeInUp">
                    <h5 class="blogs-card-heading">${blog.title}</h5>
                    <p class="blogs-card-text">${blog.description}</p>
                    <button href="${blog.link}"
                        class="btn px-4 py-2 ms-0 text-light btn-dark animate__animated"
                        data-animation="animate__fadeInRight">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5.5 0 0 1 0 .708l-4 4a.5.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
        blogSection.insertAdjacentHTML('beforeend', blogCard);
    });

    // blogs.forEach(blog => {
    //     const blogCard = `
    //         <div class="col-12 col-md-6 col-lg-4 animate__animated" data-animation="animate__bounceIn">
    //             <div class="card border-0 shadow-lg w-100 rounded-4 position-relative mb-4">
    //                 <img src="${blog.image}" class="rounded-top-4" alt="${blog.title}">
    //                 <p class="date-section position-absolute top-0 bg-black text-light rounded-pill px-3 py-1 mt-4 ms-4 fw-semibold">
    //                     ${blog.date}
    //                 </p>
    //                 <div class="card-body text-light bg-black rounded-bottom-4">
    //                     <h5 class="blogs-card-heading  animate_animated" data-animation="animate_bounceOut">${blog.title}</h5>
    //                     <p class="blogs-card-text">${blog.description}</p>
    //                     <button href = "${blog.link}"
    //                     class = "btn px-4 py-2 ms-0 text-light btn-dark"
    //                     data - animation = "animate__fadeInRight" >
    //                         Learn More
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    //                             class="bi bi-arrow-right" viewBox="0 0 16 16">
    //                             <path fill-rule="evenodd"
    //                                 d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
    //                         </svg>
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     `;
    //     blogSection.insertAdjacentHTML('beforeend', blogCard);
    // });

    // Reconnect IntersectionObserver to the new elements
    document.querySelectorAll('.animate__animated').forEach(element => {
        observer.observe(element);
    });
}

// Intersection Observer for Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const animationClass = element.dataset.animation;

            // Reset animation
            element.classList.remove('animate__animated', animationClass);
            void element.offsetWidth; // Force reflow

            // Add animation again
            element.classList.add('animate__animated', animationClass);
        }
    });
}, {
    threshold: 0.5, // Trigger when 50% of the element is visible
    rootMargin: '0px'
});

// Initialize
fetchBlogs();





// const fallbackBlogs = [{
//         image: 'assets/blogs/image1.webp',
//         date: 'Dec 9, 2024',
//         title: 'Key IT Maintenance Tips',
//         description: 'Discover key IT maintenance strategies to ensure your systems run smoothly and securely.',
//         link: '#'
//     },
//     {
//         image: 'assets/blogs/image2.webp',
//         date: 'Dec 9, 2024',
//         title: 'Protecting IT from Cyber Threats',
//         description: 'Learn how to protect your IT systems from modern cyber threats with proactive strategies.',
//         link: '#'
//     },
//     {
//         image: 'assets/blogs/image3.webp',
//         date: 'Dec 9, 2024',
//         title: 'IT Solutions for Efficiency',
//         description: 'Innovative IT solutions that can streamline your operations and boost productivity.',
//         link: '#'
//     }
// ];

// // Fetch Data from Backend API or Use Fallback Data
// async function fetchBlogs() {
//     try {
//         const response = await fetch('https://api.example.com/blogs'); // Replace with actual API URL
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const blogs = await response.json();
//         renderBlogs(blogs);
//     } catch (error) {
//         console.warn('API failed, using fallback data:', error);
//         renderBlogs(fallbackBlogs);
//     }
// }

// // Render Blogs to the DOM
// function renderBlogs(blogs) {
//     const blogSection = document.querySelector('.blogs-card-section .row');
//     blogSection.innerHTML = ''; // Clear any existing content

//     blogs.forEach(blog => {
//         const blogCard = `
//             <div class="col-12 col-md-6 col-lg-4 animate__animated">
//                 <div class="card border-0 shadow-lg w-100 rounded-4 position-relative mb-4">
//                     <img src="${blog.image}" class="rounded-top-4" alt="${blog.title}">
//                     <p class="date-section position-absolute top-0 bg-black text-light rounded-pill px-3 py-1 mt-4 ms-4 fw-semibold">
//                         ${blog.date}
//                     </p>
//                     <div class="card-body text-light bg-black rounded-bottom-4">
//                         <h5 class="blogs-card-heading">${blog.title}</h5>
//                         <p class="blogs-card-text">${blog.description}</p>
//                         <button href="${blog.link}" class="btn px-4 py-2  ms-0 text-light btn-dark">
//                             Learn More
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                                 class="bi bi-arrow-right" viewBox="0 0 16 16">
//                                 <path fill-rule="evenodd"
//                                     d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         `;
//         blogSection.insertAdjacentHTML('beforeend', blogCard);
//     });

//     // Reconnect IntersectionObserver to the new elements
//     document.querySelectorAll('.animate__animated').forEach(element => {
//         observer.observe(element);
//     });
// }

// // Create IntersectionObserver
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate__bounceIn'); // Add your desired animation class
//         }
//     });
// }, {
//     threshold: 0.5, // Trigger when 50% of the element is visible
//     rootMargin: '0px'
// });

// // Initialize
// fetchBlogs();