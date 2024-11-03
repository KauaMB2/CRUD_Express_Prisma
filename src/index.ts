import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express(); // Create an express instance

app.use(cors()); // Releases access to API to everyone
app.use(express.json()); // Define the data that Express will understand as JSON

routes(app)

app.listen(3001, () => {
    console.log("Server started on port 3001.");
});
