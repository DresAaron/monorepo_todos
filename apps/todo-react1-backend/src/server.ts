import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import taskRoutes from "./routes/taskRoutes";
import { Server } from "http";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

let server: Server;

const startServer = () => {
  server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

const gracefulShutdown = () => {
  console.log("Received shutdown signal, gracefully shutting down...");
  server.close((err) => {
    if (err) {
      console.log("Closed out remaining connections");
      process.exit(0);
    }

    // Close other resources like database connections here
    mongoose.connection.close();
    console.log('Closed out remaining connections');
    process.exit(0);
  });

  // Forcefully shut down the server if not closed within a timeout (e.g., 10 seconds)
  setTimeout(() => {
    console.error('Forcing shutdown due to timeout');
    process.exit(1);
  }, 10000);

};

// Capture termination signals
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

startServer();