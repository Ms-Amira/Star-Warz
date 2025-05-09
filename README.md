# Star-Warz

This project is a simple web application that demonstrates how to connect to an API, fetch and display data dynamically, and use modern JavaScript techniques to build a responsive, interactive interface. Using the Star Wars API (SWAPI), users can view character information, search through the database, and understand how various JavaScript and web development concepts work in practice.

## 🚀 Final Product

A searchable Star Wars character database where users can:
- Fetch and display data from an external API
- View character details grouped or individually
- Search for characters with a debounced input
- Render information dynamically to the DOM

## 🛠️ Technologies Used

- **Vite** - For rapid development and hot module replacement
- **JavaScript** - Core scripting language for logic and DOM manipulation
- **HTML/CSS** - Basic structure and styling of the UI
- **SWAPI (Star Wars API)** - External API providing character data

## 🧠 Key Concepts

- **Vite**: A modern build tool that offers a faster development experience. It initializes the project structure and runs the development server.
- **API (Application Programming Interface)**: Allows the application to communicate with external services—in this case, to retrieve Star Wars data.
- **DOM (Document Object Model)**: Represents the HTML structure as objects. JavaScript is used to manipulate this to render API data in real-time.
- **Debouncing**: Optimizes performance by limiting how often the search function is called during rapid input changes.
- **Event Listener**: A function that reacts to user interactions, like typing in the search bar or clicking on a button.
- **Async/Await**: Used for fetching data asynchronously, simplifying the management of asynchronous operations and improving readability.
- **Rate Limiting**: Handled to avoid exceeding the allowed number of API requests in a given time frame.