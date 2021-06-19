import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsString, MinLength, ValidateNested } from "class-validator";
import { Team } from "./team";

export class User{
    @IsNotEmpty()
    @IsString()
    @IsEmail(undefined, {
        message:"Yanlış email"
    })
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5, {message:"It should be a real name"})
    name_surname:string

    @IsBoolean()
    isJoinWebinar:boolean

    @ValidateNested()
    team:Team

    @IsDate()
    createdAt?: Date
    
    @IsDate()
    updatedAt?: Date

}