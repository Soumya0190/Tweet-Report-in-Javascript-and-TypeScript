# Tweet-Report-in-Javascript-and-TypeScript
https://canvas.eee.uci.edu/courses/30017/assignments/599578

---

Here’s how you can explain your **Runkeeper Tweet Report** project using the **STAR method**:

---

### ✅ **S – Situation**
As part of a web development course, I was assigned to analyze and visualize fitness activity data derived from **Runkeeper tweets** using **JavaScript and TypeScript**. The objective was to build an interactive report that parses tweet data, categorizes it, and allows users to explore the results through a user-friendly interface.

---

### ✅ **T – Task**
I was tasked with:
- Parsing tweet data to extract dates, categories, and user-written content.
- Determining the **activity type** and **distance** from each tweet.
- Creating a **graph** to show activity distribution by distance.
- Implementing a **search box** to filter tweets.
- Populating a **data table** dynamically based on user input.
- Optionally adding dynamic updates or sentiment analysis for bonus points.

---

### ✅ **A – Action**
To fulfill these requirements:
- I wrote **TypeScript functions** to parse tweet content, identify keywords, categorize them, and calculate distances.
- Used **JavaScript DOM manipulation** to render a dynamic table that displayed the parsed tweet data.
- Built a **search box** that filtered tweets in real time based on keywords or user input.
- Generated a **distance graph** using charting libraries like Chart.js to visually represent activity types (e.g., run, bike).
- Ensured all components updated dynamically without page reloads.
- Explored bonus features like **dynamic sentiment analysis** to enhance insights into user-written tweets.

---

### ✅ **R – Result**
- Successfully implemented all core features and received **full marks** for the assignment.
- Enhanced my skills in **JavaScript, TypeScript, and data visualization**.
- Gained hands-on experience with **DOM manipulation, string parsing, and user interactivity**.
- The project gave me practical exposure to building **data-driven interfaces** with real-world applications in fitness tracking and social media mining.

---

Would you like this reformatted as a project description for your resume or portfolio?

---
Thanks for the clarification! Let's go over **`about.js`** and **`descriptions.js`** in detail based on their likely functions in your project.

### **1. `about.js`**
   - **Purpose**: The `about.js` file is responsible for handling the logic and interaction on the **"About the Data"** page, as mentioned in your project description. This file might provide details or an explanation about the data being visualized and processed.
   
   - **Potential Functionality**:
     - **Display Information**: It likely contains functions to dynamically display information about the dataset, such as explaining the sources of the data, the type of activities logged, and any insights from the data analysis.
     - **User Interaction**: The page might allow the user to toggle between different views of the data (e.g., high-level summary, detailed activity breakdown).
     - **Data Insights**: It could show statistical information about the data, such as the number of unique activities logged, the most common activity types, and more.
   
   - **Key Features**:
     - **Text or Chart Updates**: It might handle updating sections of the page where dynamic descriptions or visual representations of the data are shown.
     - **Event Handlers**: The script could attach event listeners to buttons or other elements on the page. For example, it might allow the user to toggle between different data views or reveal further details about the activity data.

### **2. `descriptions.js`**
   - **Purpose**: The `descriptions.js` file is likely designed to handle the functionality and dynamic behavior on the **"What People Are Saying"** page.
   
   - **Potential Functionality**:
     - **Load and Display Tweets**: This file will be responsible for loading the tweets stored in the `saved_tweets.json` file and displaying them in a readable format.
     - **Search and Filter**: It will also handle the search functionality on the "What people are saying" page. Users can enter a search term, and the page will filter through the tweets to show only those containing the search text.
     - **Updating the Display**: It likely includes logic for updating the page as users type in the search input (`id="textFilter"`). The list of tweets will update in real-time based on the search text.
     - **Event Handlers**: There will likely be event listeners to handle actions like:
       - **Filtering** tweets based on user input.
       - **Updating the search count** dynamically to show how many tweets match the search query.
     - **Dynamic Count**: The number of matching tweets (filtered by the search query) could be displayed in real-time. The script will update the count inside an HTML element with the id `searchCount`.
   
   - **Key Features**:
     - **Tweet Display**: This file will format and inject tweet data (e.g., tweet text, creation date) into the HTML table.
     - **Real-Time Filtering**: It allows the user to filter the tweets in real-time as they type into the search input field.
     - **Use of Promises**: As described in the `get_saved_tweets.js` file, the `descriptions.js` script will likely work with promises to fetch and display the tweet data asynchronously.

