const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 30 },
  { name: 'Edward', age: 35 }
];

const groupedByAge = people.reduce((acc, person) => {
  const { age, name } = person;

  // Initialize the age group if it doesn't exist
  if (!acc[age]) {
    acc[age] = [];
  }

  // Add the person's name to the age group
  acc[age].push(name);

  // Return the modified accumulator
  return acc;
}, {});

console.log(groupedByAge);
// Output:
// {
//   '25': ['Alice', 'Bob'],
//   '30': ['Charlie', 'David'],
//   '35': ['Edward']
// }
