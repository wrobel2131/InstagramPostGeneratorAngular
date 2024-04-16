export interface AuthenticationResponse {
  accessToken: string;
  // refreshToken: string,
  // userId: number
  username: string;
  expiresIn: number;
  tokenType: string;
}
