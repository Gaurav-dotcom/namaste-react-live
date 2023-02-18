
    import React from "react";
    import ReactDOM from "react-dom/client";

    // const heading1 = React.createElement("h1", {
    //     color: "red",
    //     key: "h1"
    // }, "Namaste Everyone");
    
    // React.createElement returns us an object which is then converted to htm and puts it in DOM.
    
    
    // JSX Expression
    // const heading2 = React.createElement("h1", {
    //     color: "blue",
    //     key: "h2"   
    // }, "Namaste Guys");
    
    // JSX - it is not html inside javascript. JSX is like HTML but it is not html inside javascript.
    
    // JSX -> React.createElement -> Object -> HTML -> Render to DOM
    
    
    const heading3 = <h1 id="title" key="h">Namaste JSX</h1>
    
    
    // const JsxContainer = function() {
    //     return (
    //         React.createElement("div", {
    //             id: 'jsxContainer',
    //             key: 'jsxdiv'
    //         }, [<h1 key='jsxh1'>Namaste JSX</h1>, <h2 key='jsxh2'>Hello JSX</h2>, <h3>Jsx is awesome</h3>])
    //     )
    // };


    // const container = React.createElement("div", {
    //     id : 'container',
    //     className: 'title',
    //     style: {
    //         backgroundColor: 'yellow',
    //         padding: '10px',
    //         margin: '10px',
    //     },
    //     key: 'div'
    // }, [React.createElement("h1", {}, "Namaste React"), React.createElement("h1", {key: "h2"}, "CreateElement2"), React.createElement("h1", {key: "h3"}, "CreateElement3"), <JsxContainer/>]);
    

    const HeaderComponent = function (){
        return(
            <div style={{display: "flex", justifyContent: "space-between", alignItems: 'center', border: 'solid 1px black', padding: '5px', margin: '5px'}}>
                <h1>Let`s Learn React</h1>
                <input
                    style={{height: '20px', width: 'auto'}}
                    type="text"
                    placeholder="Search..."
                />
                <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-1024.png" style={{width: '50px'}}/>
            </div>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeaderComponent />);