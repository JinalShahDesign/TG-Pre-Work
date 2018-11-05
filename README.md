# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

Once you put in the URL the browser checks the cache for a DNS record to find the corresponding IP address. Browser initiates a TCP connection with the server.The browser sends an HTTP request to the web server.The server handles the request and sends back a response.The server sends out an HTTP response.The browser displays the HTML content.

## From start to finish how does that data reach you to be rendered in the browser?

When you enter the URL in to the browser an API is sent to the server to retrieve the file. The data is then displayed by your browser using HTTP protocol. The file is not saved on your computer it is only displayed temporarily while you navigate it.

## What code is rendered in the browser?

The rendering engine communicates with the networking layer of the browser to grab HTML code and other items passed from a remote server. The rendering engine will parse the style data, both in external CSS files and in style elements. 

## What is the server-side code’s main function?

The server-side code handles tasks like validating submitted data and requests, using databases to store and retrieve data and sending the correct data to the client as required.

Server-side code can be written in any number of programming languages — examples of popular server-side web languages include PHP, Python, Ruby, C#, and NodeJS(JavaScript). The server-side code has full access to the server operating system and the developer can choose what programming language (and specific version) they wish to use. 

## What is the client-side code’s main function?

Code running in the browser is known as client-side code and is primarily concerned with improving the appearance and behavior of a rendered web page. This includes selecting and styling UI components, creating layouts, navigation, form validation, etc.

Client-side code is written using HTML, CSS, and JavaScript — it is run inside a web browser and has little or no access to the underlying operating system (including limited access to the file system).  

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

For each HTTP request the server will create an instance of the client side assets.

## How many instances of the server-side code are available at any given time?

There's only one instance of the server-side code at any given time.

## What is runtime?

Runtime describes software/instructions that are executed while your program is running, especially those instructions that you did not write explicitly, but are necessary for the proper execution of your code.

## How many instances of the the databases connected to the server application are created?

Every time the database is accessed to pull data by the web server an instance is created.
