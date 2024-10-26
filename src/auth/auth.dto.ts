import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email!: string; // Use the ! operator to indicate that this property will be initialized later.

  @IsString()
  password!: string; // Assuming password is a string
}

export class RegisterDto {
  @IsString()
  username!: string;

  @IsString()
  password!: string;

  @IsEmail()
  email!: string; // Ensure email is validated as well
}
