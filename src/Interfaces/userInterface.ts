export default interface UserInterface {
  email: string;
  password: string;
  emailVerification: boolean;
  otp?: string;
  createdAt?: Date;
  otpCreatedAt?: Date;
}
