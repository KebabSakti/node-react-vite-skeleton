import { Request, Response } from "express";

const landing = async (req: Request, res: Response) => {
  try {
    res.status(200).json("HELLO UDIN");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { landing };
