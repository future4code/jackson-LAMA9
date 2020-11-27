import BaseDataBase from "./data/BaseDatabase";


export class CreateDatabase extends BaseDataBase {

  public async createTable(
    
  ): Promise<void> {
    try {
      await BaseDataBase.connection
      .raw(`
      CREATE TABLE IF NOT EXISTS band_lama (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        music_genre VARCHAR(255) NOT NULL,
        responsible VARCHAR(255) UNIQUE NOT NULL 
      )
      `)
      await BaseDataBase.connection
      .raw(`
      CREATE TABLE IF NOT EXISTS show_lama (
        id VARCHAR(255) PRIMARY KEY,
        week_day VARCHAR(255) NOT NULL,
        start_time INT NOT NULL,
        end_time INT NOT NULL,
        band_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(band_id) REFERENCES band_lama(id)
      )
      
      `)
      await BaseDataBase.connection
      .raw(`
      CREATE TABLE IF NOT EXISTS users_lama (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
      )
      `)
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }}

new CreateDatabase().createTable()