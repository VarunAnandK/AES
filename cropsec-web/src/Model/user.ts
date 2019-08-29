import { BaseModel } from '../Model/BaseModel';

export class user extends BaseModel {
  name: string;
  password: string;
  email: string;
  api_token: string;
}

