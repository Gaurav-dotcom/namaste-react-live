# namaste-react-live
React Learning


Chapter - 01

What is Emmet ?

Emmet is a web developer`s toolkit that can greatly improve your HTML & CSS workflow. Using Emmet you can write CSS like expressions that can be dynamically parsed and produce output that depends on what you type in the abbrevation. 

There is a proper syntax to generate code snippets. Emmet doesn`t have predefined set of tag names. You can write any word and it would convert into a tag name. Nesting Operators are used to position abbrevation elements inside generated tree: whether it should be placed inside or near the context elements.

Child >

You can use > to nest elements inside each other.

Sibling +

Use + operator to place elements near each other on same level

Climb up ^

With ^ you can  climb one level up and change context where elements should appear. You can use as much ^ to climb each level up.

Multiplication * 

With multiplication you can define how many times elements should be outputted.

Grouping ()

Parenthesis are used for grouping subtrees in complex abbrevations.

ID and Class

elem#id and elem.class

Custom Attributes
[attr]

Text {Click Me}


Example 
#page>div.logo+ul#navigation>li*5>a{Item $}

<div id="page">
    <div class="logo"></div>
    <ul id="navigation">
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
        <li><a href="">Item 3</a></li>
        <li><a href="">Item 4</a></li>
        <li><a href="">Item 5</a></li>
    </ul>
</div>


Difference between library and framework ?

Both library and framework are code written by someone else that let helps  you solve common tasks in less verbose way.

The technical difference between library and framework lies in a term called inversion of control.

When you use library, you are in charge of the flow of the application. You are choosing when and where to call the library.

When you use framework, the framework is in charge of the flow. It provides some places for you to plugin your code, but it calls the code you plugged in as needed.


What is CDN? Why do we use it ?

A Content Delivery Network also abbreviated as CDN is a group  of geographically distributed servers which work together to provide fast delivery of internet content. CDN does not host content it does not act as hosting server but act as proxy server which helps in caching contentat the network edge which improves websites performance.

The benefits of using CDNs are:-

1. Improving website`s loading time.
2. Reducing Bandwidth`s cost.
3. increasing content availability and redundancy.
4. Improving website security. - By providing Ddos mitigation.


Why is React known as react ?



What is crossorigin in script tag ?

The crossorigin attribute sets the mode of the request to an HTTP CORS Request. A cross origin request is a request for a resource from another domain.

The cross origin attribute is valid on <audio>, <img>, <link>, <script> and <video> elements.

The opposite of cross-origin requests is same-origin requests. This means that a web page can only interact with other documents that are also on the same server.


CORS stands for Cross Origin Resource Sharing which is a mechanism that allows resources on a web page to be requested from another domain outside their domain.

What is difference between React and ReactDom ?

Before V 0.14 there was only React and there was not any ReactDom. The functionality of react-dom was in react only. The reason React and ReactDOM were split into two libraries was due to the arrival of React Native.

The React package holds the react source for components, state , props in react.

The react-dom package as the name  implies is the glue between React and the DOM. Often you will use it for only one thing: mounting your application to the index.html file with ReactDOM.render().


What is difference between react.development.js and react.production.js files via CDN?

The development build is used as the name suggests for development reasons. You have Source Maps, debugging and often times Hot reloading ability in those builds.

The production build on the other hand runs in the production mode which means this is the code running on your client`s machine. There`s also no hot reloading included. 

The production build runs uglify and builds your source files into one or multiple minimized (compressed) files. 

This makes rendering of file on end user`s browser very quick and performance enhancing.

What is async and defer ?

When a web page is loaded it mainly consists of html parsing and scripts loading. 

There are three scenarios in  which we can use script tags . We can use them without any attribute or with async attribute or with defer attribute. 

Without using any attribute. 

HTML parsing is done and then when javascript files are loaded and executed during this time HTML parsing is paused and when script loading and execution is done then html parsing continues.

With using async attribute.

When we use async attribute the script loading is done asynchronously with html parsing and then whe n script is executed then parsing is paused and continues after script is executed.

With using Defer attribute.

When we use defer attribute script loading is done asynchronously along with html parsing and when html parsing is complete than script execution takes place.