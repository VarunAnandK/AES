import { BaseModel } from '../Model/BaseModel';
import { user_role } from './user_role';

export class user extends BaseModel {
  name: string;
  password: string;
  email: string;
  api_token: string;
  user_role_id : number;
  user_role : user_role;
}

