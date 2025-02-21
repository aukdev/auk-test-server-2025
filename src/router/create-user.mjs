import { Router } from "express";
import DB from "../db/config.mjs";

const userRouter = Router();

userRouter.get("/", async (_, w) => {
  try {
    const data = await DB.user.findMany();
    w.status(200).json(data);
  } catch (error) {
    console.log(error);
    w.sendStatus(500);
  }
});

userRouter.post("/create", async (c, w) => {
  const { name, city, phone } = c.body;
  try {
    const newData = await DB.user.create({
      data: {
        name,
        city,
        phone,
      },
    });
    w.status(200).json(newData);
  } catch (error) {
    console.log(error);
    w.sendStatus(500);
  }
});

export default userRouter;
