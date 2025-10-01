// const heading = React.createElement("h1",
//     {id:"heading"},
//     "REACTDOM-Render-Magic"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



/* 
<div id = "parent">
    <div id = "child">
    <h1>React Redering On The Screen</h1>
    </div>
</div>
*/


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



// root.render(heading);




