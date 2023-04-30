'use strict';
'use strict';

// Variables for the project
const projectbtn = document.querySelector('.projectbtn');
const btnCloseProject = document.querySelector('.close-projectbtn');
const overlay = document.querySelector('.overlay');
const btnsOpenProject = document.querySelectorAll('.show-projectbtn');
const projectH1text = document.querySelector('.projectbtn h1');
const projectPtext = document.querySelector('.projectbtn p');

// Create open project function
const openProject = function () {
  projectbtn.classList.remove('hidden');
  overlay.classList.remove('hidden');

  const index = Array.from(btnsOpenProject).indexOf(this);

  // Set the project window content based on the index
  if (index < 3) {
    projectH1text.textContent = `#${index + 1}, Test window 1`;
    projectPtext.textContent =
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis velitesse non illo?';
  } else {
    projectH1text.textContent = `#${index + 1}, Test window 2`;
    projectPtext.textContent =
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis velitesse non illo?';
  }
};

// Create close project function
const closeProject = function () {
  projectbtn.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Create Event Listner for project buttons
for (let i = 0; i < btnsOpenProject.length; i++) {
  btnsOpenProject[i].addEventListener('click', openProject);
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
