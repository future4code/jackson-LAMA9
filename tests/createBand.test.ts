import { BandBusiness } from "../src/business/BandBusiness"



describe("Create Band", () => {
   const idGenerator = { generate: jest.fn() } as any
   const bandDatabase = { createBand: jest.fn() } as any
const token = { token: jest.fn() } as any
   const bandBusiness: BandBusiness = new BandBusiness(
      idGenerator,
     bandDatabase,
     token
   )

   test("Error when 'name' is empty", async () => {
      expect.assertions(2)

      try {
         await bandBusiness.createBand(
            "",
            "Rock",
            "João",
            "ADMIN"
            
           
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Missing input")
      }
   })

   test("Error when 'music_genre' is empty", async () => {
      expect.assertions(2)

      try {
         await bandBusiness.createBand(
            "Scorpion",
            "",
            "João"
            
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Missing input")
      }
   })

   test("Error when 'responsible' is empty", async () => {
      expect.assertions(2)

      try {
         await bandBusiness.createBand(
            "Scorpion ",
            "rock",
            ""            
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Missing input")
      }
   })

   

   

   test("Success case", async () => {
      expect.assertions(1)

      try {
         const result = await bandBusiness.createBand(
            "Scorpion",
            "Rock",
            "João"
            
         )

         expect(result).toBeDefined()
      } catch (error) {

      }
   })
})

