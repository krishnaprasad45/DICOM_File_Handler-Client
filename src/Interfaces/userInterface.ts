export default interface UserInterface {
  email: string;
  password: string;
  emailVerification: boolean;
  createdAt?: Date;
  otp?:string;
  otpCreatedAt?:Date;
}
