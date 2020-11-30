import BaseDataBase from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDataBase {

   protected tableName: string = "band_lama";

   private toModel(dbModel?: any): Band | undefined {
      return (
         dbModel &&
         new Band(
            dbModel.id,
            dbModel.name,
            dbModel.music_genre,
            dbModel.responsible            
         )
      );
   }

   public async createBand(band: Band): Promise<void> {
      try {
         await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableName} (id, name, music_genre, responsible)
            VALUES (
            '${band.getId()}', 
            '${band.getName()}', 
            '${band.getMusic_genre()}',
            '${band.getResponsible()}' 
            
            )`
         );
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   public async getBandByName(name: string): Promise<Band | undefined> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} WHERE name = '${name}'
         `);
         return this.toModel(result[0][0]);
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   

   public async getAllBand(): Promise<Band[]> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName}
         `);
         return result[0].map((res: any) => {
            return this.toModel(res);
         });
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
}

export default new BandDatabase()