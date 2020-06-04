/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/
const body = document.querySelector('body')

function makeMenu(menuDataObj){
  const menu = document.createElement('div');
  const menuListItems = document.createElement('ul');
  const firstMenuItem = document.createElement('li');
  const secondMenuItem = document.createElement('li');
  const thirdMenuItem = document.createElement('li');
  const fourthMenuItem = document.createElement('li');
  const fifthMenuItem = document.createElement('li');
  const sixthMenuItem = document.createElement('li');
  menu.appendChild(menuListItems);
  menu.classList.add('menu');
  firstMenuItem.textContent = menuDataObj[1];
  secondMenuItem.textContent = menuDataObj[2];
  thirdMenuItem.textContent = menuDataObj[3];
  fourthMenuItem.textContent = menuDataObj[4];
  fifthMenuItem.textContent = menuDataObj[5] ;
  sixthMenuItem.textContent = menuDataObj[6];
  return menu
}

for (let i = 0; i < menuItems.length; i++){
  const menu = makeMenu(menuItems[i]);
  body.prependChild(menu);
}

