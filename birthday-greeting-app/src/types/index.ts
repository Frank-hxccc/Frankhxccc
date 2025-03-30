// filepath: /birthday-greeting-app/birthday-greeting-app/src/types/index.ts

export interface UserCredentials {
  username: string;
  password: string;
}

export interface BirthdayMessage {
  recipient: string;
  message: string;
  date: Date;
}