# Edu-Space

## One stop solution of every educational content

Follow these steps to set up and run the project.

### Prerequisites

- Node.js installed on your system
- MongoDB connection URL

### Installation

1. **Navigate to the backend directory**  
   ```sh
   cd backend
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root of the `backend` directory.
   - Add the following details:
     ```sh
     MONGODB_URL=your_mongodb_connection_url
     PORT=your_preferred_port_number
     ```

4. **Move to the `src` directory**
   ```sh
   cd src
   ```

5. **Run the server**
   ```sh
   node index.js
   ```

### Expected Output

Once the server is running, you should see output similar to:
   ```sh
   Server is running on port [PORT]
   Connected to MongoDB successfully
   ```

Now your backend is up and running! 🚀

### Additional Commands

- **To stop the server**: Press `Ctrl + C`
- **To restart the server**: Run
  ```sh
  node index.js
  ```

Feel free to contribute or raise issues if you encounter any problems. Happy coding! 🎉
