import express from "express";
import connectDB from "./libs/dbConnect.js";
import cors from "cors";
import userRouter from "./routes/userRouter.js";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("<h1>Blackout API</h1>");
});

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on: http://localhost:${PORT}`)
});
