# 🧾 ToDo Dashboard

A modern **Task Management Dashboard** built using **HTML, CSS, and JavaScript**.
This application allows users to manage daily tasks efficiently with a clean dashboard UI, task statistics, progress visualization, and downloadable reports.

The project runs entirely on the **frontend** and stores data using **LocalStorage**, so no backend or database setup is required.

---

# 🚀 Features

### 📋 Task Management

* Add new tasks
* Delete tasks
* Mark tasks as completed
* Task priority levels (High / Medium / Low)

### 📊 Dashboard Analytics

* Total tasks counter
* Completed tasks counter
* Pending tasks counter
* Dynamic progress bar
* Circular completion percentage chart

### 🎨 Modern UI

* Dark dashboard theme
* Sidebar navigation
* Hover animations
* Gradient color cards
* Priority color indicators

### 📄 Export Report

* Download task report as **PDF**
* Includes:

  * Task name
  * Priority
  * Completion status

### 💾 Local Storage

* Tasks persist even after refreshing the page.

---

# 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**
* **LocalStorage API**
* **jsPDF** for PDF generation

---

# 📂 Project Structure

```
todo-dashboard
│
├── index.html     # Main dashboard layout
├── style.css      # Styling and dashboard theme
├── script.js      # Task logic and dashboard functionality
└── README.md      # Project documentation
```

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/todo-dashboard.git
```

### 2️⃣ Open the project folder

```
cd todo-dashboard
```

### 3️⃣ Run using VS Code Live Server

1. Install the **Live Server extension** in VS Code
2. Right click on:

```
index.html
```

3. Click:

```
Open with Live Server
```

The application will run at:

```
http://127.0.0.1:5500
```

---

# 📖 How to Use

### Add a Task

1. Type a task in the input field
2. Select a priority
3. Click **Add Task**

### Mark Task as Completed

Click the **✔ button** on a task card.

### Delete a Task

Click the **🗑 button**.

### Filter Tasks

Use the sidebar to view:

* All Tasks
* Completed Tasks
* Pending Tasks

### Download Report

Click **Download Report** to generate a **PDF summary** of all tasks.

---

# 📊 Dashboard Components

| Component      | Description                               |
| -------------- | ----------------------------------------- |
| Sidebar        | Navigation between task views             |
| Task List      | Displays tasks with priority tags         |
| Stats Panel    | Shows total, completed, and pending tasks |
| Progress Bar   | Displays completion progress              |
| Circular Chart | Visualizes percentage of tasks completed  |

---

# 🎯 Future Improvements

Potential upgrades for the dashboard:

* 📅 Calendar task scheduling
* 📊 Advanced analytics using **Chart.js**
* 🧠 Smart task prioritization
* 📱 Mobile responsive UI
* 🔔 Task reminder notifications
* 👥 Multi-user collaboration

---

# 🤝 Contribution

Contributions are welcome!

Steps:

1. Fork the repository
2. Create a feature branch

```
git checkout -b feature-name
```

3. Commit your changes

```
git commit -m "Added new feature"
```

4. Push to your branch

```
git push origin feature-name
```

5. Open a Pull Request

---

# 📜 License

This project is open-source and available under the **MIT License**.

---

# 👨‍💻 Author

Developed as a **dashboard-based ToDo application project** to demonstrate modern UI design and JavaScript task management logic.

---
