import express from "express";
import cors from "cors";
import userRouter from "./src/router/create-user.mjs";

const port = process.env.PORT || 4000;
const server = express();

server.use(cors());

server.use("/api/v1/users", userRouter);

server.listen(port, () => console.log(`server running ${port}`));
