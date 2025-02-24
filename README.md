# Edu-Space  

## One-stop solution for every educational content  

Follow these steps to set up and run the project.  

---

## 📌 Prerequisites  

Ensure you have the following installed before proceeding:  

- [Node.js](https://nodejs.org/) installed on your system  
- A **MongoDB** connection URL  

---

## 🚀 Installation  

### 1️⃣ Navigate to the backend directory  
```sh
cd backend
```

## 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up environment variables

- Create a `.env` file in the **root** of the `backend` directory.  
- Add the following details inside the `.env` file:
  
  ```sh
  MONGODB_URL=your_mongodb_connection_url
  PORT=your_preferred_port_number
  ```

### 4️⃣ Initialize Data (One-time setup before running the server)  
```sh
cd extra/init
node index.js
cd ../..
```

## 5️⃣ Move to the src directory
```sh
cd src
```
## 6️⃣ Run the server
```sh
node app.js
```
---

## ✅ Expected Output  

Once the server is running, you should see an output similar to:  

```sh
Server is running on port [PORT]
Connected to MongoDB successfully
```

## 🤝 Contributing  

Feel free to contribute or raise issues if you encounter any problems.  

---

**Happy coding! 🚀**  
