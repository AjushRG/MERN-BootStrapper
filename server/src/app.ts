import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import config from "config";

const app = express();

app.use(cors());
app.use(express.json());

export default app;
