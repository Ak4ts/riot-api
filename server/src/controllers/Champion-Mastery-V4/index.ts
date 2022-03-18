import { Request, Response } from "express";
import { api } from "../../utils"

class ChampionMastery {
  public async bySummoner(props: any, req: Request, res: Response) {

    await api.get(`/lol/champion-mastery/v4/champion-masteries/by-summoner/${props.id}`).then((response: any) => {
      return res.status(200).json(response.data)
    }).catch((error: any) => {
      console.log(error)
      return res.status(500).json({ error: "Internal Server Error"})
    });
  }
}
