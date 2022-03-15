import { Request, Response } from "express";
import { regions, api } from "../../utils"
import Users from "../../schemas/UsersSchemas";

class SummonerV4 {
  public async searchByName(req: Request, res: Response){
    const { region, nickname } = req.body
    if(!region || !nickname) return res.status(500).json({ error: "You have to send a region and a nickname!"})
    if(!regions.includes(region)) return res.status(400).json({ error: "Region doesn't exist"})
    api.get(`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}`).then((response) => {
      const users = new Users({
        
      })

      return res.status(200).json(response.data)
    }).catch(() => {
      return res.status(404).json({error: "User not found :("})
    })
  } 
}

export default new SummonerV4()