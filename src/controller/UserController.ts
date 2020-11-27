import { Request, Response } from "express";
import   userBusiness, {UserBusiness}  from "../business/UserBusiness";


export class UserController {
   

   constructor(
      private userBusiness: UserBusiness
   ) { }
   public  signup = async  (req: Request, res: Response) => {
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
         console.log(error);
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }
}

