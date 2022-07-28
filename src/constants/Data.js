import image from '../images/Me_Blue_Big.svg';
import aboutMeImage from '../images/Me_Panda_BW.svg';
import projectsImage from '../images/undraw_working_late_re_0c3y.svg';
import skillsImage from '../images/killing_skills.svg';

export const homeObject = {
    lightBack: false,
    imgStart: '',
    lightTopLine: true,
    lightHeading: true, 
    lightDescription: true,
    buttonColor: true, 
    img: image,
    alt: 'Elena Home Image',
    start: '',
    buttonLabel: "Wanna Say Hi?",
    topLine: "Have No Fear",
    heading: "Your Next Frontend Engineer Is Here" ,
    description: "Welcome to my landing page, Jedi. Here you can find some info about me, my skills, my projects and my passion. Make yourself home and get ready to rock!",
};

export const aboutMeObject = {
    lightBack: true,
    imgStart: 'start',
    lightTopLine: false,
    lightHeading: false, 
    lightDescription: false,
    buttonColor: false, 
    img: aboutMeImage,
    alt: 'Elena About Image',
    start: 'true',
    buttonLabel: "Contact Me!",
    topLine: "A Bit About Me",
    heading: "Okay, Glad You've Made It" ,
    description: "I'm Elena. Graduated from Ural's State Technical University with a Master's Degree, and now I'm based in Montréal, Canada. What you see right now is what I've learned in six or seven months, so despite having little experience, imagine what I can do in one year ;) I also used to work as a panda nanny, so in pauses between coding, you'll learn from me about pandas more than you planned :) Et ouais, je parle français.",
};

export const skillsObject = {
    lightBack: false,
    imgStart: '',
    lightTopLine: true,
    lightHeading: true, 
    lightDescription: true,
    buttonColor: true, 
    img: skillsImage,
    alt: 'Elena Skills Image',
    start: '',
    buttonLabel: "Questions?",
    topLine: "100% Killing, Guaranteed",
    heading: "And The Skills" ,
    description: "JavaScript, TypeScript, ES6+ (ES2015+, ECMAScript 2015+), React, React Hooks, Redux, Node.js, npm/yarn, npm scripts, Cross-browser, Adaptive, Responsive, Accessible, Mobile-first, Offline-first, Graceful degradation, Progressive enhancement, Performance, HTML, HTML5, JSX, CSS, CSS3, JSS, CSS-in-JS, PostCSS, React router, Redux form, Git, GitHub, Bitbucket,...",
};

export const projectsObject = {
    lightBack: true,
    imgStart: 'start',
    lightTopLine: false,
    lightHeading: false, 
    lightDescription: false,
    buttonColor: false, 
    img: projectsImage,
    alt: 'Elena Projects Image',
    start: 'true',
    buttonLabel: "Ready to Rock?",
    topLine: "I Never Asked for This(c)",
    heading: "Anyway, The Projects" ,
    description: "Here are <a href='https://supersexypanda.github.io/timer/'>the Timer</a> with React Hooks, <a href='https://supersexypanda.github.io/todo-list/'>the Todo List</a>, and <a href='https://supersexypanda.github.io/weather/'>the Weather App</a> with APIs - all the desktop versions on pure CSS and modern React. The app with responsive design and styled-components is the one you are looking at right now. ",
};