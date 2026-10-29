# 💈 Lux Beauty & Hair Salon — 

A full-stack, production-ready salon booking and e-commerce platform built with **React**, **Node.js / Express**, and dual-database support (**Google Cloud Firestore** with an automatic **SQLite** zero-config fallback).

Designed as an easily customizable template for hair salons, barbershops, beauty studios, spas, and wellness businesses.

---

## ✨ Features

- 📅 **Interactive Appointment Booking**: Real-time slot availability, date & time picker, instant status updates, and auto-conflict prevention.
- 🛍️ **Beauty & Hair Product Shop**: Product catalog with categories, stock tracking, and shopping cart.
- 🛒 **Persistent Shopping Cart**: Client-side cart with local storage persistence and quick checkout.
- 🔐 **Full Admin Dashboard**:
  - Manage services (create, update, activate/deactivate, delete).
  - Manage products (stock levels, pricing, descriptions).
  - Manage appointments (approve, decline, filter by status).
  - Track orders and customer information.
- 📧 **Automated Email Notifications**:
  - Instant booking confirmation & status updates to customers.
  - New appointment & new order alerts to the salon owner.
  - Supports **Brevo (Sendinblue)** (free tier, no custom domain required), **Resend**, **Generic SMTP**, and **Gmail**.
- 🗄️ **Dual Database Architecture**:
  - **Cloud Firestore**: Enterprise-scale NoSQL persistence with auto-seeding.
  - **SQLite Fallback**: Zero-configuration local database (`better-sqlite3`) that works instantly without setting up Firebase credentials.
- 🎨 **Modern Luxury UI / Theme**:
  - Fully responsive on mobile, tablet, and desktop.
  - Palette configured with `#282B4A` (Midnight Slate Navy) and `#EEEBDA` (Warm Parchment Cream).

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, Vite, React Router 7, Tailwind CSS |
| **Backend** | Node.js, Express, Firebase Cloud Functions v2 (`onRequest`) |
| **Database** | Google Cloud Firestore (Primary) & Better-SQLite3 (Local Fallback) |
| **Authentication** | JWT (JSON Web Tokens) & Bcrypt password hashing |
| **Email Delivery** | Brevo API, Resend API, Nodemailer (SMTP / Gmail) |

---

## 📁 Project Structure

```
.
├── client/                     # Frontend React application (Vite)
│   ├── public/                 # Static assets (favicon.svg, icons.svg)
│   ├── src/
│   │   ├── components/         # Navbar, Footer, ServiceCard, ProductCard, etc.
│   │   ├── context/            # CartContext, AdminContext
│   │   ├── lib/                # API client (fetch wrapper)
│   │   ├── pages/              # Home, Services, Shop, Booking, Cart, Admin
│   │   ├── App.jsx             # Main router
│   │   ├── index.css           # Tailwind base styles and theme rules
│   │   └── main.jsx            # React root mount
│   ├── .env.example            # Frontend environment template
│   ├── package.json            # Frontend dependencies & build scripts
│   ├── tailwind.config.js      # Color theme and font configuration
│   └── vite.config.js          # Vite build config
│
├── server/                     # Backend API & Cloud Function
│   ├── middleware/             # Admin JWT authentication guard
│   ├── routes/                 # Express route handlers
│   │   ├── admin.js            # Admin login & session verification
│   │   ├── bookings.js         # Appointment booking & slot availability
│   │   ├── orders.js           # E-commerce orders & cart checkout
│   │   ├── products.js         # Products catalog & management
│   │   └── services.js         # Services catalog & management
│   ├── lib/
│   │   └── email.js            # Email dispatching engine (Brevo, Resend, SMTP)
│   ├── db.js                   # Firestore & SQLite connection + auto-seeding
│   ├── index.js                # Express app entry & Firebase Function export
│   ├── test-email.js           # CLI diagnostic script for email testing
│   ├── .env.example            # Backend environment template
│   └── package.json            # Backend dependencies & scripts
│
├── .firebaserc                 # Firebase project configuration
├── firebase.json               # Firebase Functions, Hosting rewrites & Emulators
├── firestore.rules             # Firestore security rules
├── firestore.indexes.json      # Firestore query indexes
├── package.json                # Root workspace convenience scripts
└── README.md                   # Complete template guide
```

---

## 🚀 Quick Start (Local Development)

You can run this project locally in **less than 2 minutes**. If you don't have Firebase set up yet, the backend will automatically spin up an auto-seeded SQLite database so you can start developing immediately.

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or 20+ recommended)
- `npm` (comes with Node.js)

### 2. Install Dependencies

Install root, client, and server dependencies:

```bash
# In the project root:
npm install

# Install client dependencies:
npm --prefix client install

# Install server dependencies:
npm --prefix server install
```

### 3. Setup Environment Variables

Copy the example environment files:

```bash
# Frontend env
cp client/.env.example client/.env

# Backend env
cp server/.env.example server/.env
```

The default values in `client/.env` point to `http://localhost:4000/api`, which works out of the box with the local Express server.

### 4. Start the Application

In two separate terminal windows (or tabs):

**Terminal 1 — Backend:**
```bash
npm run dev:server
# Server will start on http://localhost:4000
```

**Terminal 2 — Frontend:**
```bash
npm run dev:client
# Vite dev server will start (typically http://localhost:5173)
```

Open your browser and navigate to `http://localhost:5173`. You will see the complete salon website with pre-seeded services and products!

---

## 🔑 Default Admin Access

To log into the salon management dashboard:

1. Navigate to `/admin` in your browser (e.g., `http://localhost:5173/admin`).
2. Use the default credentials configured in `server/.env`:
   - **Username**: `admin`
   - **Password**: `admin12345`

