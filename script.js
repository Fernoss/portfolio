'use strict';
'use strict';

// Variables for the project
const projectbtn = document.querySelector('.projectbtn');
const btnCloseProject = document.querySelector('.close-projectbtn');
const overlay = document.querySelector('.overlay');
const btnsOpenProject = document.querySelectorAll('.show-projectbtn');
const projectH1text = document.querySelector('.projectbtn h1');
const projectPtext = document.querySelector('.projectbtn p');

// Object for the window
const projectContent = [
  {
    h1: 'Modal Window',
    p: '👨🏻‍💻 Learning the basics of javaScript using DOM.',
    url: 'https://fernoss.github.io/js-course/modal/',
  },
  {
    h1: 'Guess My Number!',
    p: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: 'https://fernoss.github.io/js-course/guess-my-number/',
  },
  {
    h1: 'Pig Dice Game',
    p: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: 'https://fernoss.github.io/js-course/pig-game/',
  },
  {
    h1: 'Test Window 4',
    p: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: '',
  },
  {
    h1: 'Test Window 5',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: '',
  },
];

// Create open project function
const openProject = function () {
  projectbtn.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Create close project function
const closeProject = function () {
  projectbtn.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Create Event Listner for project buttons
for (let i = 0; i < btnsOpenProject.length; i++) {
  const content = projectContent[i];
  btnsOpenProject[i].addEventListener('click', function () {
    projectH1text.textContent = `#${i + 1}, ${content.h1}`;
    projectPtext.textContent = content.p;
    // to add an <a> for the URL and get a link for the project
    if (content.url) {
      const link = document.createElement('a');
      link.href = content.url;
      link.textContent = 'Click here for the project!';
      link.target = '_blank';
      projectPtext.appendChild(link);
    }
    openProject();
  });
}

// Close button, 'Escape' and overlay
btnCloseProject.addEventListener('click', closeProject);
overlay.addEventListener('click', closeProject);
document.addEventListener('keydown', function (event) {
  // Listening for the presskey object and specifying 'key'
  //   console.log(event.key);
  if (event.key === 'Escape' && !projectbtn.classList.contains('hidden')) {
    closeProject();
  }
});
