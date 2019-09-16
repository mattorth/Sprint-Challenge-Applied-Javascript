// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const heading = document.createElement('h1');
    const temp = document.createElement('span');

    // structure
    header.appendChild(date);
    header.appendChild(heading);
    header.appendChild(heading);
    header.appendChild(temp);

    // content
    date.textContent = 'MARCH 28, 2019';
    heading.textContent = 'LambdaTimes';
    temp.textContent = '98 degrees';

    // style
    header.classList.add('header');
    date.classList.add('date', 'span');
    heading.classList.add('h1');
    temp.classList.add('temp', 'span');


    // event handlers
    
    return header
};

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
