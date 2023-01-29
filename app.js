
    import React from "react";
    import ReactDOM from "react-dom/client";
    
    // Vanilla Js

    // const heading = document.createElement('h1');
    // heading.innerHTML = "Namaste JS";
    // const root = document.getElementById('root');
    // root.appendChild(heading);
    
    // React JS
    const heading = React.createElement('h1', {key: 'h1'}, "Namaste React");
    const container = React.createElement('div', {id: 'container'}, [heading]);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(container);