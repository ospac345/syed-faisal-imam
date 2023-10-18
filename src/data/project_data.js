const projects = [
    {
        id: 1,
        slug: 'portfolio-website',
        title: 'Portfolio Website',
        short_description: 'For this project, I wanted to create a dynamic and visually appealing portfolio website that showcases my skills as a front-end developer. I decided to build it using Next.js, a powerful React framework that offers server-side rendering and a smooth development experience.',
        image: '/images/portfolioWebsiteImg.webp',
        long_description: [
            `In embarking on my portfolio project, I set out to create a captivating showcase of my front-end development skills. Leveraging Next.js, I harnessed the power of server-side rendering to ensure a seamless user experience. The integration of Material UI not only enhanced aesthetics but also streamlined the styling process.`,
            `I also incorporated React Particles to create a dynamic and visually appealing background. The particles are rendered using the canvas element, which is a powerful tool for creating animations. The result is a captivating and interactive user experience.`,
            `I deployed the website using Vercel, a cloud platform for static sites and serverless functions. Vercel offers a seamless deployment experience, allowing for continuous deployment from GitHub.`
        ],
        challenges: [
            `One of the most challenging aspects I encountered during the development of this project was implementing a seamless dark and light theme transition. Next.js, being a server-side rendered framework, posed a unique challenge. When attempting to save the theme preference in local storage, it wasn't readily accessible on the server side, resulting in an undesirable flicker effect.`,
            `To overcome this obstacle, I devised a solution by integrating Next.js Themes in conjunction with Material UI's light and dark theme options. This synergy allowed for a smoother and more consistent theme-switching experience, ensuring a seamless user interface regardless of server-side rendering constraints.`
        ],
        technologies: ['React', 'Next.js', 'Material UI', 'React Particles', 'Vercel'],
        github: 'https://github.com/ospac345/syed-imam-portfolio',
    },
    {
        id: 2,
        slug: 'weatherwise',
        title: 'WeatherWise',
        short_description: 'A full stack weather web application using React, Redux, and Express. The data was extracted from geojson for city search, and weather information was sourced from the Open-Mateo API. ',
        image: '/images/weather-wise-img.webp',
        long_description: [
            `I embarked on this project with the primary goal of delving deeper into Redux, aiming to gain a robust understanding of state management. Additionally, I sought to explore the versatility of Material UI and its wide array of components.`,
            `For sourcing weather data, I seamlessly integrated the Open-Mateo API, while leveraging GeoJson for an efficient city search functionality. Finally, to make the project accessible, I deployed it on Heroku, ensuring a seamless user experience.`
        ],
        challenges: [
            `Incorporating Redux posed a unique challenge. While I was familiar with managing states, Redux was a new territory for me. I dedicated time to grasp its concepts and successfully integrated it into my project.`,
            `Mastering Material UI was essential for styling the application. I delved into understanding its components and how to customize them to match the desired aesthetics.`,
            `The city search functionality presented the most significant challenge. The GeoJson API's sporadic reliability required creative problem-solving. I tackled issues related to data extraction and successfully implemented reverse geocoding from user coordinates for efficient weather data retrieval.`
        ],
        technologies: ['React', 'Redux', 'Express JS', 'Charts JS', 'Material UI', 'Open-Mateo API', 'Node.js', 'REST API'],
        github: 'https://github.com/ospac345/WeatherApp',
        live: 'https://weather-wise-906a8dd90dac.herokuapp.com/',
    },
    {
        id: 3,
        slug: 'waste-not',
        title: 'WasteNot (React Native App)',
        short_description: 'A React Native mobile application that allows users to keep an inventory of their fridge and pantry. Users can add items to their inventory, and the app will notify them when items are about to expire.',
        image: '/images/waste-not-img.webp',
        long_description:
            ['As a university honours year project, I created the WasteNot app to support users in reducing household waste through effective kitchen inventory management and donation of excess food to nearby food banks. Utilizing React Native for the front end and Express JS for the back end, the app offers a seamless and user-friendly experience on both iOS and Android platforms.',
                'The app empowers users to efficiently manage their pantry and fridge inventory. They can seamlessly add items and receive timely expiration notifications. Going beyond personal use, it facilitates food donation to local banks by aligning user inventory with the needs of nearby food banks. Users can also easily locate and access contact details and hours of operation for nearby food banks, fostering a sense of community and reducing food waste.'
            ],
        challenges: [
            `While my previous experience with React and Express provided a solid foundation, the real challenge lay in setting up robust environments for both iOS and Android. This demanded careful consideration of memory and storage resources, ensuring my laptop could handle the workload effectively.`
        ],
        technologies: ['React Native', 'Express JS', 'Node.js', 'REST API', 'MongoDB', 'Nedb', 'Xcode', 'Android Studio'],
        github: 'https://github.com/ospac345/WasteNot'
    },
    {
        id: 4,
        slug: 'recipe-app',
        title: 'Recipe App',
        short_description: 'A responsive web application that allows users to search for recipes, rate and review them, and save them to a personal favorites collection.',
        image: '/images/recipe-app-img.webp',
        long_description: [
            `As part of a university project, I undertook the development of a responsive web application, employing a technology stack that combined the efficiency of ReactJS for the frontend and the robustness of ExpressJS for the backend.`,
            `The centerpiece of the application is its powerful recipe search function, delivering comprehensive recipes complete with ingredients and step-by-step instructions. Users can engage further by rating and reviewing recipes, and have the option to curate a personal favorites collection. To enhance accessibility, a 'Print' feature allows users to conveniently save recipes as PDFs for offline reference.`,
            `This project not only demonstrated my proficiency in web development but also highlighted my ability to create a seamless user experience through thoughtful design and functionality.`
        ],
        challenges: [
            "React was a learning curve for me, and I dedicated time to master its concepts and components.",
            "Due to the project's smaller scope, I opted to use React hooks, particularly useContext, to centralize state and ensure efficient data management.",
            "One of the main challenges was creating a seamless system for users to rate and review recipes. I employed Material UI to design a modal for this purpose. The gathered ratings and reviews were then stored in the database and dynamically displayed on the recipe pages."
        ],
        technologies: ['React', 'Bootstrap', 'Express JS', 'Node.js', 'REST API', 'Nedb', 'React to PDF'],
        github: 'https://github.com/ospac345/FEWD-CW1-1.1',
        live: 'https://caleyfood.herokuapp.com'
    },
    {
        id: 5,
        slug: 'covid-info',
        title: 'Covid Info',
        short_description: 'A responsive web application that allows users to track and visualize the spread of COVID-19 across the globe.',
        image: '/images/c-info-img.webp',
        long_description: [
            "The project was assigned to our team of 6 students, where my primary responsibility was the development of the front end. However, I also actively contributed to the back end.",
            "The core technologies employed were basic HTML, CSS, and JavaScript. To enhance data visualization, we integrated powerful charting libraries such as amCharts and ApexCharts.",
            "We sourced data from reputable institutions like John Hopkins University and the WHO through their respective COVID APIs, ensuring that our data was up-to-date and accurate.",
            "The application was successfully deployed on GitHub pages, making it easily accessible for users."
        ],
        challenges: [
            "A significant challenge during development was learning how to effectively utilize charting libraries like amCharts and ApexCharts to create interactive and visually appealing charts and graphs.",
            "Given that this project was developed during the first COVID lockdown, a notable challenge was adapting to remote team collaboration. We had to quickly learn how to work together effectively while physically apart, leveraging digital tools and communication platforms."
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'amCharts', 'ApexCharts'],
    }



];


export default projects;