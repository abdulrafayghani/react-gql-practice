let students = [
  {
    id: 1,
    name: 'Ali',
    email: 'ali@gmail.com',
    age: 21,
  },
  {
    id: 2,
    name: 'Mohsin',
    email: 'mohsin@gmail.com',
    age: 21,
  },
  {
    id: 3,
    name: 'Aamir',
    email: 'aamir@gmail.com',
    age: 21,
  },
];

const resolvers = {
  Query: {
    students: () => students,
    getMessage: () => {
      return 'hello world';
    },
  },

  Mutation: {
    addStudent: (e, { input }) => {
      console.log(input);

      students.push({
        name: input.name,
        age: input.age,
        email: input.email,
        id: input.id,
      });
      return input;
    },
  },
};

module.exports = resolvers;
