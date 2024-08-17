// /* <div id="parent">
//     <div id="child">
//         <h1>I am h1</h1>
/*         <h2>I am H2</h2> 
//     </div>
// </div> */

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am H1"),React.createElement("h2",{},"I am H2")]));




const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(parent); // returns an object
root.render(parent);//converts an object to HTML element
