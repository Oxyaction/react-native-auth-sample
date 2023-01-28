export interface AuthenticateInput {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  password?: string;
}
