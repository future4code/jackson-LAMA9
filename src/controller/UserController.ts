import { Request, Response } from "express";
import   {UserBusiness}  from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { HashGenerator } from "../services/hashGenerator";
import {IdGenerator} from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class UserController {
   
   private userBusiness: UserBusiness
   
   constructor(

   ) { this.userBusiness = new UserBusiness(new IdGenerator(), new HashGenerator(), new TokenGenerator(), new UserDatabase())}

   public async signup(req: Request, res: Response) {
      try {
         
         const { name, role, email, password } = req.body
         const result = await this.userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await this.userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }
}

