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
    h1: 'Today-I-Learned',
    p: '⚛️ A web development project that combines basics of JS, HTML, CSS. First we use HTML to build the skeleton. Then with CSS we style it and make the layout. We use Supabase to create online db and API for our application data. Then we build the web app with React. Finally, we deploy the final project to a free service called Netlify.',
    url: 'https://fernoss-todayilearned.netlify.app/',
  },
  {
    h1: 'Modal Window',
    p: '👨🏻‍💻 Learning the basics of javaScript using DOM.',
    url: 'https://fernoss.github.io/js-course/modal/',
  },
  {
    h1: 'Guess My Number!',
    p: '❓ A number guessing game built with javaScript to take the DOM skills a bit further. For example: Keeping a highscore, restarting the game and manipulating elements to change the layout.',
    url: 'https://fernoss.github.io/js-course/guess-my-number/',
  },
  {
    h1: 'Pig Dice Game',
    p: '🎲 A game of dice, where there are two players and the first one to reach 100 points wins! Getting a number 1 resets your current points. Using the skills from previous project ("Guess My Number") a step forward.',
    url: 'https://fernoss.github.io/js-course/pig-game/',
  },
  {
    h1: '',
    p: '',
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
