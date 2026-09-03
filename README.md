# 📈 Stock Prediction Portal

A full-stack web application for building a stock market analysis and prediction platform using **ReactJS** on the frontend and **Django REST Framework** on the backend.

The project is designed with a modular architecture so that stock-data processing, machine-learning prediction, analytics, and visualization can be integrated into the platform while maintaining a separate frontend and backend.

> 🚧 **Project Status:** The current version establishes the full-stack architecture, authentication system, React frontend, Django REST backend, and protected API communication. Advanced stock prediction and market-analysis functionality is planned as part of the next development stages.

---

## 📌 Table of Contents

* [Overview](#-overview)
* [Objectives](#-objectives)
* [Current Features](#-current-features)
* [Planned Stock Prediction Features](#-planned-stock-prediction-features)
* [Technology Stack](#-technology-stack)
* [System Architecture](#-system-architecture)
* [Project Structure](#-project-structure)
* [Prerequisites](#-prerequisites)
* [Installation](#-installation)
* [Backend Setup](#-backend-setup)
* [Frontend Setup](#-frontend-setup)
* [Running the Complete Application](#-running-the-complete-application)
* [Authentication Flow](#-authentication-flow)
* [API Endpoints](#-api-endpoints)
* [Frontend Routing](#-frontend-routing)
* [How the Application Works](#-how-the-application-works)
* [Future Enhancements](#-future-enhancements)
* [Security Improvements](#-security-improvements)
* [Testing](#-testing)
* [Troubleshooting](#-troubleshooting)
* [Disclaimer](#-disclaimer)
* [Contributing](#-contributing)
* [Author](#-author)

---

# 📖 Overview

**Stock Prediction Portal** is a full-stack web application developed to provide a foundation for a modern stock-market analysis and prediction platform.

The project follows a decoupled architecture:

```text
ReactJS Frontend
       ↓
    Axios
       ↓
REST API
       ↓
Django REST Framework
       ↓
Database / ML Services
```

The frontend is developed using **ReactJS with Vite**, while the backend is developed using **Django REST Framework**.

The application currently includes user registration, JWT-based authentication, protected routes, API communication, and a dashboard structure. The architecture is prepared for adding stock-market data processing, machine-learning prediction, visualization, and financial analytics.

---

# 🎯 Objectives

The main objectives of this project are:

* Build a complete full-stack stock-market application.
* Separate frontend and backend responsibilities.
* Implement secure user authentication.
* Use REST APIs for frontend-backend communication.
* Provide protected routes for authenticated users.
* Create a scalable architecture for stock-market features.
* Integrate historical stock data.
* Apply machine-learning techniques for prediction in future versions.
* Display stock information and prediction results through an interactive dashboard.
* Provide users with useful market-analysis information.

---

# ✨ Current Features

## 🔐 1. User Registration

The application provides a registration interface for creating user accounts.

The backend uses Django REST Framework serializers to validate and create users.

The current serializer accepts:

* Username
* Email
* Password

Passwords are handled as write-only fields and users are created through Django's user creation mechanism.

---

## 🔑 2. JWT Authentication

The application uses **JSON Web Tokens (JWT)** for authentication.

After successful login, the frontend receives:

```text
Access Token
Refresh Token
```

The tokens are stored on the client side and used for authenticated API requests.

---

## 🛡️ 3. Protected Routes

The React application contains separate mechanisms for:

```text
Private Routes
Public Routes
```

This allows authenticated pages to be protected from unauthorized access.

The frontend also contains an authentication provider responsible for managing authentication state.

---

## 🌐 4. REST API Architecture

The backend is built using Django REST Framework.

The repository contains a dedicated `api` application that can be extended with stock-related models, serializers, views, and endpoints.

---

## 📊 5. Dashboard Foundation

The project contains a React dashboard component.

The dashboard currently demonstrates communication with a protected backend endpoint using the configured Axios instance.

This provides the foundation for adding future features such as:

* Stock search
* Market overview
* Historical charts
* Prediction results
* Watchlists
* Portfolio information
* Analytics

---

## ⚛️ 6. React Frontend

The frontend is built using:

* React
* Vite
* Axios
* React Router

The current `package.json` defines development, build, lint, and preview scripts.

---

## 🐍 7. Django Backend

The backend follows the Django project structure and contains:

```text
accounts/
api/
stock_prediction/
manage.py
```

The `stock_prediction` directory contains the Django project configuration, while `accounts` and `api` provide application-level functionality.

---

# 📈 Planned Stock Prediction Features

The architecture of this project can be extended into a complete stock-prediction platform.

The following features are planned for future development.

## 📊 Historical Stock Data

Integrate historical market data containing fields such as:

```text
Date
Open
High
Low
Close
Volume
```

This data can be processed using Python libraries such as:

* Pandas
* NumPy

---

## 🤖 Machine Learning Prediction

A machine-learning pipeline can be added to train prediction models using historical stock data.

Possible models include:

```text
Linear Regression
Random Forest
XGBoost
SVR
LSTM
```

The model can use historical prices and technical indicators to estimate future trends.

---

## 📈 Interactive Stock Charts

The frontend can display:

* Historical prices
* Moving averages
* Trading volume
* Predicted values
* Price trends

Possible libraries:

```text
Chart.js
Recharts
Plotly
```

---

## 🔎 Stock Search

Users could search for a stock using its ticker symbol.

Example:

```text
AAPL
GOOGL
MSFT
TSLA
RELIANCE.NS
TCS.NS
INFY.NS
```

The backend can then retrieve the corresponding market data.

---

## 📅 Prediction Period

Users could select a prediction period such as:

```text
1 Day
7 Days
30 Days
90 Days
```

The system can return the predicted values for the selected period.

---

## 📊 Technical Indicators

Future versions can calculate indicators such as:

* Simple Moving Average (SMA)
* Exponential Moving Average (EMA)
* Relative Strength Index (RSI)
* Moving Average Convergence Divergence (MACD)
* Bollinger Bands

These indicators can be used as additional model features.

---

# 🏗️ System Architecture

The planned architecture is:

```text
                    ┌──────────────────────┐
                    │      ReactJS UI      │
                    │      + Vite          │
                    └──────────┬───────────┘
                               │
                             Axios
                               │
                               ▼
                    ┌──────────────────────┐
                    │     REST APIs        │
                    │ Django REST Framework│
                    └──────────┬───────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        Authentication    Stock Data       Prediction
          / Accounts       Services           Engine
              │                │                │
              └────────────────┼────────────────┘
                               ▼
                         Database
```

---

# 📁 Project Structure

The current repository is organized into separate frontend and backend projects.

```text
stock-prediction-portal/
│
├── backend-drf/
│   │
│   ├── accounts/
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   └── views.py
│   │
│   ├── api/
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   │
│   ├── stock_prediction/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   │
│   └── manage.py
│
├── frontend-react/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Main.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── AuthProvider.jsx
│   │   ├── PrivateRouter.jsx
│   │   ├── PublicRoute.jsx
│   │   ├── axiosinstance.js
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
└── .gitignore
```

---

# 💻 Prerequisites

Before running the project, install the following software:

### Backend

* Python 3.10+
* pip
* Virtual environment

### Frontend

* Node.js
* npm

### Development Tools

Recommended:

* VS Code
* Git
* Postman
* Modern web browser

---

# 📥 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/tripthiprashant/stock-prediction-portal.git
```

Move into the project:

```bash
cd stock-prediction-portal
```

---

# 🐍 Backend Setup

Open a terminal in the project directory.

Move into the backend:

```bash
cd backend-drf
```

---

## Create Virtual Environment

### Windows

```bash
python -m venv venv
```

Activate:

```bash
venv\Scripts\activate
```

### macOS/Linux

```bash
python3 -m venv venv
```

Activate:

```bash
source venv/bin/activate
```

---

## Install Django Dependencies

If a `requirements.txt` file is present in your local backend, install it using:

```bash
pip install -r requirements.txt
```

Otherwise, install the packages required by the current backend setup.

At minimum, the backend requires Django and Django REST Framework, along with the JWT authentication package configured in the project.

---

# 🗄️ Database Setup

After installing the backend dependencies, run:

```bash
python manage.py makemigrations
```

Then:

```bash
python manage.py migrate
```

This creates the required database tables.

---

# 👤 Create Superuser

To create a Django administrator account:

```bash
python manage.py createsuperuser
```

Follow the prompts:

```text
Username:
Email:
Password:
Password confirmation:
```

---

# ▶️ Start Django Backend

Run:

```bash
python manage.py runserver
```

The backend should become available at:

```text
http://127.0.0.1:8000/
```

Keep this terminal running.

---

# ⚛️ Frontend Setup

Open a **new terminal**.

Move to the frontend directory:

```bash
cd stock-prediction-portal/frontend-react
```

Install the Node.js dependencies:

```bash
npm install
```

The current project uses React, Axios, React Router, and Vite.

---

# ▶️ Start React Frontend

Run:

```bash
npm run dev
```

Vite will provide a local development URL, normally similar to:

```text
http://localhost:5173/
```

Open that address in your browser.

---

# 🚀 Running the Complete Application

You need **two terminals** running simultaneously.

### Terminal 1 — Backend

```bash
cd stock-prediction-portal/backend-drf

venv\Scripts\activate

python manage.py runserver
```

### Terminal 2 — Frontend

```bash
cd stock-prediction-portal/frontend-react

npm install
npm run dev
```

Then open:

```text
http://localhost:5173/
```

---

# 🔐 Authentication Flow

The current authentication architecture works approximately as follows:

```text
User
 ↓
React Login Page
 ↓
Username + Password
 ↓
Django JWT Endpoint
 ↓
Access Token + Refresh Token
 ↓
localStorage
 ↓
Authenticated API Requests
 ↓
Protected Django Endpoint
```

The current React login implementation sends username/password credentials to:

```text
/api/v1/token/
```

and stores the returned access and refresh tokens.

---

# 🔌 API Endpoints

The current backend contains account-related routes including:

```text
POST /api/v1/register/
```

and:

```text
GET /api/v1/protected_view/
```

The account URL configuration defines these routes.

The project also uses a JWT token endpoint:

```text
POST /api/v1/token/
```

which is consumed by the React login component.

> **Note:** Stock-specific API endpoints are not yet implemented in the current `api` application. The current `api/views.py` does not contain stock-prediction logic yet.

---

# 🧭 Frontend Routing

The React application contains routing-related components:

```text
PrivateRouter.jsx
PublicRoute.jsx
```

This provides a foundation for separating authenticated and unauthenticated pages.

A future route structure could look like:

```text
/
├── login
├── register
├── dashboard
├── stocks
│   └── :symbol
├── predictions
├── watchlist
└── profile
```

---

# 🔄 How the Application Works

## Current Workflow

```text
1. User opens the React application
              ↓
2. User registers an account
              ↓
3. User logs in
              ↓
4. Backend validates credentials
              ↓
5. JWT access + refresh tokens returned
              ↓
6. Tokens stored by frontend
              ↓
7. User accesses protected dashboard
              ↓
8. React sends authenticated API requests
              ↓
9. Django REST Framework validates request
              ↓
10. Protected data is returned
```

---

# 🤖 Future Machine Learning Architecture

The prediction system can eventually follow this pipeline:

```text
Historical Stock Data
        ↓
Data Cleaning
        ↓
Missing Value Handling
        ↓
Feature Engineering
        ↓
Technical Indicators
        ↓
Train/Test Split
        ↓
Machine Learning Model
        ↓
Model Evaluation
        ↓
Prediction
        ↓
Django REST API
        ↓
React Dashboard
        ↓
Charts + Prediction Results
```

---

# 🔮 Future Enhancements

## Phase 1 — Stock Data API

Implement an API that accepts a stock symbol:

```text
GET /api/v1/stocks/<symbol>/
```

Return:

```json
{
  "symbol": "TCS.NS",
  "name": "Tata Consultancy Services",
  "price": 3500,
  "change": 25.50
}
```

---

## Phase 2 — Historical Data

Add an endpoint such as:

```text
GET /api/v1/stocks/<symbol>/history/
```

Return historical OHLCV data:

```text
Date
Open
High
Low
Close
Volume
```

---

## Phase 3 — Prediction API

Add an endpoint such as:

```text
POST /api/v1/predictions/
```

Example request:

```json
{
  "symbol": "TCS.NS",
  "days": 7
}
```

Example response:

```json
{
  "symbol": "TCS.NS",
  "prediction": [
    {
      "date": "2026-01-01",
      "price": 3520.50
    }
  ]
}
```

---

## Phase 4 — Machine Learning Model

Develop and train a prediction model using historical data.

Possible models:

```text
Linear Regression
Random Forest
XGBoost
SVR
LSTM
```

Model performance should be evaluated using appropriate time-series validation rather than relying only on training accuracy.

---

## Phase 5 — Technical Analysis

Add:

```text
SMA
EMA
RSI
MACD
Bollinger Bands
```

These features can be used both for visualization and machine-learning feature engineering.

---

## Phase 6 — Interactive Dashboard

Upgrade the current dashboard to show:

```text
┌─────────────────────────────────────┐
│ Stock Search                        │
├─────────────────────────────────────┤
│ Current Price     Daily Change      │
├─────────────────────────────────────┤
│                                     │
│        Historical Price Chart       │
│                                     │
├─────────────────────────────────────┤
│ Technical Indicators                │
├─────────────────────────────────────┤
│ ML Prediction                       │
├─────────────────────────────────────┤
│ Prediction Confidence / Metrics     │
└─────────────────────────────────────┘
```

---

## Phase 7 — Watchlist

Allow users to save stocks:

```text
My Watchlist

TCS
INFY
RELIANCE
HDFCBANK
```

---

## Phase 8 — Portfolio Tracking

Users could add:

```text
Stock
Quantity
Buy Price
Purchase Date
```

The application could calculate:

```text
Investment Value
Current Value
Profit/Loss
Percentage Return
```

---

## Phase 9 — News and Sentiment Analysis

Integrate financial news APIs and analyze sentiment.

Example:

```text
Company News
     ↓
News Processing
     ↓
Sentiment Model
     ↓
Positive / Neutral / Negative
     ↓
Dashboard
```

---

## Phase 10 — Model Evaluation

Add metrics such as:

```text
MAE
MSE
RMSE
MAPE
R²
```

Display model performance in the dashboard.

This makes the project more useful for demonstrating machine-learning methodology rather than presenting predictions without evaluation.

---

# 🔐 Security Improvements

Before production deployment, improve the current authentication architecture by considering:

* Store sensitive configuration in environment variables.
* Never commit secret keys to GitHub.
* Configure production CORS carefully.
* Use HTTPS in production.
* Implement refresh-token rotation where appropriate.
* Add server-side validation.
* Add API rate limiting.
* Avoid exposing unnecessary user information.
* Configure secure cookie/token storage appropriately.
* Use production-grade database configuration.

---

# 🧪 Testing

The backend currently contains Django test files, providing a place to add automated tests.

Future tests should cover:

### Authentication

```text
User registration
User login
Invalid credentials
Token validation
Protected endpoints
```

### Stock APIs

```text
Valid ticker
Invalid ticker
Historical data
Missing parameters
Prediction request
```

### Machine Learning

```text
Data preprocessing
Feature generation
Model prediction
Model evaluation
```

### Frontend

```text
Login
Registration
Protected routes
API errors
Loading states
Prediction display
```

---

# 🐛 Troubleshooting

## Backend does not start

Check that your virtual environment is active:

```bash
venv\Scripts\activate
```

Then:

```bash
python manage.py runserver
```

---

## `ModuleNotFoundError`

Install the backend dependencies:

```bash
pip install -r requirements.txt
```

If the project does not yet contain a backend requirements file, install the dependencies required by your Django settings and application imports.

---

## Database Error

Run:

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## Frontend Does Not Start

Inside `frontend-react`:

```bash
npm install
npm run dev
```

---

## Axios / CORS Error

Make sure both servers are running:

```text
Frontend → http://localhost:5173
Backend  → http://127.0.0.1:8000
```

Also verify that the Django CORS configuration allows the frontend development origin.

---

## Login Does Not Work

Check that the Django backend is running and that the frontend is sending the request to:

```text
http://127.0.0.1:8000/api/v1/token/
```

The current login component uses this endpoint.

---

# ⚠️ Financial Disclaimer

This project is intended for **educational, research, and software-development purposes only**.

Stock-market predictions are inherently uncertain. Machine-learning predictions should not be considered guaranteed results or financial advice.

Do not make investment decisions solely based on predictions generated by this application.

---

# 🤝 Contributing

Contributions are welcome.

### 1. Fork the repository

```bash
git fork https://github.com/tripthiprashant/stock-prediction-portal.git
```

### 2. Clone your fork

```bash
git clone <your-fork-url>
```

### 3. Create a feature branch

```bash
git checkout -b feature/stock-prediction
```

### 4. Make your changes

Implement and test your changes locally.

### 5. Commit

```bash
git add .
git commit -m "Add stock prediction API"
```

### 6. Push

```bash
git push origin feature/stock-prediction
```

### 7. Open a Pull Request

Create a Pull Request on GitHub describing the changes.

---

# 📄 License

A license has not currently been specified in the repository.

If you plan to make this project open source, consider adding an appropriate license such as the MIT License.

---

# 👨‍💻 Author

**Prashant Pratap Tripathi**

B.Tech. Computer Science and Engineering

GitHub:

https://github.com/tripthiprashant

---

# ⭐ Project Repository

If you find this project useful, consider giving it a ⭐ on GitHub.

**Stock Prediction Portal**

https://github.com/tripthiprashant/stock-prediction-portal

---

# 🚀 Project Roadmap

```text
                         CURRENT
                            │
                            ▼
                 ┌─────────────────────┐
                 │ React + Vite        │
                 │ Django REST API     │
                 │ JWT Authentication  │
                 │ Protected Routes    │
                 └──────────┬──────────┘
                            │
                            ▼
                      NEXT PHASE
                            │
                 ┌──────────┴──────────┐
                 │                     │
                 ▼                     ▼
          Stock Data API         Historical Data
                 │                     │
                 └──────────┬──────────┘
                            ▼
                    Data Processing
                            │
                            ▼
                  Technical Indicators
                            │
                            ▼
                  Machine Learning
                            │
                            ▼
                     Predictions
                            │
                            ▼
                   Interactive Charts
                            │
                            ▼
                   Advanced Dashboard
                            │
                            ▼
                  Portfolio + Watchlist
                            │
                            ▼
                 News/Sentiment Analysis
                            │
                            ▼
                    Cloud Deployment
```

---

## 🌟 Final Vision

The long-term goal of the **Stock Prediction Portal** is to evolve the current full-stack foundation into a complete stock-market analytics platform where users can:

* 🔍 Search stocks
* 📊 Analyze historical prices
* 📈 View interactive charts
* 🤖 Generate machine-learning predictions
* 📉 Analyze technical indicators
* 📰 Study market news and sentiment
* ⭐ Maintain watchlists
* 💼 Track portfolios
* 📊 Evaluate prediction models
* 🔐 Securely manage their accounts

The current repository provides the **React + Django REST + JWT foundation** required to build these capabilities incrementally.

```

### A small but important recommendation

Your repository is currently a **good full-stack foundation**, but the README should not claim that the stock prediction/ML engine is already implemented when the current `api` application is still mostly a placeholder.

For your **resume**, I would also avoid saying *“generated stock price predictions using machine learning”* until you actually implement that API/model. A stronger and honest project description right now would be **“Developing a full-stack stock analysis and prediction platform using ReactJS, Django REST Framework, and JWT authentication.”**
```
