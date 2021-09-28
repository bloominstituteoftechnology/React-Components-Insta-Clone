import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));
const navLinks = document.querySelectorAll('nav a');
const h1Element = document.querySelector('h1');
let busImg = document.getElementById("funbus");
// navLinks[0].style.color = "#396608";


console.log('This is: ', navLinks);
const colorGreen = '#396608';
const navLinksArray = Array.from(navLinks);
for (let i = 0; i < navLinksArray.length; i++)
{
    navLinksArray[i].style.color = colorGreen;
    navLinksArray[i].addEventListener('click', () =>
    {
        console.log('clicked navLinks[0] before if');
        navLinks[i].style.fontFamily = "Impact,Charcoal,sans-serif";
        navLinks[i].style.color = "#e3df0e";
    });
}
// let index = 0;
// for (const key in navLinks)
// {
// const colorGreen = '#396608';
//     if (key.includes("nav-link"))
//         navLinksArray[index++].style.color = "colorGreen";
// }

// navLinks[0].addEventListener('click', event =>
// {
//     console.log('clicked navLinks[0] before if');
//     navLinks[0].style.fontFamily = "Impact,Charcoal,sans-serif";
//     navLinks[0].style.color = "#e3df0e";
//     if (navLinks[0].style.color === "#e3df0e" || navLinks[0].style.color === "#a30af5")
//     {
//         console.log('clicked navLinks[0] after if');
//         navLinks[0].style.color = "#2de0ed";
//         navLinks[0].style.fontFamily = "Times New Roman";
//     } else if (navLinks[0].style.color === "#2de0ed")
//     {
//         navLinks[0].style.color = " #a30af5";
//     }

// });

// navLinks[0].addEventListener('click', event =>
// {
//     if (event.target === navLinks[0])
//     {
//         navLinks[0].style.color = "#e3df0e";
//         navLinks[0].style.fontFamily = "Impact,Charcoal,sans-serif";

//     }
// });


h1Element.addEventListener('mouseover', event =>
{
    console.log("mouse over h1 element");
    h1Element.textContent = "Fun Bus Here For you!";
    h1Element.style.fontSize = "5em";
    h1Element.style.fontFamily = 'cursive';
    h1Element.style.color = "#f20771";
});
h1Element.addEventListener('mouseout', event =>
{
    h1Element.textContent = "Fun Bus";
    h1Element.style.fontSize = "4em";
    h1Element.style.fontFamily = 'Indie Flower', 'cursive';
    h1Element.style.color = "#000008";
});

busImg.addEventListener('mouseover', () =>
{
    busImg.style.visibility = "hidden";

});

busImg.addEventListener('mouseout', () =>
{
    busImg.style.visibility = "visible";

});

navLinks[1].addEventListener('dblclick', event =>
{
    event.target.style.backgroundColor = "white";
    event.target.style.color = 'purple';
}); 