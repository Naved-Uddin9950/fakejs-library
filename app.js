import './src/components/index.js';
import './src/states/index.js';

const temp = document.querySelector('head');
temp.classList.remove('main-css');
temp.innerHTML = `
    <link rel="stylesheet" href="./index.css" class="main-css">
`;