'use strict';

// UI
const tabsMenuNode = document.querySelector('.js-tabs-menu');
const tabsNode = document.querySelector('.js-tabs');
const tabRadioNodes = document.querySelectorAll('input[name="tabs"]');

const tabs = [...tabRadioNodes].reduce((obj, radio) => {
  const tabId = radio.id;

  obj[tabId] = {
    radio,
    menuLabel: tabsMenuNode.querySelector(`[data-tab-id="${tabId}"]`),
    label: tabsNode.querySelector(`[data-tab-id="${tabId}"]`),
  };

  return obj;
}, {});

let openedTabs = ['tab1'];

tabsMenuNode.addEventListener('click', onTabsClick);
tabsNode.addEventListener('click', onTabsClick);

function onTabsClick(event) {
  event.preventDefault();

  const target = event.target;
  const actionNode = target.dataset.tabAction
    ? target
    : target.closest('[data-tab-action]');

  if (!actionNode) return;

  const tabId = actionNode.dataset.tabId;
  const action = actionNode.dataset.tabAction;

  renderTab(tabId, action);
}

function renderTab(tabId, action) {
  switch (action) {
    case 'open':
      openTab(tabId);
      break;
  }
}

function openTab(tabId) {
  if (isActiveTab(tabId)) return;

  if (!~openedTabs.indexOf(tabId)) {
    openedTabs.push(tabId);
    openedTabs.sort();
  }

  for (let id in tabs) {
    if (tabId === id) {
      tabs[id].menuLabel.classList.add('file_active');
      tabs[id].label.classList.add('tab_opened');
      tabs[id].radio.checked = true;
      continue;
    }

    tabs[id].menuLabel.classList.remove('file_active');
  }
}

function isActiveTab(tabId) {
  return tabs[tabId].menuLabel.classList.contains('file_active');
}
