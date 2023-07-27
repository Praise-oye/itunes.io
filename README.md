iTunes Web Store
For this project, my objective was to develop a web application using React and Express, encompassing various concepts such as Express, Restful APIs, the Fetch API, React, and JavaScript.

The task was to create a full-stack web application that interacts with the iTunes Search API. The application enables users to search for content within the iTunes Store and Apple Books Store. Additionally, users can create a list of their favorite items.


Installation
To install the project, download the project files onto your local machine.

Open the project folder in your preferred code editor. If you are using VS Code, navigate to the project folder in your terminal/command interface and run the command code ..

This will open the project folder in VS Code.

Next, navigate to the backend folder and run npm install, followed by npm start. You should see a console message indicating that the server is listening on port 3001.

Then, navigate to the frontend folder and perform the same steps (run npm install, followed by npm start). The console should display a message stating that the frontend has compiled successfully, and you can access the app at http://localhost:3000.

Usage
This app allows you to search for your favorite content from the iTunes Store.

To use the app, simply enter a search term and select a category. Click the 'Search' button to view the results.

To add an item to your favorites, click the heart icon on the item's card.

Enjoy using the app!

Testing
To test the app, navigate to the test folder located in ./frontend using your terminal/command interface.

Run the command npm test to execute the tests.

Application Security
To enhance the security of the application, Helmet.js middleware was employed. Helmet is used with Express applications to set various HTTP headers, aiming to make the application more secure. It helps protect against attacks like Cross-Site Scripting (XSS) and clickjacking.

API Keys
No API keys were required to access the iTunes Search API. In cases where API keys are necessary, they should be handled securely, such as by using .env and .gitignore files.


GitHub: https://github.com/Praise-oye