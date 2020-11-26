import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandDatabase } from "../data/BandDatabase";
import { BaseDatabase } from "../data/BaseDatabase";
import { Band, BandInputDTO } from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export class BandController extends BaseDatabase {
    async createBand(req: Request, res: Response) {
        try {

            const input: BandInputDTO = {
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible,
                token: req.headers.authorization
            }

            const bandBusiness = new BandBusiness(new IdGenerator(), new Authenticator(),new BandDatabase());
            await bandBusiness.createBand(input);

            res.status(200).send({ message: "Band create!"});

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
     async getBandByName(name: string): Promise<Band> {
        const result = await this.getConnection()
          .select("*")
          .from("band_lama")
          .where({ name });
    
        return Band.toBandModel(result[0]);
      }
}