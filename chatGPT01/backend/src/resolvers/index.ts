import { Person } from "../models/Person";

export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getPersons: async () => {
      try {
        console.log("Fetching persons from MongoDB...");
        const persons = await Person.find().populate("partenaire");
        console.log("Fetched persons:", persons);
        return persons;
      } catch (error) {
        console.error("Error fetching persons", error);
        return [];
      }
    },
    // getPersonById: async (_: any, { id }: { id: string }) => {
    //   try {
    //     console.log(`Fetching person with ID ${id} from MongoDB...`);
    //     const person = await Person.findById(Types.ObjectId(id)).populate(
    //       "partenaire"
    //     );
    //     console.log("Fetched person by ID:", person);
    //     return person;
    //   } catch (error) {
    //     console.error("Error fetching person by ID", error);
    //     return null;
    //   }
    // },
  },
};
