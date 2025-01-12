import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { app, server } from "./lib/socket.js";

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

/*********PRODUCTION CODE**********/
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
}
/*********PRODUCTION CODE**********/

server.listen(PORT, () => {
  console.log("Server is running on Port: " + PORT);
  connectDB();
});