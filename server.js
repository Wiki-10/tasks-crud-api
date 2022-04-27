import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";
import tasksRoutes from "./routes/tasks.js";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 6000;

app.use(bodyParser.json());
app.use("/users", userRoutes);

// Connecting to mongo with the url stored in environment variables
mongoose.connect(process.env.DATABASE);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
