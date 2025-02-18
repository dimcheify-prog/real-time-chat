export interface UserTypes {
  id: number;
  username: string;
}

export interface UserFormFieldsTypes {
  username: string;
  password: string;
}

export interface AuthPayload {
  user: UserTypes;
  accessToken: string;
  refreshToken: string;
}
