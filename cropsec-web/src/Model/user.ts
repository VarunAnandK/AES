import { BaseModel } from '../Model/BaseModel';

export class user extends BaseModel {
  status: string;
  user_name: string;
  password: string;
  signature: string;
  landing_page: string;
  api_token: string;
  team_id : number;
  is_leader : boolean;
}

