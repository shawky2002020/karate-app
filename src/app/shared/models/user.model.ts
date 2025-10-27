export class User {
  _id!: string;
  name!: string;
  gender!: string;
  email!: string;
  password!: string; // Hashed
  token!: string;
  createdAt?: Date;
  lastLogin?: Date;
  loginCount?: number;
  isGoogleUser?: boolean;
}

export class userResponse {
  token!: string;
  message!: string;
  user!: User;
}
