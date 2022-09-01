'use strict';

// UI
const filterRadioNodes = document.querySelectorAll('input[name=filters]');
const projectNodes = document.querySelectorAll('.project');
const tabLabelNode = document.querySelector(
  '[data-tab-id=tab-projects] span span'
);

const filters = [...filterRadioNodes].reduce((obj, radio) => {
  const id = radio.dataset.filterId;

  obj[id] = radio.nextElementSibling.querySelector('span').innerHTML;

  return obj;
}, {});

setTabName();

document.body.addEventListener('change', onFilterMenuChange);
document.body.addEventListener('click', onClearFilterButtonClick);

function onFilterMenuChange(event) {
  const target = event.target;

  if (target.name !== 'filters') return;

  const filterId = target.dataset.filterId;

  filterProjects(filterId);
  setTabName(filterId);
}

function onClearFilterButtonClick(event) {
  const target = event.target;
  const actionNode = target.dataset.tabAction
    ? target
    : target.closest('[data-tab-action]');
  if (!actionNode) return;
  if (actionNode.dataset.tabAction !== 'clear') return;

  clearFilter();
}

function filterProjects(filterId = 'all') {
  projectNodes.forEach((projectNode) => {
    const projectTags = projectNode.dataset.tags.split(',');

    if (projectTags.includes(filterId) || filterId === 'all') {
      projectNode.classList.remove('project_hidden');
    } else {
      projectNode.classList.add('project_hidden');
    }
  });
}

function setTabName(filterId = 'all') {
  tabLabelNode.innerHTML = filters[filterId];
}

function clearFilter() {
  if (filterRadioNodes[0].checked === true) return;

  filterRadioNodes[0].checked = true;
  filterProjects();
  setTabName();
}
