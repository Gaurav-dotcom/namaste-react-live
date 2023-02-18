Chapter 3 

What is JSX ? 

JSX is Javascript Extension Syntax used in React to easily write HTML and Javascript together. 

JSX is  not  at all requirement for using react. You can write react without JSX also.

Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.

const JSX = <h1>This is JSX</h1>

This is the simple JSX code in React. But the browser does not understand this JSX because it   s not valid Jvascript code. This is because we are assigning an HTML tag to a variable that is not a string but just HTML like code.

So to convert it into browser understandable code, we use  a transpiler/compiler Babel.

Babel converts JSX  to 

React.createElement(type, [props], [...children])

Let’s look at the parameters of the createElement function.

type can be an HTML tag like h1, div or it can be a React component
props are the attributes you want the element to have
children contain other HTML tags or can be a component

React.createElement("h1", null, "This is JSX");

So React introduced the JSX way of writing code which makes code easy to write and understand. 

With JSX you can write expressions inside curly braces {}. The expression can be e react variable, or property or any other valid JS expression. JSX will execute the expression and return the result

Conditional Operators in JSX Expressions:-

React supports if statements, but not inside JSX.

We can`t write if conditions in JSX expressions. But React allows us to write conditional operators, like ternary operators as well as the logical short circuit && operator.




Super Powers of JSX.

React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

JSX allows us to write HTML elements inJavascript and place them in DOM without any createElement() and/or appendChild() methods.

JSX makes it easier to write React applications.

JSX helps us in keeping our code simpler and elegant when writing large pieces of code.

JSX is helpful and elegant when we write multi level html structure as writing that with React.createElement would be a complete mess and difficult to maintain.

One of the superpower of JSX is that it protects our app from XSS (Cross site scripting attack).

Role of type attribute in script tag ? What options can i use there ?

The HTML <script> type attribute is used to specify the  MIME (Multipurpose Internet Mail Extension) type of script and identify the content of the Tag. It has a default value which is "text/javascript".


{titleComponent} vs <TitleComponent/> vs <TitleComponent></TitleComponent>

{titleComponent} is a basic react element. It`s a javascipt varibale which holds some JSX. It is the basic building block of the react application. It is an object representation of a virtual dom  node. It may contain other elements in its props. React Element does not have any methods, making it fast and lighter to render than components.

Elements are immutable once created cannot be changed.

<TitleComponent/> is a react component. It is independent and reusable. It returns the virtual dom of the element. One may or may not pass values while creating component. A component can be further described into functional component and class based component. the state in a component is mutable.

<TitleComponent></TitleComponent>
In React JS we write <TitleComponent><TitleComponent/> whenever we have to pass child component in between these this component. You would access those children via the special property props.children.

Role of type attribute in script tag ? What options can I use there ?

The <script> HTML element is used to embed executable code or data. This is typically used to refer to JS code.

The attribute type indicates the type of the script respresented. 

If this attribute is not set (default) it indicates that the script is the classic script containing JS code. 

type = module. This value causes the code to be treated as a JS module. The processing of the script contents is deferred. The charset and defer attributes have no effect. For information on using module, see our JavaScript modules guide. Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.

importmap - This value indicates that the body of the element contains an important map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.


