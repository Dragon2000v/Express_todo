## API Endpoints

### `GET /`

- **Description:** Retrieve all tasks
- **URL:** [https://express-todo-test.onrender.com/tasks](https://express-todo-test.onrender.com/tasks)
- **Response:**
  ```json
  {
    "status": 200,
    "data": [
      {
        "_id": "66cc6a67b565f972308f56fa",
        "title": "Task 1",
        "description": "Description for task 1",
        "isCompleted": false,
        "createdAt": "2024-08-25T10:00:00.000Z",
        "updatedAt": "2024-08-25T10:00:00.000Z",
        "__v": 0
      },
      {
        "_id": "66cc6a67b565f972308f56fb",
        "title": "Task 2",
        "description": "Description for task 2",
        "isCompleted": false,
        "createdAt": "2024-08-25T10:30:00.000Z",
        "updatedAt": "2024-08-25T10:30:00.000Z",
        "__v": 0
      }
    ]
  }
  ```

### `POST /`

- **Description:** Create a new task
- **URL:** [https://express-todo-test.onrender.com/tasks](https://express-todo-test.onrender.com/tasks)
- **Request Body:**
  ```json
  {
    "title": "New Task Title",
    "description": "New Task Description"
  }
  ```
- **Response:**
  ```json
  {
    "status": 201,
    "data": {
      "_id": "66cc6a67b565f972308f56fc",
      "title": "New Task Title",
      "description": "New Task Description",
      "isCompleted": false,
      "createdAt": "2024-08-26T11:50:00.000Z",
      "updatedAt": "2024-08-26T11:50:00.000Z",
      "__v": 0
    }
  }
  ```

### `GET /:id`

- **Description:** Retrieve a task by ID
- **URL:** [https://express-todo-test.onrender.com/tasks/:id](https://express-todo-test.onrender.com/tasks/:id) (replace :id with the actual task ID)
- **Response:**
  ```json
  {
    "status": 200,
    "data": {
      "_id": "66cc6a67b565f972308f56fa",
      "title": "Updated Task Title",
      "description": "Updated Description",
      "isCompleted": true,
      "createdAt": "2024-08-26T11:43:35.348Z",
      "updatedAt": "2024-08-26T11:45:50.667Z",
      "__v": 0
    }
  }
  ```

### `PUT /:id`

- **Description:** Update a task by ID
- **URL:** [https://express-todo-test.onrender.com/tasks/:id](https://express-todo-test.onrender.com/tasks/:id) (replace :id with the actual task ID)
- **Request Body:**
  ```json
  {
    "title": "Updated Task Title",
    "description": "Updated Description",
    "isCompleted": true
  }
  ```
- **Response:**
  ```json
  {
    "status": 200,
    "data": {
      "_id": "66cc6a67b565f972308f56fa",
      "title": "Updated Task Title",
      "description": "Updated Description",
      "isCompleted": true,
      "createdAt": "2024-08-26T11:43:35.348Z",
      "updatedAt": "2024-08-26T11:45:50.667Z",
      "__v": 0
    }
  }
  ```

### `DELETE /:id`

- **Description:** Delete a task by ID
- **URL:** [https://express-todo-test.onrender.com/tasks/:id](https://express-todo-test.onrender.com/:id) (replace :id with the actual task ID)
- **Response:**
  ```json
  {
    "status": 204
  }
  ```