### Summary of Their Role:
- **`about.js`**: Handles the page that explains the dataset, gives details about the activities being logged, and possibly provides high-level statistics or analysis of the data. It might also support interaction with the page to toggle between different types of information.
- **`descriptions.js`**: Handles the functionality on the "What People Are Saying" page, which includes displaying tweets, filtering them based on user input, and dynamically updating the count of matching tweets. It integrates with `saved_tweets.json` to load and display the data.

Both of these files manage specific pages of your project, with **`about.js`** focusing on providing insights and information about the dataset, while **`descriptions.js`** focuses on handling the tweet display and search/filtering functionality.

Let me know if you need further details or clarifications on either file!

---

Sure! Let’s break down each file you’ve shared for your tweet report project and explain its purpose and functionality.

### 1. **`descriptions.html`**
   - **Purpose**: This HTML file is used to display a page titled "What people are saying" and shows a table of tweets related to the hashtag #RunKeeper.
   - **Components**:
     - **Navigation Bar**: At the top, there is a sticky navbar with links to different pages: "About the Data," "A wide range of activities," and "What people are saying."
     - **Search Bar**: A search input (`<input id="textFilter">`) allows users to filter tweets by text. As users type, the `addEventHandlerForSearch()` function is called to filter tweets.
     - **Table**: A table is used to display tweets filtered by the text input. The table has three columns:
       1. Index number (`#`).
       2. Activity type.
       3. Tweet text.
     - **Dynamic Content**: The number of tweets containing the search text and the text itself are dynamically updated via JavaScript (using elements like `<span id="searchCount">` and `<span id="searchText">`).

### 2. **`activities.html`**
   - **Purpose**: This HTML file displays a summary of various activities people have logged using the Runkeeper app during a week. It visualizes data and statistics on activities.
   - **Components**:
     - **Navigation Bar**: Same as in `descriptions.html`, linking to different pages.
     - **Activity Summary**: Displays statistics like:
       - The total number of different activities logged.
       - The most common activities (e.g., running, walking, etc.).
       - The types of activities people did the longest and shortest distances.
     - **Visualization**: The `div` with `id="activityVis"` is where a Vega-Lite visualization (likely a graph) is rendered to show activity distribution.
     - **Aggregated Data**: Users can click a button (`id="aggregate"`) to show aggregated data about the logged activities.
     - **Distance Visualizations**: Additional visualizations (`div` elements like `#distanceVis` and `#distanceVisAggregated`) are used to show graphs of distances covered during the activities.

### 3. **`saved_tweets.json`**
   - **Purpose**: This JSON file stores the tweet data that has been collected, specifically tweets related to #RunKeeper.
   - **Structure**: Each tweet is an object with two properties:
     - `text`: The content of the tweet.
     - `created_at`: The timestamp when the tweet was posted.
   - **Example**:
     ```json
     [
         {
             "text": "Just completed a 4.87 km run with @Runkeeper. Check it out! https://t.co/QeB0SmBONJ #Runkeeper",
             "created_at": "Sun Sep 30 06:58:57 +0000 2018"
         },
         {
             "text": "Just completed a 1.89 mi run with @Runkeeper. Check it out! https://t.co/Yo1voS1OoJ #Runkeeper",
             "created_at": "Sun Sep 30 06:58:57 +0000 2018"
         }
     ]
     ```

