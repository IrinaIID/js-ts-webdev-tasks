const body = document.body;

function createElementAppendParent(tagName, className, parentTag) {
  const newElem = document.createElement(tagName);
  newElem.classList.add(className);
  parentTag.append(newElem);
  return newElem;
}

function createElementAfterParent(tagName, className, parentTag) {
  const newElem = document.createElement(tagName);
  newElem.classList.add(className);
  parentTag.after(newElem);
  return newElem;
}



const cardsData = [
  {
    title: 'Startup Framework',
    titleStyle: 'color-dark-blue',
    description: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
    descriptionStyle: 'color-dark-blue',
    textBtn: 'Explore',
    btnStyle: 'color-dark-blue bg-color-white',
    cardStyle: 'bg-color-light-grey'
  },
  {
    title: 'Web Generator',
    titleStyle: 'color-dark-blue',
    description: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
    descriptionStyle: 'color-grey',
    textBtn: 'Explore',
    btnStyle: 'color-white bg-color-light-mint',
    cardStyle: 'border-light-grey'
  },
  {
    title: 'Slides 4',
    titleStyle: 'color-white',
    description: 'All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.',
    descriptionStyle: 'color-white',
    textBtn: 'Explore',
    btnStyle: 'color-dark-blue bg-color-white',
    cardStyle: '.bg-accent-blue'
  },
  {
    title: 'Postcards',
    titleStyle: 'color-white',
    description: 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.',
    descriptionStyle: 'color-white',
    textBtn: 'Explore',
    btnStyle: 'color-dark-blue bg-color-white',
    cardStyle: 'bg-img-sea-boat'
  },
]

function initPage() {
  const mainContainer = createElementAppendParent('main', 'main', body);
  const firstBlocPage = createElementAppendParent('div', 'first-block-page', mainContainer);

  const card = createElementAppendParent('h1', 'name', firstBlocPage);
  card.textContent = 'Explore Showcase';
  const btnContainer = createElementAppendParent('button', 'btn-container', firstBlocPage);
  btnContainer.textContent = 'Explore Showcase';

  const cardsContainer = createElementAppendParent('div', 'cards-container', mainContainer);






}


document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  initPage();
});