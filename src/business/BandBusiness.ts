import { CustomError } from "../errors/CustomError";
import { Band, BandInputDTO } from "../model/Band";
import bandDatabase,{ BandDatabase } from "../data/BandDatabase";
import idGenerator, { IdGenerator } from "../services/idGenerator";
import tokenGenerator, { TokenGenerator } from "../services/tokenGenerator";
import { UserRole } from "../model/User";

export class BandBusiness {

   constructor(
      public idGenerator: IdGenerator,
      private tokenGenerator: TokenGenerator,
      private bandDatabase: BandDatabase
   ){}

   public  createBand = async (
    band: BandInputDTO,
    token: string
   )=> {
      try {
         if (!band.name || !band.music_genre || !band.responsible ) {
            throw new CustomError(422, "Missing input");
         }

         
         const id = this.idGenerator.generate();

         const tokenData = this.tokenGenerator.getData(token);
         
        if(tokenData.role !== UserRole.ADMIN){
            throw new Error('Invalid authentication, only ADMIN')
        }
         

         await this.bandDatabase.createBand(
            new Band(id, band.name, band.music_genre, band.responsible)
         );

         
         
         
      } catch (error) {
         console.log(error)
         throw new Error("Error create band!")
      }

   }
  
}

export default new BandBusiness(
   idGenerator,
   tokenGenerator,
   bandDatabase
)
     

