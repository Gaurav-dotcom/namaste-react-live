
    import React from "react";
    import ReactDOM from "react-dom/client";

    /*
    Hot Module Reloading
    File Watcher Algorithm
    Bundling
    Cleaning our code
    Dev and production build
    Super fast build algorithm
    Image Optimization
    Caching while development
    Compatible with older version of browser
    Tree Shaking - removing unwanted code
    Port Number
    
    */
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