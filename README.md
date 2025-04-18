# TaskManagement
A simple RESTful API built with Node.js, Express, and MongoDB that allows users to:

Create tasks with a due date and status
Retrieve all tasks or filter them by status
Optional features: task sorting and basic statistics

Features
1. Create a task (title, status, due date)
2. Get all tasks
3. Filter tasks by status (pending/done)
4. Input validation (status & dueDate checks)
5. MongoDB as database
6. Auto-generated timestamps (createdAt, updatedAt)
7. Sort tasks by createdAt or dueDate 
8. Stats endpoint (pending/done count) 

Tech Stack: 

Node.js
Express.js
MongoDB
Mongoose
dotenv
cors

1. Clone the repo
 git clone https://github.com/your-username/task-api.git
 cd task-api
2. Install dependencies
 npm install
3. start the server
   npm start 
   Server will start at http://localhost:5000

API Endpoint : 
1. Create Task
   URL : http://localhost:4000/api/tasks
   METHOD : POST
   Request Body : {
        "title": "laundry",
        "status": "done",
        "dueDate": "2025-04-19"
    }
    Response : {
        "title": "shopping",
        "status": "done",
        "dueDate": "2025-04-19T00:00:00.000Z",
        "_id": "68020718b87c2de831f4b82c",
        "createdAt": "2025-04-18T08:02:32.252Z",
        "updatedAt": "2025-04-18T08:02:32.252Z",
        "__v": 0
    }
2. Get All Tasks
   URL : http://localhost:4000/api/tasks
   METHOD : GET
   SAMPLE Response : [
    {
        "_id": "6801ff2c7eb083cddd69552a",
        "title": "Buy groceries",
        "status": "pending",
        "dueDate": "2025-04-20T00:00:00.000Z",
        "createdAt": "2025-04-18T07:28:44.407Z",
        "updatedAt": "2025-04-18T07:28:44.407Z",
        "__v": 0
    },
    {
        "_id": "6801ff47e48875fcf7882672",
        "title": "Buy groceries",
        "status": "pending",
        "dueDate": "2025-04-20T00:00:00.000Z",
        "createdAt": "2025-04-18T07:29:11.041Z",
        "updatedAt": "2025-04-18T07:29:11.041Z",
        "__v": 0
    },
    {
        "_id": "68020029b87c2de831f4b822",
        "title": "laundry",
        "status": "pending",
        "dueDate": "2025-04-19T00:00:00.000Z",
        "createdAt": "2025-04-18T07:32:57.216Z",
        "updatedAt": "2025-04-18T07:32:57.216Z",
        "__v": 0
    },
    {
        "_id": "680200ecb87c2de831f4b824",
        "title": "laundry",
        "status": "done",
        "dueDate": "2025-04-19T00:00:00.000Z",
        "createdAt": "2025-04-18T07:36:12.631Z",
        "updatedAt": "2025-04-18T07:36:12.631Z",
        "__v": 0
    }
 ]

3. get tasks filter by status 
   URL : http://localhost:4000/api/tasks?status=pending
         OR 
         http://localhost:4000/api/tasks?status=done
   METHOD : GET

4. get tasks filter by due date
   URL : http://localhost:4000/api/tasks?sort=dueDate
   METHOD : GET

5. Task Statistics
     URL : http://localhost:4000/api/tasks/stats
     METHOD : GET
     SAMPLE RESPONSE : [
     {
        "_id": "pending",
        "count": 3
     },
     {
        "_id": "done",
        "count": 1
     }
 ]




