# 🔐 Simple Authentication System (Fullstack)

A simple authentication system built with **React (frontend)** and **Node.js + Express + SQLite (backend)**.  
This project demonstrates how to implement **user authentication** with registration, login, session management, logout, and protected routes.

---

## 🚀 Features

### Backend
- **Register (Sign Up):** Create new account with email & password.
- **Login:** Authenticate with email & password.
- **Session Management:** Stay logged in using cookies.
- **Logout:** Clear session & redirect to login.
- **CRUD Operations:**
  - `registerUser`
  - `loginUser`
  - `getAllUsers`
  - `getUserById`
  - `getUserByEmail`
  - `updateUser`
  - `deleteUser`
- **Database:** SQLite (`better-sqlite3`) for persistent storage.

### Frontend
- **Register Page:** Create new user accounts.
- **Login Page:** User authentication.
- **Protected Dashboard:** Only accessible when logged in.
- **Header:** Company logo + Logout button.
- **Dashboard Features:**
  - View all registered users.
  - User card with **username + email**.
  - **Edit user:** Opens popup with user details for editing.
  - **Delete user:** Removes user & refreshes user list.
- **UI Enhancements:**
  - Toast messages for success/failure actions.
  - Popup modals for editing users.

---

## 🛠️ Tech Stack

### Frontend
- **React 19**
- **React Router v7**
- **Axios** – API requests
- **js-cookie** – Manage cookies
- **React Toastify** – Notifications
- **ReactJS Popup** – Edit user modal
- **React Icons** – UI icons

### Backend
- **Node.js + Express**
- **better-sqlite3** – Database
- **bcrypt / bcryptjs** – Password hashing
- **express-session** – Session management
- **cookie-parser** – Parse cookies
- **jsonwebtoken** – Token-based handling
- **dotenv** – Environment variables
- **CORS** – Cross-origin support

---


