const links = document.querySelectorAll("#home-link, #project-link, #project-link2, #skills-link, #about-link, #contact-link, #contact-link2")
const projectsSection = document.querySelector(".projects");
const projectsCardContainer = document.querySelector(".project-card-container");
const skillContainer = document.querySelector(".skills")
const skillCardContainer = document.querySelector(".skills-container")
const contactsContainer = document.getElementById("social-links")
const burgerMenuIcon = document.getElementById("burger-icon");
const burgerMenuContent = document.getElementById("burger-menu-content");

const projects = [
    {
        id: 1,
        title: "Mobile Number Validator For USA",
        description:
          'A tool that ensures user-entered phone numbers meet US standards, using sleek regex magic for seamless and reliable form validation.',
        imgSrc:
          "https://res.cloudinary.com/dadewffae/image/upload/v1721299835/usa-validator.png",
        liveUrl: "https://xbaelal.github.io/mobile-number-validator/",
        githubLink: "https://github.com/xbaelal/mobile-number-validator",
      },
    {
        id: 2,
        title: "Statistics Calculator",
        description:
          '"Statistics Calculator" is a powerful JavaScript tool that performs statistical analysis with ease, using slick algorithms to provide accurate results and insights in real-time.',
        imgSrc:
          "https://res.cloudinary.com/dadewffae/image/upload/v1721300181/stats-calculator.png",
        liveUrl: "https://xbaelal.github.io/stats-calculator/",
        githubLink: "https://github.com/xbaelal/stats-calculator",
      },
    {
        id: 3,
        title: "Number Sorter",
        description:
          '"Number Sorter" is a sleek JavaScript tool that effortlessly sorts random numbers in ascending order, ensuring quick and efficient data organization with just a few lines of code.',
        imgSrc:
          "https://res.cloudinary.com/dadewffae/image/upload/v1721311521/nmbr-sorter.png",
        liveUrl: "https://xbaelal.github.io/Number-sorter/",
        githubLink: "https://github.com/xbaelal/Number-sorter",
      },
    {
        id: 4,
        title: "Decimal to Roman Number Converter",
        description:
          '"Decimal to Roman Converter" is a cool JavaScript tool that quickly transforms decimal numbers into Roman numerals for accurate and efficient conversions.',
        imgSrc:
          "https://res.cloudinary.com/dadewffae/image/upload/v1721311621/roman-converter.png",
        liveUrl: "https://xbaelal.github.io/roman-converter/",
        githubLink: "https://github.com/xbaelal/roman-converter",
      },
    {
        id: 5,
        title: "Palindrome Checker",
        description:
          '"Palindrome Checker" is a cool JavaScript tool that quickly verifies if a word or phrase reads the same backward, ensuring fun and easy palindrome detection.',
        imgSrc:
          "https://res.cloudinary.com/dadewffae/image/upload/v1721312150/palindrome-checker.png",
        liveUrl: "https://xbaelal.github.io/palindrome-checker/",
        githubLink: "https://github.com/xbaelal/palindrome-checker",
      },
    {
        id: 6,
        title: "TO DO LIST",
        description:
          '"ToDo App" is a sleek JavaScript tool that helps you efficiently manage and organize tasks, making your to-do list clear and easy to track.',
        imgSrc:
          "https://res.cloudinary.com/dadewffae/image/upload/v1721312419/todo-app.png",
        liveUrl: "https://xbaelal.github.io/todo-app/",
        githubLink: "https://github.com/xbaelal/todo-app",
      },
    {
        id: 7,
        title: "Calorie Counter",
        description:
          '"Calorie Counter" is your minimalist JavaScript tool for effortless daily calorie tracking and health goal management.',
        imgSrc:
          "https://res.cloudinary.com/dadewffae/image/upload/v1721312718/cal-counter.png",
        liveUrl: "https://xbaelal.github.io/Calorie-Counter/",
        githubLink: "https://github.com/xbaelal/Calorie-Counter",
      },
    {
        id: 8,
        title: "Tic Tac Toe",
        description:
          '"Developed a JavaScript-powered Tic Tac Toe game featuring an intuitive user interface and seamless interactivity."',
        imgSrc:
          "https://res.cloudinary.com/dadewffae/image/upload/v1721821024/tictac-game.png",
        liveUrl: "https://xbaelal.github.io/tic-tac-toe/",
        githubLink: "https://github.com/xbaelal/tic-tac-toe",
      },
    {
        id: 8,
        title: "Grab & Go",
        description:
          '"Jump, grab, and ascend through a block-filled world using arrow keys in this dynamic JavaScript adventure."',
        imgSrc:
          "https://res.cloudinary.com/dadewffae/image/upload/v1722005423/grabngo.png",
        liveUrl: "https://xbaelal.github.io/Portfolio/grab-n-go/",
        githubLink: "https://github.com/xbaelal/Portfolio/tree/main/grab-n-go",
      },
]

