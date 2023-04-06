import DB from '@database'
import { NextApiRequest, NextApiResponse } from "next"

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {

  const db = new DB()

  const data = await db.getAll()

  res.status(200).json({ length: data.length, data })

}

export default allAvos
