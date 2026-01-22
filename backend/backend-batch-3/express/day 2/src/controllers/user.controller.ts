import { Request, Response } from "express";

export const getAllUser = (req: Request, res: Response) => {
  console.log("Get all users");
  res.send("All Users Here🌞");
};
