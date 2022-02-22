import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hellow' })

  // example: taken input from the form
  // const email = req.body.email
}