import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},[React.createElement('h1',{},"ReactDOM Renders UI On The Screen"),React.createElement('h2',{},"H2 Heading Variations")])
);

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Master Of React !!..."
);


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(parent);
root.render(parent);



const heading = document.querySelector('h1');
heading.innerHTML = 'MasterJS';

root.render(heading);

// root.render(heading);




