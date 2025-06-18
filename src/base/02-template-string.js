const name = "Mike";
const lastName = "Smith";
const fullName = `
${name}
${lastName}`;

console.log(fullName);

const getgreeting = (name) => {
  console.log(`hello ${name}`);
}
getgreeting(name)