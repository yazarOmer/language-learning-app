import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import sectionRoutes from "./routes/sectionRoutes.js";
import unitRoutes from "./routes/unitRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/sections", sectionRoutes);
app.use("/api/units", unitRoutes);
app.use("/api/quizzes", quizRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