### 4. **`get_saved_tweets.js`**
   - **Purpose**: This JavaScript file defines the function `loadSavedRunkeeperTweets()`, which is used to load the saved tweet data (currently mocked data in the function).
   - **Functionality**:
     - The function returns a promise that resolves with the `RUNKEEPER_TWEETS` data (a hardcoded array of tweet objects).
     - This function is used to fetch tweet data that will later be displayed on the `descriptions.html` page, likely after some user input for filtering.
     - In a real-world scenario, this could be expanded to fetch the data from an external API or a database.

### 5. **`tweet.js`**
   - **Purpose**: This JavaScript file is generated from TypeScript (as mentioned in your previous messages) and likely contains functions for handling individual tweet data and related operations.
   - **Usage**: This file may have utility functions or classes to handle the tweet objects, possibly formatting them, extracting relevant information (like hashtags, mentions, etc.), or performing other operations related to the tweet's content.
   - **Example Usage**: 
     - The tweet data could be parsed or displayed in a specific format.
     - Functions might be available for extracting key statistics from the tweets, such as counting hashtags, mentions, or determining activity types.

### 6. **`activities.js`**
   - **Purpose**: This JavaScript file is responsible for handling the activities data in `activities.html`.
   - **Functionality**:
     - It interacts with the activity-related visualizations and statistics in the HTML.
     - It may process data about the types of activities people are doing (running, cycling, walking, etc.) and generate the appropriate visualizations and statistics.
     - This script likely handles user interactions with the page, such as the "Show means" button that aggregates activity data or processes the visualization data into readable statistics.

### 7. **`style.css`**
   - **Purpose**: This file contains custom styling for your web pages.
   - **Components**: 
     - It defines how various HTML elements (like tables, text, buttons, etc.) should appear visually.
     - You are already using external CSS libraries like Bootstrap, but this file likely overrides or adds additional custom styles to fit the design of your tweet report project.

### 8. **External Libraries/Resources**:
   - **jQuery**: Used for DOM manipulation and event handling (e.g., filtering tweets based on user input).
   - **Math.js**: A JavaScript library for performing complex math operations, though it's unclear if it's being used in your current implementation.
   - **Vega-Lite**: A library for creating visualizations, especially for activity and distance data, as seen in `activities.html`.
   - **Bootstrap**: Provides responsive and styled components for the layout, such as the navbar and buttons.
   - **Vega-Embed**: Used to embed visualizations created with the Vega or Vega-Lite libraries.

### Summary of Project Workflow:
1. **Data Collection**: Tweets related to #RunKeeper are stored in `saved_tweets.json`.
2. **Data Display**: The HTML files (`descriptions.html` and `activities.html`) display the data in a user-friendly way.
   - **In `descriptions.html`**: Users can filter tweets by text.
   - **In `activities.html`**: Users can view activity statistics and visualizations.
3. **Dynamic Content**: JavaScript files (`get_saved_tweets.js`, `tweet.js`, `activities.js`) load and manipulate tweet and activity data to update the page dynamically.
4. **Visualizations**: Vega-Lite is used to create graphs that show activity distributions and distances, enhancing the report.

Would you like assistance with enhancing or debugging any part of this setup?

---

To run your tweet report project locally, you need to ensure that all files are correctly structured, all necessary libraries are loaded, and that the project is served from a local web server. Here's a step-by-step guide on how to run the code:

### Prerequisites:
1. **Basic Files Setup**: Ensure that you have all the files in the correct directory structure. From the code you've shared, this should look like:
    ```
    /tweet-report-project
    ├── /css
    │   └── style.css
    ├── /js
    │   ├── about.js
    │   ├── descriptions.js
    │   ├── get_saved_tweets.js
    │   ├── tweet.js (if this file was missing, ensure that it is present, or remove the reference in HTML)
    │   └── activities.js
    ├── /index.html
    ├── /about.html
    ├── /activities.html
    └── /descriptions.html
    └── saved_tweets.json
    ```

