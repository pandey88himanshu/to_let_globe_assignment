# to_let_globe_assignment
Mern stack project for To Let Globe

## Blog-Assignment

## Blog Post Routes

### 1. Create a Blog Post

- **URL:** `/create`
- **Method:** POST
- **Description:** This endpoint allows you to create a new blog post.
- **Request Headers:**
  - `Content-Type: multipart/form-data`
- **Request Body:**
  - `title` (string): The title of the blog post.
  - `author` (string): The author of the blog post.
  - `description` (string): The description of the blog post.
  - `image` (file): The image associated with the blog post (optional).
  - **Response:**
  - `201 Created`: Blog created successfully.
  - `500 Internal Server Error`: Failed to create blog post.
 
### 2. Retrieve All Blog Posts
- **URL:** `/getall`
- **Method:** GET
- **Description:** This endpoint retrieves all blog posts from the database.
- **Response:**
- `200 OK: Returns a list of all blog posts.`

### 3. Retrieve a Blog Post by ID
- **URL:** /Blog/:id
- **Method:** GET
- **Description:**  This endpoint retrieves a specific blog post by its ID.
- **URL Parameters:**
- id (string): The ID of the blog post to retrieve.
- **Response:**
- `200 OK: Returns the details of the specified blog post.`
- `404 Not Found: Blog post not found.`
### 4. User Sign-Up
- **URL:** /signup
- **Method:** POST
- **Description:** This endpoint handles user sign-up.
- **Request body:**
- `username` (string): The username of the new user.
- `password` (string): The password of the new user.
- **Response:**
- `201 Created: User signed up successfully.`
- `400 Bad Request: Invalid input data.`

- `User Id: User@gmai.com`
- `password: 12345678`

- ## For admin login
- `admin Id: User@gmai.com`
- `password: 12345678`