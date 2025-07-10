export interface LoginResponse {
  data: {
    token: string;
    refreshToken: string;
    expiration: string;
    userId: string;
  };
  isSuccessful: boolean;
  statusCode: number;
  errorMessages: string[] | null;
}