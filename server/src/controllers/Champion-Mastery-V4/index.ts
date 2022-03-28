import { Request, Response } from "express";
import Users from "../../schemas/UsersSchemas";
import { api } from "../../utils"
import { User } from "../../interfaces/"

class ChampionMastery {
  public async bySummoner( req: Request, res: Response) {
    
    const { summoner } = req.params
    const user: User | null = await Users.findOne({ name: summoner });

    await api.get(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${user.id}`).then((response: any) => {
      return res.status(200).json(response.data)
    }).catch((error: any) => {
      console.log(error)
      return res.status(500).json({ error: "Internal Server Error"})
    });
  }
}

export default new ChampionMastery()
