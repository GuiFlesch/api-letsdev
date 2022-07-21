import cors from "cors";
import "dotenv/config"
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors());

export { app }