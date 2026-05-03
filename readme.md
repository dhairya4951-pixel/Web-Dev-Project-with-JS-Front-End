# Web Dev Capstone with JS

A full-stack product management web application demonstrating frontend-backend integration using REST APIs. Built with **HTML, CSS, JavaScript** on the frontend and **Flask** on the backend.

---

## 🚀 Features

- Home page displaying products fetched from backend API
- Add Product page with form submission
- REST API built using Flask:
  - `GET /products` to retrieve all products
  - `POST /products` to add a new product
- In-memory data storage using Python list/dictionary
- Basic server-side validation
- Dynamic UI updates using DOM manipulation and Fetch API

---

## ⚙️ How It Works

- The frontend sends HTTP requests to the Flask backend using the Fetch API
- The backend processes requests and returns JSON responses
- The frontend dynamically updates the UI using DOM manipulation
- Product data is stored temporarily in an in-memory data structure

---

## 📁 Project Structure

```text
Web Dev Capstone with JS/
├── frontend/
│   ├── index.html
│   ├── add-product.html
│   ├── style.css
│   ├── style2.css
│   └── script.js
├── backend/
│   ├── app.py
│   └── requirements.txt
└── README.md
````

---

## 📦 Requirements

* Python 3.10+
* Flask
* flask-cors

---

## ▶️ How to Run the Backend

1. Navigate to the backend folder:

```bash
cd backend
```

2. Create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

For Windows:

```bash
venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run the server:

```bash
python app.py
```

Backend will run on:

```
http://127.0.0.1:5000
```

---

## 🌐 API Endpoints

### GET `/products`

Returns the list of all products.

### POST `/products`

Adds a new product.

**Request Body (JSON):**

```json
{
  "name": "Keyboard",
  "price": 2500,
  "category": "Electronics",
  "description": "Mechanical keyboard",
  "stock": 10
}
```

---

## 💻 How to Run the Frontend

* Open `frontend/index.html` in a browser
  OR
* Use a Live Server extension in VS Code

---

## ⚠️ Important Notes

* Make sure the backend server is running before opening the frontend
* Data is stored in-memory and will reset when the server restarts
* Ensure the navigation bar includes both **Home** and **Add Product** links
* Update/Delete/Search features are not implemented (optional as per project guidelines)

---


