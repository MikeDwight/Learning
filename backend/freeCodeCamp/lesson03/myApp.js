require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let Person;

const { Schema } = mongoose;

const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const MikeAlvs = new Person({
    name: "Mike",
    age: 33,
    favoriteFoods: ["Fruits", "Chocolate", "Sushi"],
  });

  MikeAlvs.save(function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const arrayOfPeople = [
  {
    name: "Mike",
    age: 33,
    favoriteFoods: ["Fruits", "Chocolate", "Sushi"],
  },
  {
    name: "Prissy",
    age: 33,
    favoriteFoods: ["Sushi", "Pizza", "Mozzarella"],
  },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const personName = "Mike";

const findPeopleByName = (personName, done) => {
  Person.find(
    {
      name: personName,
    },
    function (err, data) {
      if (err) return console.error(err);
      done(null, data);
    }
  );
};

const food = "Sushi";

const findOneByFood = (food, done) => {
  Person.findOne(
    {
      favoriteFoods: food,
    },
    function (err, data) {
      if (err) return console.error(err);
      done(null, data);
    }
  );
};

const personId = "660e3ff39c384f60cd612d3a";

const findPersonById = (personId, done) => {
  Person.findById(
    {
      _id: personId,
    },
    function (err, data) {
      if (err) return console.error(err);
      done(null, data);
    }
  );
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  // .findById() method to find a person by _id with the parameter personId as search key.
  Person.findById(personId, (err, person) => {
    if (err) return console.log(err);

    // Array.push() method to add "hamburger" to the list of the person's favoriteFoods
    person.favoriteFoods.push(foodToAdd);

    // and inside the find callback - save() the updated Person.
    person.save((err, updatedPerson) => {
      if (err) return console.log(err);
      done(null, updatedPerson);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (err, updatedDoc) => {
      if (err) return console.log(err);
      done(null, updatedDoc);
    }
  );
};

var removeById = function (personId, done) {
  Person.findByIdAndRemove(personId, (err, removedDoc) => {
    if (err) return console.log(err);
    done(null, removedDoc);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({ name: nameToRemove }, (err, response) => {
    if (err) return console.log(err);
    done(null, response);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
