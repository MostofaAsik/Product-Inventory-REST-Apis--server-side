# Product Inventory REST API

This is a **RESTful API** built with **Node.js, Express.js, and MongoDB** for managing a product inventory system. It allows users to perform CRUD (Create, Read, Update, Delete) operations on products.

## Features

- **Create, Read, Update, and Delete** products
- **Pagination, Filtering, and Sorting** for retrieving products
- **MongoDB database integration** (Local or MongoDB Atlas)
- **CORS enabled** to allow cross-origin requests
- **Deployed on Vercel**

## Technologies Used

- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **MongoDB & Mongoose** - Database and ORM
- **Cors** - Handling cross-origin requests
- **Body-Parser** - Parsing request bodies
- **dotenv** - Managing environment variables

## API Base URL

- **Local:** `http://localhost:5000/`
- **Production:** [`https://product-inventory-rest-apis-p3enuarnz-mostofaasiks-projects.vercel.app/`](https://product-inventory-rest-apis-p3enuarnz-mostofaasiks-projects.vercel.app/)

---

## Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/MostofaAsik/Product-Inventory-REST-Apis--server-side
cd Product-Inventory-REST-Apis--server-side
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Create a **.env** file and Configure MongoDB

```env
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
```

### 4️⃣ Start the Server

```sh
npm start  # Production Mode
nodemon server.js  # Development Mode (nodemon)
```

The API will run at: `http://localhost:5000/`

---

## API Endpoints

### 🔹 Create a Product

**Endpoint:** `POST /api/products`

```json
{
  "name": "Wireless Headphones",
  "price": 49.99,
  "category": "Electronics",
  "stock": 25,
  "description": "Bluetooth over-ear headphones with noise cancellation"
}
```

### 🔹 Get All Products (With Pagination, Filtering & Sorting)

**Endpoint:** `GET /api/products?page=1&limit=10&category=Electronics&sort=asc`

### 🔹 Get a Single Product

**Endpoint:** `GET /api/products/:id`

### 🔹 Update a Product

**Endpoint:** `PUT /api/products/:id`

```json
{
  "name": "Updated Product Name",
  "price": 55.99,
  "category": "Electronics",
  "stock": 30,
  "description": "Updated description"
}
```

### 🔹 Delete a Product

**Endpoint:** `DELETE /api/products/:id`

---

## Deployment on Vercel

This API is deployed on **Vercel**. You can access it at: [`https://product-inventory-rest-apis-p3enuarnz-mostofaasiks-projects.vercel.app/`](https://product-inventory-rest-apis-p3enuarnz-mostofaasiks-projects.vercel.app/)

### 🚀 Steps to Deploy on Vercel

1. Install the Vercel CLI: `npm install -g vercel`
2. Run `vercel` and follow the prompts to deploy
3. Set up environment variables in **Vercel Dashboard**
4. Your API will be live!

---

## Known Issues & Fixes

**❌ CORS Issue?**\
Ensure your `server.js` has proper CORS configuration:

```js
app.use(
  cors({
    origin: ["http://localhost:5000", "https://your-frontend-domain.com"],
    credentials: true,
  })
);
```

**❌ MongoDB Connection Issues?**\
Double-check your **MongoDB URI** and ensure your database user has proper permissions.

---

## Author

👨‍💻 **Mostofa Asik**\
📧 Email: `mmostofaasik@gmail.com`\
🔗 GitHub: [https://github.com/MostofaAsik/](https://github.com/MostofaAsik/)

### If you found this project useful, don't forget to ⭐ star the repository!