> [!WARNING]
> Always change `ADMIN_PASSWORD` and `JWT_SECRET` in your `server/.env` before deploying to production!

---

## ⚙️ Configuration & Environment Variables

### Backend (`server/.env`)

| Variable | Description | Default / Example |
|---|---|---|
| `PORT` | Local Express listening port | `4000` |
| `JWT_SECRET` | Secret key for signing admin authentication tokens | `lux-salon-secret-change-me` |
| `ADMIN_USERNAME` | Default admin login username | `admin` |
| `ADMIN_PASSWORD` | Default admin login password | `admin12345` |
| `FIREBASE_PROJECT_ID` | Your Firebase Project ID | `your-firebase-project-id` |
| `FIREBASE_SERVICE_ACCOUNT_KEY` | Path to JSON key file or raw JSON string | `./serviceAccountKey.json` |
| `BREVO_API_KEY` | *(Optional)* Brevo API key for transactional emails | `xkeysib-...` |
| `BREVO_SENDER_EMAIL` | *(Optional)* Verified sender email for Brevo | `salon@example.com` |
| `RESEND_API_KEY` | *(Optional)* Resend API key | `re_...` |
| `ADMIN_NOTIFICATION_EMAIL` | Email address that receives booking/order alerts | `owner@example.com` |

### Frontend (`client/.env`)

| Variable | Description | Example |
|---|---|---|
| `VITE_API_URL` | Base URL of the backend API | `http://localhost:4000/api` |

---

## ☁️ Connecting Google Cloud Firestore (Production Database)

When you are ready to switch from local SQLite to Firebase Cloud Firestore:

1. **Create a Firebase Project**:
   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a project.
   - Go to **Firestore Database** in the console and click **Create Database** (start in production or test mode).
2. **Generate a Service Account Key**:
   - In Firebase Console, go to **Project Settings** > **Service accounts**.
   - Click **Generate new private key** and download the JSON file.
   - Save the file as `server/serviceAccountKey.json` (or set its path in `server/.env` as `FIREBASE_SERVICE_ACCOUNT_KEY=./serviceAccountKey.json`).
3. **Set Project ID**:
   - In `server/.env`, set:
     ```env
     FIREBASE_PROJECT_ID=your-actual-firebase-project-id
     ```
   - In `.firebaserc`, replace `"your-firebase-project-id"` with your project ID.
4. **Deploy Security Rules & Indexes**:
   ```bash
   firebase login
   firebase deploy --only firestore
   ```
5. **Auto-seeding**:
   The first time the server connects to an empty Firestore database, it will automatically populate default services, products, and the initial admin user!

---

## 🎨 How to Customize This Template

### 1. Change the Brand Name
Search and replace `"Lux Beauty & Hair Salon"` or customize the relevant files:
- **Header & Logo**: [client/src/components/Navbar.jsx](file:///home/aziel/Desktop/velour/client/src/components/Navbar.jsx)
- **Footer**: [client/src/components/Footer.jsx](file:///home/aziel/Desktop/velour/client/src/components/Footer.jsx)
- **HTML Title & Meta**: [client/index.html](file:///home/aziel/Desktop/velour/client/index.html)
- **Email Notifications**: [server/lib/email.js](file:///home/aziel/Desktop/velour/server/lib/email.js)

### 2. Change the Color Theme
The template uses Tailwind CSS with custom tokens defined in [client/tailwind.config.js](file:///home/aziel/Desktop/velour/client/tailwind.config.js):

```javascript
colors: {
  cream: "#EEEBDA",     // Light background / page canvas
  espresso: "#282B4A",  // Primary dark / headings / main buttons
  rose: "#3D4373",      // Accent color / active states / highlights
  clay: "#5A5F8C",      // Muted text & border accents
  stone: "#E2DFC7",     // Card / container secondary background
  ink: "#191B2F",       // Deep body text
}
```

Simply update these hex codes to instantly change the look and feel of the entire application.

### 3. Customize Services and Products
- **Via the Admin Dashboard**: Visit `/admin`, log in, and use the interactive UI to add, edit, or delete items and images.
- **Via Code Seed Data**: Initial seed items can be modified in [server/db.js](file:///home/aziel/Desktop/velour/server/db.js) under the `seedServices` and `seedProducts` arrays.

---

## 🚀 Deployment

### Option A: Traditional Node.js Server + Static Host
- **Backend**: Deploy `server/` to [Render](https://render.com), [Railway](https://railway.app), or any VPS.
  - Build command: `npm install`
  - Start command: `node index.js`
  - Set your environment variables in the host dashboard.
- **Frontend**: Deploy `client/` to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or [Cloudflare Pages](https://pages.cloudflare.com).
  - Build command: `npm run build`
  - Output directory: `dist`
  - Set `VITE_API_URL` to your live backend API URL (e.g., `https://api.yourdomain.com/api`).

### Option B: All-in-One Firebase (Cloud Functions + Hosting)
This project is pre-configured with [firebase.json](file:///home/aziel/Desktop/velour/firebase.json):
```bash
# 1. Build frontend
npm run build:client

# 2. Deploy all Firebase resources
firebase deploy
```

---

## 🔒 Security & Git Hygiene

- **Never commit `.env` files**: Real `.env` files contain sensitive API keys and secrets. Both root and client `.gitignore` files exclude `.env` and `.env.*` (while preserving `.env.example`).
- **Never commit Service Account keys**: `serviceAccountKey.json`, `*adminsdk*.json`, and `*credentials*.json` are strictly ignored by `.gitignore`.
- **Change Default Secrets**: Always change `JWT_SECRET` and `ADMIN_PASSWORD` before launching publicly.

---

## 📄 License

This template is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). You are free to customize and use it for commercial and personal projects.
