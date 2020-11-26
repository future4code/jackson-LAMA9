import { BaseDatabase } from './data/BaseDatabase';

async function createTables(){
   try {
      await BaseDatabase.getConnection().raw(`
      CREATE TABLE IF NOT EXISTS NOME_TABELA_BANDAS (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        music_genre VARCHAR(255) NOT NULL,
        responsible VARCHAR(255) UNIQUE NOT NULL 
      )
      `)

      await connection.raw(`
      CREATE TABLE IF NOT EXISTS NOME_TABELA_SHOWS (
        id VARCHAR(255) PRIMARY KEY,
        week_day VARCHAR(255) NOT NULL,
        start_time INT NOT NULL,
        end_time INT NOT NULL,
        band_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(band_id) REFERENCES NOME_TABELA_BANDAS(id)
      )
      `)

      await connection.raw(`
      CREATE TABLE IF NOT EXISTS NOME_TABELAS_USUÁRIOS (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
      )
      `)

      console.log("MySql setup completed!")
   } catch (error) {
      console.log(error)
   }
}

createTables()