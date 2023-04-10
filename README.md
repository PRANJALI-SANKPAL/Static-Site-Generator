 <h1>Static Site Generator</h1>
    <h2>Description</h2>
    <p>A static site generator is a tool that generates a website from API, instead of relying on a database or a server-side language like PHP.</p>
    <h2>Stack In Project</h2>
    <p>This is a web application that generates a random activity for the user to do when they access the home page. The activity is obtained by making a GET request to the "https://www.boredapi.com/api/activity/" endpoint using the Axios library. The response data contains information about the activity, such as the type, number of participants, price, accessibility, and a link to more information.<br>

The application is built using the Express framework for Node.js and uses EJS as a templating engine. The main file is index.js, where the Express app is created and the GET request is made to the API. The response data is then rendered using the index.ejs template, which contains the HTML, CSS, and JavaScript for displaying the data to the user.<br>

The application uses Bootstrap for styling and Font Awesome for icons. The main content is displayed in a container with two columns, one for the activity information and the other for a set of images. The activity information includes the activity name, type, accessibility, and a link to more information.</p>
    <h2>Getting Started</h2>
    <p>To get started with this project, you'll need to:</p>
    <ol>
      <li>Install Node.js</li>
      <li>Clone this repository</li>
      <li>Install the dependencies by running <code>npm install</code></li>
      <li>Run <code>node index.js</code> to start the development server</li>
    </ol>
    <h2>Usage</h2>
    <p>Once you have the site up and running, you can also customize the design of the site by editing the templates and stylesheets in the <code>public/css</code> and <code>views/index.ejs</code> directories.</p>
    <h2>Contributing</h2>
    <p>If you'd like to contribute to this project, please fork the repository and submit a pull request. You can also submit bug reports and feature requests by opening an issue.</p>
    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>
  
