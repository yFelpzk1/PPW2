
export class User {
  USER_ID: number;
  USERNAME: string;
  EMAIL: string;
  PASSWORD_HASH: string;

  constructor(id: number, username: string, email: string, hash: string) {
    this.USER_ID = id;
    this.USERNAME = username;
    this.EMAIL = email;
    this.PASSWORD_HASH = hash;
  }
}