import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTabBar} from '@material/tab-bar';
import {MDCDrawer} from "@material/drawer";
import states from './states.json';
import {MDCRipple} from '@material/ripple';

const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

tabBar.listen('MDCTabBar:activated', (activatedEvent) => {
  document.querySelectorAll('.adopt-a-pup-body').forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove('adopt-a-pup-body--hidden');
    } else {
      element.classList.add('adopt-a-pup-body--hidden');
    }
  });
});

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;


const cardPrimaryActionEls = Array.from(document.querySelectorAll('.mdc-card__primary-action'));
cardPrimaryActionEls.forEach((el) => new MDCRipple(el));


/* form code */
// const selectElement = document.querySelector('.mdc-select');
// const textFields = document.querySelectorAll('.mdc-text-field');
// const adoptFormStateSelect = document.querySelector('.adopt-form__states');
// const chipSetEl = document.querySelector('.mdc-chip-set');

// textFields.forEach(tf => {
//   const textField = new MDCTextField(tf);
// });



// const mdcSelect = new MDCSelect(selectElement);


// const chipSet = new MDCChipSet(chipSetEl);

// const populateStates = () => {
//   setTimeout(() => {
//     states.forEach(state => {
//       const option = document.createElement('option');
//       option.classList.add('mdc-list-item');
//       option.setAttribute('data-value', state.abbreviation);
//       option.innerText = state.name;
//       adoptFormStateSelect.appendChild(option);
//     });
//   });
// }
// populateStates();

// let currentAdoptCardForm = null;
// const animatingClass = 'adopt-form__animating-container--animating';
// const animatingContainerClass = 'adopt-form__animating-container';
// const adoptFormHiddenClass = 'adopt-form--hidden';
// const adoptForm = document.querySelector('.adopt-form');
// const adoptFormButtons = document.querySelectorAll('.adopt-form__button');

// const removeForm = (card) => {
//   const animatingAdoptForm = card.querySelector(`.${animatingContainerClass}`);
//   const cardActions = card.querySelector('.mdc-card__actions');
//   cardActions.querySelector('.adopt-form__button-text').innerText = 'Adopt';
//   cardActions.querySelector('.adopt-form__button-icon').innerText = 'pets';

//   animatingAdoptForm.classList.add(animatingClass);
//   setTimeout(() => {
//     if (!card) return;
//     card.removeChild(adoptForm);
//     document.body.appendChild(adoptForm);
//     adoptForm.classList.add(adoptFormHiddenClass);
//   }, 200);
// }

// const addForm = (card) => {
//   const cardActions = card.querySelector('.mdc-card__actions');
//   adoptForm.classList.remove(adoptFormHiddenClass);
//   requestAnimationFrame(() => {
//     card.insertBefore(adoptForm, cardActions);
//     cardActions.querySelector('.adopt-form__button-text').innerText = 'Send Info';
//     cardActions.querySelector('.adopt-form__button-icon').innerText = 'send';
//     const animatingAdoptForm = card.querySelector(`.${animatingContainerClass}`);

//     animatingAdoptForm.classList.add(animatingClass);
//     requestAnimationFrame(() => {
//       animatingAdoptForm.classList.remove(animatingClass);
//     });
//   });
  
// }

// const handleAdoptFormClick = (e) => {
//   // not supported by IE11
//   const card = e.target.closest('.mdc-card');

//   if (currentAdoptCardForm) {
//     removeForm(currentAdoptCardForm);
//     if (currentAdoptCardForm === card) {
//       currentAdoptCardForm = null;
//       return;
//     };
//   }

//   currentAdoptCardForm = card;
//   addForm(currentAdoptCardForm);
// }

// adoptFormButtons.forEach(adoptFormButton => {
//   adoptFormButton.addEventListener('click', handleAdoptFormClick);
// });







const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('.mdc-drawer-app-content');
const drawerCloser = document.querySelector('.drawer-close-icon')

listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

drawerCloser.addEventListener('click', (event) => {
  drawer.open = false;
});

document.body.addEventListener('MDCDrawer:closed', () => {
  mainContentEl.querySelector('input, button').focus();
});

