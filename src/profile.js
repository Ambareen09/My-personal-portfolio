/** @format */

// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
}
// Change your display name on tha landing display
const header = {
  name: 'Ambareen Azam',
}
const background = {
  // Options: Snow or Particle
  type: 'Snow',
}
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = 'About Me'
const about = {
  paragraph:
    'Final Undergrad here, majoring in Computer Science with a knack and lots of enthusiam for learning and exploring. I love to code & turn ideas into reality. I read books and watch movies in my free time.',
}
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: 'ReactJs',
    faClass: 'fab fa-react',
  },
  {
    name: 'HTML5',
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    // svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: 'fab fa-html5',
  },
  {
    name: 'CSS3',
    // svg: '',
    faClass: 'fab fa-css3',
  },
  {
    name: 'Javascript',
    // svg: '',
    faClass: 'fab fa-js',
  },
  {
    name: 'SASS',
    // svg: '',
    faClass: 'fab fa-sass',
  },
  {
    name: 'Node',
    // svg: '',
    faClass: 'fab fa-node',
  },
  {
    name: 'Unity',
    // svg: '',
    faClass: 'fab fa-unity',
  },
  {
    name: 'C',
    // svg: '',
    faClass: 'fab fa-cuttlefish',
  },
  {
    name: 'Python',
    // svg: '',
    faClass: 'fab fa-python',
  },
  {
    name: 'Django',
    // svg: '',
  },
  {
    name: 'Jinja',
    // svg: '',
  },
  {
    name: 'Tailwind',
    // svg: '',
  },
  {
    name: 'SQL',
    // svg: '',
  },
  {
    name: 'MongoDB',
    // svg: '',
  },
  {
    name: 'PostgreSQL',
    // svg: '',
  },
]
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = 'Past Projects'
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: 'project6',
    name: 'NFT Card Battle',
    skills: ['ReactJS, Solidity, Ether, Tailwind'],
    url:
      'https://github.com/Ambareen09/Nft-card-game',
  },
  {
    // Add image in './styles/images.css' in #project1
    id: 'project7',
    name: 'Memories',
    skills: ['MongoDB, Express, ReactJS, NodeJS, Google OAuth'],
    url:
      'https://main--create-memories-daily.netlify.app/',
  },
  {
    // Add image in './styles/images.css' in #project1
    id: 'project1',
    name: 'Feed the Fish',
    skills: ['Unity, C#, Photoshop'],
    url:
      'https://play.google.com/store/apps/details?id=com.GameswithBenefits.FeedtheFish',
  },
  {
    // Add image in './styles/images.css' in #project2
    id: 'project2',
    name: 'Cats and Maths',
    skills: ['Unity, C#, Photoshop'],
    url:
      'https://play.google.com/store/apps/details?id=com.GameswithBenefits.CatsandMaths',
  },
  {
    // Add image in './styles/images.css' in #project3
    id: 'project3',
    name: 'Hangman',
    skills: ['HTML, CSS, JS'],
    url: 'https://hang-man-game-ambareen.netlify.app/',
  },
  {
    // Add image in './styles/images.css' in #project4
    id: 'project4',
    name: 'Rehana Foundation',
    skills: ['HTML, CSS, JS (ReactJS)'],
    url: 'https://rehanafoundation.org.in/',
  },
  {
    // Add image in './styles/images.css' in #project4
    id: 'project5',
    name: 'Sudoku Solver',
    skills: ['HTML, CSS, JS'],
    url:
      'https://62992650f647fe061e4d555e--tourmaline-sfogliatella-59da9a.netlify.app/',
  },
]
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = 'Miscellaneous'
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: 'misc1',
    name: 'Miscellaneous 1',
    url: 'https://github.com/kaustubhai',
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: 'misc2',
    name: 'Miscellaneous 2',
    url: 'https://github.com/kaustubhai',
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: 'misc3',
    name: 'Miscellaneous 3',
    url: 'https://github.com/kaustubhai',
  },
]
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = 'Get in Touch'
const contact = {
  pitch:
    "Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the from and send me an email.",
  copyright: 'Ambareen Azam',
  contactUrl: '',
}
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: 'https://github.com/Ambareen09',
  facebook: 'https://www.facebook.com/ambubushra',
  // twitter: "https://twitter.com",
  instagram: 'https://instagram.com/ambareen_azam?utm_medium=copy_link',
  linkedin: 'https://www.linkedin.com/in/ambareen-azam/',
  resume:
    'https://drive.google.com/file/d/1fru-IJu0lCMTyVizMHFM3J7lf6N-Lk9M/view?usp=share_link',
}
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
}