2. **Local Server Setup**:
   For local testing, you’ll need a simple server. You can use any of the following options:
   - **VS Code with Live Server Extension** (simplest option).
   - **Python’s HTTP Server**.
   - **Node.js with Express** (if you want more control).

### Option 1: Running the Project with VS Code Live Server
1. **Install VS Code** if you don’t have it: [Download VS Code](https://code.visualstudio.com/).
2. **Install Live Server Extension**:
    - Open VS Code.
    - Go to the Extensions Marketplace (left sidebar).
    - Search for “Live Server” and install it.
3. **Open Project Folder in VS Code**:
    - Open the folder where your project is located.
4. **Start Live Server**:
    - Right-click on `index.html` or `descriptions.html` in the file explorer.
    - Click on “Open with Live Server.”
5. **Access the Project**:
    - Your project will automatically open in your default web browser, and it will reload changes you make to the code.

### Option 2: Running the Project with Python's HTTP Server
If you don't have VS Code, you can use Python to serve the project. This is helpful if you're comfortable with Python.

1. **Ensure Python is installed** on your machine (Python 3.x).
2. **Navigate to Your Project Folder** in the command line (terminal).
   ```bash
   cd /path/to/tweet-report-project
   ```
3. **Run Python HTTP Server**:
   For Python 3.x:
   ```bash
   python3 -m http.server
   ```
   For Python 2.x:
   ```bash
   python -m SimpleHTTPServer
   ```
4. **Access the Project**:
   - Open a browser and navigate to `http://localhost:8000`.
   - Your project should be accessible now.

### Option 3: Running the Project with Node.js and Express (For Advanced Users)
If you need more flexibility or plan on expanding the project with back-end services, you can use Node.js and Express.

1. **Install Node.js**: [Download Node.js](https://nodejs.org/).
2. **Initialize the Project**:
    - In the command line, navigate to your project folder and run:
      ```bash
      npm init -y
      ```
3. **Install Express**:
    ```bash
    npm install express
    ```
4. **Create an `index.js` File**:
    In your project folder, create a file named `index.js` with the following content:
    ```javascript
    const express = require('express');
    const path = require('path');

    const app = express();
    const port = 3000;

    // Serve static files (HTML, JS, CSS)
    app.use(express.static(path.join(__dirname, '')));

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
    ```
5. **Run the Server**:
    - In the command line, run:
      ```bash
      node index.js
      ```
6. **Access the Project**:
    - Open a browser and go to `http://localhost:3000`.

### Sample Run:
1. **Navigating to Your Project**: After starting your server (Live Server, Python, or Node.js), open the project in your browser. For example:
    - If you are using Live Server: Go to `http://127.0.0.1:5500/index.html`.
    - If you're using Python's HTTP Server: Go to `http://localhost:8000/index.html`.
    - If you're using Node.js with Express: Go to `http://localhost:3000/`.

2. **Interacting with the App**:
    - **On the "What people are saying" page (`descriptions.html`)**:
        - Type in a search term (e.g., "run") in the input box. The table should filter and show tweets that include the search term.
        - The number of matching tweets will update as you type.
    - **On the "A wide range of activities" page (`activities.html`)**:
        - Visualizations for the different activities should be shown, and clicking the "Show means" button will aggregate the data.
    - **On the "About the Data" page (`index.html`)**:
        - Information about the dataset (number of activities, insights, etc.) will be displayed.

### Troubleshooting:
- **If you see 404 errors**: Ensure all file paths are correct, and that the files are in the appropriate folder.
- **If JavaScript doesn't work**: Open the browser developer tools (F12) and check for any console errors. Ensure all `.js` files are linked correctly.

### Conclusion:
By following one of these options, you should be able to run and interact with your project locally. The app will allow users to explore tweets about activities, analyze the data, and see visualizations, all based on the information stored in `saved_tweets.json`.