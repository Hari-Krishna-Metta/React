// <div id = "parent"> 
//     <div id = "child1"> 
//     <h1>I'm a h1 tag</h1>
//     <h2>I'm a h2 tag</h2>
//     </div>
//     <div id = "child2"> 
//         <h1>I'm a h1 tag</h1>
//         <h2>I'm a h2 tag</h2>
//     </div>
// </div>
import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id: "child1"}, [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2", {}, "I'm an h2 tag")
//     ]), 
//     React.createElement("div", {id: "child1"}, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag")
//     ])
// ]);

//React Element
// const jsxHeading = <h1>Welcome to REACT!!</h1>;



//React Components
//Class Based Components
//Functional Based Components

//Component Composition

//React element
const title = <h1>Hello,</h1>;

console.log(title);

const JSXHeading = () => {
    return <h1>Welcome to REACT!!</h1>;
}


const HeadingComponent = () => {
    return <>
        {title} {/*//To get react element/js code into the functional component just use curly braces {}; */}
        <JSXHeading /> {/*//To incorporate another functional component use < Component_Name/> */}
        <h2>Functional Component!!</h2>
    </>
};

const parent = ReactDOM.createRoot(document.getElementById("root"));
parent.render(<HeadingComponent />);