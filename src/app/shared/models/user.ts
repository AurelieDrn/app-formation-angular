import { UserI } from "../interfaces/user-i";

export class User implements UserI {
  login: string;
  password: string;
  token: string;

  constructor(fields?: Partial<User>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
