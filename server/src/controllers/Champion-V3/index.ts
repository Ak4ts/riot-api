import { Request, Response } from "express";
import { api } from "../../utils";

class ChampionControllers {
  public async v3(req: Request, res: Response){

    await api.get("/lol/platform/v3/champion-rotations").then((response: any) => {
      return res.status(200).json(response.data)
    }).catch((error: any) => {
      console.log(error)
      return res.status(500).json({ error: "Internal Server Error"})
    });
  }
}

export default new ChampionControllers()
