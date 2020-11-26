$(document).ready(function() {

    const experience = [{
            wFrom: 2020,
            wTo: "Present",
            position: 'Web Developer',
            company: 'Dhromo Tech',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptatibus consequatur rem nostrum omnis! Architecto.'
        },
        {
            wFrom: 2019,
            wTo: 2020,
            position: 'Web Developer',
            company: 'Splendour Group',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptatibus consequatur rem nostrum omnis! Architecto.'
        }, {
            wFrom: 2018,
            wTo: 2019,
            position: 'Web Developer',
            company: 'Freelancer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptatibus consequatur rem nostrum omnis! Architecto.'
        }

    ]

    const education = [{
            wFrom: 2014,
            wTo: 2018,
            faculty: 'Electrical Engineering',
            institute: 'Kathmandu University',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptatibus consequatur rem nostrum omnis! Architecto.'
        },
        {
            wFrom: 2012,
            wTo: 2014,
            faculty: 'Highrr Secondary School',
            institute: 'Goldengate International College',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptatibus consequatur rem nostrum omnis! Architecto.'
        }, {
            wFrom: 1998,
            wTo: 2012,
            faculty: 'School',
            institute: 'Vinayak English School',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptatibus consequatur rem nostrum omnis! Architecto.'
        },

    ]

    const skillArr = [{
            icon: 'fab fa-html5',
            name: 'HTML'
        },
        {
            icon: 'fab fa-css3-alt',
            name: 'CSS'
        },
        {
            icon: 'fab fa-js',
            name: 'JS'
        }, {
            icon: 'fab fa-react',
            name: 'React'
        }
    ]

    //dark mode
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);


    //adding dynamic content
    const experienceWrapper = $('.exp_wrap ul');
    const educationWrapper = $('.education_wrap ul');
    const skillWrapper = $('.skills ul');
    const name = "Bikal Shrestha";

    //typed effect
     function typeName(name, iteration) {
        if (iteration === name.length)
            return;
        setTimeout(function() {
            $('.heading').text( $('.heading').text() + name[iteration++] );
            typeName(name, iteration);
        }, 200);
    }
    typeName(name, 0);

    function dynamicFunc(wFrom, wTo, position, company, description) {
        return ` 
              <li>
                     <div class="li_wrap">
                                <div class="date">
                                    ${wFrom} - ${wTo}
                                </div>
                                <div class="info">
                                    <p class="info_title">
                                        ${position}
                                    </p>
                                    <p class="info_com">
                                        ${company}
                                    </p>
                                    <p class="info_cont">
                                        ${description}
                                    </p>
                                </div>
                            </div>
                        </li>
         `;
    }

    //adding skills
    function skillFunction(icon, name) {
        return `
                <li>
                    <div class="li_wrap">
                        <div class="icon"><i class="${icon}"></i></div>
                        <div class="text">${name}</div>
                    </div>
                </li>
                        `
    }
    experience.map(data => {
        const { wFrom, wTo, position, company, description } = data;
        experienceWrapper.append(dynamicFunc(wFrom, wTo, position, company, description));
    })
    education.map(data => {
        const { wFrom, wTo, faculty, institute, description } = data;
        educationWrapper.append(dynamicFunc(wFrom, wTo, faculty, institute, description));
    })
    skillArr.map(data => {
        const { icon, name } = data;
        skillWrapper.append(skillFunction(icon, name))
    })

})