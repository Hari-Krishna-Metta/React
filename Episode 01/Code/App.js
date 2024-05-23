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


const heading = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ]), 
    React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
    ])
]);


const parent = ReactDOM.createRoot(document.getElementById("root"));
parent.render(heading);
