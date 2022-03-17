import { Schema, model } from "mongoose";
import { UsersInterface } from "../interfaces" 

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