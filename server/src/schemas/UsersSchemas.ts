import { Schema, model, Document } from "mongoose";

interface UsersInterface extends Document{

}
const USersSchemas = new Schema({
  id: String,
  accountId: String,
  puuid: String,
  name: String,
  profileIconId: Number,
  revisionDate: Number,
  summonerLevel: Number

},{
  timestamps: true
})

export default model<UsersInterface>("Users", USersSchemas)