Great 👍 Here’s a **README.md** template you can use for your `lab-crud-api` repo:

```markdown
# Lab CRUD API

A simple CRUD (Create, Read, Update, Delete) API built with **Node.js**, **Express**, and **MySQL**.  
This project was developed as part of a laboratory exercise for practicing RESTful API development.

---

## 🚀 Features
- Manage **Students** (create, read, update, delete)
- Manage **Courses** (create, read, update, delete)
- MySQL database integration
- Organized with MVC architecture (Models, Controllers, Routes)
- `.env` support for database credentials

---

## 📂 Project Structure
```

lab-crud-api/
├── config/
│   └── db.js               # Database connection
├── controllers/
│   ├── studentController.js
│   └── courseController.js
├── routes/
│   ├── studentRoutes.js
│   └── courseRoutes.js
├── server.js                # Entry point
├── package.json
├── .env.example             # Sample environment variables
└── .gitignore

````

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lance-Siyhian16/lab-crud-api.git
   cd lab-crud-api
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Copy `.env.example` to `.env` and update with your MySQL credentials:

   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=crud_db
   DB_PORT=3306
   ```

4. **Run the server**

   ```bash
   npm start
   ```

   The API will run on `http://localhost:3000`.

---

## 📡 API Endpoints

### Students

* `GET /api/students` – Get all students
* `GET /api/students/:id` – Get student by ID
* `POST /api/students` – Create a new student
* `PUT /api/students/:id` – Update student by ID
* `DELETE /api/students/:id` – Delete student by ID

### Courses

* `GET /api/courses` – Get all courses
* `GET /api/courses/:id` – Get course by ID
* `POST /api/courses` – Create a new course
* `PUT /api/courses/:id` – Update course by ID
* `DELETE /api/courses/:id` – Delete course by ID

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* MySQL
* dotenv (for environment variables)

---

## 📜 License

This project is licensed under the **MIT License** – feel free to use it for learning purposes.

````

---

👉 Save this as **README.md** in your project root, then commit & push:  
```bash
echo "# Lab CRUD API" > README.md
git add README.md
git commit -m "Added README.md with project details"
git push
````