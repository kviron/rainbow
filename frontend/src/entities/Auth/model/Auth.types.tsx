export interface AuthServiceDto {
  login: {
    email: string;
    password: string;
  },
  logout: never
}
