import { IsDate, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class Team {
    @IsNotEmpty()
    @IsString()
    @MinLength(3, {message:"Minumun length must be 3"})
    team_name:string

    @IsString()
    team_code:string

    @IsDate()
    createdAt?: Date
    
    @IsDate()
    updatedAt?: Date
}