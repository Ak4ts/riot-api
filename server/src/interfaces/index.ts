import { Document } from "mongoose"

export interface UsersInterface extends Document {
  id: String;
  accountId: String;
  puuid: String;
  name: String;
  profileIconId: Number;
  revisionDate: Number;
  summonerLevel: Number;
}