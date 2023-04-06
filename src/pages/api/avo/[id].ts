import DB from '@database'
import { NextApiRequest, NextApiResponse } from "next"

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {

  const db = new DB()

  const id = req.query.id

  const data = await db.getById(id as string)

  res.status(200).json({ data })
}

export default allAvos
