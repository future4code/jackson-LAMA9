import { BandBusiness } from "../src/business/BandBusiness"



describe("Create Band", () => {
   const idGenerator = { generate: jest.fn() } as any
   const bandDatabase = { createBand: jest.fn() } as any
   const authenticator = { getData: jest.fn() } as any
   const bandBusiness: BandBusiness = new BandBusiness(
      idGenerator,
      authenticator,
     bandDatabase
   )

   test("Error when 'name' is empty", async () => {
      expect.assertions(2)

      try {
         await bandBusiness.createBand(
            {
            name:"",
            music_genre:"Rock",
            responsible:"João",
            token:"ADMIN"
            
           }
           
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
            {name:"Scorpion",
            music_genre:"",
            responsible:"João",
            token:"ADMIN"
           }
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Missing input")
      }
   })

   test("Error when 'responsible' is empty", async () => {
      expect.assertions(1)

      try {
         await bandBusiness.createBand(
            {name:"Scorpion",
            music_genre:"Rock",
            responsible:"",
            token:"ADMIN"
           }      
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Missing input")
      }
   })

   

   

//    test("Success case", async () => {
//       expect.assertions(1)

//       try {
//          const result = await bandBusiness.createBand(
//             {name:"Scorpion",
//             music_genre:"Rock",
//             responsible:"Joao",
//             token:"ADMIN"
//            }   
//          )

//          expect(result).toBeDefined()
//       } catch (error) {

//       }
//    })
})

