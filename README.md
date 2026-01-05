# 🎓 Learning Management System (SkillBySanatani)

A modern, full-stack Learning Management System built with the MERN stack. This project focuses on providing a high-quality user experience for both students and instructors.

---

## 🚀 Development Progress

### 📍 Day 1: Project Setup & Authentication
**Goal:** Establish the foundation and secure the application.

* **Project Initialization:** Set up the project structure using Vite and React.
* **Authentication Integration:** Integrated **Clerk SDK** for secure user management.
* **Routing:** Established the application's navigation flow using `react-router-dom`.
* **Global Layout:** Designed a modular styling system using a central `dummyStyles.js` for consistency.

---

### 📍 Day 2: Responsive UI & Hero Section
**Goal:** Build the "Face" of the application and ensure mobile-first usability.

* **Interactive Navbar:** * Implemented a fully responsive navigation bar.
    * Added a mobile "Hamburger" menu with toggle logic (`useState`).
    * Integrated scroll-based visibility (Navbar hides on scroll down, shows on scroll up).
* **Hero Banner:**
    * Created a high-conversion hero section with a value proposition and CTA.
    * Integrated local video playback using a custom modal.
    * Added floating animation icons for a modern UI feel.
* **Git & Security:**
    * Configured `.gitignore` to protect sensitive `.env` files and Clerk API keys.
    * Established a Monorepo structure to house both Frontend and future Backend.
    * Successfully pushed the initial codebase to GitHub.

---

### 📍 Day 3: Advanced UI & Data Logic
**Goal:** Display dynamic content and implement high-end user interactions.

* **Course Catalog Grid:** * Created a responsive 4-column grid for courses.
    * Implemented "Featured" logic using `.slice()` to limit display items.
    * Integrated "Interactive Stars" with `localStorage` persistence.
* **3D Testimonial System:**
    * Built a custom 3D tilt effect using `useRef` and mouse-coordinate math.
    * Optimized performance by manipulating the DOM directly for animations (bypassing React re-renders).
    * Added scroll-triggered entrance animations using `IntersectionObserver`.
* **Knowledge Check:** * Mastered the difference between `props` and `state`.
    * Understood "Component Unmounting" vs CSS "display: none".

## 🛠️ Tech Stack Used So Far

* **Frontend:** React.js, Vite
* **Styling:** Tailwind CSS
* **Icons:** Lucide-React
* **Auth:** Clerk
* **State Management:** React Hooks (`useState`, `useEffect`, `useRef`)

---

## 📸 Screenshots
*(Coming soon: Add your project screenshots here!)*

---

## ⚙️ How to Run Locally

1. Clone the repo: `git clone <your-repo-url>`
2. Install dependencies: `npm install` inside the `frontend` folder.
3. Add your `.env` keys (Clerk Publishable Key).
4. Start the dev server: `npm run dev`.
