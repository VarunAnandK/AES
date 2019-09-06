import { BaseModel } from '../Model/BaseModel';
import { user_role } from './user_role';

export class company extends BaseModel {
  name:string;
  address:string;
  user_name:string;
  password:string;
  email:string;
}

