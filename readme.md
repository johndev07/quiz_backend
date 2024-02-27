# Project Name

A simple Node.js application for managing and storing questions with options.

## Prerequisites

Before you begin, ensure you have Node.js and MongoDB installed on your machine.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

1) Install dependencies:
   npm install

2) Create a .env file in the project root and add your MongoDB connection string:
   DB_URI=mongodb://localhost:27017/your-database-name

3) Start the server:
   npm start

4)Open your browser and go to http://localhost:3000 to access the application.

API Endpoints

Create Question:

POST /questions

{
"questionText": "What is the capital of Australia?",
"options": ["Sydney", "Canberra", "Melbourne", "Brisbane"],
"answer": "Canberra"
}

Get All Questions:
GET /questions

Get Question by ID:
GET /questions/:id

Update Question by ID:
PUT /questions/:id
{
"questionText": "Updated question?",
"options": ["Option 1", "Option 2", "Option 3", "Option 4"],
"answer": "Option 3"
}

Delete Question by ID:
DELETE /questions/:id

Contributing
Feel free to contribute to this project by opening issues or pull requests. Any feedback or improvement suggestions are welcome!

License
This project is licensed under the MIT License.