// Projects to be added in the above array 

const skills = [
    {
      id: 1,
      title: "HTML5",
      icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/html",
    },
    {
      id: 2,
      title: "CSS",
      icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/css",
    },
    {
      id: 3,
      title: "Bootstrap 5",
      icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/bootstrap",
    },
    {
      id: 4,
      title: "Tailwind CSS",
      icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/tailwind-css",
    },
    {
      id: 5,
      title: "Accessibility",
      icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/Accessibility",
    },
    {
      id: 6,
      title: "SASS",
      icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/sass-icon",
    },
    {
      id: 7,
      title: "JavaScript",
      icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/js",
    },
    {
      id: 8,
      title: "Git",
      icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/git",
    },
    {
      id: 9,
      title: "GitHub",
      icon: "https://res.cloudinary.com/do0pop1de/image/upload/v1718268748/src%20for%20portfolio%20website/skills%20icons/github.svg",
    },
  ];

  // Skills to be added in the above array
  
  const socialLinks = [
    {
      id: 1,
      platform: "Github",
      icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/github",
      url: "https://github.com/xbaelal",
    },
    {
      id: 2,
      platform: "LinkedIn",
      icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Social%20Icons/LinkedIn",
      url: "https://www.linkedin.com/in/baelal/",
    },
    {
      id: 3,
      platform: "Gmail",
      icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Social%20Icons/Gmail-icon",
      url: "mailto:memonbilal760@gmail.com",
    },
    {
      id: 4,
      platform: "freeCodeCamp",
      icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Social%20Icons/freeCodeCamp-icon",
      url: "https://www.freecodecamp.org/xbaelal",
    },
  ];

 links.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

for (const project of projects) {
    const projectCard = document.createElement("div");
    projectCard.id = `project-${project.id}`;
    projectCard.className = "card";

    projectCard.innerHTML = `
    <img src="${project.imgSrc}" alt="${project.title}"/>
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <div class="link-container">
    <a class="live-link" href="${project.liveUrl}" target="_blank"><i class="material-symbols-outlined live-icon"> visibility</i> Live</a>
    </div>`;

    projectsCardContainer.appendChild(projectCard);
}

for (const skill of skills) {
    const bgEl = document.createElement("div");
    bgEl.className = "bg";
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", skill.icon);
    imgEl.setAttribute("alt", skill.title);
    bgEl.appendChild(imgEl);
    skillCardContainer.appendChild(bgEl);
  }

  socialLinks.forEach((link) => {
    const linksToContainer = 
    `<a href="${link.url}" target="_blank"
    <div class="link" title="${link.platform}"><img src="${link.icon}" alt="${link.platform}"></div>
    </a>`
    
    contactsContainer.innerHTML += linksToContainer
  })

  burgerMenuIcon.addEventListener("click", () => {
    if (burgerMenuIcon.innerHTML === "menu") {
      burgerMenuIcon.innerHTML = "close";
    } else {
      burgerMenuIcon.innerHTML = "menu";
    }
  
    burgerMenuContent.classList.toggle("hidden");
  });

  (function() {
    let elements;
    let windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.not-roll');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('roll-in');
          element.classList.remove('not-roll');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();
  
  