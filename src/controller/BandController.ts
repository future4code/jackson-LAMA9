import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import BaseDatabase  from "../data/BaseDatabase";
import { BandInputDTO } from "../model/Band";


export class BandController {
   
   
   

   constructor(
      private bandBusiness: BandBusiness
   ) { }
   public  createBand = async  (req: Request, res: Response) => {
      try {
         
        const input: BandInputDTO = {
            name: req.body.name,
            music_genre: req.body.music_genre,
            responsible: req.body.responsible
           
        }
         const result = await this.bandBusiness.createBand(input, req.headers.authorization as string);
         res.status(200).send({ message: "Band create!"});
      } catch (error) {
         console.log(error);
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
      await BaseDatabase.destroyConnection();
   }

   
}
