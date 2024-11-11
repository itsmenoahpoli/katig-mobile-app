export type Credentials = {
  email: string;
  password: string;
};

export type SignUpPayload = {
  fullname: string;
  username: string;
  confirmPassword?: string;
} & Credentials;
